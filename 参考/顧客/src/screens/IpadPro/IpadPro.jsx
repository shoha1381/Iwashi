import { useState } from "react";

export const IpadPro = () => {
  const [searchName, setSearchName] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [filterOption, setFilterOption] = useState("すべての顧客");

  const customerData = [
    { id: 1, name: "イソンヒ", nameKana: "イソンヒ", phone: "上野" },
    { id: 2, name: "佐藤 雅子 口", nameKana: "サトウ ママコ", phone: "上野" },
    { id: 3, name: "杉本 夏美", nameKana: "スギモト ナツミ", phone: "上野" },
    {
      id: 4,
      name: "センボンマツ マサエ",
      nameKana: "センボンマツ マサエ",
      phone: "上野",
    },
    { id: 5, name: "田和山 順花", nameKana: "田和山 順花", phone: "上野" },
    { id: 6, name: "柴田 結美", nameKana: "ウメダ ユイナ", phone: "上野" },
    { id: 7, name: "大塚 修子 ヒ", nameKana: "オオオカ コココ", phone: "上野" },
    { id: 8, name: "小野塚 ウ", nameKana: "コヤナギ マイ", phone: "上野" },
    { id: 9, name: "廣 金美 ハ", nameKana: "サカイ ミユキ", phone: "上野" },
    { id: 10, name: "田之上 明子", nameKana: "タノウエ アキコ", phone: "上野" },
    { id: 11, name: "中西 南", nameKana: "ナカニシ ミミ", phone: "上野" },
    { id: 12, name: "中川 真成", nameKana: "中川 真成", phone: "上野" },
  ];

  const navigationItems = [
    {
      id: "settings",
      label: "設定",
      icon: "settings",
      color: "#999999",
      active: false,
    },
    {
      id: "customers",
      label: "顧客",
      icon: "customers",
      color: "#0088ff",
      active: true,
    },
    {
      id: "analytics",
      label: "集計",
      icon: "analytics",
      color: "#999999",
      active: false,
    },
    {
      id: "sales",
      label: "売上",
      icon: "sales",
      color: "#999999",
      active: false,
    },
    {
      id: "analysis",
      label: "分析",
      icon: "analysis",
      color: "#999999",
      active: false,
    },
    {
      id: "treatment",
      label: "施術",
      icon: "treatment",
      color: "#999999",
      active: false,
    },
  ];

  return (
    <main
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] relative"
      data-model-id="58:4365"
      role="main"
    >
      <header className="absolute top-[162px] left-[42px] right-[42px]">
        <img
          className="absolute top-0 left-0 w-[239px] h-[27px] aspect-[8.77] object-cover"
          alt="顧客名で検索"
          src="/img/cleanshot-2025-10-28-at-14-01-32-2x-1.png"
        />

        <img
          className="absolute top-[1px] left-[272px] w-[241px] h-[25px] aspect-[9.62] object-cover"
          alt="電話番号で検索"
          src="/img/cleanshot-2025-10-28-at-14-01-45-2x-1.png"
        />

        <img
          className="absolute top-[1px] left-[675px] w-[72px] h-[25px] aspect-[2.92] object-cover"
          alt="すべての顧客"
          src="/img/cleanshot-2025-10-28-at-14-01-54-2x-1.png"
        />
      </header>

      <section
        className="absolute top-[210px] left-[42px]"
        aria-label="顧客リスト"
      >
        <img
          className="w-[750px] h-[316px] aspect-[2.37] object-cover"
          alt="顧客一覧テーブル"
          src="/img/cleanshot-2025-10-28-at-14-02-07-2x-1.png"
        />
      </section>

      <nav
        className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] flex bg-white rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        aria-label="トップナビゲーション"
      >
        <h1 className="mt-[722.0px] w-[55px] h-[43px] ml-[29.0px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          顧客
        </h1>
      </nav>

      <nav
        className="fixed top-[728px] left-[calc(50.00%_-_66px)] w-[131px] h-[834px] flex flex-col bg-white rotate-[90.00deg] shadow-[0px_4px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        aria-label="メインナビゲーション"
      >
        {navigationItems.map((item, index) => (
          <button
            key={item.id}
            className={`ml-[${index === 3 ? "25.0" : index === 0 ? "23.0" : "22.0"}px] w-[${index === 3 ? "57" : index === 0 ? "59" : "60"}px] ${index === 3 ? "h-[30.72px]" : ""} ${index === 0 ? "mt-[84.0px]" : "mt-[92.2px]"} flex ${index === 3 ? "gap-[2.8px]" : index === 0 ? "gap-[0.4px]" : "gap-[1.4px]"}`}
            aria-label={item.label}
            aria-current={item.active ? "page" : undefined}
          >
            {item.id === "settings" && (
              <>
                <div className="mt-0 w-[35.11px] h-[35.11px] relative ml-0 rotate-[-90.00deg] aspect-[1]">
                  <div className="w-[45.83%] h-[45.83%] top-[25.00%] left-[29.16%] rounded-[8.05px] absolute bg-[#999999]" />
                  <img
                    className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
                    alt=""
                    src="/img/vector-7.svg"
                  />
                </div>
                <span className="flex items-center justify-center mt-[8.5px] w-7 h-[19px] rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
                  設定
                </span>
              </>
            )}

            {item.id === "customers" && (
              <>
                <div className="mt-0 w-[35.11px] h-[35.11px] relative ml-0 rotate-[-90.00deg]">
                  <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
                    <img
                      className="absolute w-[93.75%] h-[68.75%] top-[15.62%] left-[3.12%]"
                      alt=""
                      src="/img/vector-5.svg"
                    />
                  </div>
                  <div className="absolute top-0 left-px w-[35px] h-[35px] aspect-[1]">
                    <img
                      className="absolute w-[62.50%] h-[68.75%] top-[15.62%] left-[34.38%]"
                      alt=""
                      src="/img/vector-6.svg"
                    />
                  </div>
                </div>
                <span className="flex items-center justify-center mt-[8.2px] w-7 h-[19px] rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#0088ff] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
                  顧客
                </span>
              </>
            )}

            {item.id === "analytics" && (
              <>
                <div className="mt-0 w-[35.11px] h-[35.11px] relative ml-0 rotate-[-90.00deg]">
                  <div className="absolute top-px left-0 w-[35px] h-[35px] aspect-[1]">
                    <img
                      className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.50%]"
                      alt=""
                      src="/img/vector-3.svg"
                    />
                  </div>
                  <div className="absolute w-full top-px left-0 h-[35px] aspect-[1]">
                    <img
                      className="absolute w-[75.00%] h-[25.00%] top-[12.50%] left-[12.50%]"
                      alt=""
                      src="/img/vector-4.svg"
                    />
                  </div>
                </div>
                <span className="flex items-center justify-center mt-[7.9px] w-7 h-[19px] rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
                  集計
                </span>
              </>
            )}

            {item.id === "sales" && (
              <>
                <div className="mt-0 w-[30.72px] h-[30.72px] relative ml-0 rotate-[-90.00deg] aspect-[1]">
                  <div className="w-[68.42%] h-[63.16%] top-[31.58%] left-[15.79%] rounded-[10.51px/9.7px] absolute bg-[#999999]" />
                  <img
                    className="absolute w-[92.33%] h-[100.00%] top-0 left-[3.83%]"
                    alt=""
                    src="/img/vector-2.svg"
                  />
                </div>
                <span className="flex items-center justify-center mt-[5.8px] w-7 h-[19px] rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
                  売上
                </span>
              </>
            )}

            {item.id === "analysis" && (
              <>
                <img
                  className="mt-0 w-[35.11px] h-[35.11px] ml-0 rotate-[-90.00deg]"
                  alt=""
                  src="/img/frame-517.svg"
                />
                <span className="flex items-center justify-center mt-[8.9px] w-7 h-[19px] rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
                  分析
                </span>
              </>
            )}

            {item.id === "treatment" && (
              <>
                <div className="mt-0 w-[35.11px] h-[35.11px] relative ml-0 rotate-[-90.00deg] aspect-[1]">
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
                <span className="flex items-center justify-center mt-[7.6px] w-7 h-[19px] rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.1px] text-center tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
                  施術
                </span>
              </>
            )}
          </button>
        ))}
      </nav>
    </main>
  );
};
