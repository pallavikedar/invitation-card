// "use client";
// import { useState, useEffect } from "react";

// function Open() {
//   const [open, setOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

// useEffect(() => {
//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   return (
//    <div
//   className={`relative perspective-[2000px] transition-all duration-700
//   ${open ? "min-h-screen overflow-y-auto" : "h-[700px] overflow-hidden"}`}
// >

//       {/* fist part  */}
//       <div
//         className={`absolute w-[100%] h-[100%] bg-white shadow-xl rounded-lg 
//         flex items-center justify-center text-2xl font-semibold
//         `}
//       >
//        <img src="1st bg imjage.svg" className={` relative w-full h-[100vh] top-[-65px] object-contain transition-all duration-100 ease-in-out
//         ${open ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-10"}`}/>
//        <img src="/1st front.svg" className={` absolute w-full h-[100vh] object-contain transition-all duration-700 ease-in-out
//         ${open ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-10"}`}/>
//        <img src="/1stbottom.svg" className={`absolute w-full h-[100vh] object-contain transition-all duration-700 ease-in-out
//         ${open ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-10"}`}/>

//       </div>

//     {/* second part */}
//        <div className={`absolute w-full h-[87vh] top-[605px]  bg-[#593838]
//        ${open ? "opacity-100 delay-700" : "opacity-0 translate-y-10"}`}>

//        <img
//   src="/slidesecond.svg"
//   className={`absolute w-full h-[100vh] object-contain transition-all duration-700 ease-in-out 
//   ${open ? "opacity-100 delay-700" : "opacity-0 translate-y-10"}`}
//   style={{
//     top: `${-44- scrollY * 0.5}px`,
//   }}
// />
//        </div>


//       {/* open screen  */}
//       <img
//         src="/openbottom.svg"
//         alt="Wedding decoration bottom"
//         className={`relative w-full h-[589px] object-contain z-10
//         transition-all duration-1000 ease-in-out
//         ${open ? "translate-y-[700px] opacity-0" : "translate-y-0 opacity-100"}`}
//       />

//       {/* Top Flap */}
//       <img
//         src="/openup.svg"
//         alt="Wedding decoration top"
//         onClick={() => setOpen(true)}
//         className={`absolute left-0 w-full h-[655px] object-contain   top-[-38px]
//         transition-transform duration-1000 ease-in-out z-20 cursor-pointer
//         ${open ? "rotate-x-[-180deg]" : "rotate-x-0"}`}
//         style={{
//           transformOrigin: "top",
//           transformStyle: "preserve-3d",
//         }}
//       />


//     </div>
//   );
// }

// export default Open;







// "use client";
// import { useState, useEffect } from "react";

// function Open() {
//   const [open, setOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);

//   useEffect(() => {
//     setWindowHeight(window.innerHeight);

//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setScrollY(window.scrollY);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const firstSectionScroll = Math.min(scrollY, windowHeight);

//   return (
//     <div
//       className={`relative ${
//         open ? "min-h-[200vh]" : "h-auto overflow-hidden"
//       }`}
//     >
//       {/* ================= FIRST SECTION (STICKY) ================= */}
//       <div className="sticky top-0 h-[88vh] w-full overflow-hidden bg-white shadow-xl rounded-lg">

//         {/* Background */}
//         <img
//           src="1st bg imjage.svg"
//           className={`absolute w-full h-[88vh] object-contain transition-opacity duration-700
//           ${open ? "opacity-100" : "opacity-0"}`}
//           style={{
//             transform: open
//               ? `translateY(-${firstSectionScroll * 0.5}px)`
//               : "translateY(0px)",
//           }}
//         />

//         {/* Front */}
//         <img
//           src="/1st front.svg"
//           className={`absolute w-full h-[88vh] object-contain transition-opacity duration-700
//           ${open ? "opacity-100 delay-700" : "opacity-0"}`}
//           style={{
//             transform: open
//               ? `translateY(-${firstSectionScroll * 0.7}px)`
//               : "translateY(0px)",
//           }}
//         />

