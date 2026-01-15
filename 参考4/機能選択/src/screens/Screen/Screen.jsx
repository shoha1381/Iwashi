export const Screen = () => {
  const menuItems = [
    {
      id: 1,
      label: "類似症例",
      icon: "/img/vector.svg",
      iconStyles: "w-[72.88%] h-[72.88%] top-[12.50%] left-[12.50%]",
      containerStyles: "w-[23px] h-[23px] top-[17px] left-7",
    },
    {
      id: 2,
      label: "写真 AI 生成",
      icon: "/img/vector-1.svg",
      iconStyles: "w-[91.66%] h-[83.34%] top-[4.16%] left-[8.33%]",
      containerStyles: "w-5 h-5 top-[18px] left-[29px]",
    },
    {
      id: 3,
      label: "写真比較",
      icon: "/img/vector-2.svg",
      iconStyles: "w-[83.33%] h-[83.33%] top-[8.33%] left-[8.34%]",
      containerStyles: "w-[19px] h-[19px] top-[18px] left-[30px]",
    },
  ];

  return (
    <nav
      className="w-[271px] h-[197px] flex items-center justify-center bg-[#ffffffbf] rounded-[20px] overflow-hidden"
      data-model-id="13:6569"
      role="navigation"
      aria-label="メインメニュー"
    >
      <ul className="flex mt-[1.6px] h-[162.26px] ml-[0.3px] w-[237.27px] relative flex-col items-center justify-center">
        {menuItems.map((item, index) => (
          <li
            key={item.id}
            className={`${index === 0 ? "self-stretch w-full" : index === 1 ? "w-[237.27px]" : "self-stretch w-full"} rounded-${index === 0 ? "[28.43px]" : "[9.38px]"} relative h-[54.09px]`}
          >
            <button
              className="absolute top-4 left-[77px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[14.5px] text-justify tracking-[0] leading-[normal] text-black hover:opacity-80 transition-opacity"
              aria-label={item.label}
            >
              {item.label}
            </button>

            <div
              className={`absolute ${item.containerStyles} aspect-[1]`}
              aria-hidden="true"
            >
              <img
                className={`absolute ${item.iconStyles}`}
                alt=""
                src={item.icon}
              />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
