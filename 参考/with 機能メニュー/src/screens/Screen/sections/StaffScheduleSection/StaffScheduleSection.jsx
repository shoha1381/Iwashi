export const StaffScheduleSection = () => {
  const navigationItems = [
    {
      id: "settings",
      icon: (
        <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
          <div className="absolute w-[45.83%] h-[45.83%] top-[25.00%] left-[29.16%] bg-[#999999] rounded-[8.05px]" />
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
            alt="Settings icon"
            src="/img/vector-2.svg"
          />
        </div>
      ),
      label: "設定",
      color: "#999999",
      top: "84px",
    },
    {
      id: "customers",
      icon: (
        <>
          <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[93.75%] h-[68.75%] top-[15.62%] left-[3.12%]"
              alt="Customers icon part 1"
              src="/img/vector.svg"
            />
          </div>
          <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[62.50%] h-[68.75%] top-[15.62%] left-[34.38%]"
              alt="Customers icon part 2"
              src="/img/vector-1.svg"
            />
          </div>
        </>
      ),
      label: "顧客",
      color: "#999999",
      top: "211px",
    },
    {
      id: "summary",
      icon: (
        <>
          <div className="absolute top-px left-0 w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.50%]"
              alt="Summary icon part 1"
              src="/img/vector-4.svg"
            />
          </div>
          <div className="absolute w-full top-px left-0 h-[35px] aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[25.00%] top-[12.50%] left-[12.50%]"
              alt="Summary icon part 2"
              src="/img/vector-5.svg"
            />
          </div>
        </>
      ),
      label: "集計",
      color: "#999999",
      top: "339px",
    },
    {
      id: "sales",
      icon: (
        <>
          <div className="absolute w-[68.42%] h-[63.16%] top-[31.58%] left-[15.79%] bg-[#999999] rounded-[10.51px/9.7px]" />
          <img
            className="absolute w-[92.33%] h-[100.00%] top-0 left-[3.83%]"
            alt="Sales icon"
            src="/img/vector-3.svg"
          />
        </>
      ),
      label: "売上",
      color: "#999999",
      top: "466px",
    },
    {
      id: "analysis",
      icon: (
        <img
          className="absolute top-0 left-0 w-[35px] h-[35px]"
          alt="Analysis icon"
          src="/img/frame-517.svg"
        />
      ),
      label: "分析",
      color: "#999999",
      top: "589px",
    },
    {
      id: "treatment",
      icon: (
        <>
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.34%]"
            alt="Treatment icon part 1"
            src="/img/vector-6.svg"
          />
          <img
            className="absolute w-[83.33%] h-[25.00%] top-[16.67%] left-[8.34%]"
            alt="Treatment icon part 2"
            src="/img/vector-7.svg"
          />
        </>
      ),
      label: "施術",
      color: "#0088ff",
      top: "716px",
    },
  ];

  return (
    <nav
      className="fixed top-[728px] left-[351px] w-[131px] h-[834px] bg-white rotate-[90.00deg] shadow-[0px_4px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
      role="navigation"
      aria-label="Main navigation"
    >
      {navigationItems.map((item) => (
        <button
          key={item.id}
          className="group"
          style={{ position: "absolute", top: item.top }}
          aria-label={item.label}
          aria-current={item.id === "treatment" ? "page" : undefined}
        >
          <div
            className={`absolute left-[23px] ${item.id === "sales" ? "w-[31px] h-[31px]" : "w-[35px] h-[35px]"} rotate-[-90.00deg]`}
            style={{ top: item.id === "sales" ? "2px" : "0" }}
          >
            {item.icon}
          </div>
          <span
            className="absolute top-[7px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap"
            style={{ color: item.color }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
