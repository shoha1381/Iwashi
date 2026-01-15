export const IpadPro = () => {
  const navigationItems = [
    {
      icon: "/img/vector.svg",
      icon2: "/img/vector-1.svg",
      label: "施術",
      color: "#999999",
    },
    { icon: "/img/frame-517.svg", label: "分析", color: "#999999" },
    {
      icon: "/img/vector-5.svg",
      label: "売上",
      color: "#0088ff",
      isActive: true,
    },
    {
      icon: "/img/vector-6.svg",
      icon2: "/img/vector-7.svg",
      label: "集計",
      color: "#999999",
    },
    {
      icon: "/img/vector-2.svg",
      icon2: "/img/vector-3.svg",
      label: "顧客",
      color: "#999999",
    },
    { icon: "/img/vector-4.svg", label: "設定", color: "#999999" },
  ];

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] flex relative"
      data-model-id="1:8004"
    >
      <header className="fixed top-[167px] left-[34px] w-[763px] h-[468px] z-[2] flex flex-col items-center gap-[65px]">
        <div className="h-14 w-[763px] flex bg-white rounded-[10.15px] overflow-hidden shadow-[0px_1px_10.15px_#0000001a,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)]">
          <p className="mt-3 w-[248px] h-[34px] ml-14 [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-transparent text-[20.8px] tracking-[1.45px] leading-[normal]">
            <span className="text-black tracking-[0.30px]">
              銀座店　2025 / 10 / 6&nbsp;&nbsp;
            </span>
            <span className="text-[#999999] text-[17px] tracking-[0.20px]">
              月
            </span>
          </p>
        </div>

        <section className="ml-1 h-[347px] w-[759px] flex flex-col">
          <h2 className="ml-[19px] w-[55px] h-[43px] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
            合計
          </h2>

          <img
            className="ml-0.5 w-[757px] h-[59px] mt-[34px] aspect-[12.79] object-cover"
            alt="合計データ"
            src="/img/cleanshot-2025-10-28-at-16-54-56-2x-1.png"
          />

          <h2 className="ml-[19px] w-[55px] h-[43px] mt-[58px] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
            内訳
          </h2>

          <img
            className="w-[757px] h-[78px] mt-8 aspect-[9.67] object-cover"
            alt="内訳データ"
            src="/img/cleanshot-2025-10-28-at-16-54-35-2x-1.png"
          />
        </section>
      </header>

      <nav
        className="fixed top-[728px] left-[351px] w-[131px] h-[834px] z-[3] bg-white rotate-[90.00deg] shadow-[0px_4px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
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
          <div className="absolute w-[45.83%] h-[45.83%] top-[25.00%] left-[29.16%] bg-[#999999] rounded-[8.05px]" />
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
            alt=""
            src="/img/vector-4.svg"
          />
        </div>

        <div className="absolute top-[466px] left-[25px] w-[31px] h-[31px] rotate-[-90.00deg] aspect-[1]">
          <div className="absolute w-[68.42%] h-[63.16%] top-[31.58%] left-[15.79%] bg-[#46a7fd] rounded-[10.51px/9.7px]" />
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

        <span className="absolute top-[723px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          施術
        </span>

        <span className="absolute top-[597px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          分析
        </span>

        <span className="absolute top-[471px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#0088ff] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          売上
        </span>

        <span className="absolute top-[346px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          集計
        </span>

        <span className="absolute top-[219px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          顧客
        </span>

        <span className="absolute top-[92px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          設定
        </span>
      </nav>

      <aside className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[1] flex bg-white rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
        <h1 className="mt-[722.0px] w-[55px] h-[43px] ml-[29.0px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          売上
        </h1>
      </aside>
    </div>
  );
};
