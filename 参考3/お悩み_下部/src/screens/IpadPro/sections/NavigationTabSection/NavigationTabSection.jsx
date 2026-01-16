import { useState } from "react";

export const NavigationTabSection = () => {
  const [activeTab, setActiveTab] = useState("concerns");

  const tabs = [
    {
      id: "overview",
      label: "概要",
      icon: "/img/vector-2.svg",
      iconClass: "w-[66.67%] h-[83.33%] top-[8.33%] left-[16.67%]",
    },
    {
      id: "concerns",
      label: "お悩み",
      icon: "/img/vector-3.svg",
      iconClass: "w-full h-[92.88%] top-[7.12%] left-0",
      hasSecondaryIcon: true,
      secondaryIcon: "/img/image.svg",
      secondaryIconClass:
        "w-[4.83%] h-[3.11%] top-[-40963.72%] left-[-79055.67%]",
    },
    {
      id: "questionnaire",
      label: "問診票",
      icon: "/img/icon-park-solid-check-one.svg",
      iconClass: "w-[41px] h-[41px]",
      isSimpleIcon: true,
    },
  ];

  const rightTab = {
    id: "features",
    label: "機能",
    icon: "/img/vector-1.svg",
    iconClass: "w-[62.50%] h-[12.50%] top-[43.75%] left-[18.75%]",
  };

  return (
    <nav
      className="fixed top-[1053px] left-[260px] w-[492px] h-[90px] z-[2]"
      role="navigation"
      aria-label="Main navigation"
    >
      <button
        onClick={() => setActiveTab(rightTab.id)}
        className={`absolute top-0 left-[372px] w-[120px] h-[90px] flex items-center justify-center bg-[#ffffff1a] rounded-[45px] overflow-hidden shadow-[0px_10px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)] transition-all duration-200 hover:bg-[#ffffff26] active:scale-95 ${
          activeTab === rightTab.id ? "bg-[#4aa9fc]" : ""
        }`}
        aria-label={rightTab.label}
        aria-current={activeTab === rightTab.id ? "page" : undefined}
      >
        <div className="h-20 w-[108px] flex flex-col items-center gap-[3.1px] rounded-[43px] overflow-hidden">
          <div className="ml-[-0.1px] h-[43.93px] w-[43.93px] relative mt-2.5 aspect-[1]">
            <img
              className={`absolute ${rightTab.iconClass}`}
              alt=""
              src={rightTab.icon}
              aria-hidden="true"
            />
          </div>
          <span className="flex items-center justify-center -ml-px h-[13px] w-[25px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
            {rightTab.label}
          </span>
        </div>
      </button>

      <div className="absolute top-0 left-[calc(50.00%_-_246px)] w-[315px] h-[90px] flex bg-[#ffffff1a] rounded-[45.29px] overflow-hidden shadow-[0px_11.32px_33.97px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)] backdrop-blur-[2.5px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100.0%)_saturate(100.0%)]">
        <div className="inline-flex mt-[5px] w-[302.68px] h-[80.39px] ml-1.5 relative items-center">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative w-[107.56px] h-[80.39px] ${
                index > 0 ? "-ml-2.5" : ""
              } ${
                activeTab === tab.id ? "bg-[#4aa9fc]" : ""
              } rounded-[45.29px] overflow-hidden transition-all duration-200 hover:bg-[#ffffff26] active:scale-95 ${
                activeTab === tab.id ? "hover:bg-[#3d98e8]" : ""
              }`}
              aria-label={tab.label}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.isSimpleIcon ? (
                <img
                  className="absolute top-[11px] left-[calc(50.00%_-_21px)] w-[41px] h-[41px] aspect-[1]"
                  alt=""
                  src={tab.icon}
                  aria-hidden="true"
                />
              ) : (
                <div
                  className={`absolute ${tab.id === "overview" ? "top-[calc(50.00%_-_27px)] left-[calc(50.00%_-_19px)] w-[37px] h-[37px]" : "top-[9px] left-[calc(50.00%_-_20px)] w-10 h-10"} aspect-[1]`}
                >
                  {tab.hasSecondaryIcon && (
                    <div className="relative w-[72.10%] h-[89.72%] top-[7.69%] left-[13.46%]">
                      <img
                        className={`absolute ${tab.secondaryIconClass}`}
                        alt=""
                        src={tab.secondaryIcon}
                        aria-hidden="true"
                      />
                      <img
                        className={`absolute ${tab.iconClass}`}
                        alt=""
                        src={tab.icon}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  {!tab.hasSecondaryIcon && (
                    <img
                      className={`absolute ${tab.iconClass}`}
                      alt=""
                      src={tab.icon}
                      aria-hidden="true"
                    />
                  )}
                </div>
              )}
              <span
                className={`absolute ${tab.id === "overview" ? "top-[55px]" : "top-[57px]"} left-[calc(50.00%_-_19px)] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium ${
                  activeTab === tab.id ? "text-white" : "text-[#999999]"
                } text-xs ${tab.id === "questionnaire" ? "text-center" : ""} tracking-[0.84px] leading-[12.9px] whitespace-nowrap`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
