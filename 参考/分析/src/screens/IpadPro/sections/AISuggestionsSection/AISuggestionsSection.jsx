export const AISuggestionsSection = () => {
  const navigationItems = [
    { id: 1, label: "顧客一覧", isActive: true },
    { id: 2, label: "分析", isActive: false },
  ];

  return (
    <nav
      className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[2] flex flex-col gap-[566.5px] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
      role="navigation"
      aria-label="メインナビゲーション"
    >
      <button
        className="ml-[-34.5px] w-[183px] h-[42px] mt-[113.5px] flex justify-center bg-[#ffffff1a] rounded-[20.49px] overflow-hidden rotate-[-90.00deg] shadow-[0px_0px_7.17px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.14),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        aria-label="顧客一覧"
        aria-current="page"
      >
        <span className="mt-[3px] w-[177px] h-9 flex justify-center bg-[#0088ffb2] rounded-[20.49px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.14),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
          <span className="flex items-center justify-center w-[61px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[13px] text-center tracking-[0.91px] leading-[35.5px] whitespace-nowrap">
            顧客一覧
          </span>
        </span>
      </button>

      <button
        className="ml-[29.0px] w-[55px] h-[43px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]"
        aria-label="分析"
      >
        分析
      </button>
    </nav>
  );
};
