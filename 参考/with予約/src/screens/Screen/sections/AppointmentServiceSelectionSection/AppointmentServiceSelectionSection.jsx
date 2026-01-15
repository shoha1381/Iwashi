import { useState } from "react";

export const AppointmentServiceSelectionSection = () => {
  const [selectedTab, setSelectedTab] = useState("treatment");

  const tabs = [
    { id: "treatment", label: "施術" },
    { id: "business", label: "業務" },
    { id: "vacation", label: "休暇" },
  ];

  return (
    <div className="fixed top-[calc(50.00%_-_274px)] left-[calc(50.00%_-_311px)] w-[622px] h-[548px] bg-white rounded-[25px]">
      <img
        className="absolute w-[100.00%] h-0 top-[41.48%] left-0"
        alt=""
        src="/img/vector-6-1.svg"
      />

      <img
        className="absolute w-[100.00%] h-0 top-[64.47%] left-0"
        alt=""
        src="/img/vector-6-1.svg"
      />

      <button
        type="button"
        className="absolute w-[69.61%] h-[10.77%] top-[24.64%] left-[21.06%] flex bg-white rounded-[11px] border-[1.38px] border-solid border-[#0000001a] cursor-pointer"
        aria-label="三浦梨花を選択"
      >
        <div className="flex items-center justify-center mt-2.5 w-[72px] h-10 ml-[37px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-lg tracking-[0] leading-[39.9px] whitespace-nowrap">
          三浦梨花
        </div>

        <button
          type="button"
          className="mt-3 w-9 h-9 relative ml-[213px] bg-white cursor-pointer"
          aria-label="編集"
        >
          <div className="absolute w-full h-full top-0 left-0 bg-white rounded-[222px] border border-solid border-[#0000001a]" />

          <div className="absolute top-[calc(50.00%_-_13px)] left-[calc(50.00%_-_13px)] w-[26px] h-[26px] aspect-[1]">
            <img
              className="absolute w-[62.94%] h-[62.93%] top-[15.95%] left-[21.12%]"
              alt=""
              src="/img/vector-10.svg"
            />

            <img
              className="absolute w-[53.02%] h-[53.02%] top-[25.86%] left-[21.12%]"
              alt=""
              src="/img/vector-11.svg"
            />
          </div>
        </button>

        <button
          type="button"
          className="mt-4 w-[27.5px] h-[27.5px] relative ml-[26px] cursor-pointer"
          aria-label="展開"
        >
          <img
            className="absolute w-[50.00%] h-[25.00%] top-[35.00%] left-[22.50%]"
            alt=""
            src="/img/icon-1.svg"
          />
        </button>
      </button>

      <button
        type="button"
        className="absolute w-[69.61%] h-[10.77%] top-[70.99%] left-[21.06%] flex gap-9 bg-white rounded-[11px] border-[1.38px] border-solid border-[#0000001a] cursor-pointer"
        aria-label="小顔矯正 / 美顔マッサージ ＋ 首肩矯正を選択"
      >
        <p className="flex items-center justify-center mt-[17px] w-[311px] h-[26px] ml-[37px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-lg tracking-[0] leading-[25.6px] whitespace-nowrap">
          小顔矯正 / 美顔マッサージ ＋ 首肩矯正
        </p>

        <button
          type="button"
          className="mt-4 w-[27.5px] h-[27.5px] relative cursor-pointer"
          aria-label="展開"
        >
          <img
            className="absolute w-[50.00%] h-[25.00%] top-[35.00%] left-[22.50%]"
            alt=""
            src="/img/icon-1.svg"
          />
        </button>
      </button>

      <p className="absolute w-[20.42%] h-[5.11%] top-[85.77%] left-[27.01%] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-transparent text-lg tracking-[0] leading-[28.0px] whitespace-nowrap">
        <span className="text-black">２回目 </span>

        <span className="text-[#0000004c]">計 2 回</span>

        <span className="text-black">{""}</span>
      </p>

      <p className="absolute w-[32.80%] h-[14.60%] top-[45.80%] left-[27.01%] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-transparent text-lg tracking-[0] leading-10">
        <span className="text-black">14:00 </span>

        <span className="text-[#0000004c]">→</span>

        <span className="text-black"> 15:00 </span>

        <span className="text-[#0000004c]">
          60分
          <br />
        </span>

        <span className="text-black">10/6（月）</span>
      </p>

      <img
        className="absolute w-[3.58%] h-[4.64%] top-[27.61%] left-[8.73%]"
        alt=""
        src="/img/icon-2.svg"
        aria-hidden="true"
      />

      <div className="absolute w-[4.42%] h-[5.02%] top-[50.91%] left-[8.36%]">
        <img
          className="absolute w-[83.33%] h-[83.33%] top-[5.83%] left-[5.83%]"
          alt=""
          src="/img/icon-3.svg"
          aria-hidden="true"
        />
      </div>

      <div className="absolute w-[5.53%] h-[6.27%] top-[78.65%] left-[7.88%]">
        <img
          className="absolute w-[50.00%] h-[91.67%] top-[2.17%] left-[23.00%]"
          alt=""
          src="/img/icon-4.svg"
          aria-hidden="true"
        />
      </div>

      <button
        type="button"
        className="absolute w-[7.72%] h-[8.76%] top-[2.92%] left-[2.89%] shadow-[0px_7px_20px_#0000000d] cursor-pointer"
        aria-label="閉じる"
      >
        <img
          className="w-[calc(100%_+_52px)] h-[calc(100%_+_52px)] top-[-26px] left-[-26px] absolute object-cover"
          alt=""
          src="/img/blur.svg"
        />

        <div className="rounded-[296px] absolute w-full h-full top-0 left-0 bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

        <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[296px] backdrop-blur-[3.0px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(3.0px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_2px_rgba(0,0,0,0.20),inset_-1px_0_2px_rgba(0,0,0,0.16)]" />
      </button>

      <button
        type="button"
        className="absolute w-[7.72%] h-[8.76%] top-[2.92%] left-[78.78%] shadow-[0px_7px_20px_#0000000d] cursor-pointer"
        aria-label="削除"
      >
        <img
          className="w-[calc(100%_+_52px)] h-[calc(100%_+_52px)] top-[-26px] left-[-26px] absolute object-cover"
          alt=""
          src="/img/blur-1.svg"
        />

        <div className="rounded-[296px] absolute w-full h-full top-0 left-0 bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

        <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[296px] backdrop-blur-[3.0px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(3.0px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_2px_rgba(0,0,0,0.20),inset_-1px_0_2px_rgba(0,0,0,0.16)]" />
      </button>

      <button
        type="button"
        className="absolute w-[7.72%] h-[8.76%] top-[2.92%] left-[89.39%] flex rounded-[1000px] shadow-[0px_1px_8px_#0000001f,0px_0px_2px_#0000001a] bg-[linear-gradient(0deg,rgba(0,145,255,1)_0%,rgba(0,145,255,1)_100%),linear-gradient(0deg,rgba(153,153,153,1)_0%,rgba(153,153,153,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%)] cursor-pointer"
        aria-label="確認"
      >
        <div className="flex-1 w-12 bg-[#00000001] rounded-[296px] backdrop-blur-[3.0px] backdrop-brightness-[96.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(3.0px)_brightness(96.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_1px_0_0_rgba(255,255,255,0.28),inset_0_-1px_2px_rgba(0,0,0,0.20),inset_-1px_0_2px_rgba(0,0,0,0.16)]" />
      </button>

      <div
        className="absolute w-[51.41%] h-[9.17%] top-[2.74%] left-[21.06%] bg-white rounded-[25.13px] shadow-[0px_7px_20px_#0000000d]"
        role="tablist"
      >
        <div
          className="absolute w-[32.44%] h-[82.98%] top-[8.51%] left-0 bg-[#4cabff] rounded-[25.13px] transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${
              selectedTab === "treatment"
                ? "0%"
                : selectedTab === "business"
                  ? "200%"
                  : "400%"
            })`,
          }}
        />

        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`absolute w-[9.38%] h-[57.69%] top-[21.28%] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[14.9px] tracking-[0] leading-[28.6px] whitespace-nowrap cursor-pointer transition-colors duration-300 ${
              selectedTab === tab.id ? "text-white" : "text-[#999999]"
            }`}
            style={{
              left: `${13.04 + index * 32.44}%`,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <img
        className="absolute w-[5.00%] h-[5.67%] top-[4.38%] left-[90.68%]"
        alt=""
        src="/img/check.svg"
        aria-hidden="true"
      />

      <img
        className="absolute w-[5.00%] h-[5.67%] top-[3.28%] left-[3.22%]"
        alt=""
        src="/img/plus.svg"
        aria-hidden="true"
      />

      <div className="absolute w-[7.56%] h-[8.58%] top-[2.92%] left-[78.94%]">
        <div className="absolute w-[100.00%] h-[100.00%] top-0 left-0 shadow-[0px_7px_20px_#0000000d]">
          <img
            className="w-[calc(100%_+_51px)] h-[calc(100%_+_51px)] top-[-25px] left-[-25px] absolute object-cover"
            alt=""
            src="/img/blur-2.svg"
          />

          <div className="rounded-[289.83px] absolute w-full h-full top-0 left-0 bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

          <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[289.83px] backdrop-blur-[2.9px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.9px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.20),inset_-1px_0_1px_rgba(0,0,0,0.16)]" />
        </div>

        <div className="absolute top-[calc(50.00%_-_11px)] left-[calc(50.00%_-_11px)] w-[22px] h-[22px] aspect-[1]">
          <img
            className="absolute w-[76.00%] h-[100.00%] top-0 left-[12.00%]"
            alt=""
            src="/img/vector-12.svg"
          />

          <img
            className="absolute w-[66.12%] h-[64.43%] top-[35.31%] left-[16.87%]"
            alt=""
            src="/img/vector-13.svg"
          />
        </div>
      </div>
    </div>
  );
};
