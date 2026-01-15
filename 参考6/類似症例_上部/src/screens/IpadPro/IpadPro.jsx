import { useState } from "react";

export const IpadPro = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 1);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 1) % 1);
  };

  return (
    <main
      className="bg-white w-full min-w-[834px] min-h-[1194px] flex items-center justify-center relative"
      data-model-id="1:3619"
      role="main"
      aria-label="Image gallery viewer"
    >
      <img
        className="z-[1] h-[896px] w-[633.59px] aspect-[1.41] object-cover"
        alt="Hinoto"
        src="/img/hinoto-1.png"
      />

      <button
        className="fixed top-[calc(50.00%_+_523px)] left-[765px] w-[42px] h-[42px] z-[2] rotate-[90.00deg] cursor-pointer"
        onClick={handleNext}
        aria-label="Next image"
        type="button"
      >
        <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
          <img
            className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] rotate-[-90.00deg] object-cover"
            alt=""
            src="/img/blur.svg"
            aria-hidden="true"
          />

          <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

          <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
        </div>

        <div className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] aspect-[1]">
          <img
            className="absolute w-[66.67%] h-[66.67%] top-[13.24%] left-[13.24%] rotate-[-90.00deg]"
            alt=""
            src="/img/vector.svg"
            aria-hidden="true"
          />
        </div>
      </button>

      <button
        className="fixed top-[calc(50.00%_+_452px)] left-[765px] w-[42px] h-[42px] z-[3] rotate-[-90.00deg] cursor-pointer"
        onClick={handlePrevious}
        aria-label="Previous image"
        type="button"
      >
        <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
          <img
            className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] rotate-[90.00deg] object-cover"
            alt=""
            src="/img/blur-1.svg"
            aria-hidden="true"
          />

          <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

          <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
        </div>

        <div className="absolute top-[calc(50.00%_-_13px)] left-[calc(50.00%_-_13px)] w-[26px] h-[26px]">
          <img
            className="absolute w-[25.00%] h-[50.00%] top-[35.00%] left-[22.50%] rotate-[90.00deg]"
            alt=""
            src="/img/icon.svg"
            aria-hidden="true"
          />
        </div>
      </button>
    </main>
  );
};
