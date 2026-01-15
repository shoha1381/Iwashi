export const NotesAndProgressSection = () => {
  const monthData = {
    month: "月",
    day: "06",
  };

  const members = [
    { name: "野明みゆ", number: "③" },
    { name: "岩中貴俊", number: "①" },
    { name: "近藤美華", number: "②" },
    { name: "大森美鈴", number: "④" },
    { name: "渡邉真平", number: "⑤" },
    { name: "前田愛芽", number: "⑥" },
    { name: "伊藤彰吾", number: "⑦" },
  ];

  const additionalMembers = [
    { name: "川合", subName: "玲潤" },
    { name: "中林", subName: "香奈" },
  ];

  return (
    <nav
      className="fixed top-[-285px] left-[346px] w-[141px] h-[834px] flex items-end justify-end bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_2px_4px_#00000026,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
      role="navigation"
      aria-label="Notes and Progress Navigation"
    >
      <div className="mb-[377.0px] w-[834px] mr-[-362.0px] flex rotate-[-90.00deg]">
        <div className="flex w-[65px] h-20 relative flex-col items-start justify-center gap-2 px-[15px] py-[34px]">
          <p className="relative flex items-center justify-center self-stretch mt-[-18.00px] mb-[-16.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#5e6367] text-[10px] text-center tracking-[0] leading-[25px]">
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#5e6367] text-[10px] tracking-[0] leading-[25px]">
              {monthData.month}
              <br />
            </span>
            <span className="text-xl">{monthData.day}</span>
          </p>
        </div>

        <ul className="inline-flex w-[769px] h-20 relative items-center">
          {members.map((member, index) => (
            <li
              key={index}
              className="flex w-[97px] h-20 items-center justify-center gap-2 pt-[15px] pb-2.5 px-[27px] relative"
            >
              <button
                className="relative flex items-center justify-center w-fit ml-[-8.00px] mr-[-8.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#5e6367] text-[13px] text-center tracking-[2.21px] leading-[25px]"
                aria-label={`${member.name} ${member.number}`}
              >
                {member.name}
                <br />
                {member.number}
              </button>
            </li>
          ))}

          {additionalMembers.map((member, index) => (
            <li
              key={index}
              className="flex w-[45px] h-20 items-center justify-center gap-2 pt-[15px] pb-2.5 px-[27px] relative"
            >
              <button
                className="relative flex items-center justify-center w-fit ml-[-19.00px] mr-[-19.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#5e6367] text-[13px] text-center tracking-[2.21px] leading-[25px]"
                aria-label={`${member.name} ${member.subName}`}
              >
                {member.name}
                <br />
                {member.subName}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
