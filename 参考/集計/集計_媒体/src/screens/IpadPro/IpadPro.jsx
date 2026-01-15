import { useState } from "react";

export const IpadPro = () => {
  const [selectedType, setSelectedType] = useState("媒体");
  const [selectedStore, setSelectedStore] = useState("全店舗");
  const [selectedYear, setSelectedYear] = useState("2025年");
  const [selectedMonth, setSelectedMonth] = useState("11月");

  const typeOptions = ["媒体", "施術", "売上"];

  const navigationItems = [
    { icon: "/img/vector-4.svg", label: "設定", active: false },
    {
      icon: "/img/vector-2.svg",
      icon2: "/img/vector-3.svg",
      label: "顧客",
      active: false,
    },
    {
      icon: "/img/vector-6.svg",
      icon2: "/img/vector-7.svg",
      label: "集計",
      active: true,
    },
    { icon: "/img/vector-5.svg", label: "売上", active: false },
    { icon: "/img/frame-517.svg", label: "分析", active: false },
    {
      icon: "/img/vector.svg",
      icon2: "/img/vector-1.svg",
      label: "施術",
      active: false,
    },
  ];

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] flex flex-col relative"
      data-model-id="1:8503"
    >
      <header
        className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[1] flex bg-white rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        role="banner"
      >
        <h1 className="mt-[722.0px] w-[55px] h-[43px] ml-[29.0px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          集計
        </h1>
      </header>

      <main className="fixed top-[167px] left-[calc(50.00%_-_374px)] w-[748px] h-[639px] z-[2] flex flex-col">
        <section className="w-[746px] h-44 relative bg-[#ffffff73] rounded-[20px] border-[0.91px] border-solid border-[#ffffff1a] shadow-[0px_0px_15px_#00000012] backdrop-blur-[12.27px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12.27px)_brightness(100%)]">
          <div className="absolute top-[11px] left-[253px] h-[66px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[15px] tracking-[1.05px] leading-[65.6px] whitespace-nowrap">
            期間
          </div>

          <img
            className="absolute top-[50.00%] left-[calc(50.00%_-_373px)] w-[746px] h-px object-cover"
            alt=""
            src="/img/vector-70.svg"
          />

          <div className="absolute top-3 left-[calc(50.00%_-_318px)] w-[637px] h-[154px]">
            <label className="absolute top-[88px] left-0 h-[66px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] tracking-[0.91px] leading-[65.6px] whitespace-nowrap">
              店舗
            </label>

            <label className="absolute top-0 left-0 h-[66px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] tracking-[0.91px] leading-[65.6px] whitespace-nowrap">
              種別
            </label>

            <label className="absolute top-0 left-[316px] h-[66px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] tracking-[0.91px] leading-[65.6px] whitespace-nowrap">
              期間
            </label>

            <div className="absolute top-2.5 left-[57px] w-[210px] h-[47px] bg-white rounded-[23.44px] shadow-[inset_0px_0px_7.81px_#00000026,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.11),inset_-1px_0_1px_rgba(0,0,0,0.09)] backdrop-blur-[1.6px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(1.6px)_brightness(100.0%)_saturate(100.0%)]">
              {typeOptions.map((type, index) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`absolute top-0.5 ${
                    index === 0
                      ? "left-[3px]"
                      : index === 1
                        ? "left-[70px]"
                        : "left-[137px]"
                  } w-[70px] h-[42px] flex ${
                    selectedType === type ? "bg-[#4aa9fc]" : ""
                  } rounded-[21.98px] overflow-hidden ${
                    selectedType !== type
                      ? "justify-center rounded-[21.1px]"
                      : ""
                  }`}
                  aria-pressed={selectedType === type}
                >
                  <span
                    className={`mt-[13.2px] w-7 h-4 ${
                      selectedType === type
                        ? "ml-[20.0px]"
                        : index === 1
                          ? "ml-[-1.4px]"
                          : "ml-[-0.8px]"
                    } [font-family:'Noto_Sans_JP',Helvetica] font-normal ${
                      selectedType === type ? "text-white" : "text-[#999999]"
                    } text-[13.4px] text-center tracking-[0.94px] leading-[normal] whitespace-nowrap`}
                  >
                    {type}
                  </span>
                </button>
              ))}
            </div>

            <button className="absolute w-[20.09%] h-[30.52%] top-[62.99%] left-[8.95%] flex gap-[15.2px] bg-white rounded-[8.81px] shadow-[0px_0px_7.81px_#00000026]">
              <span className="flex items-center justify-center mt-[13.6px] w-[43px] h-[21px] ml-[27.6px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[13.4px] tracking-[0.94px] leading-[20.5px] whitespace-nowrap">
                {selectedStore}
              </span>

              <div className="mt-[13.9px] w-[22.03px] h-[22.03px] relative">
                <img
                  className="absolute w-[50.00%] h-[25.00%] top-[35.00%] left-[22.50%]"
                  alt=""
                  src="/img/icon-2.svg"
                />
              </div>
            </button>

            <label className="absolute top-[88px] left-[316px] h-[66px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13px] tracking-[0.91px] leading-[65.6px] whitespace-nowrap">
              スタッフ
            </label>

            <div className="absolute top-[97px] left-[389px] w-[142px] h-[47px] bg-neutral-200 rounded-[8.81px]" />

            <button className="absolute top-[9px] left-[389px] w-32 h-[47px] flex gap-[13.2px] bg-white rounded-[8.81px] shadow-[0px_0px_7.81px_#00000026]">
              <span className="flex items-center justify-center mt-[13.6px] w-[47px] h-[21px] ml-[25.6px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[13.4px] tracking-[0.94px] leading-[20.5px] whitespace-nowrap">
                {selectedYear}
              </span>

              <div className="mt-[13.9px] w-[22.03px] h-[22.03px] relative">
                <img
                  className="absolute w-[50.00%] h-[25.00%] top-[35.00%] left-[22.50%]"
                  alt=""
                  src="/img/icon-2.svg"
                />
              </div>
            </button>

            <button className="absolute top-[9px] left-[526px] w-[111px] h-[47px] flex gap-[12.4px] bg-white rounded-[8.81px] shadow-[0px_0px_7.81px_#00000026]">
              <span className="flex items-center justify-center mt-[13.6px] w-[31px] h-[21px] ml-[25.6px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[13.4px] tracking-[0.94px] leading-[20.5px] whitespace-nowrap">
                {selectedMonth}
              </span>

              <div className="mt-[13.9px] w-[22.03px] h-[22.03px] relative">
                <img
                  className="absolute w-[50.00%] h-[25.00%] top-[35.00%] left-[22.50%]"
                  alt=""
                  src="/img/icon-2.svg"
                />
              </div>
            </button>
          </div>
        </section>

        <button className="ml-[614.9px] h-16 w-[128.89px] self-center mt-7 flex bg-[#ffffff1a] rounded-[32.63px] overflow-hidden shadow-[0px_0px_8.36px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)] backdrop-blur-[2.4px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.4px)_brightness(100.0%)_saturate(100.0%)]">
          <div className="mt-[3.6px] w-[120px] h-[56.89px] ml-[4.4px] relative bg-[#0088ffb2] rounded-[32.63px] overflow-hidden backdrop-blur-[2.4px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.4px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)]">
            <span className="absolute h-full top-0 left-[calc(50.00%_-_97px)] w-[196px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[15.2px] text-center tracking-[1.06px] leading-[41.4px]">
              集計
            </span>
          </div>
        </button>

        <img
          className="ml-0.5 w-[746px] h-80 mt-[51px] aspect-[2.33] object-cover"
          alt="集計データテーブル"
          src="/img/cleanshot-2025-10-28-at-16-08-46-2x-1.png"
        />
      </main>

      <nav
        className="fixed top-[728px] left-[351px] w-[131px] h-[834px] z-[3] bg-white rotate-[90.00deg] shadow-[0px_4px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        role="navigation"
        aria-label="メインナビゲーション"
      >
        {navigationItems.map((item, index) => {
          const positions = [
            { top: 716, left: 22, iconTop: 723, textTop: 723, textLeft: 59 },
            { top: 211, left: 23, iconTop: 211, textTop: 219, textLeft: 59 },
            { top: 84, left: 23, iconTop: 84, textTop: 92, textLeft: 59 },
            { top: 466, left: 25, iconTop: 466, textTop: 471, textLeft: 59 },
            { top: 589, left: 22, iconTop: 589, textTop: 597, textLeft: 59 },
            { top: 339, left: 23, iconTop: 339, textTop: 346, textLeft: 59 },
          ];

          const pos = positions[index];

          return (
            <div key={item.label}>
              {index === 0 && (
                <button
                  className="absolute w-[35px] h-[35px] rotate-[-90.00deg] aspect-[1]"
                  style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
                  aria-label={item.label}
                  aria-current={item.active ? "page" : undefined}
                >
                  <div className="w-[45.83%] h-[45.83%] top-[25.00%] left-[29.16%] rounded-[8.05px] absolute bg-[#999999]" />
                  <img
                    className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
                    alt=""
                    src={item.icon}
                  />
                </button>
              )}

              {index === 1 && (
                <button
                  className="absolute w-[35px] h-[35px] rotate-[-90.00deg]"
                  style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
                  aria-label={item.label}
                  aria-current={item.active ? "page" : undefined}
                >
                  <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
                    <img
                      className="absolute w-[93.75%] h-[68.75%] top-[15.62%] left-[3.13%]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                  <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
                    <img
                      className="absolute w-[62.50%] h-[68.75%] top-[15.62%] left-[34.38%]"
                      alt=""
                      src={item.icon2}
                    />
                  </div>
                </button>
              )}

              {index === 2 && (
                <button
                  className="absolute w-[35px] h-[35px] rotate-[-90.00deg]"
                  style={{ top: `${pos.iconTop}px`, left: `${pos.left}px` }}
                  aria-label={item.label}
                  aria-current={item.active ? "page" : undefined}
                >
                  <div className="absolute top-px left-0 w-[35px] h-[35px] aspect-[1]">
                    <img
                      className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.49%]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                  <div className="absolute w-full top-px left-0 h-[35px] aspect-[1]">
                    <img
                      className="absolute w-[75.00%] h-[25.00%] top-[12.50%] left-[12.49%]"
                      alt=""
                      src={item.icon2}
                    />
                  </div>
                </button>
              )}

              {index === 3 && (
                <button
                  className="absolute w-[31px] h-[31px] rotate-[-90.00deg] aspect-[1]"
                  style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
                  aria-label={item.label}
                  aria-current={item.active ? "page" : undefined}
                >
                  <div className="w-[68.42%] h-[63.16%] top-[31.58%] left-[15.79%] rounded-[10.51px/9.7px] absolute bg-[#999999]" />
                  <img
                    className="absolute w-[92.33%] h-[100.00%] top-0 left-[3.83%]"
                    alt=""
                    src={item.icon}
                  />
                </button>
              )}

              {index === 4 && (
                <button
                  className="absolute w-[35px] h-[35px] rotate-[-90.00deg]"
                  style={{ top: `${pos.top}px`, left: `${pos.left}px` }}
                  aria-label={item.label}
                  aria-current={item.active ? "page" : undefined}
                >
                  <img className="w-full h-full" alt="" src={item.icon} />
                </button>
              )}

              {index === 5 && (
                <button
                  className="absolute w-[35px] h-[35px] rotate-[-90.00deg]"
                  style={{ top: `${pos.iconTop}px`, left: `${pos.left}px` }}
                  aria-label={item.label}
                  aria-current={item.active ? "page" : undefined}
                >
                  <div className="absolute top-0 left-0 w-[35px] h-[35px] aspect-[1]">
                    <img
                      className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.34%]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-[35px] h-[35px] aspect-[1]">
                    <img
                      className="absolute w-[83.33%] h-[25.00%] top-[16.66%] left-[8.34%]"
                      alt=""
                      src={item.icon2}
                    />
                  </div>
                </button>
              )}

              <span
                className={`absolute h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium ${
                  item.active ? "text-[#0088ff]" : "text-[#999999]"
                } text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap`}
                style={{ top: `${pos.textTop}px`, left: `${pos.textLeft}px` }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </nav>
    </div>
  );
};
