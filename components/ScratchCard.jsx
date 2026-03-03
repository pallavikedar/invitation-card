"use client";

import { useState } from "react";
import ScratchCard from "next-scratchcard";

export default function ScratchReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#c7745a] px-4">
      <div className="w-[360px] text-center">

        {/* Heading */}
        <h1 className="text-5xl font-serif text-[#f5d76e] font-semibold">
          Reveal
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-xl text-[#4a2a1d] leading-relaxed">
          Scratch to discover <br /> the wedding date
        </p>

        {/* Scratch Area */}
        <div className="relative mt-10 flex justify-center">

          {/* Hidden Date */}
          <div className="absolute bg-[#7b2f2f] text-[#f5d76e] text-3xl font-bold px-10 py-3 rounded-full tracking-widest shadow-md">
            05 / 26
          </div>

          {!revealed && (
            <ScratchCard
              width={260}
              height={90}
              image="/3rd slide3.svg" // must exist in public folder
              finishPercent={40}
              onComplete={() => setRevealed(true)}
            />
          )}

        </div>
      </div>
    </div>
  );
}