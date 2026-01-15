import { useState } from "react";

export const IpadPro = () => {
  const [activeTab, setActiveTab] = useState("treatment");

  const navigationItems = [
    { id: "settings", label: "設定", icon: "settings", color: "#0088ff" },
    { id: "customers", label: "顧客", icon: "customers", color: "#999999" },
    { id: "summary", label: "集計", icon: "summary", color: "#999999" },
    { id: "sales", label: "売上", icon: "sales", color: "#999999" },
    { id: "analysis", label: "分析", icon: "analysis", color: "#999999" },
    { id: "treatment", label: "施術", icon: "treatment", color: "#999999" },
  ];

  const tableData = [
    { field: "ID", value: "2" },
    { field: "名前", value: "伊藤彰吾" },
  ];

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] flex relative"
      data-model-id="1:8054"
    >
      <header className="fixed top-[167px] left-[34px] w-[763px] h-[382px] z-[3] flex flex-col">
        <div className="h-14 w-[763px] self-center flex bg-white rounded-[10.15px] overflow-hidden shadow-[0px_1px_10.15px_#0000001a,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)]">
          <h1 className="mt-3 w-[132px] h-[34px] ml-14 [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[20.8px] tracking-[1.45px] leading-[normal]">
            伊藤彰吾さん
          </h1>
        </div>

        <img
          className="ml-1.5 w-[755px] h-[82px] mt-[45px] aspect-[9.21]"
          alt="Cleanshot"
          src="/img/cleanshot-2025-12-15-at-05-37-44-2x-1.png"
        />

        <nav
          className="ml-1 h-[72px] w-[581px] self-center relative mt-[127px]"
          role="navigation"
          aria-label="Main navigation"
        >
          <button
            onClick={() => setActiveTab("password")}
            className="absolute top-0 left-[calc(50.00%_-_290px)] w-[271px] h-[72px] flex items-center justify-center bg-[#ffffff1a] rounded-[36.71px] overflow-hidden shadow-[0px_0px_9.4px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)] backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)]"
            aria-label="パスワード変更"
          >
            <span className="h-16 ml-px w-[226px] relative rounded-[36.71px] overflow-hidden flex items-center justify-center">
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#323430] text-[17px] text-center tracking-[1.19px] leading-[46.5px]">
                パスワード変更
              </span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab("treatment")}
            className="absolute top-0 left-[calc(50.00%_+_20px)] w-[271px] h-[72px] flex bg-[#ffffff1a] rounded-[36.71px] overflow-hidden shadow-[0px_0px_9.4px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)] backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)]"
            aria-label="施術集計"
          >
            <span className="mt-1 w-[262px] h-16 ml-[5px] relative bg-[#0088ffb2] rounded-[36.71px] overflow-hidden backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)] flex items-center justify-center">
              <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[17px] text-center tracking-[1.19px] leading-[46.5px]">
                施術集計
              </span>
            </span>
          </button>
        </nav>
      </header>

      <aside
        className="fixed top-[728px] left-[351px] w-[131px] h-[834px] z-[2] bg-white rotate-[90.00deg] shadow-[0px_4px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        role="navigation"
        aria-label="Sidebar navigation"
      >
        <button
          className="absolute top-[716px] left-[22px] w-[35px] h-[35px] rotate-[-90.00deg] aspect-[1]"
          aria-label="施術"
        >
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
        </button>

        <button
          className="absolute top-[211px] left-[23px] w-[35px] h-[35px] rotate-[-90.00deg]"
          aria-label="顧客"
        >
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
        </button>

        <button
          className="absolute top-[84px] left-[23px] w-[35px] h-[35px] rotate-[-90.00deg] aspect-[1]"
          aria-label="設定"
          aria-current="page"
        >
          <div className="absolute w-[45.83%] h-[45.83%] top-[25.00%] left-[29.16%] bg-[#46a7fd] rounded-[8.05px]" />
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
            alt=""
            src="/img/vector-4.svg"
          />
        </button>

        <button
          className="absolute top-[466px] left-[25px] w-[31px] h-[31px] rotate-[-90.00deg] aspect-[1]"
          aria-label="売上"
        >
          <div className="absolute w-[68.42%] h-[63.16%] top-[31.58%] left-[15.79%] bg-[#999999] rounded-[10.51px/9.7px]" />
          <img
            className="absolute w-[92.33%] h-[100.00%] top-0 left-[3.83%]"
            alt=""
            src="/img/vector-5.svg"
          />
        </button>

        <img
          className="absolute top-[589px] left-[22px] w-[35px] h-[35px] rotate-[-90.00deg]"
          alt="分析"
          src="/img/frame-517.svg"
        />

        <button
          className="absolute top-[339px] left-[23px] w-[35px] h-[35px] rotate-[-90.00deg]"
          aria-label="集計"
        >
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
        </button>

        <span className="absolute top-[723px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          施術
        </span>

        <span className="absolute top-[597px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          分析
        </span>

        <span className="absolute top-[471px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          売上
        </span>

        <span className="absolute top-[346px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          集計
        </span>

        <span className="absolute top-[219px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          顧客
        </span>

        <span className="absolute top-[92px] left-[59px] h-[19px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#0088ff] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
          設定
        </span>
      </aside>

      <div className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[1] flex bg-white rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
        <h2 className="mt-[722.0px] w-[55px] h-[43px] ml-[29.0px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          設定
        </h2>
      </div>
    </div>
  );
};