//         {/* Bottom */}
//         <img
//           src="/1stbottom.svg"
//           className={`absolute w-full h-screen object-contain transition-opacity duration-700
//           ${open ? "opacity-100 delay-700" : "opacity-0"}`}
//           style={{
//             transform: open
//               ? `translateY(-${firstSectionScroll}px)`
//               : "translateY(0px)",
//           }}
//         />

//              <img
//         src="/openbottom.svg"
//         alt="Wedding decoration bottom"
//         className={`relative w-full h-[589px] object-contain z-10
//         transition-all duration-1000 ease-in-out
//         ${open ? "translate-y-[700px] opacity-0" : "translate-y-0 opacity-100"}`}
//       />

//       {/* Top Flap */}
//       <img
//         src="/openup.svg"
//         alt="Wedding decoration top"
//         onClick={() => setOpen(true)}
//         className={`absolute left-0 w-full h-[655px] object-contain   top-[-38px]
//         transition-transform duration-1000 ease-in-out z-20 cursor-pointer
//         ${open ? "rotate-x-[-180deg]" : "rotate-x-0"}`}
//         style={{
//           transformOrigin: "top",
//           transformStyle: "preserve-3d",
//         }}
//       />

//       </div>

//       {/* ================= SECOND SECTION ================= */}
//       <div className="h-[88vh] w-full bg-[#593838] relative">
//         <img
//           src="/slidesecond.svg"
//           className="absolute w-full h-[88vh] object-contain"
//         />
//       </div>


//     {/* //  third section */}
//     <div>
//         <img
//           src="3rd slide bg.svg"
//           className={`absolute w-full h-[88vh] object-contain transition-opacity duration-700 top-[1210px]
//           ${open ? "opacity-100" : "opacity-0"}`}
//         //   style={{
//         //     transform: open
//         //       ? `translateY(-${firstSectionScroll * 0.5}px)`
//         //       : "translateY(0px)",
//         //   }}
//         />

//         {/* Front */}
//         <img
//           src="/3rd slide top.svg"
//           className={`absolute w-full h-[88vh] object-contain transition-opacity duration-700 top-[843px]
//           ${open ? "opacity-100 delay-700" : "opacity-0"}`}
//         //   style={{
//         //     transform: open
//         //       ? `translateY(-${firstSectionScroll * 0.7}px)`
//         //       : "translateY(0px)",
//         //   }}
//         />

//         {/* Bottom */}
//         <img
//           src="/3rd slide second.svg"
//           className={`absolute w-full h-screen object-contain transition-opacity duration-700 top-[1188px]
//           ${open ? "opacity-100 delay-700" : "opacity-0"}`}
//         //   style={{
//         //     transform: open
//         //       ? `translateY(-${firstSectionScroll}px)`
//         //       : "translateY(0px)",
//         //   }}
//         />
//            <img
//           src="/3rd slide4.svg"
//           className={`absolute w-full h-screen object-contain transition-opacity duration-700 top-[1210px]
//           ${open ? "opacity-100 delay-700" : "opacity-0"}`}
//         //   style={{
//         //     transform: open
//         //       ? `translateY(-${firstSectionScroll}px)`
//         //       : "translateY(0px)",
//         //   }}
//         />
//         <img
//           src="/3rd slide3.svg"
//           className={`absolute w-full h-screen object-contain transition-opacity duration-700 top-[1210px]
//           ${open ? "opacity-100 delay-700" : "opacity-0"}`}
//         //   style={{
//         //     transform: open
//         //       ? `translateY(-${firstSectionScroll}px)`
//         //       : "translateY(0px)",
//         //   }}
//         />
//          <img
//           src="/3rd slide bottom.svg"
//           className={`absolute w-full h-screen object-contain transition-opacity duration-700 top-[1370px]
//           ${open ? "opacity-100 delay-700" : "opacity-0"}`}
//         //   style={{
//         //     transform: open
//         //       ? `translateY(-${firstSectionScroll}px)`
//         //       : "translateY(0px)",
//         //   }}
//         />

