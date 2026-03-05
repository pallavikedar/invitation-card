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












// "use client";
// import { useEffect, useRef, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";



// function Open() {
//   const sectionRef = useRef(null);
//   const section3Ref = useRef(null);
//   const [open, setOpen] = useState(false);
//   const [section2Loaded, setSection2Loaded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);
//   const [criticalLoaded, setCriticalLoaded] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [assetsLoaded, setAssetsLoaded] = useState(false);
//   const [progress, setProgress] = useState(0);




//   const targetDate = new Date("2026-05-05T00:00:00").getTime();

//   const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

//   function getTimeRemaining() {
//     const now = new Date().getTime();
//     const distance = targetDate - now;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes = Math.floor(
//       (distance % (1000 * 60 * 60)) / (1000 * 60)
//     );

//     return { days, hours, minutes };
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(getTimeRemaining());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);






// const imageSources = [
//     "/openup.svg",
//     "/openbottom.svg",
//     "/1st bg imjage.svg",
//     "/1st front.svg",
//     "/logo 1.svg",
//     "/1stbottom.svg",
//     "/slidesecond.svg",
//     "/3rd slide bg.svg",
//     "/3rd slide top.svg",
//     "/3rd slide second.svg",
//     "/3rd slide4.svg",
//     "/3rd slide3.svg",
//     "/3rd slide bottom.svg",
//     "bg 4 section.svg",
//     "/section 4 1.svg",
//     "/section 4 2.svg",
//     "/section 4 3.svg",
//     "section 5 final screen.svg",
//     "final.svg",
//   ];


//   // Section start & end positions
//   const section3Start = section3Ref.current?.offsetTop || 0;
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


//   const sectionStart = windowHeight * 3;
//   const raw = scrollY - sectionStart;

//   const step = windowHeight;
//   const max = step * 3;

//   const scroll = Math.max(0, Math.min(raw, max));

//   const activeIndex = Math.floor(scroll / step);
//   const progressVal = (scroll % step) / step;

//   const getStyle = (index) => {
//     // Current active slide
//     if (index === activeIndex) {
//       return {
//         transform: `translateY(${-progressVal * windowHeight}px)`
//       };
//     }

//     // Next slide coming from bottom
//     if (index === activeIndex + 1) {
//       return {
//         transform: `translateY(${windowHeight - progress * windowHeight}px)`
//       };
//     }

//     // Slides above
//     if (index < activeIndex) {
//       return { transform: `translateY(${-windowHeight}px)` };
//     }

//     // Slides below
//     return { transform: `translateY(${windowHeight}px)` };
//   };







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


// useEffect(() => {
//  AOS.init({ duration: 800, once: false });
// }, []);
//   /* ================= INIT ================= */
//    useEffect(() => {
   
//     setWindowHeight(window.innerHeight);

//     // Block scroll immediately
//     document.body.style.overflow = "hidden";

//     let loadedCount = 0;
//     const total = imageSources.length;

//     const preloadPromises = imageSources.map((src) => {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.src = src;

//         img.onload = () => {
//           loadedCount++;
//           setProgress(Math.round((loadedCount / total) * 100));
//           resolve();
//         };

//         img.onerror = () => {
//           console.warn(`Image failed to load: ${src}`);
//           loadedCount++;
//           setProgress(Math.round((loadedCount / total) * 100));
//           resolve(); // never block the user
//         };

//         // Safety timeout (max 4.5s per image)
//         setTimeout(resolve, 4500);
//       });
//     });

//     Promise.all(preloadPromises).then(() => {
//       setAssetsLoaded(true);
//       document.body.style.overflow = "auto"; // unlock scroll
//     });

//     // Cleanup
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   /* ================= SMOOTH SCROLL ================= */
//   useEffect(() => {
//     let ticking = false;

//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           setScrollY(window.scrollY);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", () =>
//       setWindowHeight(window.innerHeight)
//     );

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

// if (!assetsLoaded) {
//     return (
//       <div className="fixed inset-0 bg-[#fff5f1] flex flex-col items-center justify-center z-[9999]">
//         <div className="text-[#b68d33] font-bold text-3xl mb-10 tracking-[4px]">
//           LOADING
//         </div>

//         <div className="w-80 h-1.5 bg-[#f8e4d0] rounded-full overflow-hidden">
//           <div
//             className="h-full bg-gradient-to-r from-[#b68d33] to-[#e8b56d] transition-all duration-300 ease-out"
//             style={{ width: `${progress}%` }}
//           />
//         </div>

//         <p className="mt-4 text-[#b68d33] font-medium text-xl">{progress}%</p>

//         <p className="absolute bottom-12 text-[#c4a06a] text-sm tracking-widest">
//           Please Wait...
//         </p>
//       </div>
//     );
//   }

//   // ================= MAIN UI (only rendered after ALL assets loaded) =================
//   const firstSectionScroll = Math.min(scrollY, windowHeight);


//   return (
//     <div
//       className={`relative  ${open ? "min-h-[700vh]" : "h-screen overflow-hidden"
//         }` }
//     >
//       {/* ================= FIRST SECTION ================= */}
//       <div
//         className="sticky top-0 max-top-[-75px] h-screen w-full overflow-hidden bg-white"
//         style={{ perspective: "1400px" }}
//       >
//         {/* Background */}
//         <img
//           src="/1st bg imjage.svg"
        
