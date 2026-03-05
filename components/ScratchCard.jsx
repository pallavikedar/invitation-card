"use client";
import { useEffect, useRef, useState } from "react";

export default function ScratchCard({ cardW, cardH, onRevealed }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const revealedRef = useRef(false);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = cardW;
    canvas.height = cardH;
    
    // Draw gold scratch surface
    const gradient = ctx.createLinearGradient(0, 0, cardW, cardH);
    gradient.addColorStop(0, "#7a4e00");
    gradient.addColorStop(0.3, "#f7de78");
    gradient.addColorStop(0.5, "#c48810");
    gradient.addColorStop(0.7, "#f5e060");
    gradient.addColorStop(1, "#7a4e00");
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, cardW, cardH);
    
    // Add texture lines
    ctx.save();
    ctx.globalCompositeOperation = "overlay";
    for (let i = 0; i < cardH; i += 4) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255,255,255,${0.1 + Math.random() * 0.1})`;
      ctx.lineWidth = 0.5;
      ctx.moveTo(0, i);
      ctx.lineTo(cardW, i + Math.sin(i * 0.05) * 3);
      ctx.stroke();
    }
    ctx.restore();
    
    // Add text
    ctx.fillStyle = "rgba(60,30,0,0.8)";
    ctx.font = `bold ${Math.round(cardW * 0.045)}px "Georgia", "Times New Roman", serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 4;
    ctx.fillText("✦ SCRATCH HERE ✦", cardW/2, cardH/2);
    
    revealedRef.current = false;
  }, [cardW, cardH]);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    let clientX, clientY;
    
    if (e.touches) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (revealedRef.current) return;
    
    // Erase with a circle
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fill();
    
    // Check if revealed (sample pixels)
    if (!revealedRef.current) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      let transparentPixels = 0;
      const totalSamples = 150;
      const step = Math.floor(data.length / 4 / totalSamples) * 4;
      
      for (let i = 3; i < data.length; i += step) {
        if (data[i] < 50) {
          transparentPixels++;
        }
      }
      
      const coverage = transparentPixels / totalSamples;
      
      if (coverage > 0.3) {
        revealedRef.current = true;
        
        canvas.style.transition = 'opacity 0.5s ease';
        canvas.style.opacity = '0';
        canvas.style.pointerEvents = 'none';
        
        setTimeout(() => {
          if (onRevealed) onRevealed();
        }, 500);
      }
    }
  };

  const handleStart = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    scratch(x, y);
  };

  const handleMove = (e) => {
    e.preventDefault();
    if (!isDrawing) return;
    const { x, y } = getCoordinates(e);
    scratch(x, y);
  };

  const handleEnd = (e) => {
    e.preventDefault();
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onTouchCancel={handleEnd}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        cursor: 'crosshair',
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
        zIndex: 10,
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      }}
    />
  );
}