//     </div>
//     <div>
//          <img
//           src="bg 4 section.svg"
//           className={`absolute w-full h-[88vh] object-contain transition-opacity duration-700 top-[1774px]
//           ${open ? "opacity-100" : "opacity-0"}`}
//         //   style={{
//         //     transform: open
//         //       ? `translateY(-${firstSectionScroll * 0.5}px)`
//         //       : "translateY(0px)",
//         //   }}
//         />

//         {/* Front */}
//         <img
//           src="/section 4 1.svg"
//           className={`absolute w-full h-[88vh] object-contain transition-opacity duration-700 top-[1913px]
//           ${open ? "opacity-100 delay-700" : "opacity-0"}`}
//         //   style={{
//         //     transform: open
//         //       ? `translateY(-${firstSectionScroll * 0.7}px)`
//         //       : "translateY(0px)",
//         //   }}
//         />

//         {/* Bottom */}
//         <img
//           src="/section 4 2.svg"
//           className={`absolute w-full h-screen object-contain transition-opacity duration-700 top-[2100px]
//           ${open ? "opacity-100 delay-700" : "opacity-0"}`}
//         //   style={{
//         //     transform: open
//         //       ? `translateY(-${firstSectionScroll}px)`
//         //       : "translateY(0px)",
//         //   }}
//         />

//            <img
//           src="/section 4 3.svg"
//           className={`absolute w-full h-screen object-contain transition-opacity duration-700 top-[2550px]
//           ${open ? "opacity-100 delay-700" : "opacity-0"}`}
//         //   style={{
//         //     transform: open
//         //       ? `translateY(-${firstSectionScroll}px)`
//         //       : "translateY(0px)",
//         //   }}
//         /> 
//     </div>
//      </div>



//   );
// }

// export default Open;








// "use client";
// import { useEffect, useRef, useState } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import ScratchCard from "./ScratchCard"
// import MyScratchCard from "./ScratchCard";

// function Open() {





//   const sectionRef = useRef(null);
//   const section3Ref = useRef(null);
//   const imageRef = useRef(null);
//   const [offset, setOffset] = useState(0);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     AOS.init({
//       // You can add global settings here, e.g.:
//       duration: 800, // values from 0 to 3000, with step 50ms
//       once: false, // whether animation should happen only once - while scrolling down
//     });
//   }, []);
//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setVisible(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);
//   const [open, setOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);

//   useEffect(() => {
//     setWindowHeight(window.innerHeight);

//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           setScrollY(window.scrollY);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const firstSectionScroll = Math.min(scrollY, windowHeight);



