import { useState } from "react";

export const IpadPro = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [viewMode, setViewMode] = useState("slider");

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] relative"
      data-model-id="1:3196"
    >
      <div className="absolute top-[336px] left-1.5 w-[844px] h-[609px] rotate-[-90.00deg]">
        <img
          className="absolute top-[-73px] left-[159px] w-[609px] h-[755px] rotate-[90.00deg] aspect-[0.81]"
          alt="Element"
          src="/img/4.png"
        />

        <img
          className="absolute top-[-227px] left-[calc(50.00%_-_106px)] w-[294px] h-[755px] rotate-[90.00deg]"
          alt="Gemini generated"
          src="/img/gemini-generated-image-4.png"
        />

        <div className="top-[-124px] left-[423px] w-0.5 h-[841px] absolute bg-[#fff8f1] rotate-[90.00deg]" />

        <div className="top-[264px] left-[-261px] w-[609px] h-[81px] absolute bg-[#fff8f1] rotate-[90.00deg]" />

        <div className="absolute top-[109px] left-[11px] h-[85px] rotate-[90.00deg] text-[#4c3628] text-[31.1px] tracking-[2.18px] leading-[85.0px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-center whitespace-nowrap">
          現在
        </div>

        <div className="absolute top-[399px] left-[-89px] h-[85px] rotate-[90.00deg] text-[#4c3628] text-[31.1px] tracking-[2.18px] leading-[85.0px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-center whitespace-nowrap">
          施術を受けた場合
        </div>
      </div>

      <div className="absolute top-[34px] left-[124px] w-[356px] h-[67px] bg-[#ffffff1a] rounded-[32.83px] overflow-hidden shadow-[inset_0px_0px_11.49px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_2.0px_rgba(0,0,0,0.20),inset_-1px_0_2.0px_rgba(0,0,0,0.16)] backdrop-blur-[3.3px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(3.3px)_brightness(100.0%)_saturate(100.0%)]">
        <button
          className="absolute top-[5px] left-[calc(50.00%_-_171px)] w-[175px] h-[58px] flex justify-center rounded-[32.83px] overflow-hidden cursor-pointer"
          onClick={() => setViewMode("sideBySide")}
          aria-label="横並べ表示に切り替え"
        >
          <div className="ml-[-0.7px] w-[67.3px] text-[#999999] text-[17.6px] tracking-[1.23px] leading-[56.9px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-center whitespace-nowrap">
            横並べ
          </div>
        </button>

        <button
          className="absolute top-[5px] left-44 w-[175px] h-[58px] bg-[#0088ffb2] rounded-[32.83px] overflow-hidden backdrop-blur-[3.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(3.2px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_2.0px_rgba(0,0,0,0.20),inset_-1px_0_2.0px_rgba(0,0,0,0.16)] cursor-pointer"
          onClick={() => setViewMode("slider")}
          aria-label="スライドバー表示に切り替え"
        >
          <div className="absolute h-[100.41%] top-0 left-[calc(50.00%_-_68px)] w-[133px] text-white text-[17.6px] tracking-[1.23px] leading-[56.9px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-center whitespace-nowrap">
            スライドバー
          </div>
        </button>
      </div>

      <div className="flex flex-col w-[651px] h-[85px] items-center pt-0 pb-[1.63px] px-[26.04px] absolute top-[1059px] left-[104px]">
        <div className="relative self-stretch w-full h-[4.88px] mt-[-1.63px] ml-[-1.63px] mr-[-1.63px] border-t-[1.63px] [border-top-style:solid] border-[#e6e6e6]" />

        <div className="flex items-center gap-[19.53px] relative flex-1 self-stretch w-full grow">
          <div className="relative flex-1 self-stretch grow">
            <div className="absolute w-full top-[calc(50.00%_-_5px)] left-0 h-2.5 bg-[#78787833] rounded-[4.88px]" />

            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
              className="absolute w-full top-[calc(50.00%_-_19px)] left-0 h-[39px] opacity-0 cursor-pointer z-10"
              aria-label="画像比較スライダー"
            />

            <div
              className="absolute top-[calc(50.00%_-_19px)] h-[39px] flex items-center justify-center pointer-events-none"
              style={{ left: `calc(${sliderValue}% - 26px)` }}
            >
              <div className="mt-[0.9px] h-[39.06px] ml-[-0.9px] w-[1.81px] flex items-center justify-center rounded-[162.75px] rotate-180">
                <div className="mt-[2.3px] h-[40.69px] ml-[0.2px] w-[63.47px] bg-white rounded-[162.75px] shadow-[0px_9.77px_21.16px_#0000001f,0px_0.81px_6.51px_#0000001f]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute top-[calc(50.00%_-_563px)] left-[749px] w-[42px] h-[42px] cursor-pointer"
        aria-label="閉じる"
      >
        <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
          <img
            className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
            alt="Blur"
            src="/img/blur.svg"
          />

          <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

          <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
        </div>

        <div className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] aspect-[1]">
          <img
            className="absolute w-[66.67%] h-[66.67%] top-[13.24%] left-[13.24%]"
            alt="Vector"
            src="/img/vector.svg"
          />
        </div>
      </button>
    </div>
  );
};
