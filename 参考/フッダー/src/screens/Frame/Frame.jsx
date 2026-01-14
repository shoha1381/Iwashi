import React from "react";

export const Frame = () => {
  const menuItems = [
    {
      id: "treatment",
      label: "施術",
      icon: (
        <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.34%]"
            alt="Vector"
            src="/img/vector-6.svg"
          />
          <img
            className="absolute w-[83.33%] h-[25.00%] top-[16.67%] left-[8.34%]"
            alt="Vector"
            src="/img/vector-7.svg"
          />
        </div>
      ),
      top: "716px",
      labelTop: "723px",
      isActive: true,
    },
    {
      id: "analysis",
      label: "分析",
      icon: (
        <img
          className="absolute w-full h-full"
          alt="Frame"
          src="/img/frame-517.svg"
        />
      ),
      top: "589px",
      labelTop: "597px",
      isActive: false,
    },
    {
      id: "sales",
      label: "売上",
      icon: (
        <>
          <div className="w-[68.42%] h-[63.16%] top-[31.58%] left-[15.79%] rounded-[10.51px/9.7px] absolute bg-[#999999]" />
          <img
            className="absolute w-[92.33%] h-[100.00%] top-0 left-[3.83%]"
            alt="Vector"
            src="/img/vector-3.svg"
          />
        </>
      ),
      top: "466px",
      labelTop: "471px",
      isActive: false,
    },
    {
      id: "summary",
      label: "集計",
      icon: (
        <>
          <div className="absolute top-px left-0 w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.49%]"
              alt="Vector"
              src="/img/vector-4.svg"
            />
          </div>
          <div className="absolute w-full top-px left-0 h-[35px] aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[25.00%] top-[12.50%] left-[12.49%]"
              alt="Vector"
              src="/img/vector-5.svg"
            />
          </div>
        </>
      ),
      top: "339px",
      labelTop: "346px",
      isActive: false,
    },
    {
      id: "customer",
      label: "顧客",
      icon: (
        <>
          <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[93.75%] h-[68.75%] top-[15.62%] left-[3.13%]"
              alt="Vector"
              src="/img/vector.svg"
            />
          </div>
          <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[62.50%] h-[68.75%] top-[15.62%] left-[34.38%]"
              alt="Vector"
              src="/img/vector-1.svg"
            />
          </div>
        </>
      ),
      top: "211px",
      labelTop: "219px",
      isActive: false,
    },
    {
      id: "settings",
      label: "設定",
      icon: (
        <>
          <div className="w-[45.83%] h-[45.83%] top-[25.00%] left-[29.16%] rounded-[8.05px] absolute bg-[#999999]" />
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
            alt="Vector"
            src="/img/vector-2.svg"
          />
        </>
      ),
      top: "84px",
      labelTop: "92px",
      isActive: false,
    },
  ];

  return (
    <nav
      className="relative w-[834px] h-[131px] bg-white overflow-hidden"
      data-model-id="1:4366"
      role="navigation"
      aria-label="Main navigation"
    >
      {menuItems.map((item) => (
        <React.Fragment key={item.id}>
          <div
            className={`absolute left-[${item.id === "sales" ? "25px" : item.id === "treatment" ? "22px" : "23px"}] w-[${item.id === "sales" ? "31px" : "35px"}] h-[${item.id === "sales" ? "31px" : "35px"}] rotate-[-90.00deg]${item.id === "sales" || item.id === "settings" ? " aspect-[1]" : ""}`}
            style={{ top: item.top }}
            role="img"
            aria-label={item.label}
          >
            {item.icon}
          </div>
          <div
            className={`absolute left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap ${
              item.isActive ? "text-[#0088ff]" : "text-[#999999]"
            }`}
            style={{ top: item.labelTop }}
          >
            {item.label}
          </div>
        </React.Fragment>
      ))}
    </nav>
  );
};
