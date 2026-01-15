export const PerformanceOverviewSection = () => {
  const navigationItems = [
    {
      id: "settings",
      label: "設定",
      icon: (
        <div className="absolute top-[84px] left-[23px] w-[35px] h-[35px] rotate-[-90.00deg] aspect-[1]">
          <div className="w-[45.83%] h-[45.83%] top-[25.00%] left-[29.16%] rounded-[8.05px] absolute bg-[#999999]" />
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
            alt=""
            src="/img/vector-61.svg"
          />
        </div>
      ),
      textColor: "#999999",
      top: "92px",
    },
    {
      id: "customers",
      label: "顧客",
      icon: (
        <div className="absolute top-[211px] left-[23px] w-[35px] h-[35px] rotate-[-90.00deg]">
          <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[93.75%] h-[68.75%] top-[15.62%] left-[3.12%]"
              alt=""
              src="/img/vector-59.svg"
            />
          </div>
          <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[62.50%] h-[68.75%] top-[15.62%] left-[34.38%]"
              alt=""
              src="/img/vector-60.svg"
            />
          </div>
        </div>
      ),
      textColor: "#999999",
      top: "219px",
    },
    {
      id: "aggregation",
      label: "集計",
      icon: (
        <div className="absolute top-[339px] left-[23px] w-[35px] h-[35px] rotate-[-90.00deg]">
          <div className="absolute top-px left-0 w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.50%]"
              alt=""
              src="/img/vector-63.svg"
            />
          </div>
          <div className="absolute w-full top-px left-0 h-[35px] aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[25.00%] top-[12.50%] left-[12.50%]"
              alt=""
              src="/img/vector-64.svg"
            />
          </div>
        </div>
      ),
      textColor: "#999999",
      top: "346px",
    },
    {
      id: "sales",
      label: "売上",
      icon: (
        <div className="absolute top-[466px] left-[25px] w-[31px] h-[31px] rotate-[-90.00deg] aspect-[1]">
          <div className="w-[68.42%] h-[63.16%] top-[31.58%] left-[15.79%] rounded-[10.51px/9.7px] absolute bg-[#999999]" />
          <img
            className="absolute w-[92.33%] h-[100.00%] top-0 left-[3.83%]"
            alt=""
            src="/img/vector-62.svg"
          />
        </div>
      ),
      textColor: "#999999",
      top: "471px",
    },
    {
      id: "analysis",
      label: "分析",
      icon: (
        <img
          className="absolute top-[589px] left-[22px] w-[35px] h-[35px] rotate-[-90.00deg]"
          alt=""
          src="/img/frame-517.svg"
        />
      ),
      textColor: "#0088ff",
      top: "597px",
    },
    {
      id: "treatment",
      label: "施術",
      icon: (
        <div className="absolute top-[716px] left-[22px] w-[35px] h-[35px] rotate-[-90.00deg] aspect-[1]">
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.34%]"
            alt=""
            src="/img/vector-57.svg"
          />
          <img
            className="absolute w-[83.33%] h-[25.00%] top-[16.66%] left-[8.34%]"
            alt=""
            src="/img/vector-58.svg"
          />
        </div>
      ),
      textColor: "#999999",
      top: "723px",
    },
  ];

  return (
    <nav
      className="fixed top-[728px] left-[351px] w-[131px] h-[834px] z-[3] bg-white rotate-[90.00deg] shadow-[0px_4px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
      aria-label="メインナビゲーション"
      role="navigation"
    >
      {navigationItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className="absolute left-0 w-full"
          style={{ top: item.top }}
          aria-label={item.label}
          aria-current={item.textColor === "#0088ff" ? "page" : undefined}
        >
          {item.icon}
          <span
            className="absolute left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap"
            style={{ color: item.textColor, top: `calc(${item.top} + 7px)` }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
