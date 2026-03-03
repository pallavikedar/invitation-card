import { ScratchCard } from "next-scratchcard";

const handleScratchComplete = () => {
  console.log("Scratch completed!");
};

const MyScratchCard = () => (
  <div className="w-full h-[88vh] relative">
    <ScratchCard
      width={window.innerWidth}
      height={window.innerHeight * 0.88}
      brushSize={30}         // adjust size of scratch brush
      finishPercent={40}      // percent to auto complete
      onComplete={handleScratchComplete}
    >
      {/* This is the content/image that gets revealed */}
      <img
        src="/3rd slide3.svg"
        className="w-full h-full object-contain"
      />
    </ScratchCard>
  </div>
);

export default MyScratchCard;