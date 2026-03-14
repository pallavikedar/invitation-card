
"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ─────────────────────────────────────────────────────────────────────────────
// ASSET MANIFEST — every asset that must be cached before unlock
// ─────────────────────────────────────────────────────────────────────────────
const ALL_ASSETS = [
  "/openup.svg",
  "/openbottom.svg",
  "/1st bg imjage.svg",
  "/1st front.svg",
  "/Monogram.svg",
  "/1stbottom.svg",
  "/slidesecond.svg",
  "/3rd slide bg.svg",
  "/3rd slide top.svg",
  "/3rd slide second.svg",
  "/3rd slide4.svg",
  "/3rd slide3.svg",
  "/3rd slide bottom.svg",
  "/bg 4 section.svg",
  "/section 4 1.svg",
  "/section 4 2.svg",
  "/section 4 3.svg",
  "/Yellow BG.svg",
  "/Car BG.svg",
  "/Car.svg",
  "/wedding-11.svg",
  "/final.svg",
];

// Preload a single image, returns a Promise
function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.src = src;
    img.onload  = resolve;
    img.onerror = resolve; // never reject — just skip missing assets
    // Hard timeout so a single bad asset can't stall the loader forever
    setTimeout(resolve, 5000);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// CONFETTI — canvas-based (zero React re-renders during animation)