//   let current = 0;
//   let target = 0;
//   let isVisible = false;

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         isVisible = entry.isIntersecting;
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     const handleScroll = () => {
//       if (!sectionRef.current || !isVisible) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const progress = (windowHeight - rect.top) / windowHeight;
//       const clamped = Math.max(0, Math.min(progress, 1));

//       target = clamped * 40; // max movement 40px
//     };

//     const animate = () => {
//       if (isVisible) {
//         current += (target - current) * 0.08;

//         if (imageRef.current) {
//           imageRef.current.style.transform = `translateY(${current}px)`;
//         }
//       }

//       requestAnimationFrame(animate);
//     };

//     window.addEventListener("scroll", handleScroll);
//     animate();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       observer.disconnect();
//     };
//   }, []);





//                 const sectionStart = windowHeight * 3;
//                 const raw = scrollY - sectionStart;

//                 const step = windowHeight;
//                 const max = step * 3;

//                 const scroll = Math.max(0, Math.min(raw, max));

//                 const activeIndex = Math.floor(scroll / step);
//                 const progress = (scroll % step) / step;

//                 const getStyle = (index) => {
//                   // Current active slide
//                   if (index === activeIndex) {
//                     return {
//                       transform: `translateY(${-progress * windowHeight}px)`
//                     };
//                   }

//                   // Next slide coming from bottom
//                   if (index === activeIndex + 1) {
//                     return {
//                       transform: `translateY(${windowHeight - progress * windowHeight}px)`
//                     };
//                   }

//                   // Slides above
//                   if (index < activeIndex) {
//                     return { transform: `translateY(${-windowHeight}px)` };
//                   }

//                   // Slides below
//                   return { transform: `translateY(${windowHeight}px)` };
//                 };


//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Section start & end positions
//    const section3Start = section3Ref.current?.offsetTop || 0;
//   const section3Height = windowHeight * 2; // scrollable area for animation
//   const section3End = section3Start + section3Height;

//   // Only scroll relative to section3
//   const section3Raw = scrollY - section3Start;
//   const section3Scroll = Math.max(0, Math.min(section3Raw, section3Height));
//   const section3Progress = section3Scroll / windowHeight;

//   const getSection3Style = (index) => {
//     // Before section scroll → show images normally
//     if (scrollY < section3Start) return { transform: "translateY(0px)" };

//     // First slide animation
//     if (index === 0) {
//       return { transform: `translateY(${-section3Progress * windowHeight}px)` };
//     }

//     // Second slide animation
//     if (index === 1) {
//       return { transform: `translateY(${windowHeight - section3Progress * windowHeight}px)` };
//     }

//     // Other slides: stay in place
//     return { transform: "translateY(0px)" };
//   };
//   return (
//     <div
//       className={`relative ${open ? "min-h-[500vh]" : "h-screen overflow-hidden"
//         }`}
//     >
//       {/* ================= FIRST SECTION (STICKY) ================= */}
//       <div className="sticky top-0 h-[88vh] w-full overflow-hidden bg-white shadow-xl rounded-lg">

//         {/* Background */}
//         <img
//           src="1st bg imjage.svg"
//           className="absolute w-full h-[88vh] object-contain"
//           style={{
//             transform: open
//               ? `translateY(-${firstSectionScroll * 0.5}px)`
//               : "translateY(0px)",
//           }}
//         />

//         {/* Front */}
//         <img
//           src="/1st front.svg"
//           className="absolute w-full h-[88vh] object-contain"
//           style={{
//             transform: open
//               ? `translateY(-${firstSectionScroll * 0.7}px)`
//               : "translateY(0px)",
//           }}
//         />

//         {/* Bottom */}
//         <img
//           src="/1stbottom.svg"
//           className="absolute w-full h-screen object-contain"
//           style={{
//             transform: open
//               ? `translateY(-${firstSectionScroll}px)`
//               : "translateY(0px)",
//           }}
//         />

//         {/* Envelope Bottom */}
//         <img
//           src="/openbottom.svg"
//           className={`relative w-full h-[589px] object-contain z-10
//           transition-all duration-1000 ease-in-out
//           ${open ? "translate-y-[700px]" : "translate-y-0"}`}
//         />

//         {/* Envelope Top */}
//         <img
//           src="/openup.svg"
//           onClick={() => setOpen(true)}
//           className={`absolute left-0 w-full h-[655px] object-contain top-[-38px]
//           transition-transform duration-1000 ease-in-out z-20 cursor-pointer
//           ${open ? "rotate-x-[-180deg]" : "rotate-x-0"}`}
//           style={{
//             transformOrigin: "top",
//             transformStyle: "preserve-3d",
//           }}
//         />
//       </div>

//       {/* ================= RENDER OTHER SECTIONS ONLY AFTER OPEN ================= */}
//       {open && (
//         <>
//           {/* ================= SECOND SECTION ================= */}
//           <div className="h-[88vh] w-full  bg-[#593838] relative">
//             <img
//               src="/slidesecond.svg"

//               className="sticky w-full h-[88vh] object-contain"
//             />
//           </div>

//           {/* ================= THIRD SECTION ================= */}
//           <div
//             ref={section3Ref}

//             className="h-[100vh] w-full relative overflow-hidden"

//           >

//             <img
//               src="3rd slide bg.svg"
//               data-aos="fade-up"
//               data-aos-duration="100"
//               className={`sticky w-full h-[100vh] object-contain top-[65px] fade-up ${visible ? "show" : ""}`}
//             />

//             <img
//               src="/3rd slide top.svg"

//               className={`absolute w-full h-[88vh] object-contain top-[-279px] fade-up ${visible ? "show" : ""}`}
//               style={{ transitionDelay: "0.1s" }}
//             />

//           <img
//         src="/3rd slide second.svg"
//         className="absolute w-full h-[88vh] object-contain top-[108px]"
//         style={getSection3Style(0)}
//       />

//             <img
//               src="/3rd slide4.svg"

//               className={`absolute w-full h-[88vh] object-contain top-[100px] fade-up ${visible ? "show" : ""}`}
//               style={{ transitionDelay: "0.3s" }}
//             />
//             <img
//               src="/3rd slide3.svg"

//               className={`absolute w-full h-[88vh] object-contain top-[100px] fade-up ${visible ? "show" : ""}`}
//               style={{ transitionDelay: "0.4s" }}
//             /> 


//        <div className="absolute top-[100px] w-full h-[88vh]">

// </div>


//           <img
//   src="/3rd slide bottom.svg"
//   className="absolute w-full h-[88vh] object-contain top-[276px]"
//   style={{
//     transform: scrollY < section3Start 
//       ? "translateY(0px)" 
//       : `translateY(${-section3Progress * windowHeight}px)`,
//     opacity: scrollY < section3Start 
//       ? 1 
//       : 1 - section3Progress, // fade out as scroll progresses
//     transition: "transform 0.1s linear, opacity 0.1s linear"
//   }}
// />


//           </div>

//           {/* ================= SECTION 4 (SCROLL ANIMATION) ================= */}
//           <div className="relative h-[400vh] w-full">
//             <div className="sticky top-0 h-[100vh] w-full overflow-hidden">

//               {/* Background Fixed */}
//               <img
//                 src="bg 4 section.svg"
//                 className="absolute w-full h-[88vh] object-contain "
//               />
//               <img
//                 src="bg 4 section.svg"
//                 className="absolute w-full h-[88vh] object-contain top-[100px]"
//               />



//                   <>
//                     <img
//                       src="/section 4 1.svg"
//                       className="absolute w-full h-[100vh] object-contain"
//                       style={getStyle(0)}
//                     />

//                     <img
//                       src="/section 4 2.svg"
//                       className="absolute w-full h-[100vh] object-contain"
//                       style={getStyle(1)}
//                     />

//                     <img
//                       src="/section 4 3.svg"
//                       className="absolute w-full h-[100vh] object-contain"
//                       style={getStyle(2)}
//                     />
//                     <img
//                       src="/section 4 1.svg"
//                       className="absolute w-full h-[100vh] object-contain"
//                       style={getStyle(3)}
//                     />
//                   </>

//             </div>
//           </div>
//           <div >

// <img
//                 src="section 5 final screen.svg"
//                 className="absolute w-full h-[88vh] object-contain "

//               />

//           </div>
//             <div>

// <img
//                 src="final.svg"
//                 className="absolute w-full h-[88vh] object-contain bottom-[-1130px] "
//               />

//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Open;












"use client";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function Open() {
  const sectionRef = useRef(null);
  const section3Ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [section2Loaded, setSection2Loaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [criticalLoaded, setCriticalLoaded] = useState(false);
  const [visible, setVisible] = useState(false);




  // Section start & end positions
  const section3Start = section3Ref.current?.offsetTop || 0;
  const section3Height = windowHeight * 2; // scrollable area for animation
  const section3End = section3Start + section3Height;

  // Only scroll relative to section3
  const section3Raw = scrollY - section3Start;
  const section3Scroll = Math.max(0, Math.min(section3Raw, section3Height));
  const section3Progress = section3Scroll / windowHeight;

  const getSection3Style = (index) => {
    // Before section scroll → show images normally
    if (scrollY < section3Start) return { transform: "translateY(0px)" };

    // First slide animation
    if (index === 0) {
      return { transform: `translateY(${-section3Progress * windowHeight}px)` };
    }

    // Second slide animation
    if (index === 1) {
      return { transform: `translateY(${windowHeight - section3Progress * windowHeight}px)` };
    }

    // Other slides: stay in place
    return { transform: "translateY(0px)" };
  };


  const sectionStart = windowHeight * 3;
  const raw = scrollY - sectionStart;

  const step = windowHeight;
  const max = step * 3;

  const scroll = Math.max(0, Math.min(raw, max));

  const activeIndex = Math.floor(scroll / step);
  const progress = (scroll % step) / step;

  const getStyle = (index) => {
    // Current active slide
    if (index === activeIndex) {
      return {
        transform: `translateY(${-progress * windowHeight}px)`
      };
    }

    // Next slide coming from bottom
    if (index === activeIndex + 1) {
      return {
        transform: `translateY(${windowHeight - progress * windowHeight}px)`
      };
    }

    // Slides above
    if (index < activeIndex) {
      return { transform: `translateY(${-windowHeight}px)` };
    }

    // Slides below
    return { transform: `translateY(${windowHeight}px)` };
  };







  let current = 0;
  let target = 0;
  let isVisible = false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!sectionRef.current || !isVisible) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = (windowHeight - rect.top) / windowHeight;
      const clamped = Math.max(0, Math.min(progress, 1));

      target = clamped * 40; // max movement 40px
    };

    const animate = () => {
      if (isVisible) {
        current += (target - current) * 0.08;

        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${current}px)`;
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  /* ================= INIT ================= */
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    setWindowHeight(window.innerHeight);

    const criticalImages = ["/openup.svg", "/openbottom.svg"];

    Promise.all(
  criticalImages.map(
    (src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;

        img.onload = () => resolve();
        img.onerror = () => resolve(); // prevents infinite loading

        // fallback timeout (extra safety)
        setTimeout(() => resolve(), 3000);
      })
  )
).then(() => {
  setCriticalLoaded(true);
});
  }, []);

  /* ================= SMOOTH SCROLL ================= */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () =>
      setWindowHeight(window.innerHeight)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const firstSectionScroll = Math.min(scrollY, windowHeight);

  if (!criticalLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#fff5f1] text-[#b68d33] font-bold">
        Please Wait...
      </div>
    );
  }

  return (
    <div
      className={`relative  ${open ? "min-h-[700vh]" : "h-screen overflow-hidden"
        }` }
    >
      {/* ================= FIRST SECTION ================= */}
      <div
        className="sticky top-0 max-top-[-75px] h-screen w-full overflow-hidden bg-white"
        style={{ perspective: "1400px" }}
      >
        {/* Background */}
        <img
          src="/1st bg imjage.svg"
          className="absolute w-full h-full object-contain"
          style={{...getSection3Style(0), maxBlockSize:"fit-content",}}
        />

        {/* Front */}
        <img
          src="/1st front.svg"
          className="absolute w-full h-full object-contain"
           style={getSection3Style(0)}
        />
        <img
          src="/logo 1.svg"
          className="absolute w-[122px] h-[100px] object-contain top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        // style={{
        //   transform: open
        //     ? `translateY(-${firstSectionScroll * 0.7}px)`
        //     : "translateY(0px)",
        //   transition: "transform 0.3s linear",
        // }}
         style={getSection3Style(0)}
        />

        {/* Bottom */}
        <img
          src="/1stbottom.svg"
          className="absolute w-full h-full object-contain top-[50px]"
          style={{
            transform: open
              ? `translateY(-${firstSectionScroll}px)`
              : "translateY(0px)",
            // transition: "transform 0.3s linear",
          }}
          
        />

        {/* OPEN BOTTOM */}
        <img
          src="/openbottom.svg"
          className="absolute w-full h-[100vh] [@media(min-width:320px)_and_(max-width:339px)]:h-[89vh] object-contain z-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: open ? "translateY(700px)" : "translateY(0px)",
          }}
        />

        {/* OPEN UP (3D FLIP) */}
        <div className="absolute inset-0 z-20 cursor-pointer">
          <img
            src="/openup.svg"
            onClick={() => setOpen(true)}
            className="w-full h-[100vh] [@media(min-width:320px)_and_(max-width:339px)]:h-[89vh] object-contain "
            style={{
              transform: open ? "rotateX(-170deg)" : "rotateX(0deg)",
              transformOrigin: "top",
              backfaceVisibility: "hidden",
              maxBlockSize:"fit-content",
              transition:
                "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
              boxShadow: open
                ? "0px 40px 60px rgba(0,0,0,0.4)"
                : "none",
            }}
          />

        </div>
      </div>

      {/* ================= OTHER SECTIONS ================= */}
      {open && (
        <>
          {/* SECTION 2 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
           
           <div className="h-screen [@media(min-width:320px)_and_(max-width:339px)]:h-[89vh]     [@media(min-width:340px)_and_(max-width:375px)]:h-[100vh]   w-full max-w-[360px] bg-[#5b3525] relative overflow-hidden">
              {!section2Loaded && (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  Loading...
                </div>
              )}

             <img
  src="/slidesecond.svg"
  loading="lazy"
  onLoad={() => setSection2Loaded(true)}
  className={`w-full h-screen  absolute 
   top-[-36px] xs:top-[-36px] sm:top-[-27px] 
    transition-opacity duration-500 
    ${section2Loaded ? "opacity-100" : "opacity-0"}
  `}
/>
              <div className=" flex items-center justify-center bg-[#5b3525] px-6">
                <div className="max-w-[380px] text-center text-[#f2c46d] mt-[84px] ">

                  {/* Parents */}
                  <h2 className="text-l md:text-xl font-semibold leading-tight ">
                    Sandhya & <br /> Anil Bahadure
                  </h2>

                  {/* Sub text */}
                  <p className="mt-[3px] text-sm leading-relaxed text-[#f6d38b]">
                    Await your presence for <br />
                    the wedding celebrations <br />
                    of their daughter
                  </p>

                  {/* Bride Name */}
                  <h1 className="mt-[14px] text-4xl font-bold tracking-wide">
                    Shreya
                  </h1>

                  {/* With */}
                  <p className="mt-[4px] text-xl text-[#f6d38b]">
                    with
                  </p>

                  {/* Groom Name */}
                  <h1 className="text-4xl font-bold tracking-wide">
                    Naivedya
                  </h1>

                  {/* Son of */}
                  <p className="mt-6 text-sm text-[#f6d38b]">
                    Son of
                  </p>

                  {/* Father */}
                  <h2 className="text-l md:text-xl font-semibold">
                    Kamlesh Joshi
                  </h2>

                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3 */}
          <div
            ref={section3Ref}
            className="h-screen [@media(min-width:320px)_and_(max-width:339px)]:h-[89vh]      [@media(min-width:340px)_and_(max-width:375px)]:h-[100vh]  w-full relative overflow-hidden"
          >
            <img
              src="/3rd slide bg.svg"
              loading="lazy"
              className="w-full h-full object-contain"
              data-aos="fade-up"
            />

            <img
              src="/3rd slide top.svg"

              className={`absolute w-full h-[88vh] object-contain top-[-279px] fade-up ${visible ? "show" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            />

            <img
              src="/3rd slide second.svg"
              className="absolute w-full h-[88vh] object-contain top-[108px]"
              style={getSection3Style(0)}
            />

            <img
              src="/3rd slide4.svg"

              className={`absolute w-full h-[88vh] object-contain top-[100px] fade-up ${visible ? "show" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            />
            <img
              src="/3rd slide3.svg"

              className={`absolute w-full h-[88vh] object-contain top-[100px] fade-up ${visible ? "show" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            />

            <img
              src="/3rd slide bottom.svg"
              className="absolute w-full h-[88vh] object-contain top-[276px]"
              style={{
                transform: scrollY < section3Start
                  ? "translateY(0px)"
                  : `translateY(${-section3Progress * windowHeight}px)`,
                opacity: scrollY < section3Start
                  ? 1
                  : 1 - section3Progress, // fade out as scroll progresses
                transition: "transform 0.1s linear, opacity 0.1s linear"
              }}
            />

          </div>

          {/* SECTION 4 */}
          <div className="relative h-[400vh] w-full">
            <div className="sticky top-0 h-screen [@media(min-width:320px)_and_(max-width:339px)]:h-[89vh]      [@media(min-width:340px)_and_(max-width:375px)]:h-[100vh]   w-full">
              <h2 className="absolute top-[7%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#f3c53c] text-4xl font-bold z-10">Events</h2>
              <img
                src="bg 4 section.svg"
                loading="lazy"
                style={{ maxBlockSize:"fit-content", }}
                className="absolute w-full h-full object-contain"
              />



              <>
                <div className="absolute inset-0 flex items-center justify-center" style={getStyle(0)}>
                  <img
                    src="/section 4 1.svg"
                    className="absolute w-full h-[100vh] object-contain"

                  />
                  <div className=" flex items-center justify-center  px-6">
                    <div className="max-w-[380px] text-center  mt-[52px] z-10">
                      <p className="text-lg text-brown-700">Day 1</p>
                      <p className="text-lg text-brown-700">03/05/26</p>

                      <h2 className="text-3xl font-semibold text-orange-700 mt-[-4px]">
                        Paritran
                      </h2>
                      <p className="text-lg text-orange-700">11 am</p>

                      <h2 className="text-3xl font-semibold text-green-700 mt-[-6px]">
                        Mehendi
                      </h2>
                      <p className="text-lg text-green-700">1 pm onwards</p>

                      <p className="text-lg text-brown-700 mt-4">@Home</p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center" style={getStyle(1)}>
                  <img
                    src="/section 4 2.svg"
                    className="absolute w-full h-[100vh] object-contain"

                  />
                  <div className=" flex items-center justify-center  px-6">
                    <div className="max-w-[380px] text-center  mt-[20px] z-10">
                      <p className="text-lg text-brown-700">Day 2</p>
                      <p className="text-lg text-brown-700">04/05/26</p>

                      <h2 className="text-xl font-semibold text-[#c200b9] mt-[-4px]">
                        Carnival Haldi<br /> Lunch
                      </h2>
                      <p className="text-lg text-[#c200b9]">12 pm</p>

                      <h2 className="text-xl font-semibold text-green-700 mt-[-6px]">
                        High Tea
                      </h2>
                      <p className="text-lg text-green-700">5 pm </p>

                      <p className="text-lg text-brown-700 mt-2">@Mangli Lake <br /> Farm</p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center" style={getStyle(2)}>
                  <img
                    src="/section 4 3.svg"
                    className="absolute w-full h-[100vh] object-contain"

                  />
                  <div className=" flex items-center justify-center  px-6">
                    <div className="max-w-[380px] text-center  mt-[20px] z-10">
                      <p className="text-lg text-brown-700">Day 2</p>
                      <p className="text-lg text-brown-700">04/05/26</p>

                      <h2 className="text-2xl font-bold text-[#2b2b9a] mt-[-4px]">
                        Sangeet
                      </h2>
                      <p className="text-lg text-[#2b2b9a]">7 pm onwards</p>

                      

                      <p className="text-lg text-brown-700 mt-2">@Mangli Lake <br /> Farm</p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center" style={getStyle(3)}>
                  <img
                    src="/section 4 3.svg"
                    className="absolute w-full h-[100vh] object-contain"

                  />
                  <div className=" flex items-center justify-center  px-6">
                    <div className="max-w-[380px] text-center  mt-[20px] z-10">
                      <p className="text-lg text-brown-700">Day 3</p>
                      <p className="text-lg text-brown-700">05/05/26</p>

                      <h2 className="text-2xl font-bold text-[#cc4949] mt-[-4px]">
                       Buddhist <br/> Wedding
                      </h2>
                      <p className="text-lg text-orange-700">12 pm onward</p>

                      

                      <p className="text-lg text-brown-700 mt-2">@Mangli Lake <br /> Farm</p>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>

          {/* SECTION 5 */}
          <div className="h-screen [@media(min-width:320px)_and_(max-width:339px)]:h-[89vh] [@media(min-width:340px)_and_(max-width:375px)]:h-[100vh]  w-full relative">
            <img
              src="section 5 final screen.svg"
              loading="lazy"
              
                style={{ maxBlockSize:"fit-content", }}
              className="w-full h-full object-contain"
            />
          </div>

          {/* FINAL */}
          <div className="h-screen w-full [@media(min-width:320px)_and_(max-width:339px)]:h-[89vh]      [@media(min-width:340px)_and_(max-width:375px)]:h-[100vh]   relative">
            <img
              src="final.svg"
              loading="lazy"
              
                style={{ maxBlockSize:"fit-content", }}
              className="w-full h-full object-contain"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Open;