//           className="absolute w-full h-full object-contain"
//           style={{...getSection3Style(0), maxBlockSize:"fit-content",}}
//         />

//         {/* Front */}
//         <img
//           src="/1st front.svg"
         
//           className="absolute w-full h-full object-contain"
//            style={getSection3Style(0)}
//         />
//         <img
//           src="/logo 1.svg"
         
//           className="absolute w-[122px] h-[100px] object-contain top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
//         // style={{
//         //   transform: open
//         //     ? `translateY(-${firstSectionScroll * 0.7}px)`
//         //     : "translateY(0px)",
//         //   transition: "transform 0.3s linear",
//         // }}
//          style={getSection3Style(0)}
//         />

//         {/* Bottom */}
//         <img
//           src="/1stbottom.svg"
//           className="absolute w-full h-full object-contain top-[50px]"
        
//           style={{
//             transform: open
//               ? `translateY(-${firstSectionScroll}px)`
//               : "translateY(0px)",
//             // transition: "transform 0.3s linear",
//           }}
          
//         />

//         {/* OPEN BOTTOM */}
//         <img
//     //       src="/openbottom.svg"
//     //       data-aos="fade-up"
//     //  data-aos-duration="3000"
//     //       className="absolute w-full h-[88vh]  object-contain z-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
//     //       style={{
//     //         transform: open ? "translateY(700px)" : "translateY(0px)",
//     //       }}


//      src="/openbottom.svg"
   
//     className="absolute w-full h-[88vh] object-contain z-10
//     transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
//     style={{
//       transform: open ? "translateY(700px)" : "translateY(0px)",
//     }}
//         />

//         {/* OPEN UP (3D FLIP) */}
//         <div className="absolute inset-0 z-20 cursor-pointer">
//           <img
//     //         src="/openup.svg"
//     //        data-aos="fade-down"
//     //  data-aos-easing="ease-in-sine"
//     //  data-aos-duration="3000"
//     //         onClick={() => setOpen(true)}
//     //         className="w-full h-[88vh]  object-contain "
//     //         style={{
//     //           transform: open ? "rotateX(-170deg)" : "rotateX(0deg)",
//     //           transformOrigin: "top",
//     //           backfaceVisibility: "hidden",
//     //           maxBlockSize:"fit-content",
//     //           transition:
//     //             "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
//     //           boxShadow: open
//     //             ? "0px 40px 60px rgba(0,0,0,0.4)"
//     //             : "none",
//     //         }}
//      src="/openup.svg"
      
//       onClick={() => setOpen(true)}
//       className="w-full h-[88vh] object-contain"
//       style={{
//         transform: open ? "rotateX(-170deg)" : "rotateX(0deg)",
//         transformOrigin: "top",
//         backfaceVisibility: "hidden",
//         transition:
//           "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
//       }}
//           />

//         </div>
//       </div>

//       {/* ================= OTHER SECTIONS ================= */}
//       {open && (
//         <>
//           {/* SECTION 2 */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               width: "100%",
//             }}
//              data-aos="fade-up"
//     data-aos-duration="300"
//           >
           
//            <div className="h-[88vh]  w-full  bg-[#5b3525] relative overflow-hidden">
//               {!section2Loaded && (
//                 <div className="absolute inset-0 flex items-center justify-center text-white">
//                   Loading...
//                 </div>
//               )}

//              <img
//   src="/slidesecond.svg"
//   loading="lazy"
//   data-aos="fade-up"
//     data-aos-duration="900"
//   onLoad={() => setSection2Loaded(true)}
//   className={`w-full h-screen  absolute 
//    top-[-36px] xs:top-[-36px] sm:top-[-27px] 
//     transition-opacity duration-500 
//     ${section2Loaded ? "opacity-100" : "opacity-0"}
//   `}
// />
//               <div className=" flex items-center justify-center bg-[#5b3525] px-6">
//                 <div className="max-w-[380px] text-center text-[#f2c46d] mt-[84px] ">

//                   {/* Parents */}
//                   <h2 className="text-l md:text-xl font-semibold leading-tight "  data-aos="fade-up"
//     data-aos-duration="1200" 
// >
//                     Sandhya & <br /> Anil Bahadure
//                   </h2>

//                   {/* Sub text */}
//                   <p className="mt-[3px] text-sm leading-relaxed text-[#f6d38b]" data-aos="fade-up"
//     data-aos-duration="1230">
//                     Await your presence for <br />
//                     the wedding celebrations <br />
//                     of their daughter
//                   </p>

//                   {/* Bride Name */}
//                   <h1 className="mt-[14px] text-4xl font-bold tracking-wide" data-aos="fade-up"
//     data-aos-duration="1260">
//                     Shreya
//                   </h1>

//                   {/* With */}
//                   <p className="mt-[4px] text-xl text-[#f6d38b]" data-aos="fade-up"
//     data-aos-duration="1280">
//                     with
//                   </p>

//                   {/* Groom Name */}
//                   <h1 className="text-4xl font-bold tracking-wide" data-aos="fade-up"
//     data-aos-duration="1290">
//                     Naivedya
//                   </h1>

