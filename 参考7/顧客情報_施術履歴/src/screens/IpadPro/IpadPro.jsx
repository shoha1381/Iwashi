import { useState } from "react";

export const IpadPro = () => {
  const navigationItems = [
    {
      id: "overview",
      label: "概要",
      icon: "/img/vector.svg",
      active: false,
    },
    {
      id: "deposit",
      label: "入金",
      icon: "/img/vector-1.svg",
      active: false,
    },
    {
      id: "treatment",
      label: "施術履歴",
      icon: "/img/vector-2.svg",
      active: true,
    },
    {
      id: "transactions",
      label: "入出金履歴",
      icons: ["/img/vector-3.svg", "/img/vector-4.svg"],
      active: false,
    },
  ];

  const [activeTab, setActiveTab] = useState("treatment");

  return (
    <div
      className="bg-white w-full min-w-[834px] min-h-[1194px] relative"
      data-model-id="1:8906"
    >
      <nav
        className="absolute top-[1053px] left-[calc(50.00%_-_206px)] w-[412px] h-[90px] flex bg-[#ffffff1a] rounded-[45.29px] overflow-hidden shadow-[0px_11.32px_33.97px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)] backdrop-blur-[2.5px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100.0%)_saturate(100.0%)]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="inline-flex mt-[5px] w-[400.24px] h-[80.39px] ml-1.5 relative items-center">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative w-[107.56px] h-[80.39px] ${index > 0 ? "-ml-2.5" : ""} ${item.active ? "bg-[#4aa9fc]" : ""} rounded-[45.29px] overflow-hidden transition-colors duration-200 hover:bg-opacity-80`}
              aria-label={item.label}
              aria-current={item.active ? "page" : undefined}
            >
              {item.id === "overview" && (
                <>
                  <div className="absolute top-[calc(50.00%_-_27px)] left-[calc(50.00%_-_19px)] w-[37px] h-[37px] aspect-[1]">
                    <img
                      className="absolute w-[82.69%] h-[82.69%] top-[10.22%] left-[7.90%]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                  <span className="absolute top-[55px] left-[calc(50.00%_-_13px)] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
                    {item.label}
                  </span>
                </>
              )}

              {item.id === "deposit" && (
                <>
                  <div className="absolute top-2 left-[calc(50.00%_-_20px)] w-10 h-10 flex items-center aspect-[1]">
                    <img
                      className="mt-[7.1px] h-[31.18px] ml-[13.76%] w-[31.18px] mr-[7.84%] flex-1 aspect-[1]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                  <span className="absolute top-[57px] left-[calc(50.00%_-_12px)] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
                    {item.label}
                  </span>
                </>
              )}

              {item.id === "treatment" && (
                <>
                  <div className="absolute top-2.5 left-[calc(50.00%_-_21px)] w-[41px] h-[41px] aspect-[1]">
                    <img
                      className="absolute w-[76.38%] h-[74.04%] top-[14.63%] left-[17.07%]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                  <span className="absolute top-[57px] left-[calc(50.00%_-_25px)] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
                    {item.label}
                  </span>
                </>
              )}

              {item.id === "transactions" && (
                <>
                  <span className="absolute top-[57px] left-[calc(50.00%_-_32px)] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
                    {item.label}
                  </span>
                  <div className="absolute top-[13px] left-[calc(50.00%_-_17px)] w-[34px] h-[34px] aspect-[1]">
                    <img
                      className="absolute w-full h-[18.75%] top-[13.63%] left-0"
                      alt=""
                      src={item.icons[0]}
                    />
                    <img
                      className="absolute w-full h-[46.88%] top-[40.62%] left-0"
                      alt=""
                      src={item.icons[1]}
                    />
                  </div>
                </>
              )}
            </button>
          ))}
        </div>
      </nav>

      <header className="absolute top-40 left-[55px]">
        <h1 className="[font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          施術履歴
        </h1>
      </header>

      <div className="absolute top-[155px] left-[679px] w-[104px] h-[42px] flex">
        <button
          className="ml-[62px] relative w-[42px] h-[42px]"
          aria-label="Edit"
        >
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
            <img
              className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
              alt=""
              src="/img/blur.svg"
            />
            <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />
            <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
          </div>
          <div className="absolute top-[calc(50.00%_-_15px)] left-[calc(50.00%_-_15px)] w-[30px] h-[30px] aspect-[1]">
            <img
              className="absolute w-[62.94%] h-[62.93%] top-[15.95%] left-[21.11%]"
              alt=""
              src="/img/vector-5.svg"
            />
            <img
              className="absolute w-[53.02%] h-[53.02%] top-[25.86%] left-[21.11%]"
              alt=""
              src="/img/vector-6.svg"
            />
          </div>
        </button>
      </div>

      <main className="absolute top-[237px] left-[45px] w-[744px] h-[413px]">
        <img
          className="w-full h-full aspect-[1.8] object-cover"
          alt="Treatment history table"
          src="/img/cleanshot-2025-12-15-at-05-23-58-2x-1.png"
        />
      </main>

      <aside className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
        <button
          className="absolute top-[calc(50.00%_-_374px)] left-[34px] rotate-[-90.00deg] w-[42px] h-[42px]"
          aria-label="Close"
        >
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
            <img
              className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
              alt=""
              src="/img/blur-1.svg"
            />
            <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />
            <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
          </div>
          <div className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] aspect-[1]">
            <img
              className="absolute w-[66.67%] h-[66.67%] top-[13.25%] left-[13.25%]"
              alt=""
              src="/img/vector-7.svg"
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
    </div>
  );
};