// ─────────────────────────────────────────────────────────────────────────────
function ConfettiBurst({ active }) {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  const COLORS = [
    "#FFD700","#FF6B6B","#4ECDC4","#A78BFA",
    "#F97316","#22D3EE","#EC4899","#84CC16",
    "#FFF","#C9A96E",
  ];

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx  = canvas.getContext("2d");
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const cx = canvas.width  / 2;
    const cy = canvas.height * 0.52;

    const particles = Array.from({ length: 140 }, (_, i) => ({
      x: cx + (Math.random() - 0.5) * 60,
      y: cy,
      vx: (Math.random() - 0.5) * 20,
      vy: -(Math.random() * 16 + 5),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      w: Math.random() * 16 + 6,
      h: Math.random() > 0.7 ? Math.random() * 16 + 6 : (Math.random() * 8 + 3),
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 14,
      gravity: 0.5,
      life: 1,
      decay: Math.random() * 0.013 + 0.007,
      isCircle: Math.random() > 0.7,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of particles) {
        if (p.life <= 0) continue;
        alive = true;
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.985;
        p.rot += p.rotSpeed;
        p.life -= p.decay;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle   = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        if (p.isCircle) {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
      }
      if (alive) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        display: active ? "block" : "none",
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCRATCH CARD — throttled pixel check (every 400ms, not every mousemove)
// ─────────────────────────────────────────────────────────────────────────────
function ScratchCard({ weddingDate = "05/05/26", onFullReveal }) {
  const canvasRef      = useRef(null);
  const overlayRef     = useRef(null);
  const isDrawing      = useRef(false);
  const revealed       = useRef(false);
  const hasTriggered   = useRef(false);
  const lastCheckTime  = useRef(0);
  const pointsQueue    = useRef([]);
  const rafPending     = useRef(false);
  const lastPoint      = useRef(null);
  const [showDate, setShowDate] = useState(false);

  const CW = 640;
  const CH = 220;

  const buildOverlay = useCallback(() => {
    const oc  = document.createElement("canvas");
    oc.width  = CW;
    oc.height = CH;
    const ctx = oc.getContext("2d");

    const img = new Image();
    img.src = "/3rd slide3.svg";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, CW, CH);
      overlayRef.current = oc;
      const vc = canvasRef.current;
      if (vc) vc.getContext("2d").drawImage(oc, 0, 0);
    };
    img.onerror = () => {
      const grad = ctx.createLinearGradient(0, 0, CW, CH);
      grad.addColorStop(0,    "#7a5400");
      grad.addColorStop(0.12, "#e8c84a");
      grad.addColorStop(0.28, "#c9940a");
      grad.addColorStop(0.45, "#fff0a0");
      grad.addColorStop(0.6,  "#b8860b");
      grad.addColorStop(0.78, "#f5d060");
      grad.addColorStop(1,    "#7a5400");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, CW, CH);

      ctx.save();
      for (let y = 0; y < CH; y += 3) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255," + (Math.random() * 0.07) + ")";
        ctx.lineWidth = 1;
        ctx.moveTo(0, y);
        ctx.lineTo(CW, y);
        ctx.stroke();
      }
      const glare = ctx.createLinearGradient(0, 0, CW * 0.6, CH);
      glare.addColorStop(0,   "rgba(255,255,255,0)");
      glare.addColorStop(0.4, "rgba(255,255,255,0.18)");
      glare.addColorStop(0.5, "rgba(255,255,255,0.32)");
      glare.addColorStop(0.6, "rgba(255,255,255,0.18)");
      glare.addColorStop(1,   "rgba(255,255,255,0)");
      ctx.fillStyle = glare;
      ctx.fillRect(0, 0, CW, CH);
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = "rgba(255,220,80,0.6)";
      ctx.lineWidth = 3;
      ctx.strokeRect(8, 8, CW - 16, CH - 16);
      ctx.strokeStyle = "rgba(100,60,0,0.3)";
      ctx.lineWidth = 1;
      ctx.strokeRect(12, 12, CW - 24, CH - 24);
      ctx.restore();

      ctx.save();
      ctx.font = "bold 22px Georgia, serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "rgba(80,40,0,0.4)";
      ctx.fillText("\u2726  Scratch to Reveal  \u2726", CW / 2 + 1, CH / 2 + 1);
      ctx.fillStyle = "rgba(90,50,0,0.75)";
      ctx.fillText("\u2726  Scratch to Reveal  \u2726", CW / 2, CH / 2);
      ctx.restore();

      overlayRef.current = oc;
      const vc = canvasRef.current;
      if (vc) vc.getContext("2d").drawImage(oc, 0, 0);
    };
  }, []);

  useEffect(() => { buildOverlay(); }, [buildOverlay]);

  const getPoint = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const sx = CW / rect.width;
    const sy = CH / rect.height;
    const src = e.touches ? e.touches[0] : e;
    return {
      x: (src.clientX - rect.left) * sx,
      y: (src.clientY - rect.top)  * sy,
    };
  }, []);

  const interpolate = (a, b) => {
    const dist  = Math.hypot(b.x - a.x, b.y - a.y);
    const steps = Math.max(1, Math.ceil(dist / 4));
    const pts   = [];
    for (let i = 1; i <= steps; i++) {
      pts.push({
        x: a.x + (b.x - a.x) * (i / steps),
        y: a.y + (b.y - a.y) * (i / steps),
      });
    }
    return pts;
  };

  const flushPoints = useCallback(() => {
    rafPending.current = false;
    const canvas = canvasRef.current;
    if (!canvas || revealed.current) return;
    const ctx = canvas.getContext("2d");
    const pts = pointsQueue.current.splice(0);
    if (pts.length === 0) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.lineWidth = 80;
    ctx.lineCap   = "round";
    ctx.lineJoin  = "round";
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) {
      if (i < pts.length - 1) {
        const mx = (pts[i].x + pts[i + 1].x) / 2;
        const my = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
      } else {
        ctx.lineTo(pts[i].x, pts[i].y);
      }
    }
    ctx.stroke();
    const last = pts[pts.length - 1];
    ctx.beginPath();
    ctx.arc(last.x, last.y, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    const now = performance.now();
    if (!hasTriggered.current && now - lastCheckTime.current > 400) {
      lastCheckTime.current = now;
      const data = ctx.getImageData(0, 0, CW, CH).data;
      let transparent = 0, total = 0;
      for (let i = 3; i < data.length; i += 32) { total++; if (data[i] < 128) transparent++; }
      if (total > 0 && (transparent / total) * 100 > 55) {
        hasTriggered.current = true;
        revealed.current = true;
        let alpha = 1;
        const wipe = () => {
          alpha -= 0.06;
          if (alpha <= 0) { ctx.clearRect(0, 0, CW, CH); setShowDate(true); onFullReveal?.(); return; }
          ctx.clearRect(0, 0, CW, CH);
          if (overlayRef.current) {
            ctx.globalAlpha = alpha;
            ctx.drawImage(overlayRef.current, 0, 0);
            ctx.globalAlpha = 1;
          }
          requestAnimationFrame(wipe);
        };
        requestAnimationFrame(wipe);
      }
    }
  }, [onFullReveal]);

  const onStart = useCallback((e) => {
    e.preventDefault();
    isDrawing.current = true;
    const pt = getPoint(e);
    if (pt) lastPoint.current = pt;
  }, [getPoint]);

  const onMove = useCallback((e) => {
    if (!isDrawing.current || revealed.current) return;
    e.preventDefault();
    const pt = getPoint(e);
    if (!pt) return;
    if (lastPoint.current) {
      pointsQueue.current.push(...interpolate(lastPoint.current, pt));
    } else {
      pointsQueue.current.push(pt);
    }
    lastPoint.current = pt;
    if (!rafPending.current) {
      rafPending.current = true;
      requestAnimationFrame(flushPoints);
    }
  }, [getPoint, flushPoints]);

  const onEnd = useCallback(() => {
    isDrawing.current = false;
    lastPoint.current = null;
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "92%",
        maxWidth: 380,
        margin: "0 auto",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          pointerEvents: "none",
          
        }}
      >
        <img src="/wedding-11.svg" className="absolute h-[526px] w-full object-contain top-[-221px]" />
        <span
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(1.4rem, 5.5vw, 2.4rem)",
            fontWeight: 700,
          position:"absolute",
          top:"24px",
            color: "#ffc55a",
            letterSpacing: "0.15em",
            textShadow: "0 2px 16px rgba(0,0,0,0.6)",
            opacity: showDate ? 1 : 0,
            transform: showDate ? "scale(1) translateY(0)" : "scale(0.75) translateY(10px)",
            transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          {weddingDate}
        </span>
      </div>

      <canvas
        ref={canvasRef}
        width={CW}
        height={CH}
        style={{
          display: "block",
          width: "100%",
          height: "257px",
          position: "relative",
          top:"-87px",
          zIndex: 2,
          borderRadius: 12,
          touchAction: "none",
          cursor: showDate ? "default" : "crosshair",
          opacity: showDate ? 0 : 1,
          transition: "opacity 0.3s ease",
          // boxShadow: "0 6px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)",
          willChange: "opacity",
        }}
        onMouseDown={onStart}
        onMouseMove={onMove}
        onMouseUp={onEnd}
        onMouseLeave={onEnd}
        onTouchStart={onStart}
        onTouchMove={onMove}
        onTouchEnd={onEnd}
        onTouchCancel={onEnd}
      />

      {/* {!showDate && (
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "#c9a06e",
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            fontFamily: "Georgia, serif",
            opacity: 0.85,
            animation: "scratchPulse 2s ease-in-out infinite",
          }}
        >
          \u2726 scratch to reveal \u2726
        </p>
      )} */}
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function Open() {
  const sectionRef          = useRef(null);
  const section3Ref         = useRef(null);
  const imageRef            = useRef(null);
  const section1SentinelRef = useRef(null);
  const venueRef            = useRef(null);

  const [open, setOpen]                       = useState(false);
  const [envelopeAnimDone, setEnvelopeAnimDone] = useState(false);
  const [section2Loaded, setSection2Loaded]   = useState(false);
  const [confettiActive, setConfettiActive]   = useState(false);
  const [assetsLoaded, setAssetsLoaded]       = useState(false);
  const [progress, setProgress]               = useState(0);

  // Use refs for scroll state to avoid re-renders on every frame
  const scrollYRef      = useRef(0);
  const windowHeightRef = useRef(0);
  const [, forceScrollUpdate] = useState(0);  // only triggers on open/section changes

  // Stable scroll value used for render — updated via rAF
  const [scrollY,      setScrollY]      = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // Countdown
  const targetDate = new Date("2026-05-05T00:00:00").getTime();
  const getTimeRemaining = useCallback(() => {
    const distance = targetDate - Date.now();
    return {
      days:    Math.floor(distance / 86400000),
      hours:   Math.floor((distance % 86400000) / 3600000),
      minutes: Math.floor((distance % 3600000)  / 60000),
    };
  }, [targetDate]);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining()), 1000);
    return () => clearInterval(timer);
  }, [getTimeRemaining]);

  // ── ASSET PRELOADING — ALL assets before unlock ──────────────────────────
  useEffect(() => {
    document.body.style.overflow = "hidden";
    let loaded = 0;
    const total = ALL_ASSETS.length;

    const promises = ALL_ASSETS.map((src) =>
      preloadImage(src).then(() => {
        loaded++;
        setProgress(Math.round((loaded / total) * 100));
      })
    );

    Promise.all(promises).then(() => {
      setProgress(100);
      // Small buffer so the "100%" flash looks intentional
      setTimeout(() => {
        setAssetsLoaded(true);
        setWindowHeight(window.innerHeight);
      }, 300);
    });

    return () => { document.body.style.overflow = "auto"; };
  }, []);

  // ── SCROLL LISTENER — single rAF-throttled handler ──────────────────────
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    const onResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // ── PARALLAX on section 1 image (imperative, no state) ──────────────────
  useEffect(() => {
    let current = 0, target = 0, isVis = false;
    const observer = new IntersectionObserver(
      ([entry]) => { isVis = entry.isIntersecting; },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleScroll = () => {
      if (!sectionRef.current || !isVis) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const prog = Math.max(0, Math.min((window.innerHeight - rect.top) / window.innerHeight, 1));
      target = prog * 40;
    };
    let raf;
    const animate = () => {
      if (isVis) {
        current += (target - current) * 0.08;
        if (imageRef.current) imageRef.current.style.transform = `translateY(${current}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    animate();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  // ── AOS (once) ───────────────────────────────────────────────────────────
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  // ── ENVELOPE open logic ──────────────────────────────────────────────────
  const handleOpen = useCallback(() => {
    if (open) return;
    setOpen(true);
    setTimeout(() => {
      setEnvelopeAnimDone(true);
      document.body.style.overflow = "auto";
    }, 1700);
  }, [open]);

  const handleScratchReveal = useCallback(() => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 3500);
  }, []);

  // ── FADE-UP helper ───────────────────────────────────────────────────────
  const fadeUp = (delay) => ({
    opacity:   open ? 1 : 0,
    transform: open ? "translateY(0px)" : "translateY(40px)",
    transition: "opacity 1s ease, transform 1s ease",
    transitionDelay: `${delay}s`,
    willChange: "opacity, transform",
  });

  // ── SECTION 3 (scratch card) scroll effects ──────────────────────────────
  const section3Start    = section3Ref.current?.offsetTop || 0;
  const section3Height   = windowHeight * 2;
  const section3Raw      = scrollY - section3Start;
  const section3Scroll   = Math.max(0, Math.min(section3Raw, section3Height));
  const section3Progress = section3Scroll / windowHeight;

  const getSection3Style = (index) => {
    if (scrollY < section3Start) return { transform: "translateY(0px)" };
    if (index === 0) return { transform: `translateY(${-section3Progress * windowHeight}px)`, willChange: "transform" };
    if (index === 1) return { transform: `translateY(${windowHeight - section3Progress * windowHeight}px)`, willChange: "transform" };
    return { transform: "translateY(0px)" };
  };

  // ── SECTION 4 (events) scroll effects ────────────────────────────────────
  const sectionStart  = windowHeight * 3;
  const raw           = scrollY - sectionStart;
  const step          = windowHeight;
  const scrollClamped = Math.max(0, Math.min(raw, step * 4));
  const activeIndex   = Math.floor(scrollClamped / step);
  const progressVal   = (scrollClamped % step) / step;

  const getStyle = (index) => {
    if (index === activeIndex)     return { transform: `translateY(${-progressVal * windowHeight}px)`,       willChange: "transform" };
    if (index === activeIndex + 1) return { transform: `translateY(${windowHeight - progressVal * windowHeight}px)`, willChange: "transform" };
    if (index < activeIndex)       return { transform: `translateY(${-windowHeight}px)` };
    return { transform: `translateY(${windowHeight}px)` };
  };

  // ── LOADER ───────────────────────────────────────────────────────────────
  if (!assetsLoaded) {
    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center z-[9999]"
        style={{ background: "linear-gradient(160deg,#fff8f0,#fdecd8,#f9dfc8)" }}
      >
        <p className="text-[#b68d33] font-bold text-2xl mb-8 tracking-[4px] uppercase">Wedding Loading</p>
        <div className="w-64 h-1.5 bg-[#f8e4d0] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg,#b68d33,#e8b56d)",
              transition: "width 0.3s ease-out",
            }}
          />
        </div>
        <p className="mt-3 text-[#b68d33] font-medium text-lg">{progress}%</p>
        <p className="absolute bottom-10 text-[#c4a06a] text-xs tracking-widest uppercase">Please Wait…</p>
      </div>
    );
  }

  // ── Pre-compute derived scroll values ────────────────────────────────────
  const firstSectionScroll = Math.min(scrollY, windowHeight);

  // Section-top overlay animation
  const sec2Start    = windowHeight;
  const sec3TopEnd   = sec2Start + windowHeight * 0.9;
  const topProgress  = Math.max(0, Math.min((scrollY - sec2Start) / (sec3TopEnd - sec2Start), 1));
  const topTransform = -(topProgress * topProgress) * 200;

  // Section-bottom overlay animation
  const sec3BotStart = sec2Start;
  const sec3BotEnd   = (section3Ref.current?.offsetTop || windowHeight * 2.2) + windowHeight * 0.4;
  const botProgress  = Math.max(0, Math.min((scrollY - sec3BotStart) / (sec3BotEnd - sec3BotStart), 1));
  const botTransform = -(botProgress * botProgress) * 120;

  // Car animation
  const venueTop    = venueRef.current?.offsetTop || 0;
  const phase1Start = venueTop - windowHeight;
  const phase1End   = venueTop - windowHeight * 0.5;
  const phase2Start = venueTop;
  const phase2End   = venueTop + windowHeight * 0.6;
  let carX = 110;
  if (scrollY >= phase2Start) {
    const p = Math.min((scrollY - phase2Start) / (phase2End - phase2Start), 1);
    carX = 10 - (p * p) * 130;
  } else if (scrollY >= phase1Start) {
    const p = Math.min((scrollY - phase1Start) / (phase1End - phase1Start), 1);
    carX = 110 - (1 - Math.pow(1 - p, 3)) * 100;
  }

  return (
    <>
      <style>{`
        .env-stage {
          perspective: 1000px;
          perspective-origin: 50% 0%;
          transform-style: preserve-3d;
        }
        .env-flap {
          position: absolute; inset: 0; width: 100%; height: 100%;
          transform-origin: top center;
          transform: rotateX(0deg);
          transition: transform 2500ms cubic-bezier(0.4,0,0.2,1);
          backface-visibility: hidden; -webkit-backface-visibility: hidden;
          will-change: transform; cursor: pointer; z-index: 30;
        }
        .env-flap.opened { transform: rotateX(175deg); }
        .env-body {
          position: absolute; inset: 0; width: 100%; height: 100%;
          transform-origin: bottom center;
          transform: rotateX(0deg);
          transition: transform 3500ms cubic-bezier(0.4,0,0.2,1);
          backface-visibility: hidden; -webkit-backface-visibility: hidden;
          will-change: transform; z-index: 20; pointer-events: none;
        }
        .env-body.opened { transform: rotateX(-175deg); }
        .env-flap::after {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(105deg,transparent 38%,rgba(255,255,255,0.22) 50%,transparent 62%);
          background-size: 220% 100%;
          animation: shimmer-move 3.2s linear infinite;
        }
        @keyframes shimmer-move {
          0%,100% { background-position: 220% center; }
        }
        .tap-hint {
          position: absolute;
          top: 65%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 40;
          pointer-events: none;
          text-align: center;
          width: max-content;
        }

        /* 320px */
        @media (max-width: 320px) {
          .tap-hint { top: 62%; }
        }

        /* 375px */
        @media (min-width: 321px) and (max-width: 375px) {
          .tap-hint { top: 63%; }
        }

        /* 425px */
        @media (min-width: 376px) and (max-width: 425px) {
          .tap-hint { top: 64%; }
        }

        /* 768px (tablet) */
        @media (min-width: 426px) and (max-width: 768px) {
          .tap-hint { top: 66%; }
        }

        /* 769px+ (desktop) */
        @media (min-width: 769px) {
          .tap-hint { top: 65%; }
        }
        .tap-hint-label {
          display: block; color: #b68d33; font-size: 10px;
          letter-spacing: 3.5px; font-weight: 900;
          text-transform: uppercase; white-space: nowrap;
        }
        @keyframes scratchPulse {
          0%,100% { opacity:1; transform:translateX(-50%) scale(1); }
          50%      { opacity:0.4; transform:translateX(-50%) scale(0.97); }
        }
        .scratch-overlay {
          position: absolute;
          top: 65%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 0 16px;
        }
        .scratch-title {
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 5vw, 2.2rem);
          color: #ffc55a; font-weight: 700;
          letter-spacing: 0.04em;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          text-align: center; margin-bottom: 2px;
        }
        .scratch-subtitle {
          font-family: 'Georgia', serif;
          font-size: clamp(1rem, 2.4vw, 0.98rem);
          color: #671d02; text-align: center;
          letter-spacing: 0.03em; margin-bottom: 14px; line-height: 1.5;
        }
        /* GPU compositing hints for all scroll-driven images */
        .scroll-layer { will-change: transform; transform: translateZ(0); }

        @keyframes scrollFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0px); }
        }
        @keyframes scrollDot {
          0%   { transform: translateY(0px); opacity: 1; }
          50%  { transform: translateY(10px); opacity: 0.3; }
          100% { transform: translateY(0px); opacity: 1; }
        }
        @keyframes chevronFade {
          0%,100% { opacity: 0.2; }
          50%     { opacity: 1; }
        }
      `}</style>

      <ConfettiBurst active={confettiActive} />

      <div className={`relative ${open && envelopeAnimDone ? "min-h-[700vh]" : "h-screen overflow-hidden"}`}>

        {/* ── SECTION 1 — Envelope ── */}
        <div
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ background: "linear-gradient(160deg,#fff8f0 0%,#fdecd8 55%,#f5d5b8 100%)" }}
        >
          <img
            src="/1st bg imjage.svg"
            className="absolute inset-0 w-full h-full object-cover scroll-layer"
            style={{
              ...fadeUp(0),
              opacity: open ? 1 : 0,
              transform: open ? `translateY(-${firstSectionScroll}px)` : "translateY(0px)",
            }}
            alt=""
          />

          <div
            className="absolute inset-0 w-full h-full scroll-layer"
            style={{
              opacity: open ? 1 : 0,
              transform: open
                ? `translateY(-${firstSectionScroll}px)`
                : "translateY(100%)",
              transition: open
                ? "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 1.4s cubic-bezier(0.22,1,0.36,1)"
                : "none",
              transitionDelay: open ? "0.9s" : "0s",
              willChange: "transform, opacity",
            }}
          >
            <img src="/1st front.svg" className="w-full h-full object-cover" alt="" style={{ transform: open ? `translateY(-${firstSectionScroll}px)` : "translateY(100%)",}} />
          </div>

          <div
            className="absolute inset-0 w-full h-full scroll-layer"
            style={{
              transform: open ? `translateY(-${firstSectionScroll}px)` : "translateY(0)",
              opacity: open ? 1 : 0,
            }}
          >
            <img
              src="/Monogram.svg"
              className="absolute object-contain"
              style={{
                width: "clamp(210px, 22vw, 122px)", height: "auto",
                top: "50%", left: "50%",
                transform: open
                  ? "translate(-50%, -50%) translateY(0)"
                  : "translate(-50%, -50%) translateY(40px)",
                opacity: open ? 1 : 0,
                transition: "opacity 1.4s ease, transform 1.5s ease",
                transitionDelay: "1.5s",
                willChange: "opacity, transform",
              }}
              alt="Logo"
            />
          </div>

          <img
            src="/1stbottom.svg"
            className="absolute w-full object-cover scroll-layer"
            style={{
              bottom: "-11px",
              opacity: open ? 1 : 0,
              transition: "opacity 1.5s ease 1.5s",
              transform: open ? `translateY(-${firstSectionScroll}px)` : "translateY(0px)",
            }}
            alt=""
          />

          <div
            className="env-stage absolute inset-0 w-full h-full"
            style={{ pointerEvents: open ? "none" : "auto" }}
          >
            <div className={`env-body${open ? " opened" : ""}`}>
              <img src="/openbottom.svg" className="w-full h-full object-cover" alt="" draggable={false} />
            </div>
            <div
              className={`env-flap${open ? " opened" : ""}`}
              onClick={handleOpen}
              role="button"
              aria-label="Open invitation"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleOpen()}
            >
              <img src="/openup.svg" className="w-full h-full object-cover" alt="" draggable={false} />
            </div>
          </div>

          {!open && (
            <div className="tap-hint">
              <span className="tap-hint-label">Tap to Open</span>
            </div>
          )}

          {/* Scroll indicator — visible after envelope opens */}
          {open && envelopeAnimDone && (
            <div
              style={{
                position: "absolute",
                bottom: "28px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 50,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                animation: "scrollFadeIn 1s ease 3.5s both",
                pointerEvents: "none",
              }}
            >
              {/* Mouse / scroll wheel icon */}
              <div
                style={{
                  width: "22px",
                  height: "36px",
                  border: "2px solid #231701",
                  borderRadius: "11px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "5px",
                }}
              >
                <div
                  style={{
                    width: "3px",
                    height: "7px",
                    background: "#231701",
                    borderRadius: "2px",
                    animation: "scrollDot 1.6s ease-in-out infinite",
                  }}
                />
              </div>
              {/* Chevron arrows */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                {[0, 1, 2].map((i) => (
                  <svg
                    key={i}
                    width="14" height="8" viewBox="0 0 14 8" fill="none"
                    style={{ animation: `chevronFade 1.6s ease-in-out ${i * 0.18}s infinite` }}
                  >
                    <path d="M1 1L7 7L13 1" stroke="#231701" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ))}
              </div>
              <span
                style={{
                  color: "#231701",
                  fontSize: "9px",
                  letterSpacing: "3px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontFamily: "Georgia, serif",
                  opacity: 0.8,
                }}
              >
                Scroll
              </span>
            </div>
          )}
        </div>

        {open && envelopeAnimDone && (
          <>
            {/* ── SECTION 2 — Names ── */}
            <div className="w-full">
              <div className="h-screen w-full bg-[#5b3525] relative overflow-hidden">
                {!section2Loaded && (
                  <div className="absolute inset-0 flex items-center justify-center text-white text-sm">Loading…</div>
                )}
                <img
                  src="/slidesecond.svg"
                  onLoad={() => setSection2Loaded(true)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${section2Loaded ? "opacity-100" : "opacity-0"}`}
                  alt=""
                />
                <div className="relative flex items-center justify-center h-full px-6" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                  <div className="max-w-[340px] w-full text-center text-[#f5cb7d] absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2" data-aos="fade-up" data-aos-duration="1200">
                    <h2 className="text-lg md:text-xl font-semibold leading-tight" data-aos="fade-up">
                      Mrs. Sandhya &amp; <br /> Mr.Anil Bahadure
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-[#f6d38b]" data-aos="fade-up">
                      Await your presence for <br />the wedding celebrations <br />of their daughter
                    </p>
                    <h1 className="mt-3 text-4xl font-bold tracking-wide" data-aos="fade-up">Shreya</h1>
                    <p className="mt-1 text-xl text-[#f6d38b]" data-aos="fade-up">with</p>
                    <h1 className="text-4xl font-bold tracking-wide" data-aos="fade-up">Naivedya</h1>
                    <p className="mt-5 text-sm text-[#f6d38b]" data-aos="fade-up">Son of</p>
                    <h2 className="text-lg md:text-xl font-semibold" data-aos="fade-up">
                      Mrs. Kamlesh Joshi & <br /> Late Mr. Mukul Joshi
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div ref={section1SentinelRef} style={{ height: "1px" }} />

            {/* Top overlay between s2 and s3 */}
            <div
              style={{
                position: "relative", top: "-82px", zIndex: 30,
                pointerEvents: "none", marginBottom: "-332px", height: "320px",
                transform: `translateY(${topTransform}px)`,
                transition: "transform 0.1s linear",
                willChange: "transform",
              }}
            >
              <img
                src="/3rd slide top.svg"
                className="w-full object-cover"
                style={{ height: "300px", display: "block", position: "relative", zIndex: 30, pointerEvents: "none" }}
                alt=""
              />
            </div>

            {/* ── SECTION 3 — Scratch Card ── */}
            <div ref={section3Ref} className="h-screen w-full relative overflow-hidden" style={{ zIndex: 10 }}>
              <div className="sticky top-0 h-screen w-full overflow-hidden">
                <img src="/3rd slide bg.svg" className="absolute inset-0 w-full h-full object-cover" alt="" />
                <img
                  src="/3rd slide second.svg"
                  className="absolute w-full h-full object-cover top-[40px] scroll-layer"
                  style={getSection3Style(0)}
                  alt=""
                />
                <div className="scratch-overlay">
                  <p className="scratch-title">Reveal</p>
                  <p className="scratch-subtitle">
                    Scratch to discover<br />the wedding date
                  </p>
                  <ScratchCard weddingDate="05/05/26" onFullReveal={handleScratchReveal} />
                </div>
              </div>
            </div>

            {/* Bottom overlay between s3 and s4 */}
            <div
              style={{
                position: "relative", top: "-82px", zIndex: 30,
                pointerEvents: "none", marginBottom: "-332px", height: "320px",
                transform: `translateY(${botTransform}px)`,
                transition: "transform 1s linear",
                willChange: "transform",
              }}
            >
              <img
                src="/3rd slide bottom.svg"
                className="w-full object-cover"
                style={{ height: "300px", display: "block", position: "relative", zIndex: 30, pointerEvents: "none" }}
                alt=""
              />
            </div>

            {/* ── SECTION 4 — Events ── */}
            <div className="relative h-[300vh] w-full">
              <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                <img src="/bg 4 section.svg" className="absolute inset-0 w-full h-full object-cover" alt="" />
                <h2 className="absolute top-[71px] left-1/2 -translate-x-1/2 text-[#f3c53c] text-3xl font-bold z-10">Events</h2>
                {[
                 
                  {
                    img: "/section 4 2.svg",
                    node: (
                      <div className="max-w-[300px] w-full text-center z-10">
                        <p className="text-base font-medium text-[#5c3a1e]">Day 1 <br /> 04/05/26</p>
                        <h2 className="text-xl font-semibold text-[#c200b9] mt-1">Carnival <br /> Haldi<br />Lunch</h2>
                        <p className="text-sm text-[#c200b9]">12 pm</p>
                        <h2 className="text-xl font-semibold text-green-700 mt-2">High Tea</h2>
                        <p className="text-sm text-green-700">4.30 pm</p>
                        <p className="text-sm text-[#5c3a1e] mt-2">@Mangli Lake Farm</p>
                      </div>
                    ),
                  },
                 
                  {
                    img: "/section 4 2.svg",
                    node: (
                      <div className="max-w-[300px] w-full text-center z-10">
                        <p className="text-base font-medium text-[#5c3a1e]">Day 2 <br /> 05/05/26</p>
                        <h2 className="text-xl font-bold text-[#cc4949] mt-1">Maharashtrian <br />Lagna</h2>
                        <p className="text-base text-orange-700">12 pm</p>
                        <h2 className="text-xl font-semibold text-green-700 mt-2">High Tea</h2>
                        <p className="text-sm text-green-700">5 pm</p>
                        <p className="text-sm text-[#5c3a1e] mt-2">@Mangli Lake Farm</p>
                      </div>
                    ),
                  },
                  {
                    img: "/section 4 1.svg",
                    node: (
                      <div className="max-w-[300px] w-full text-center mt-10 z-10">
                        <p className="text-base font-medium text-[#5c3a1e]">Day 2 <br /> 05/05/26</p>
                        <h2 className="text-xl font-semibold text-orange-700 mt-1">Barat</h2>
                        <p className="text-sm text-orange-700">6pm</p>
                        <h2 className="text-xl font-semibold text-green-700 mt-1">Varmala &<br />Reception</h2>
                        <p className="text-sm text-green-700">7pm onwards</p>
                        <h2 className="text-xl font-semibold text-[#c200b9] mt-1">Pahadi<br />Shadi</h2>
                        <p className="text-sm text-[#5c3a1e] mt-1">@Mangli Lake Farm</p>
                      </div>
                    ),
                  },
                ].map((slide, i) => (
                  <div key={i} className="absolute inset-0 flex items-center justify-center scroll-layer top-[133px]" style={getStyle(i)}>
                    <img src={slide.img} className="absolute inset-0 w-full h-full object-cover" alt="" />
                    <div className="relative flex items-center justify-center w-full h-full px-6">
                      {slide.node}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── SECTION 5 — Venue ── */}
            <div
              ref={venueRef}
              className="h-screen w-full relative flex flex-col items-center justify-center text-center"
              style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", overflow: "clip" }}
            >
              {/* BG layers — pointer-events-none so they never intercept clicks */}
              <img src="/Yellow BG.svg" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ opacity: 0.7, zIndex: 0 }} alt="" />
              <img src="/Car BG.svg"    className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ zIndex: 1 }} alt="" />
 
              {/* Car — decorative only, never blocks clicks */}
              <img
                src="/Car.svg"
                className="absolute bottom-[6%] w-79 h-122 md:w-48 md:h-48 object-contain pointer-events-none scroll-layer"
                style={{ transform: `translateX(${carX}vw)`, transition: "transform 0.05s linear", zIndex: 2 }}
                alt="Car"
              />
 
              {/* Decorative wedding SVG — behind all interactive elements */}
              <img
                src="/wedding-11.svg"
                className="absolute pointer-events-none"
                style={{ height: "502px", top: "77px", left: "50%", transform: "translateX(-50%)", zIndex: 3 }}
                alt=""
              />
 
              {/* Interactive content block — z-index 10, no overflow-hidden cutting it */}
              <div className="relative flex flex-col items-center w-full px-4" style={{ marginTop: "-242px", zIndex: 10 }}>
                <h2 className="text-4xl font-bold text-[#1f2a5a] mb-2" data-aos="fade-up">Venue</h2>
                <p className="text-base text-[#1f2a5a] leading-relaxed mb-6" data-aos="fade-up">
                  Mangli Lake Farm,<br />
                  Near Champa (2km), Umred Road,<br />
                  Nagpur, Maharashtra 441204
                </p>
                <div
                  className="w-full max-w-[320px] rounded-xl shadow-xl mb-6"
                  style={{ height: "130px", overflow: "hidden", position: "relative", zIndex: 10 }}
                  data-aos="fade-up"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1813833139236!2d79.21359369999999!3d20.985365100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b06250837d09%3A0x1e737c4de53c6add!2sMangli%20Lake%20Farm!5e0!3m2!1sen!2sin!4v1772619329004!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mangli Lake Farm Location"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Mangli+Lake+Farm+Nagpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7b1d3b00] text-white px-8 py-3 rounded-full text-base font-semibold active:scale-95 transition-transform"
                  style={{ position: "relative", zIndex: 10 ,top:"-24px"}}
                  data-aos="fade-up"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* ── SECTION 6 — Countdown ── */}
            <div
              className="h-screen w-full relative flex items-center justify-center text-center overflow-hidden"
              style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
            >
              <img src="/final.svg" className="absolute inset-0 w-full h-full object-cover" alt="" />
              <div className="relative z-10 flex flex-col items-center px-4" style={{ marginTop: "-60px" }}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#f3c178] mb-6" data-aos="fade-up">
                  The <br /> Countdown <br /> Begins
                </h2>
                <div
                  className="bg-[#1e2250] text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg mb-6 tracking-widest"
                  data-aos="fade-up"
                >
                  {timeLeft.days}D &nbsp; {timeLeft.hours}H &nbsp; {timeLeft.minutes}M
                </div>
                <p className="text-white text-sm max-w-xs leading-relaxed" data-aos="fade-up">
                  One love, one promise,<br />one celebration — with you.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Open;


