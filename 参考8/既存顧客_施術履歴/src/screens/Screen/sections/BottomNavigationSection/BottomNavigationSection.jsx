import { useState } from "react";

export const BottomNavigationSection = () => {
  const [activeTab, setActiveTab] = useState("history");

  const navigationItems = [
    {
      id: "overview",
      label: "概要",
      icon: "/img/vector-2.svg",
      iconStyle: {
        width: "66.67%",
        height: "83.33%",
        top: "8.33%",
        left: "16.67%",
      },
    },
    {
      id: "concerns",
      label: "お悩み",
      icon: "/img/vector-3.svg",
      iconStyle: { width: "100%", height: "92.88%", top: "7.12%", left: "0" },
      hasSecondaryIcon: true,
      secondaryIcon: "/img/image.svg",
    },
    {
      id: "history",
      label: "施術履歴",
      icon: "/img/vector-4.svg",
      iconStyle: {
        width: "75.00%",
        height: "75.00%",
        top: "12.50%",
        left: "12.50%",
      },
    },
  ];

  return (
    <nav
      className="fixed top-[1053px] left-[259px] w-[315px] h-[90px] z-[4] flex bg-[#ffffff1a] rounded-[45.29px] overflow-hidden shadow-[0px_11.32px_33.97px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)] backdrop-blur-[2.5px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100.0%)_saturate(100.0%)]"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="inline-flex mt-[5px] w-[302.68px] h-[80.39px] ml-1.5 relative items-center">
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
            <div
              className={`absolute ${
                item.id === "overview"
                  ? "top-[calc(50.00%_-_27px)] left-[calc(50.00%_-_19px)] w-[37px] h-[37px]"
                  : item.id === "concerns"
                    ? "top-[9px] left-[calc(50.00%_-_20px)] w-10 h-10"
                    : "top-2.5 left-[calc(50.00%_-_21px)] w-[43px] h-[43px]"
              } aspect-[1]`}
            >
              {item.id === "concerns" ? (
                <div className="relative w-[72.10%] h-[89.72%] top-[7.69%] left-[13.46%]">
                  {item.hasSecondaryIcon && (
                    <img
                      className="absolute w-[4.83%] h-[3.11%] top-[-31031.88%] left-[-76398.35%]"
                      alt=""
                      src={item.secondaryIcon}
                    />
                  )}
                  <img
                    className={`absolute ${item.iconStyle.width ? `w-[${item.iconStyle.width}]` : ""} ${item.iconStyle.height ? `h-[${item.iconStyle.height}]` : ""} ${item.iconStyle.top ? `top-[${item.iconStyle.top}]` : ""} ${item.iconStyle.left ? `left-[${item.iconStyle.left}]` : ""}`}
                    style={{
                      width: item.iconStyle.width,
                      height: item.iconStyle.height,
                      top: item.iconStyle.top,
                      left: item.iconStyle.left,
                    }}
                    alt=""
                    src={item.icon}
                  />
                </div>
              ) : (
                <img
                  className={`absolute ${item.iconStyle.width ? `w-[${item.iconStyle.width}]` : ""} ${item.iconStyle.height ? `h-[${item.iconStyle.height}]` : ""} ${item.iconStyle.top ? `top-[${item.iconStyle.top}]` : ""} ${item.iconStyle.left ? `left-[${item.iconStyle.left}]` : ""}`}
                  style={{
                    width: item.iconStyle.width,
                    height: item.iconStyle.height,
                    top: item.iconStyle.top,
                    left: item.iconStyle.left,
                  }}
                  alt=""
                  src={item.icon}
                />
              )}
            </div>

            <span
              className={`absolute ${
                item.id === "overview"
                  ? "top-[55px] left-[calc(50.00%_-_13px)]"
                  : "top-[57px]"
              } ${
                item.id === "overview"
                  ? "left-[calc(50.00%_-_13px)]"
                  : item.id === "concerns"
                    ? "left-[calc(50.00%_-_19px)]"
                    : "left-[calc(50.00%_-_25px)]"
              } h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium ${
                activeTab === item.id ? "text-white" : "text-[#999999]"
              } text-xs ${item.id === "history" ? "text-center" : ""} tracking-[0.84px] leading-[12.9px] whitespace-nowrap`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};
