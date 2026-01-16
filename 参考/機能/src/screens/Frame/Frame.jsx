export const Frame = () => {
  const menuItems = [
    {
      id: 1,
      label: "類似症例",
      icon: "/img/vector.svg",
      iconStyle: {
        width: "72.88%",
        height: "72.88%",
        top: "12.50%",
        left: "12.50%",
      },
      containerStyle: {
        width: "23px",
        height: "23px",
        top: "17px",
        left: "28px",
      },
      rounded: "rounded-[28.43px]",
      textColor: "text-black",
    },
    {
      id: 2,
      label: "頻度のグラフ",
      icon: "/img/vector-1.svg",
      iconStyle: {
        width: "75.00%",
        height: "75.00%",
        top: "12.50%",
        left: "12.50%",
      },
      containerStyle: {
        width: "23px",
        height: "23px",
        top: "16px",
        left: "28px",
      },
      rounded: "rounded-[28.43px]",
      textColor: "text-black",
    },
    {
      id: 3,
      label: "効果のイメージ",
      icon: "/img/vector-2.svg",
      iconStyle: {
        width: "81.25%",
        height: "75.00%",
        top: "12.50%",
        left: "6.25%",
      },
      containerStyle: {
        width: "21px",
        height: "21px",
        top: "18px",
        left: "29px",
      },
      rounded: "rounded-[28.43px]",
      textColor: "text-black",
    },
    {
      id: 4,
      label: "写真撮影",
      icon: "/img/vector-3.svg",
      iconStyle: {
        width: "6.84%",
        height: "24.00%",
        top: "39.78%",
        left: "13.13%",
      },
      containerStyle: null,
      rounded: "rounded-[9.38px]",
      textColor: "text-[#1e1e1e]",
    },
    {
      id: 5,
      label: "写真 AI 生成",
      icon: "/img/vector-4.svg",
      iconStyle: {
        width: "91.66%",
        height: "83.34%",
        top: "4.17%",
        left: "8.33%",
      },
      containerStyle: {
        width: "20px",
        height: "20px",
        top: "18px",
        left: "29px",
      },
      rounded: "rounded-[9.38px]",
      textColor: "text-[#1e1e1e]",
    },
    {
      id: 6,
      label: "写真比較",
      icon: "/img/vector-5.svg",
      iconStyle: {
        width: "83.33%",
        height: "83.33%",
        top: "8.33%",
        left: "8.34%",
      },
      containerStyle: {
        width: "19px",
        height: "19px",
        top: "18px",
        left: "30px",
      },
      rounded: "rounded-[9.38px]",
      textColor: "text-[#1e1e1e]",
    },
    {
      id: 7,
      label: "お会計",
      icon: "/img/vector-6.svg",
      iconStyle: {
        width: "7.59%",
        height: "18px",
        top: "calc(50.00% - 7px)",
        left: "13.07%",
      },
      containerStyle: null,
      rounded: "rounded-[20px]",
      textColor: "text-black",
    },
  ];

  return (
    <nav
      className="w-[271px] h-[410px] flex items-center justify-center bg-[#ffffffbf] rounded-[20px] overflow-hidden"
      data-model-id="1:9046"
      role="navigation"
      aria-label="メインメニュー"
    >
      <ul className="flex mt-[0.6px] h-[378.62px] ml-[0.3px] w-[237.27px] relative flex-col items-center justify-center">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`${item.id <= 3 ? "relative self-stretch w-full" : item.id === 4 || item.id === 6 ? "self-stretch w-full" : "w-[237.27px]"} ${item.rounded} relative h-[54.09px]`}
          >
            <button className="w-full h-full relative" aria-label={item.label}>
              <span
                className={`absolute top-4 left-[77px] [font-family:'Noto_Sans_JP',Helvetica] font-medium ${item.textColor} text-[14.5px] tracking-[0] leading-[normal]`}
              >
                {item.label}
              </span>

              {item.containerStyle ? (
                <div
                  className={`absolute aspect-[1]`}
                  style={{
                    width: item.containerStyle.width,
                    height: item.containerStyle.height,
                    top: item.containerStyle.top,
                    left: item.containerStyle.left,
                  }}
                >
                  <img
                    className="absolute"
                    style={{
                      width: item.iconStyle.width,
                      height: item.iconStyle.height,
                      top: item.iconStyle.top,
                      left: item.iconStyle.left,
                    }}
                    alt=""
                    src={item.icon}
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <img
                  className="absolute aspect-[1]"
                  style={{
                    width: item.iconStyle.width,
                    height: item.iconStyle.height,
                    top: item.iconStyle.top,
                    left: item.iconStyle.left,
                  }}
                  alt=""
                  src={item.icon}
                  aria-hidden="true"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
