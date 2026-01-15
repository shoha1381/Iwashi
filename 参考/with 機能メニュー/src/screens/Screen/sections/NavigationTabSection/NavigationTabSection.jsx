export const NavigationTabSection = () => {
  const tabItems = [
    { name: "野明みゆ", number: "③" },
    { name: "岩中貴俊", number: "①" },
    { name: "近藤美華", number: "②" },
    { name: "大森美鈴", number: "④" },
    { name: "渡邉真平", number: "⑤" },
    { name: "前田愛芽", number: "⑥" },
    { name: "伊藤彰吾", number: "⑦" },
  ];

  const narrowTabItems = [
    { name: "川合", subName: "玲潤" },
    { name: "中林", subName: "香奈" },
  ];

  return (
    <nav
      className="fixed top-[-284px] left-[346px] w-[141px] h-[834px] flex items-end justify-end bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_2px_4px_#00000026,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
      role="navigation"
      aria-label="User navigation tabs"
    >
      <div className="mb-[377.0px] w-[834px] mr-[-362.0px] flex rotate-[-90.00deg]">
        <div className="flex w-[65px] h-20 relative flex-col items-start justify-center gap-2 px-[15px] py-[34px]">
          <p className="relative flex items-center justify-center self-stretch mt-[-18.00px] mb-[-16.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#5e6367] text-[10px] text-center tracking-[0] leading-[25px]">
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#5e6367] text-[10px] tracking-[0] leading-[25px]">
              月<br />
            </span>
            <span className="text-xl">06</span>
          </p>
        </div>

        <div className="inline-flex w-[769px] h-20 relative items-center">
          {tabItems.map((item, index) => (
            <button
              key={index}
              className="flex w-[97px] h-20 items-center justify-center gap-2 pt-[15px] pb-2.5 px-[27px] relative"
              type="button"
              aria-label={`${item.name} ${item.number}`}
            >
              <div className="relative flex items-center justify-center w-fit ml-[-8.00px] mr-[-8.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#5e6367] text-[13px] text-center tracking-[2.21px] leading-[25px]">
                {item.name}
                <br />
                {item.number}
              </div>
            </button>
          ))}

          {narrowTabItems.map((item, index) => (
            <button
              key={index}
              className="flex w-[45px] h-20 items-center justify-center gap-2 pt-[15px] pb-2.5 px-[27px] relative"
              type="button"
              aria-label={`${item.name} ${item.subName}`}
            >
              <div className="relative flex items-center justify-center w-fit ml-[-19.00px] mr-[-19.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#5e6367] text-[13px] text-center tracking-[2.21px] leading-[25px]">
                {item.name}
                <br />
                {item.subName}
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
