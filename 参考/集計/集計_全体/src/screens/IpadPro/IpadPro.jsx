import { useState } from "react";

export const IpadPro = () => {
  const [selectedType, setSelectedType] = useState("媒体");
  const [selectedYear, setSelectedYear] = useState("2025年");
  const [selectedMonth, setSelectedMonth] = useState("11月");
  const [selectedStore, setSelectedStore] = useState("全店舗");
  const [selectedStaff, setSelectedStaff] = useState("矢澤博章");

  const navigationItems = [
    {
      icon: "/img/vector.svg",
      icon2: "/img/vector-1.svg",
      label: "施術",
      active: false,
    },
    {
      icon: "/img/vector-2.svg",
      icon2: "/img/vector-3.svg",
      label: "顧客",
      active: false,
    },
    { icon: "/img/vector-4.svg", icon2: null, label: "設定", active: false },
    {
      icon: "/img/vector-6.svg",
      icon2: "/img/vector-7.svg",
      label: "集計",
      active: true,
    },
    { icon: "/img/vector-5.svg", icon2: null, label: "売上", active: false },
    { icon: "/img/frame-517.svg", icon2: null, label: "分析", active: false },
  ];

  const typeOptions = [
    { value: "媒体", label: "媒体" },
    { value: "施術", label: "施術" },
    { value: "売上", label: "売上" },
  ];

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] flex flex-col relative"
      data-model-id="1:7928"
    >
      <header
        className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[1] flex bg-white rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        role="banner"
      >
        <h1 className="mt-[722.0px] w-[55px] h-[43px] ml-[29.0px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          集計
        </h1>
      </header>

      <main className="fixed top-[167px] left-[calc(50.00%_-_374px)] w-[747px] h-[738px] z-[2] flex flex-col">
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
            <div className="absolute top-[88px] left-0 h-[66px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] tracking-[0.91px] leading-[65.6px] whitespace-nowrap">
              店舗
            </div>

            <div className="absolute top-0 left-0 h-[66px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] tracking-[0.91px] leading-[65.6px] whitespace-nowrap">
              種別
            </div>

            <div className="absolute top-0 left-[316px] h-[66px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] tracking-[0.91px] leading-[65.6px] whitespace-nowrap">
              期間
            </div>

            <div className="absolute top-2.5 left-[57px] w-[210px] h-[47px] bg-white rounded-[23.44px] shadow-[inset_0px_0px_7.81px_#00000026,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.11),inset_-1px_0_1px_rgba(0,0,0,0.09)] backdrop-blur-[1.6px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(1.6px)_brightness(100.0%)_saturate(100.0%)]">
              {typeOptions.map((option, index) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedType(option.value)}
                  className={`absolute top-0.5 ${
                    index === 0
                      ? "left-[3px]"
                      : index === 1
                        ? "left-[70px]"
                        : "left-[137px]"
                  } w-[70px] h-[42px] flex ${
                    selectedType === option.value ? "bg-[#4aa9fc]" : ""
                  } rounded-[21.98px] overflow-hidden ${
                    selectedType !== option.value ? "justify-center" : ""
                  }`}
                  aria-pressed={selectedType === option.value}
                >
                  <div
                    className={`mt-[13.2px] w-7 h-4 ${
                      selectedType === option.value
                        ? "ml-[20.0px]"
                        : index === 1
                          ? "ml-[-1.4px]"
                          : "ml-[-0.8px]"
                    } [font-family:'Noto_Sans_JP',Helvetica] font-normal ${
                      selectedType === option.value
                        ? "text-white"
                        : "text-[#999999]"
                    } text-[13.4px] text-center tracking-[0.94px] leading-[normal] whitespace-nowrap`}
                  >
                    {option.label}
                  </div>
                </button>
              ))}
            </div>

            <div className="absolute w-[20.09%] h-[30.52%] top-[62.99%] left-[8.95%] flex gap-[15.2px] bg-white rounded-[8.81px] shadow-[0px_0px_7.81px_#00000026]">
              <button
                onClick={() => setSelectedStore("全店舗")}
                className="flex items-center justify-center mt-[13.6px] w-[43px] h-[21px] ml-[27.6px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[13.4px] tracking-[0.94px] leading-[20.5px] whitespace-nowrap"
              >
                {selectedStore}
              </button>

              <div className="mt-[13.9px] w-[22.03px] h-[22.03px] relative">
                <img
                  className="absolute w-[50.00%] h-[25.00%] top-[35.00%] left-[22.50%]"
                  alt=""
                  src="/img/icon-3.svg"
                />
              </div>
            </div>

            <div className="absolute top-[88px] left-[316px] h-[66px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] tracking-[0.91px] leading-[65.6px] whitespace-nowrap">
              スタッフ
            </div>

            <div className="absolute top-[97px] left-[389px] w-[142px] h-[47px] flex gap-[15.4px] bg-white rounded-[8.81px] shadow-[0px_0px_7.81px_#00000026]">
              <button
                onClick={() => setSelectedStaff("矢澤博章")}
                className="flex items-center justify-center mt-[13.6px] w-[57px] h-[21px] ml-[27.6px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[13.4px] tracking-[0.94px] leading-[20.5px] whitespace-nowrap"
              >
                {selectedStaff}
              </button>

              <div className="mt-[13.9px] w-[22.03px] h-[22.03px] relative">
                <img
                  className="absolute w-[50.00%] h-[25.00%] top-[35.00%] left-[22.50%]"
                  alt=""
                  src="/img/icon-3.svg"
                />
              </div>
            </div>

            <div className="absolute top-[9px] left-[389px] w-32 h-[47px] flex gap-[13.2px] bg-white rounded-[8.81px] shadow-[0px_0px_7.81px_#00000026]">
              <button
                onClick={() => setSelectedYear("2025年")}
                className="flex items-center justify-center mt-[13.6px] w-[47px] h-[21px] ml-[25.6px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[13.4px] tracking-[0.94px] leading-[20.5px] whitespace-nowrap"
              >
                2025年
              </button>

              <div className="mt-[13.9px] w-[22.03px] h-[22.03px] relative">
                <img
                  className="absolute w-[50.00%] h-[25.00%] top-[35.00%] left-[22.50%]"
                  alt=""
                  src="/img/icon-3.svg"
                />
              </div>
            </div>

            <div className="absolute top-[9px] left-[526px] w-[111px] h-[47px] flex gap-[12.4px] bg-white rounded-[8.81px] shadow-[0px_0px_7.81px_#00000026]">
              <button
                onClick={() => setSelectedMonth("11月")}
                className="flex items-center justify-center mt-[13.6px] w-[31px] h-[21px] ml-[25.6px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[13.4px] tracking-[0.94px] leading-[20.5px] whitespace-nowrap"
              >
                11月
              </button>

              <div className="mt-[13.9px] w-[22.03px] h-[22.03px] relative">
                <img
                  className="absolute w-[50.00%] h-[25.00%] top-[35.00%] left-[22.50%]"
                  alt=""
                  src="/img/icon-3.svg"
                />
              </div>
            </div>
          </div>
        </section>

        <button className="ml-[615.9px] h-16 w-[128.89px] self-center mt-7 flex bg-[#ffffff1a] rounded-[32.63px] overflow-hidden shadow-[0px_0px_8.36px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)] backdrop-blur-[2.4px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.4px)_brightness(100.0%)_saturate(100.0%)]">
          <div className="mt-[3.6px] w-[120px] h-[56.89px] ml-[4.4px] relative bg-[#0088ffb2] rounded-[32.63px] overflow-hidden backdrop-blur-[2.4px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.4px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)]">
            <div className="absolute h-full top-0 left-[calc(50.00%_-_97px)] w-[196px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[15.2px] text-center tracking-[1.06px] leading-[41.4px]">
              集計
            </div>
          </div>
        </button>

        <section
          className="h-[419px] w-[747px] self-center mt-[51px] flex flex-col gap-[10px]"
          aria-label="集計結果"
        >
          <div className="h-[46px] px-[18px] flex items-center justify-between bg-[#ffffff73] rounded-[16px] border border-solid border-[#ffffff1a] shadow-[0px_0px_12px_#00000012] backdrop-blur-[10px] backdrop-brightness-[100%]">
            <h2 className="[font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[20px] tracking-[1.2px]">
              集計結果
            </h2>
            <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#999999] text-[12px] tracking-[0.6px]">
              更新 2025/11/20
            </span>
          </div>

          <div className="h-[74px] flex gap-[10px]">
            {[
              {
                label: "総売上",
                value: "¥3,245,000",
                note: "前月比 +8.2%",
              },
              {
                label: "来店数",
                value: "1,284 名",
                note: "前月比 +3.6%",
              },
              {
                label: "平均単価",
                value: "¥8,420",
                note: "前月比 +1.1%",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex-1 px-[18px] py-[12px] bg-white rounded-[14px] shadow-[0px_0px_12px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40)]"
              >
                <p className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#666666] text-[12px] tracking-[0.6px]">
                  {item.label}
                </p>
                <p className="mt-[6px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-black text-[18px] tracking-[0.6px]">
                  {item.value}
                </p>
                <p className="mt-[2px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#0088ff] text-[11px] tracking-[0.4px]">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="h-[170px] flex gap-[10px]">
            <div className="flex-1 px-[18px] py-[12px] bg-[#ffffff73] rounded-[16px] border border-solid border-[#ffffff1a] shadow-[0px_0px_12px_#00000012] backdrop-blur-[10px]">
              <div className="flex items-center justify-between">
                <p className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[12px] tracking-[0.6px]">
                  施術カテゴリ別 売上推移
                </p>
                <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#999999] text-[11px] tracking-[0.4px]">
                  直近6ヶ月
                </span>
              </div>
              <div className="mt-[14px] h-[104px] flex items-end gap-[10px]">
                {[62, 74, 58, 86, 70, 92].map((height, index) => (
                  <div key={`bar-${height}-${index}`} className="flex-1 flex flex-col items-center gap-[6px]">
                    <div
                      className="w-full rounded-[8px] bg-[#0088ffb2]"
                      style={{ height: `${height}px` }}
                    />
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#999999] text-[10px] tracking-[0.3px]">
                      {index + 6}月
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[220px] px-[16px] py-[12px] bg-white rounded-[16px] shadow-[0px_0px_12px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40)]">
              <p className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[12px] tracking-[0.6px]">
                施術ランキング
              </p>
              <div className="mt-[10px] flex flex-col gap-[8px]">
                {[
                  { label: "カット", value: "¥1,020,000" },
                  { label: "カラー", value: "¥820,000" },
                  { label: "パーマ", value: "¥610,000" },
                  { label: "トリートメント", value: "¥420,000" },
                ].map((row, index) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between bg-[#f7f9fc] rounded-[10px] px-[10px] py-[6px]"
                  >
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#666666] text-[11px] tracking-[0.4px]">
                      {index + 1}. {row.label}
                    </span>
                    <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-black text-[11px] tracking-[0.4px]">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[99px] px-[18px] py-[10px] bg-white rounded-[16px] shadow-[0px_0px_12px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40)]">
            <div className="grid grid-cols-4 gap-[8px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[11px] tracking-[0.4px]">
              <span>店舗</span>
              <span>売上</span>
              <span>来店数</span>
              <span>客単価</span>
            </div>
            <div className="mt-[8px] flex flex-col gap-[6px] [font-family:'Noto_Sans_JP',Helvetica] text-[11px] tracking-[0.4px]">
              {[
                { store: "銀座店", sales: "¥1,220,000", visits: "420", avg: "¥9,200" },
                { store: "上野店", sales: "¥980,000", visits: "380", avg: "¥8,100" },
                { store: "渋谷店", sales: "¥1,045,000", visits: "484", avg: "¥8,650" },
              ].map((row) => (
                <div
                  key={row.store}
                  className="grid grid-cols-4 gap-[8px] text-black"
                >
                  <span>{row.store}</span>
                  <span>{row.sales}</span>
                  <span>{row.visits}</span>
                  <span>{row.avg}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <nav
        className="fixed top-[728px] left-[351px] w-[131px] h-[834px] z-[3] bg-white rotate-[90.00deg] shadow-[0px_4px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        role="navigation"
        aria-label="メインナビゲーション"
      >
        <div className="absolute top-[716px] left-[22px] w-[35px] h-[35px] rotate-[-90.00deg] aspect-[1]">
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.34%]"
            alt=""
            src="/img/vector.svg"
          />

          <img
            className="absolute w-[83.33%] h-[25.00%] top-[16.66%] left-[8.34%]"
            alt=""
            src="/img/vector-1.svg"
          />
        </div>

        <div className="absolute top-[211px] left-[23px] w-[35px] h-[35px] rotate-[-90.00deg]">
          <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[93.75%] h-[68.75%] top-[15.62%] left-[3.12%]"
              alt=""
              src="/img/vector-2.svg"
            />
          </div>

          <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[62.50%] h-[68.75%] top-[15.62%] left-[34.38%]"
              alt=""
              src="/img/vector-3.svg"
            />
          </div>
        </div>

        <div className="absolute top-[84px] left-[23px] w-[35px] h-[35px] rotate-[-90.00deg] aspect-[1]">
          <div className="w-[45.83%] h-[45.83%] top-[25.00%] left-[29.16%] rounded-[8.05px] absolute bg-[#999999]" />

          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
            alt=""
            src="/img/vector-4.svg"
          />
        </div>

        <div className="absolute top-[466px] left-[25px] w-[31px] h-[31px] rotate-[-90.00deg] aspect-[1]">
          <div className="w-[68.42%] h-[63.16%] top-[31.58%] left-[15.79%] rounded-[10.51px/9.7px] absolute bg-[#999999]" />

          <img
            className="absolute w-[92.33%] h-[100.00%] top-0 left-[3.83%]"
            alt=""
            src="/img/vector-5.svg"
          />
        </div>

        <img
          className="absolute top-[589px] left-[22px] w-[35px] h-[35px] rotate-[-90.00deg]"
          alt=""
          src="/img/frame-517.svg"
        />

        <div className="absolute top-[339px] left-[23px] w-[35px] h-[35px] rotate-[-90.00deg]">
          <div className="absolute top-px left-0 w-[35px] h-[35px] aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.50%]"
              alt=""
              src="/img/vector-6.svg"
            />
          </div>

          <div className="absolute w-full top-px left-0 h-[35px] aspect-[1]">
            <img
              className="absolute w-[75.00%] h-[25.00%] top-[12.50%] left-[12.50%]"
              alt=""
              src="/img/vector-7.svg"
            />
          </div>
        </div>

        <button className="absolute top-[723px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          施術
        </button>

        <button className="absolute top-[597px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          分析
        </button>

        <button className="absolute top-[471px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          売上
        </button>

        <button
          className="absolute top-[346px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#0088ff] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap"
          aria-current="page"
        >
          集計
        </button>

        <button className="absolute top-[219px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          顧客
        </button>

        <button className="absolute top-[92px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          設定
        </button>
      </nav>
    </div>
  );
};
