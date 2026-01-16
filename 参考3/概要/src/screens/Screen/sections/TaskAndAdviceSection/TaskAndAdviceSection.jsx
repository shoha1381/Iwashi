export const TaskAndAdviceSection = () => {
  return (
    <aside
      className="relative w-[101px] h-[834px] mt-[-366.50px] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
      role="complementary"
      aria-label="User profile section"
    >
      <button
        className="absolute top-[calc(50.00%_-_374px)] left-[34px] w-[42px] h-[42px] rotate-[-90.00deg]"
        aria-label="User profile button"
        type="button"
      >
        <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
          <img
            className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
            alt=""
            src="/img/blur.svg"
            role="presentation"
          />

          <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

          <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
        </div>

        <div className="top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] absolute aspect-[1]">
          <img
            className="absolute w-[66.67%] h-[66.67%] top-[13.25%] left-[13.24%]"
            alt="User icon"
            src="/img/vector.svg"
          />
        </div>
      </button>

      <p className="absolute top-[609px] left-[-83px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-transparent text-[26.2px] tracking-[1.84px] leading-[normal]">
        <span className="text-black tracking-[0.48px]">
          三浦梨花&nbsp;&nbsp;{" "}
        </span>

        <span className="text-[#999999] text-[20.8px] tracking-[0.30px]">
          ミウラリカ&nbsp;&nbsp;{" "}
        </span>

        <span className="text-black text-[20.8px] tracking-[0.30px]">様</span>
      </p>
    </aside>
  );
};
