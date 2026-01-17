import { useState } from "react";

export const Element = () => {
  const [selectedTab, setSelectedTab] = useState("業務");
  const [taskContent, setTaskContent] = useState("");

  const tabs = [
    { id: "施術", label: "施術" },
    { id: "業務", label: "業務" },
    { id: "休暇", label: "休暇" },
  ];

  return (
    <div
      className="relative w-[622px] h-[548px] bg-white rounded-[25px]"
      data-model-id="1:2188"
      role="dialog"
      aria-labelledby="task-title"
    >
      <img
        className="absolute w-[100.00%] h-0 top-[41.48%] left-0"
        alt=""
        src="/img/vector-5.svg"
        aria-hidden="true"
      />

      <div className="absolute top-[319px] left-[calc(50.00%_-_259px)] w-[517px] h-[188px] bg-white rounded-[11px] border-[1.38px] border-solid border-[#0000001a]" />

      <div className="w-[32.80%] h-[14.60%] top-[22.45%] left-[27.01%] text-transparent text-lg leading-10 absolute flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium tracking-[0]">
        <time dateTime="2024-10-06T14:00">
          <span className="text-black">14:00 </span>
          <span className="text-[#0000004c]" aria-label="から">
            →
          </span>
          <span className="text-black"> 15:00 </span>
          <span className="text-[#0000004c]">
            60分
            <br />
          </span>
          <span className="text-black">10/6（月）</span>
        </time>
      </div>

      <div
        className="absolute w-[4.42%] h-[5.02%] top-[27.55%] left-[8.36%]"
        aria-label="時計アイコン"
      >
        <img
          className="absolute w-[83.33%] h-[83.33%] top-[5.83%] left-[5.83%]"
          alt=""
          src="/img/icon.svg"
          aria-hidden="true"
        />
      </div>

      <button
        className="absolute w-[7.72%] h-[8.76%] top-[2.92%] left-[2.89%] shadow-[0px_7px_20px_#0000000d]"
        aria-label="閉じる"
        type="button"
      >
        <img
          className="w-[calc(100%_+_52px)] h-[calc(100%_+_52px)] top-[-26px] left-[-26px] absolute object-cover"
          alt=""
          src="/img/blur.svg"
          aria-hidden="true"
        />

        <div className="rounded-[296px] absolute w-full h-full top-0 left-0 bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

        <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[296px] backdrop-blur-[3.0px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(3.0px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_2px_rgba(0,0,0,0.20),inset_-1px_0_2px_rgba(0,0,0,0.16)]" />
      </button>

      <button
        className="absolute w-[7.72%] h-[8.76%] top-[2.92%] left-[89.39%] flex rounded-[1000px] shadow-[0px_1px_8px_#0000001f,0px_0px_2px_#0000001a] bg-[linear-gradient(0deg,rgba(0,145,255,1)_0%,rgba(0,145,255,1)_100%),linear-gradient(0deg,rgba(153,153,153,1)_0%,rgba(153,153,153,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%)]"
        aria-label="確認"
        type="button"
      >
        <div className="flex-1 w-12 bg-[#00000001] rounded-[296px] backdrop-blur-[3.0px] backdrop-brightness-[96.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(3.0px)_brightness(96.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_1px_0_0_rgba(255,255,255,0.28),inset_0_-1px_2px_rgba(0,0,0,0.20),inset_-1px_0_2px_rgba(0,0,0,0.16)]" />
      </button>

      <div
        className="absolute w-[51.41%] h-[9.17%] top-[2.74%] left-[21.06%] bg-white rounded-[25.13px] shadow-[0px_7px_20px_#0000000d]"
        role="tablist"
        aria-label="タスクタイプ選択"
      >
        <div
          className="absolute w-[32.44%] h-[82.98%] top-[8.51%] left-[33.78%] bg-[#4cabff] rounded-[25.13px] transition-all duration-300"
          style={{
            left:
              selectedTab === "施術"
                ? "0.78%"
                : selectedTab === "業務"
                  ? "33.78%"
                  : "66.78%",
          }}
          aria-hidden="true"
        />

        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-[9.38%] h-[57.69%] top-[21.28%] ${
              tab.id === "施術"
                ? "left-[13.04%]"
                : tab.id === "業務"
                  ? "left-[45.48%]"
                  : "left-[77.93%]"
            } ${
              selectedTab === tab.id ? "text-white" : "text-[#999999]"
            } text-[14.9px] leading-[28.6px] whitespace-nowrap absolute flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium tracking-[0] transition-colors duration-300`}
            onClick={() => setSelectedTab(tab.id)}
            role="tab"
            aria-selected={selectedTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            type="button"
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

      <label
        id="task-title"
        htmlFor="task-input"
        className="h-[6.93%] top-[47.45%] left-[calc(50.00%_-_140px)] text-black text-xl text-center leading-[37.9px] whitespace-nowrap absolute flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium tracking-[0]"
      >
        業務の内容を入力してください
      </label>

      <textarea
        id="task-input"
        className="absolute top-[319px] left-[calc(50.00%_-_259px)] w-[517px] h-[188px] bg-white rounded-[11px] border-[1.38px] border-solid border-[#0000001a] p-4 text-black text-base [font-family:'Noto_Sans_JP',Helvetica] resize-none focus:outline-none focus:border-[#4cabff] focus:ring-1 focus:ring-[#4cabff]"
        placeholder=""
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        aria-labelledby="task-title"
        role="textbox"
        aria-multiline="true"
      />

      <button
        className="absolute w-[7.56%] h-[8.58%] top-[2.92%] left-[78.94%]"
        aria-label="削除"
        type="button"
      >
        <div className="absolute w-[100.00%] h-[100.00%] top-0 left-0 shadow-[0px_7px_20px_#0000000d]">
          <img
            className="w-[calc(100%_+_51px)] h-[calc(100%_+_51px)] top-[-25px] left-[-25px] absolute object-cover"
            alt=""
            src="/img/blur-1.svg"
            aria-hidden="true"
          />

          <div className="rounded-[289.83px] absolute w-full h-full top-0 left-0 bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

          <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[289.83px] backdrop-blur-[2.9px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.9px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.20),inset_-1px_0_1px_rgba(0,0,0,0.16)]" />
        </div>

        <div className="absolute top-[calc(50.00%_-_11px)] left-[calc(50.00%_-_11px)] w-[22px] h-[22px] aspect-[1]">
          <img
            className="absolute w-[76.00%] h-[100.00%] top-0 left-[12.00%]"
            alt=""
            src="/img/vector.svg"
            aria-hidden="true"
          />

          <img
            className="absolute w-[66.12%] h-[64.43%] top-[35.31%] left-[16.87%]"
            alt=""
            src="/img/vector-1.svg"
            aria-hidden="true"
          />
        </div>
      </button>
    </div>
  );
};
