import { useState } from "react";

export const IpadPro = () => {
  const [activeTab, setActiveTab] = useState("history");

  const navigationItems = [
    {
      id: "overview",
      label: "概要",
      icon: "/img/vector.svg",
      iconStyles: {
        width: "82.69%",
        height: "82.69%",
        top: "10.22%",
        left: "7.90%",
      },
    },
    {
      id: "deposit",
      label: "入金",
      icon: "/img/vector-1.svg",
      iconStyles: {
        marginTop: "7.1px",
        height: "31.18px",
        marginLeft: "13.76%",
        width: "31.18px",
        marginRight: "7.84%",
      },
    },
    {
      id: "treatment",
      label: "施術履歴",
      icon: "/img/vector-2.svg",
      iconStyles: {
        width: "76.38%",
        height: "74.04%",
        top: "14.63%",
        left: "17.07%",
      },
    },
    {
      id: "history",
      label: "入出金履歴",
      icon: ["/img/vector-3.svg", "/img/vector-4.svg"],
      iconStyles: [
        { width: "100%", height: "18.75%", top: "13.63%", left: "0" },
        { width: "100%", height: "46.88%", top: "40.62%", left: "0" },
      ],
    },
  ];

  return (
    <div
      className="bg-white w-full min-w-[834px] min-h-[1194px] relative"
      data-model-id="1:8922"
    >
      <nav
        className="absolute top-[1053px] left-[calc(50.00%_-_206px)] w-[412px] h-[90px] flex bg-[#ffffff1a] rounded-[45.29px] overflow-hidden shadow-[0px_11.32px_33.97px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)] backdrop-blur-[2.5px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100.0%)_saturate(100.0%)]"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="inline-flex mt-[5px] w-[400.24px] h-[80.39px] ml-1.5 relative items-center">
          {navigationItems.map((item, index) => (
            <li
              key={item.id}
              className={`relative w-[107.56px] h-[80.39px] ${index > 0 ? "-ml-2.5" : ""} ${
                activeTab === item.id ? "bg-[#4aa9fc]" : ""
              } rounded-[45.29px] overflow-hidden`}
            >
              <button
                onClick={() => setActiveTab(item.id)}
                className="w-full h-full"
                aria-label={item.label}
                aria-current={activeTab === item.id ? "page" : undefined}
              >
                {item.id === "overview" && (
                  <div className="absolute top-[calc(50.00%_-_27px)] left-[calc(50.00%_-_19px)] w-[37px] h-[37px] aspect-[1]">
                    <img
                      className="absolute w-[82.69%] h-[82.69%] top-[10.22%] left-[7.90%]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                )}

                {item.id === "deposit" && (
                  <div className="absolute top-2 left-[calc(50.00%_-_20px)] w-10 h-10 flex items-center aspect-[1]">
                    <img
                      className="mt-[7.1px] h-[31.18px] ml-[13.76%] w-[31.18px] mr-[7.84%] flex-1 aspect-[1]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                )}

                {item.id === "treatment" && (
                  <div className="absolute top-2.5 left-[calc(50.00%_-_21px)] w-[41px] h-[41px] aspect-[1]">
                    <img
                      className="absolute w-[76.38%] h-[74.04%] top-[14.63%] left-[17.07%]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                )}

                {item.id === "history" && (
                  <div className="absolute top-[13px] left-[calc(50.00%_-_17px)] w-[34px] h-[34px] aspect-[1]">
                    <img
                      className="absolute w-full h-[18.75%] top-[13.63%] left-0"
                      alt=""
                      src={item.icon[0]}
                    />
                    <img
                      className="absolute w-full h-[46.88%] top-[40.62%] left-0"
                      alt=""
                      src={item.icon[1]}
                    />
                  </div>
                )}

                <span
                  className={`absolute top-[${item.id === "overview" ? "55px" : "57px"}] left-[calc(50.00%_-_${
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
            </li>
          ))}
        </ul>
      </nav>

      <header className="absolute top-40 left-[58px]">
        <h1 className="[font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          入出金履歴
        </h1>
      </header>

      <div className="absolute top-[155px] left-[682px] w-[104px] h-[42px] flex">
        <button
          className="ml-[62px] relative w-[42px] h-[42px]"
          aria-label="Search"
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

      <img
        className="absolute top-[237px] left-[41px] w-[751px] h-[61px] aspect-[12.22] object-cover"
        alt="Transaction history table"
        src="/img/cleanshot-2025-12-15-at-05-25-02-2x-1.png"
      />

      <aside
        className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        role="complementary"
        aria-label="Sidebar"
      >
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