//                   {/* Son of */}
//                   <p className="mt-6 text-sm text-[#f6d38b]" data-aos="fade-up"
//     data-aos-duration="1300">
//                     Son of
//                   </p>

//                   {/* Father */}
//                   <h2 className="text-l md:text-xl font-semibold" data-aos="fade-up"
//     data-aos-duration="1300">
//                     Kamlesh Joshi
//                   </h2>

//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* SECTION 3 */}
//           <div
//             ref={section3Ref}
//             className="h-[88vh] w-full relative overflow-hidden"
//           >
//             <img
//               src="/3rd slide bg.svg"
//               loading="lazy"
//               className="w-full h-full object-contain"
//               data-aos="fade-up"
//             />

//             <img
//               src="/3rd slide top.svg"

//               className={`absolute w-full h-[88vh] object-contain top-[-279px] fade-up ${visible ? "show" : ""}`}
//               style={{ transitionDelay: "0.1s" }}
//             />

//             <img
//               src="/3rd slide second.svg"
//               className="absolute w-full h-[88vh] object-contain top-[108px]"
//               style={getSection3Style(0)}
//             />

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

//             <img
//               src="/3rd slide bottom.svg"
//               className="absolute w-full h-[88vh] object-contain top-[276px]"
//               style={{
//                 transform: scrollY < section3Start
//                   ? "translateY(0px)"
//                   : `translateY(${-section3Progress * windowHeight}px)`,
//                 opacity: scrollY < section3Start
//                   ? 1
//                   : 1 - section3Progress, // fade out as scroll progresses
//                 transition: "transform 0.1s linear, opacity 0.1s linear"
//               }}
//             />

//           </div>

//           {/* SECTION 4 */}
//           <div className="relative h-[400vh] w-full">
//             <div className="sticky top-0 h-[88vh] w-full">
//               <h2 className="absolute top-[7%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#f3c53c] text-4xl font-bold z-10">Events</h2>
//               <img
//                 src="bg 4 section.svg"
//                 loading="lazy"
//                 style={{ maxBlockSize:"fit-content", }}
//                 className="absolute w-full h-full object-contain"
//               />



//               <>
//                 <div
//   className={`absolute inset-0 flex items-center justify-center 
//   transition-all duration-700 ease-out
//   ${activeIndex === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
//   `}
//   style={getStyle(0)}
// >
//                   <img
//                     src="/section 4 1.svg"
//                     className="absolute w-full h-[100vh] object-contain"
//                      data-aos="fade-up"
//     data-aos-duration="1200"

//                   />
//                   <div className=" flex items-center justify-center  px-6"  data-aos="fade-up"
//     data-aos-duration="1200">
//                     <div className="max-w-[380px] text-center  mt-[52px] z-10">
//                       <p className="text-lg text-brown-700">Day 1</p>
//                       <p className="text-lg text-brown-700">03/05/26</p>

//                       <h2 className="text-2xl font-semibold text-orange-700 mt-[-4px]">
//                         Paritran
//                       </h2>
//                       <p className="text-md text-orange-700">11 am</p>

//                       <h2 className="text-2xl font-semibold text-green-700 mt-[-6px]">
//                         Mehendi
//                       </h2>
//                       <p className="text-md text-green-700">1 pm onwards</p>

//                       <p className="text-md text-brown-700 mt-4">@Home</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute inset-0 flex items-center justify-center" style={getStyle(1)} >
//                   <img
//                     src="/section 4 2.svg"
//                     className="absolute w-full h-[100vh] object-contain"
//                      data-aos="fade-up"
//     data-aos-duration="1200"

//                   />
//                   <div className=" flex items-center justify-center  px-6"  data-aos="fade-up"
//     data-aos-duration="1200">
//                     <div className="max-w-[380px] text-center  mt-[20px] z-10">
//                       <p className="text-md text-brown-700">Day 2</p>
//                       <p className="text-md text-brown-700">04/05/26</p>

//                       <h2 className="text-lg font-semibold text-[#c200b9] mt-[-2px]">
//                         Carnival Haldi<br /> Lunch
//                       </h2>
//                       <p className="text-md mt-[-10px] text-[#c200b9]">12 pm</p>

//                       <h2 className="text-lg font-semibold text-green-700 mt-[6px]">
//                         High Tea
//                       </h2>
//                       <p className="text-md text-green-700">5 pm </p>

//                       <p className="text-md text-brown-700 mt-2">@Mangli Lake <br /> Farm</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute inset-0 flex items-center justify-center" style={getStyle(2)}>
//                   <img
//                     src="/section 4 3.svg"
//                     className="absolute w-full h-[100vh] object-contain"
//                      data-aos="fade-up"
//     data-aos-duration="1200"

//                   />
//                   <div className=" flex items-center justify-center  px-6"  data-aos="fade-up"
//     data-aos-duration="1200">
//                     <div className="max-w-[380px] text-center  mt-[20px] z-10">
//                       <p className="text-lg text-brown-700">Day 2</p>
//                       <p className="text-lg text-brown-700">04/05/26</p>

//                       <h2 className="text-2xl font-bold text-[#2b2b9a] mt-[-4px]">
//                         Sangeet
//                       </h2>
//                       <p className="text-lg text-[#2b2b9a]">7 pm onwards</p>

                      

