export const Frame = () => {
  const navigationItems = [
    {
      id: "settings",
      label: "設定",
      icon: (
        <div className="w-[35.11px] h-[35.11px] relative rotate-[-90.00deg] aspect-[1]">
          <div className="w-[45.83%] h-[45.83%] top-[25.00%] left-[29.16%] rounded-[8.05px] absolute bg-[#999999]" />
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
            alt="Settings icon"
            src="/img/vector-7.svg"
          />
        </div>
      ),
      textColor: "text-[#999999]",
      marginTop: "mt-[84.0px]",
      gap: "gap-[0.4px]",
      textMarginTop: "mt-[8.5px]",
    },
    {
      id: "customers",
      label: "顧客",
      icon: (
        <div className="w-[35.11px] h-[35.11px] relative rotate-[-90.00deg]">
          <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[93.75%] h-[68.75%] top-[15.62%] left-[3.12%]"
              alt="Customers icon part 1"
              src="/img/vector-5.svg"
            />
          </div>
          <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[62.50%] h-[68.75%] top-[15.62%] left-[34.38%]"
              alt="Customers icon part 2"
              src="/img/vector-6.svg"
            />
          </div>
        </div>
      ),
      textColor: "text-[#0088ff]",
      marginTop: "mt-[92.2px]",
      gap: "gap-[0.4px]",
      textMarginTop: "mt-[8.2px]",
    },
    {
      id: "aggregation",
      label: "集計",
      icon: (
        <div className="w-[35.11px] h-[35.11px] relative rotate-[-90.00deg]">
          <div className="absolute top-px left-0 w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.50%]"
              alt="Aggregation icon part 1"
              src="/img/vector-3.svg"
            />
          </div>
          <div className="absolute w-full top-px left-0 h-[35px] aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[25.00%] top-[12.50%] left-[12.50%]"
              alt="Aggregation icon part 2"
              src="/img/vector-4.svg"
            />
          </div>
        </div>
      ),
      textColor: "text-[#999999]",
      marginTop: "mt-[92.2px]",
      gap: "gap-[0.4px]",
      textMarginTop: "mt-[7.9px]",
    },
    {
      id: "sales",
      label: "売上",
      icon: (
        <div className="w-[30.72px] h-[30.72px] relative rotate-[-90.00deg] aspect-[1]">
          <div className="w-[68.42%] h-[63.16%] top-[31.58%] left-[15.79%] rounded-[10.51px/9.7px] absolute bg-[#999999]" />
          <img
            className="absolute w-[92.33%] h-[100.00%] top-0 left-[3.83%]"
            alt="Sales icon"
            src="/img/vector-2.svg"
          />
        </div>
      ),
      textColor: "text-[#999999]",
      marginTop: "mt-[92.0px]",
      gap: "gap-[2.8px]",
      textMarginTop: "mt-[5.8px]",
      width: "w-[57px]",
      height: "h-[30.72px]",
      marginLeft: "ml-[25.0px]",
    },
    {
      id: "analysis",
      label: "分析",
      icon: (
        <img
          className="w-[35.11px] h-[35.11px] rotate-[-90.00deg]"
          alt="Analysis icon"
          src="/img/frame-517.svg"
        />
      ),
      textColor: "text-[#999999]",
      marginTop: "mt-[92.2px]",
      gap: "gap-[1.4px]",
      textMarginTop: "mt-[8.9px]",
    },
    {
      id: "treatment",
      label: "施術",
      icon: (
        <div className="w-[35.11px] h-[35.11px] relative rotate-[-90.00deg] aspect-[1]">
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.34%]"
            alt="Treatment icon part 1"
            src="/img/vector.svg"
          />
          <img
            className="absolute w-[83.33%] h-[25.00%] top-[16.66%] left-[8.34%]"
            alt="Treatment icon part 2"
            src="/img/vector-1.svg"
          />
        </div>
      ),
      textColor: "text-[#999999]",
      marginTop: "mt-[92.2px]",
      gap: "gap-[1.4px]",
      textMarginTop: "mt-[7.6px]",
    },
  ];

  return (
    <nav
      className="w-[834px] h-[131px] flex flex-col bg-white overflow-hidden"
      data-model-id="58:4372"
      role="navigation"
      aria-label="Main navigation"
    >
      {navigationItems.map((item) => (
        <button
          key={item.id}
          className={`${item.marginLeft || "ml-[23.0px]"} ${item.width || "w-[59px]"} ${item.height || ""} ${item.marginTop} flex ${item.gap}`}
          aria-label={item.label}
          aria-current={item.id === "customers" ? "page" : undefined}
        >
          <div className="mt-0 ml-0">{item.icon}</div>
          <span
            className={`${item.textMarginTop} ${item.textColor} flex items-center justify-center w-7 h-[19px] rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap`}
          >
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
