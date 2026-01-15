export const QuickActionsSection = () => {
  const quickActions = [
    {
      id: 1,
      label: "類似症例",
      icon: "/img/vector-10.svg",
      iconStyle: {
        width: "72.88%",
        height: "72.88%",
        top: "12.50%",
        left: "12.50%",
      },
      containerStyle: "rounded-[28.43px]",
      iconContainerStyle: "top-[17px] left-7 w-[23px] h-[23px]",
    },
    {
      id: 2,
      label: "写真 AI 生成",
      icon: "/img/vector-11.svg",
      iconStyle: {
        width: "91.66%",
        height: "83.34%",
        top: "4.16%",
        left: "8.33%",
      },
      containerStyle: "rounded-[9.38px]",
      iconContainerStyle: "top-[18px] left-[29px] w-5 h-5",
    },
    {
      id: 3,
      label: "写真比較",
      icon: "/img/vector-12.svg",
      iconStyle: {
        width: "83.33%",
        height: "83.33%",
        top: "8.33%",
        left: "8.33%",
      },
      containerStyle: "rounded-[9.38px]",
      iconContainerStyle: "top-[18px] left-[30px] w-[19px] h-[19px]",
    },
  ];

  return (
    <nav
      className="fixed top-[86px] left-[544px] w-[271px] h-[197px] flex items-center justify-center bg-[#ffffffbf] rounded-[20px] overflow-hidden shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.25),inset_1px_0_0_rgba(255,255,255,0.20),inset_0_-1px_9px_rgba(0,0,0,0.13),inset_-1px_0_9px_rgba(0,0,0,0.11)] backdrop-blur-[14.5px] backdrop-brightness-[88.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(14.5px)_brightness(88.0%)_saturate(100.0%)]"
      role="navigation"
      aria-label="Quick Actions"
    >
      <ul className="flex mt-[1.6px] h-[162.26px] ml-[0.3px] w-[237.27px] relative flex-col items-center justify-center">
        {quickActions.map((action, index) => (
          <li
            key={action.id}
            className={`relative ${index === 0 ? "self-stretch" : index === 2 ? "self-stretch" : ""} w-${index === 1 ? "[237.27px]" : "full"} h-[54.09px] ${action.containerStyle}`}
          >
            <button
              className="absolute inset-0 w-full h-full flex items-center cursor-pointer hover:bg-black/5 transition-colors"
              aria-label={action.label}
            >
              <span className="absolute top-4 left-[77px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[14.5px] text-justify tracking-[0] leading-[normal]">
                {action.label}
              </span>

              <span
                className={`absolute ${action.iconContainerStyle} aspect-[1]`}
                aria-hidden="true"
              >
                <img
                  className="absolute"
                  style={action.iconStyle}
                  alt=""
                  src={action.icon}
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
