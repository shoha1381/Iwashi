import { useState } from "react";

export const IpadPro = () => {
  const [activeTab, setActiveTab] = useState("slider");

  const comparisonData = [
    {
      id: "current",
      label: "現在",
      image: "/img/4-1.png",
      bgColor: "#fff8f1",
      topPosition: "361px",
      imageTopPosition: "180px",
    },
    {
      id: "after",
      label: "施術を受けた場合",
      image: "/img/4-1.png",
      bgColor: "#fff8f1",
      topPosition: "832px",
      imageTopPosition: "651px",
    },
  ];

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] relative"
      data-model-id="200:5153"
    >
      <nav
        className="absolute top-[34px] left-[124px] w-[356px] h-[67px] bg-[#ffffff1a] rounded-[32.83px] overflow-hidden shadow-[inset_0px_0px_11.49px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_2.0px_rgba(0,0,0,0.20),inset_-1px_0_2.0px_rgba(0,0,0,0.16)] backdrop-blur-[3.3px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(3.3px)_brightness(100.0%)_saturate(100.0%)]"
        role="tablist"
        aria-label="表示モード切替"
      >
        <button
          className="left-[calc(50.00%_-_171px)] flex justify-center absolute top-[5px] w-[175px] h-[58px] rounded-[32.83px] overflow-hidden"
          onClick={() => setActiveTab("horizontal")}
          role="tab"
          aria-selected={activeTab === "horizontal"}
          aria-controls="comparison-panel"
        >
          <span className="ml-[-0.7px] w-[67.3px] text-[#999999] text-[17.6px] tracking-[1.23px] leading-[56.9px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-center whitespace-nowrap">
            横並べ
          </span>
        </button>

        <button
          className="left-44 bg-[#0088ffb2] backdrop-blur-[3.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(3.2px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_2.0px_rgba(0,0,0,0.20),inset_-1px_0_2.0px_rgba(0,0,0,0.16)] absolute top-[5px] w-[175px] h-[58px] rounded-[32.83px] overflow-hidden"
          onClick={() => setActiveTab("slider")}
          role="tab"
          aria-selected={activeTab === "slider"}
          aria-controls="comparison-panel"
        >
          <span className="absolute h-[100.41%] top-0 left-[calc(50.00%_-_68px)] w-[133px] text-white text-[17.6px] tracking-[1.23px] leading-[56.9px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-center whitespace-nowrap">
            スライドバー
          </span>
        </button>
      </nav>

      <button
        className="absolute top-[calc(50.00%_-_563px)] left-[749px] w-[42px] h-[42px]"
        aria-label="閉じる"
        type="button"
      >
        <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
          <img
            className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
            alt=""
            src="/img/blur.svg"
            aria-hidden="true"
          />

          <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

          <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
        </div>

        <div className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] aspect-[1]">
          <img
            className="absolute w-[66.67%] h-[66.67%] top-[13.24%] left-[13.24%]"
            alt="閉じる"
            src="/img/vector.svg"
          />
        </div>
      </button>

      <section id="comparison-panel" role="tabpanel" aria-label="比較画像">
        {comparisonData.map((item) => (
          <div key={item.id}>
            <div
              className="absolute left-[430px] w-[460px] h-[98px] bg-[#fff8f1] rotate-[90.00deg]"
              style={{ top: item.topPosition }}
              aria-hidden="true"
            />

            <h2
              className="absolute left-[620px] h-[103px] rotate-[90.00deg] text-[#4c3628] text-[37.7px] tracking-[2.64px] leading-[102.8px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-center whitespace-nowrap"
              style={{
                top: item.id === "current" ? "358px" : "828px",
                left: item.id === "current" ? "620px" : "498px",
              }}
            >
              {item.label}
            </h2>

            <img
              className="absolute left-[calc(50.00%_-_293px)] w-[463px] h-[460px] aspect-[0.99]"
              style={{ top: item.imageTopPosition }}
              alt={item.label}
              src={item.image}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
