import { useState } from "react";

export const IpadPro = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const navigationItems = [
    {
      id: "overview",
      label: "概要",
      icon: "/img/vector.svg",
      iconStyles: "w-[82.69%] h-[82.69%] top-[10.22%] left-[7.90%]",
    },
    {
      id: "deposit",
      label: "入金",
      icon: "/img/vector-1.svg",
      iconStyles:
        "mt-[7.1px] h-[31.18px] ml-[13.76%] w-[31.18px] mr-[7.84%] flex-1 aspect-[1]",
    },
    {
      id: "treatment",
      label: "施術履歴",
      icon: "/img/vector-2.svg",
      iconStyles: "w-[76.38%] h-[74.04%] top-[14.63%] left-[17.07%]",
    },
    {
      id: "transactions",
      label: "入出金履歴",
      icons: [
        {
          src: "/img/vector-3.svg",
          styles: "w-full h-[18.75%] top-[13.63%] left-0",
        },
        {
          src: "/img/vector-4.svg",
          styles: "w-full h-[46.88%] top-[40.62%] left-0",
        },
      ],
    },
  ];

  const headerButtons = [
    {
      id: "notification",
      icons: [
        {
          src: "/img/vector-7.svg",
          styles: "w-[76.01%] h-full top-0 left-[12.00%]",
        },
        {
          src: "/img/vector-8.svg",
          styles: "w-[66.12%] h-[64.44%] top-[35.31%] left-[16.88%]",
        },
      ],
      blur: "/img/blur-1.svg",
    },
    {
      id: "settings",
      icons: [
        {
          src: "/img/vector-5.svg",
          styles: "w-[62.94%] h-[62.93%] top-[15.95%] left-[21.11%]",
        },
        {
          src: "/img/vector-6.svg",
          styles: "w-[53.02%] h-[53.02%] top-[25.86%] left-[21.11%]",
        },
      ],
      blur: "/img/blur.svg",
    },
  ];

  return (
    <div
      className="bg-white w-full min-w-[834px] min-h-[1194px] relative"
      data-model-id="1:8841"
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
              className={`relative w-[107.56px] h-[80.39px] ${index > 0 ? "-ml-2.5" : ""} ${
                activeTab === item.id ? "bg-[#4aa9fc]" : ""
              } rounded-[45.29px] overflow-hidden transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4aa9fc] focus:ring-offset-2`}
              aria-label={item.label}
              aria-current={activeTab === item.id ? "page" : undefined}
            >
              {item.icons ? (
                <div className="absolute top-[13px] left-[calc(50.00%_-_17px)] w-[34px] h-[34px] aspect-[1]">
                  {item.icons.map((icon, iconIndex) => (
                    <img
                      key={iconIndex}
                      className={`absolute ${icon.styles}`}
                      alt=""
                      src={icon.src}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              ) : item.id === "deposit" ? (
                <div className="absolute top-2 left-[calc(50.00%_-_20px)] w-10 h-10 flex items-center aspect-[1]">
                  <img
                    className={item.iconStyles}
                    alt=""
                    src={item.icon}
                    aria-hidden="true"
                  />
                </div>
              ) : item.id === "treatment" ? (
                <div className="absolute top-2.5 left-[calc(50.00%_-_21px)] w-[41px] h-[41px] aspect-[1]">
                  <img
                    className={`absolute ${item.iconStyles}`}
                    alt=""
                    src={item.icon}
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <div className="absolute top-[calc(50.00%_-_27px)] left-[calc(50.00%_-_19px)] w-[37px] h-[37px] aspect-[1]">
                  <img
                    className={`absolute ${item.iconStyles}`}
                    alt=""
                    src={item.icon}
                    aria-hidden="true"
                  />
                </div>
              )}

              <span
                className={`absolute ${
                  item.id === "overview" ? "top-[55px]" : "top-[57px]"
                } left-[calc(50.00%_-_${
                  item.id === "overview"
                    ? "13px"
                    : item.id === "deposit"
                      ? "12px"
                      : item.id === "treatment"
                        ? "25px"
                        : "32px"
                })] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium ${
                  activeTab === item.id ? "text-white" : "text-[#999999]"
                } text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <main role="main">
        <img
          className="absolute top-[237px] left-[calc(50.00%_-_372px)] w-[744px] h-[416px] aspect-[1.79] object-cover"
          alt="Customer overview data visualization"
          src="/img/cleanshot-2025-10-28-at-14-04-34-2x-1.png"
        />

        <h1 className="absolute top-40 left-[55px] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          概要
        </h1>

        <div className="absolute top-[155px] left-[679px] w-[104px] h-[42px] flex gap-5">
          {headerButtons.map((button) => (
            <button
              key={button.id}
              className="w-[42px] h-[42px] relative focus:outline-none focus:ring-2 focus:ring-[#4aa9fc] focus:ring-offset-2 rounded-full"
              aria-label={
                button.id === "notification" ? "Notifications" : "Settings"
              }
            >
              <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
                <img
                  className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
                  alt=""
                  src={button.blur}
                  aria-hidden="true"
                />

                <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

                <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
              </div>

              <div
                className={`absolute ${
                  button.id === "notification"
                    ? "top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_10px)] w-5 h-5"
                    : "top-[calc(50.00%_-_15px)] left-[calc(50.00%_-_15px)] w-[30px] h-[30px]"
                } aspect-[1]`}
              >
                {button.icons.map((icon, iconIndex) => (
                  <img
                    key={iconIndex}
                    className={`absolute ${icon.styles}`}
                    alt=""
                    src={icon.src}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </main>

      <header
        className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        role="banner"
      >
        <button
          className="absolute top-[calc(50.00%_-_374px)] left-[34px] w-[42px] h-[42px] rotate-[-90.00deg] focus:outline-none focus:ring-2 focus:ring-[#4aa9fc] focus:ring-offset-2 rounded-full"
          aria-label="Menu"
        >
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
            <img
              className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
              alt=""
              src="/img/blur-2.svg"
              aria-hidden="true"
            />

            <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

            <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
          </div>

          <div className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] aspect-[1]">
            <img
              className="absolute w-[66.67%] h-[66.67%] top-[13.25%] left-[13.25%]"
              alt=""
              src="/img/vector-9.svg"
              aria-hidden="true"
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
      </header>
    </div>
  );
};