//                       <p className="text-lg text-brown-700 mt-2">@Mangli Lake <br /> Farm</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute inset-0 flex items-center justify-center" style={getStyle(3)}>
//                   <img
//                     src="/section 4 3.svg"
//                     className="absolute w-full h-[100vh] object-contain"
//                      data-aos="fade-up"
//     data-aos-duration="1200"

//                   />
//                   <div className=" flex items-center justify-center  px-6"  data-aos="fade-up"
//     data-aos-duration="1200">
//                     <div className="max-w-[380px] text-center  mt-[20px] z-10">
//                       <p className="text-lg text-brown-700">Day 3</p>
//                       <p className="text-lg text-brown-700">05/05/26</p>

//                       <h2 className="text-2xl font-bold text-[#cc4949] mt-[-4px]">
//                        Buddhist <br/> Wedding
//                       </h2>
//                       <p className="text-lg text-orange-700">12 pm onward</p>

                      

//                       <p className="text-lg text-brown-700 mt-2">@Mangli Lake <br /> Farm</p>
//                     </div>
//                   </div>
//                 </div>
//               </>
             
//             </div>
//           </div>

//           {/* SECTION 5 */}
//         <div className="h-[88vh] w-full relative flex flex-col items-center justify-center text-center" data-aos="fade-up"
//     data-aos-duration="1200">

//   {/* Background SVG */}
//   <img
//     src="/section 5 final screen.svg"
//     loading="lazy"
//     className="absolute w-full h-full object-contain"
//     alt="Venue Background"
//   />

//   {/* Content */}
//   <div className="relative top-[-93px] z-10 flex flex-col items-center w-full">

//     {/* Venue Title */}
//     <h2 className="text-4xl font-serif text-[#1f2a5a] mb-2" data-aos="fade-up"
//     data-aos-duration="1200">
//       Venue
//     </h2>

//     {/* Address */}
//     <p className="text-lg text-[#1f2a5a] leading-relaxed mb-8" data-aos="fade-up"
//     data-aos-duration="1200">
//       Mangli Lake Farm,<br />
//       Near Champa (2km), Umred Road,<br />
//       Nagpur, Maharashtra 441204
//     </p>

//     {/* Responsive Clickable Map */}
//     <div className="w-[50%] max-w-[400px] h-[120px] rounded-lg overflow-hidden shadow-xl mb-8" data-aos="fade-up"
//     data-aos-duration="1200">
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1813833139236!2d79.21359369999999!3d20.985365100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b06250837d09%3A0x1e737c4de53c6add!2sMangli%20Lake%20Farm!5e0!3m2!1sen!2sin!4v1772619329004!5m2!1sen!2sin"
//         className="w-full h-full"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="Mangli Lake Farm Location"
//       ></iframe>
//     </div>

//     {/* Get Directions (Design Only - NOT Clickable) */}
//     <div className="bg-[#c94c4c] text-white px-7 py-3 rounded-full text-xl font-semibold shadow-lg" data-aos="fade-up"
//     data-aos-duration="1200">
//       Get Directions
//     </div>

//   </div>
// </div>

//           {/* FINAL */}
//  <div
//       className="h-[88vh] w-full relative flex items-center justify-center text-center"
//       data-aos="fade-up"
//       data-aos-duration="1200"
//     >
//       {/* Background SVG */}
//       <img
//         src="/final.svg"
//         loading="lazy"
//         className="absolute w-full h-full object-contain"
//         alt="Countdown Background"
        
//       />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center top-[-67px">

//         {/* Title */}
//         <h2 className="text-4xl font-bold text-[#f3c178] mb-8"  data-aos="fade-up"
//       data-aos-duration="1200">
//           The Countdown Begins
//         </h2>

//         {/* Timer Box */}
//         <div className="bg-[#1e2250] text-white px-8 py-2 rounded-full text-xl font-semibold shadow-lg mb-8 tracking-widest"  data-aos="fade-up"
//       data-aos-duration="1200">
//           {timeLeft.days} D&nbsp;&nbsp;
//           {timeLeft.hours} H&nbsp;&nbsp;
//           {timeLeft.minutes} M
//         </div>

//         {/* Subtitle */}
//         <p className="text-white text-md max-w-md leading-relaxed"  data-aos="fade-up"
//       data-aos-duration="1200">
//           One love, one promise,<br />
//           one celebration — with you.
//         </p>

//       </div>
//     </div>
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
  const imageRef = useRef(null);

  const section1SentinelRef = useRef(null);















  

  const [open, setOpen] = useState(false);
  const [envelopeAnimDone, setEnvelopeAnimDone] = useState(false);
  const [section2Loaded, setSection2Loaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [visible, setVisible] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const targetDate = new Date("2026-05-05T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    return { days, hours, minutes };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Only critical envelope images are preloaded; rest kick off in background
  const criticalImages = ["/openup.svg", "/openbottom.svg"];
  const lazyImages = [
    "/1st bg imjage.svg", "/1st front.svg", "/logo 1.svg", "/1stbottom.svg",
    "/slidesecond.svg", "/3rd slide bg.svg", "/3rd slide top.svg",
    "/3rd slide second.svg", "/3rd slide4.svg", "/3rd slide3.svg",
    "/3rd slide bottom.svg", "/bg 4 section.svg", "/section 4 1.svg",
    "/section 4 2.svg", "/section 4 3.svg", "/section 5 final screen.svg", "/final.svg",
  ];

  // Scroll helpers
  const section3Start = section3Ref.current?.offsetTop || 0;
  const section3Height = windowHeight * 2;
  const section3Raw = scrollY - section3Start;
  const section3Scroll = Math.max(0, Math.min(section3Raw, section3Height));
  const section3Progress = section3Scroll / windowHeight;

  const getSection3Style = (index) => {
    if (scrollY < section3Start) return { transform: "translateY(0px)" };
    if (index === 0) return { transform: `translateY(${-section3Progress * windowHeight}px)` };
    if (index === 1) return { transform: `translateY(${windowHeight - section3Progress * windowHeight}px)` };
    return { transform: "translateY(0px)" };
  };

  const sectionStart = windowHeight * 3;
  const raw = scrollY - sectionStart;
  const step = windowHeight;
  const scrollClamped = Math.max(0, Math.min(raw, step * 4));
  const activeIndex = Math.floor(scrollClamped / step);
  const progressVal = (scrollClamped % step) / step;

  const getStyle = (index) => {
    if (index === activeIndex) return { transform: `translateY(${-progressVal * windowHeight}px)` };
    if (index === activeIndex + 1) return { transform: `translateY(${windowHeight - progressVal * windowHeight}px)` };
    if (index < activeIndex) return { transform: `translateY(${-windowHeight}px)` };
    return { transform: `translateY(${windowHeight}px)` };
  };

  // Parallax for sectionRef
  useEffect(() => {
    let current = 0;
    let target = 0;
    let isVis = false;

    const observer = new IntersectionObserver(
      ([entry]) => { isVis = entry.isIntersecting; },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleScroll = () => {
      if (!sectionRef.current || !isVis) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;
      const prog = Math.max(0, Math.min((wh - rect.top) / wh, 1));
      target = prog * 40;
    };

    const animate = () => {
      if (isVis) {
        current += (target - current) * 0.08;
        if (imageRef.current) imageRef.current.style.transform = `translateY(${current}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animate();
    return () => { window.removeEventListener("scroll", handleScroll); observer.disconnect(); };
  }, []);

  useEffect(() => { AOS.init({ duration: 800, once: false }); }, []);

  // Preload only envelope images; lazy images load in background
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    document.body.style.overflow = "hidden";

    let loadedCount = 0;
    const total = criticalImages.length;

    const preloadPromises = criticalImages.map((src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        const done = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / total) * 100));
          resolve();
        };
        img.onload = done;
        img.onerror = done;
        setTimeout(resolve, 3000);
      })
    );

    // Kick off lazy images in background without blocking
    lazyImages.forEach((src) => { const img = new Image(); img.src = src; });

    Promise.all(preloadPromises).then(() => {
      setProgress(100);
      setTimeout(() => setAssetsLoaded(true), 200);
    });

    return () => { document.body.style.overflow = "auto"; };
  }, []);

  // Scroll listener
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { setScrollY(window.scrollY); ticking = false; });
        ticking = true;
      }
    };
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ── SENTINEL observer — place HERE, after all state/refs are declared ──
  useEffect(() => {
    if (!section1SentinelRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSection1Covered(entry.isIntersecting);
      },
      { threshold: 1.0 }
    );
    observer.observe(section1SentinelRef.current);
    return () => observer.disconnect();
  }, [envelopeAnimDone]);
  // Envelope open
  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    setTimeout(() => {
      setEnvelopeAnimDone(true);
      document.body.style.overflow = "auto";
    }, 1700);
  };
const fadeUp = (delay) => ({
  opacity: open ? 1 : 0,
  transform: open ? "translateY(0px)" : "translateY(40px)",
  transition: "opacity 1s ease, transform 1s ease",
  transitionDelay: `${delay}s`,
});
  if (!assetsLoaded) {
    return (
      <div
        className="fixed inset-0 flex flex-col items-center justify-center z-[9999]"
        style={{ background: "linear-gradient(160deg,#fff8f0,#fdecd8,#f9dfc8)" }}
      >
        <p className="text-[#b68d33] font-bold text-2xl mb-8 tracking-[4px] uppercase"> Wedding Loading</p>
        <div className="w-64 h-1.5 bg-[#f8e4d0] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%`, background: "linear-gradient(90deg,#b68d33,#e8b56d)" }}
          />
        </div>
        <p className="mt-3 text-[#b68d33] font-medium text-lg">{progress}%</p>
        <p className="absolute bottom-10 text-[#c4a06a] text-xs tracking-widest uppercase">Please Wait…</p>
      </div>
    );
  }

  const firstSectionScroll = Math.min(scrollY, windowHeight);

  return (
    <>
      <style>{`
        /* ── 3D stage: perspective on parent, flat children by default ── */
        .env-stage {
          perspective: 1000px;
          perspective-origin: 50% 0%;   /* hinge at the very top */
          transform-style: preserve-3d;
        }

        /*
         * TOP FLAP
         * The SVG sits naturally flat (facing viewer).
         * transformOrigin "top center" = hinge at envelope's top edge.
         * rotateX(-175deg):
         *   – Negative X rotates the BOTTOM of the flap AWAY from the viewer first,
         *     so the flap folds OUTWARD / UPWARD — like a real envelope lid opening.
         *   – 175deg (not 180) leaves a tiny gap so the backface never fully faces us.
         */
        .env-flap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          transform-origin: top center;
          transform: rotateX(0deg);
          transition: transform 2000ms cubic-bezier(0.4, 0, 0.2, 1);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          will-change: transform;
          cursor: pointer;
          z-index: 30;
        }
        .env-flap.opened {
          transform: rotateX(175deg);
        }

        /*
         * BOTTOM HALF
         * Slides straight down (translateY) out of viewport.
         * 200ms delay so flap starts first.
         */
       .env-body {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  /* 🔥 Hinge at bottom */
  transform-origin: bottom center;

  transform: rotateX(0deg);
  transition: transform 3000ms cubic-bezier(0.4, 0, 0.2, 1);

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: transform;

  z-index: 20;
  pointer-events: none;
}

.env-body.opened {
  /* 🔥 Negative = top moves toward viewer */
  transform: rotateX(-175deg);
}
          


        /* Subtle shimmer on the flap before tap */
        .env-flap::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.22) 50%, transparent 62%);
          background-size: 220% 100%;
          animation: shimmer-move 3.2s linear infinite;
        }
        @keyframes shimmer-move {
          0%   { background-position: 220% center; }
          100% { background-position: 220% center; }
        }

        /* Tap hint */
        @keyframes tap-float {
          0%, 100% { transform: translateX(-50%) translateY(0);   opacity: 0.55; }
          50%       { transform: translateX(50%) translateY(-9px); opacity: 1; }
        }
        .tap-hint {
          position: absolute;
          top: 65%;
          left: 40%;
          // transform: translateX(50%);
          z-index: 40;
          pointer-events: none;
          // animation: tap-float 2s ease-in-out infinite;
          text-align: center;
        }
        .tap-hint-label {
          display: block;
          color: #b68d33;
          font-size: 10px;
          letter-spacing: 3.5px;
          font-weight: 900;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .tap-hint-bar {
          margin: 7px auto 0;
          width: 1px;
          height: 20px;
          background: linear-gradient(to bottom, #b68d33, transparent);
        }
      `}</style>

      <div className={`relative ${open && envelopeAnimDone ? "min-h-[700vh]" : "h-screen overflow-hidden"}`}>

        {/* ══════════════════════════════════════════
            STICKY FIRST SECTION + ENVELOPE ON TOP
        ══════════════════════════════════════════ */}
        <div
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ background: "linear-gradient(160deg,#fff8f0 0%,#fdecd8 55%,#f5d5b8 100%)" }}
      
        >








<img
  src="/1st bg imjage.svg"
  className="absolute inset-0 w-full h-full object-cover"
  style={{ ...getSection3Style(0), ...fadeUp(0),opacity: open ? 1 : 0, }}
  alt=""
/>

<img
  src="/1st front.svg"
  className="absolute inset-0 w-full h-full object-cover"
  style={{ ...getSection3Style(0), ...fadeUp(1) ,opacity: open ? 1 : 0, }}
  alt=""
  
/>

<img
  src="/logo 1.svg"
  className="absolute object-contain"
  style={{
    width: "clamp(80px, 22vw, 122px)",
    height: "auto",
    top: "50%",
    left: "50%",
    transform: open
      ? "translate(-50%, -50%) translateY(0)"
      : "translate(-50%, -50%) translateY(40px)",
    opacity: open ? 1 : 0,
    transition: "opacity 1.4s ease, transform 1.5s ease",
    transitionDelay: "1.5s",
   
  }}
  alt="Logo"
/>

<img
  src="/1stbottom.svg"
  className="absolute w-full object-cover"
 
   style={{
              bottom:"-11px",
              opacity: open ? 1 : 0,
              transition: "opacity 1.4s ease 1.5s",
              transform: open ? `translateY(-${firstSectionScroll}px)` : "translateY(0px)",
            }}
  alt=""
/>

















          {/* ── ENVELOPE ── */}
          <div
            className="env-stage absolute inset-0 w-full h-full"
            style={{ pointerEvents: open ? "none" : "auto" }}
          >
            {/* Bottom body — slides down */}
            <div className={`env-body${open ? " opened" : ""}`}>
              <img
                src="/openbottom.svg"
                className="w-full h-full object-cover"
                // eslint-disable-next-line react/no-unknown-property
                fetchpriority="high"
                alt=""
                draggable={false}
              />
            </div>

            {/* Top flap — folds outward/upward */}
            <div
              className={`env-flap${open ? " opened" : ""}`}
              onClick={handleOpen}
              role="button"
              aria-label="Open invitation"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleOpen()}
            >
              <img
                src="/openup.svg"
                className="w-full h-full object-cover"
                // eslint-disable-next-line react/no-unknown-property
                fetchpriority="high"
                alt=""
                draggable={false}
              />
            </div>
          </div>

          {/* Tap hint */}
          {!open && (
            <div className="tap-hint">
              <span className="tap-hint-label">Tap to Open</span>
              <div className="tap-hint-bar" />
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════════
            REST OF SECTIONS
        ══════════════════════════════════════════ */}
        {open && envelopeAnimDone && (
          <>
            {/* SECTION 2 */}
            <div  className="w-full">
              <div className="h-screen w-full bg-[#5b3525] relative overflow-hidden">
                {!section2Loaded && (
                  <div className="absolute inset-0 flex items-center justify-center text-white text-sm">Loading…</div>
                )}
                <img
                  src="/slidesecond.svg"
                  loading="lazy"
                  onLoad={() => setSection2Loaded(true)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${section2Loaded ? "opacity-100" : "opacity-0"}`}
                  alt=""
                />
                <div className="relative flex items-center justify-center h-full px-6">
                  <div className="max-w-[340px] w-full text-center text-[#f2c46d] absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2" data-aos="fade-up" data-aos-duration="1200">
                    <h2 className="text-lg md:text-xl font-semibold leading-tight" data-aos="fade-up" data-aos-duration="1200">
                     Mrs. Sandhya &amp; <br /> Mr.Anil Bahadure
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-[#f6d38b]" data-aos="fade-up" data-aos-duration="1230">
                      Await your presence for <br />the wedding celebrations <br />of their daughter
                    </p>
                    <h1 className="mt-3 text-4xl font-bold tracking-wide" data-aos="fade-up" data-aos-duration="1260">Shreya</h1>
                    <p className="mt-1 text-xl text-[#f6d38b]" data-aos="fade-up" data-aos-duration="1280">with</p>
                    <h1 className="text-4xl font-bold tracking-wide" data-aos="fade-up" data-aos-duration="1290">Naivedya</h1>
                    <p className="mt-5 text-sm text-[#f6d38b]" data-aos="fade-up" data-aos-duration="1300">Son of</p>
                    <h2 className="text-lg md:text-xl font-semibold" data-aos="fade-up" data-aos-duration="1300">Mrs. Kamlesh Joshi & <br/> Late Mr. Mukul Joshi</h2>
                  </div>
                </div>
                 {/* <img
                src="/3rd slide top.svg"  className="absolute w-full object-cover"
 
   style={{
              top:"101px",
              opacity: open ? 1 : 0,
              transition: "opacity 1.4s ease 1.5s",
              
              transform: open ? `translateY(-${firstSectionScroll}px)` : "translateY(0px)",
            }}
            data-aos="fade-up" data-aos-duration="2000"
  alt=""
              />             */}
              </div>
            </div>
       <div
              ref={section1SentinelRef}
              style={{ height: "1px" }}
            />

  {/* ── BRIDGE IMAGE ── */}
{(() => {
  // Start fading bridge much earlier — as soon as Section 2 appears
  const bridgeStart = windowHeight * 1.1;
  const bridgeRaw = scrollY - bridgeStart;
  const progress = Math.max(0, Math.min(bridgeRaw / (windowHeight * 0.6), 1));

  return (
    <div
      style={{
        position: "relative",
        top: "-183px",
        zIndex: 20,
        pointerEvents: "none",
        opacity: 1,
        // Fade UP from below — starts 30px below, rises to natural position
        transform: `translateY(${(1 - progress) * 30}px)`,
        transition: "opacity 1s linear, transform 1s linear",
        marginBottom: "-267px",
        height:"320px"
      }}
    >
      <img
        src="/3rd slide top.svg"
        loading="lazy"
        className="w-full object-cover"
        style={{ height: "300px", display: "block" }}
        alt=""
      />
    </div>
  );
})()}

{/* SECTION 3 — starts behind the bridge image */}
<div
  ref={section3Ref}
  className=" h-screen w-full relative overflow-hidden"
  style={{ zIndex: 10 }}
  data-aos="fade-up" data-aos-duration="500"
  
>
  <div className="sticky top-0 h-screen w-full overflow-hidden">
  {/* Remove data-aos="fade-up" from bg — it should always be visible */}
  <img
    src="/3rd slide bg.svg"
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover"
    alt=""
  />
  {/* rest unchanged... */}
  <img
    src="/3rd slide second.svg" loading="lazy"
    className="absolute w-full h-full object-cover top-[40px]  fade-up"
    style={getSection3Style(0)} alt=""
  />
  <img
    src="/3rd slide4.svg" loading="lazy"
    className={`absolute w-full h-full object-cover top-[100px] fade-up ${visible ? "show" : ""}`}
    style={{ transitionDelay: "0.3s" }} alt=""
  />
  <img
    src="/3rd slide3.svg" loading="lazy"
    className={`absolute w-full h-full object-cover top-[100px] fade-up ${visible ? "show" : ""}`}
    style={{ transitionDelay: "0.4s" }} alt=""
  />
  <img
    src="/3rd slide bottom.svg" loading="lazy"
    className="absolute w-full h-full object-cover top-[276px]"
    style={{
      transform: scrollY < section3Start ? "translateY(0px)" : `translateY(${-section3Progress * windowHeight}px)`,
      opacity: scrollY < section3Start ? 1 : 1 - section3Progress,
      transition: "transform 0.1s linear, opacity 0.1s linear",
    }}
    alt=""
  />
  </div>
</div>
         

            {/* SECTION 4 — Events */}
            <div className="relative h-[500vh] w-full">
              <div className="sticky top-0 h-screen w-full overflow-hidden">
               
                <img src="/bg 4 section.svg" loading="lazy" className="absolute inset-0 w-full h-full object-cover" alt="" />
 <h2 className="absolute top-[6%] left-1/2 -translate-x-1/2 text-[#f3c53c] text-3xl font-bold ">Events</h2>
                {[
                  {
                    img: "/section 4 1.svg",
                    node: (
                      <div className="max-w-[300px] w-full text-center mt-10 z-10">
                        <p className="text-base font-medium text-[#5c3a1e]">Day 1 <br/> 03/05/26</p>
                        <h2 className="text-2xl font-semibold text-orange-700 mt-1">Paritran</h2>
                        <p className="text-sm text-orange-700">11 am</p>
                        <h2 className="text-2xl font-semibold text-green-700 mt-1">Mehendi</h2>
                        <p className="text-sm text-green-700">1 pm onwards</p>
                        <p className="text-sm text-[#5c3a1e] mt-3">@Home</p>
                      </div>
                    ),
                  },
                  {
                    img: "/section 4 2.svg",
                    node: (
                      <div className="max-w-[300px] w-full text-center z-10">
                        <p className="text-base font-medium text-[#5c3a1e]">Day 2 <br/> 04/05/26</p>
                        <h2 className="text-xl font-semibold text-[#c200b9] mt-1">Carnival Haldi<br />Lunch</h2>
                        <p className="text-sm text-[#c200b9]">12 pm</p>
                        <h2 className="text-xl font-semibold text-green-700 mt-2">High Tea</h2>
                        <p className="text-sm text-green-700">5 pm</p>
                        <p className="text-sm text-[#5c3a1e] mt-2">@Mangli Lake Farm</p>
                      </div>
                    ),
                  },
                  {
                    img: "/section 4 3.svg",
                    node: (
                      <div className="max-w-[300px] w-full text-center z-10">
                        <p className="text-base font-medium text-[#5c3a1e]">Day 2 <br/> 04/05/26</p>
                        <h2 className="text-2xl font-bold text-[#2b2b9a] mt-1">Sangeet</h2>
                        <p className="text-base text-[#2b2b9a]">7 pm onwards</p>
                        <p className="text-sm text-[#5c3a1e] mt-2">@Mangli Lake Farm</p>
                      </div>
                    ),
                  },
                  {
                    img: "/section 4 3.svg",
                    node: (
                      <div className="max-w-[300px] w-full text-center z-10">
                        <p className="text-base font-medium text-[#5c3a1e]">Day 3 <br/> 05/05/26</p>
                        <h2 className="text-2xl font-bold text-[#cc4949] mt-1">Buddhist<br />Wedding</h2>
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
                        <p className="text-base font-medium text-[#5c3a1e]">Day 3 <br/> 05/05/26</p>
                        <h2 className="text-2xl font-semibold text-orange-700 mt-1">Barat</h2>
                        <p className="text-sm text-orange-700">6pm</p>
                        <h2 className="text-2xl font-semibold text-green-700 mt-1">Warmala & <br/>Reception</h2>
                        <p className="text-sm text-green-700">7pm onwards</p>
                         <h2 className="text-2xl font-semibold text-[#c200b9] mt-1">Hindu Wedding</h2>
                        <p className="text-sm text-[#5c3a1e] mt-3">@Mangli Lake Farm</p>
                      </div>
                    ),
                  },
                ].map((slide, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 flex items-center justify-center"
                    style={getStyle(i)}
                  >
                    <img src={slide.img} loading="lazy" className="absolute inset-0 w-full h-full object-cover" alt="" />
                    <div className="relative flex items-center justify-center w-full h-full px-6">
                      {slide.node}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5 — Venue */}
            <div
              className="h-screen w-full relative flex flex-col items-center justify-center text-center overflow-hidden"
            
            >
              <img src="/section 5 final screen.svg" loading="lazy" className="absolute inset-0 w-full h-full object-cover" alt="" />
              <div className="relative z-10 flex flex-col items-center w-full px-4" style={{ marginTop: "-80px" }}>
                <h2 className="text-4xl font-serif text-[#1f2a5a] mb-2" data-aos="fade-up">Venue</h2>
                <p className="text-base text-[#1f2a5a] leading-relaxed mb-6" data-aos="fade-up">
                  Mangli Lake Farm,<br />
                  Near Champa (2km), Umred Road,<br />
                  Nagpur, Maharashtra 441204
                </p>
                <div className="w-full max-w-[320px] h-[130px] rounded-xl overflow-hidden shadow-xl mb-6" data-aos="fade-up">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1813833139236!2d79.21359369999999!3d20.985365100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b06250837d09%3A0x1e737c4de53c6add!2sMangli%20Lake%20Farm!5e0!3m2!1sen!2sin!4v1772619329004!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
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
                  className="bg-[#c94c4c] text-white px-8 py-3 rounded-full text-base font-semibold shadow-lg active:scale-95 transition-transform"
                  data-aos="fade-up"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* FINAL — Countdown */}
            <div
              className="h-screen w-full relative flex items-center justify-center text-center overflow-hidden"
            
            >
              <img src="/final.svg" loading="lazy" className="absolute inset-0 w-full h-full object-cover" alt="" />
              <div className="relative z-10 flex flex-col items-center px-4" style={{ marginTop: "-60px" }}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#f3c178] mb-6" data-aos="fade-up">
                  The Countdown <br/>Begins
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