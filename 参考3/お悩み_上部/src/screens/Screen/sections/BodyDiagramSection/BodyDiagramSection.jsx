import { useState } from "react";

export const BodyDiagramSection = () => {
  const [activeTab, setActiveTab] = useState("upper");

  const bodyParts = [
    {
      title: "顔全体",
      items: [
        { text: "小さくしたい", highlighted: false },
        { text: "丸顔を改善したい", disabled: true },
        { text: "面長を改善したい", highlighted: true },
        { text: "左右差を取りたい", highlighted: false },
        { text: "むくみを取りたい", highlighted: false },
        { text: "たるみを取りたい\n（リフトUP）", highlighted: false },
        { text: "くすみをとりたい", disabled: true },
        { text: "アンチエイジング", highlighted: false },
        { text: "立体的な顔にしたい", highlighted: false },
      ],
      height: "h-[402.45px]",
    },
    {
      title: "頭",
      items: [
        { text: "小さくしたい", highlighted: false },
        { text: "左右差を取りたい", highlighted: false },
        { text: "ハチの張りをなくしたい", disabled: true },
      ],
      height: "h-[175.48px]",
    },
  ];

  const bodyPartsColumn2 = [
    {
      title: "額",
      items: [
        { text: "形を整えたい", highlighted: false },
        { text: "しわを消したい", disabled: true },
      ],
      height: "h-[141.14px]",
    },
    {
      title: "眉",
      items: [
        { text: "左右差を取りたい", highlighted: false },
        { text: "眉間のしわを消したい", highlighted: false },
      ],
      height: "h-[141.14px]",
    },
    {
      title: "目",
      items: [
        { text: "大きくしたい", highlighted: false },
        { text: "むくみを取りたい", highlighted: false },
        { text: "クマを消したい", highlighted: false },
        { text: "左右均等にしたい", highlighted: false },
        { text: "たるみを取りたい", highlighted: false },
        { text: "しわを消したい", disabled: true },
      ],
      height: "h-[278.47px]",
    },
  ];

  const bodyPartsColumn3 = [
    {
      title: "鼻",
      items: [
        { text: "高くしたい", highlighted: false },
        { text: "小さくしたい", highlighted: false },
        { text: "鼻すじを通したい", highlighted: false },
        { text: "歪みを取りたい", highlighted: false },
      ],
      height: "h-[209.81px]",
    },
    {
      title: "頬",
      items: [
        { text: "頬骨を凹ませたい", highlighted: false },
        { text: "厚みを取りたい", highlighted: false },
        { text: "ほうれい線を消したい", highlighted: false },
        { text: "頬こけをなくしたい", disabled: true },
      ],
      height: "h-[209.81px]",
    },
  ];

  const bodyPartsColumn4 = [
    {
      title: "口",
      items: [
        { text: "口角を上げたい", highlighted: false },
        { text: "左右差を取りたい", highlighted: false },
        { text: "しわを消したい", disabled: true },
      ],
      height: "h-[175.48px]",
    },
    {
      title: "顎",
      items: [
        { text: "エラの張りを取りたい▶", highlighted: true },
        { text: "二重あごをなくしたい", highlighted: false },
        { text: "フェイスラインを\nすっきりさせたい", highlighted: false },
        { text: "左右差を取りたい", disabled: true },
        { text: "たるみを取りたい", disabled: true },
        { text: "あご先の肉を取りたい", highlighted: false },
      ],
      height: "h-[295.64px]",
    },
  ];

  const bodyPartsColumn5 = [
    {
      title: "首",
      items: [
        { text: "細くしたい", highlighted: false },
        { text: "長くしたい", disabled: true },
        { text: "コリを取りたい", highlighted: false },
      ],
      height: "h-[175.48px]",
    },
    {
      title: "肩",
      items: [
        { text: "巻き肩を改善したい", highlighted: false },
        { text: "鎖骨を出したい", highlighted: false },
        { text: "コリを取りたい", disabled: true },
        { text: "肩幅を小さく見せたい", highlighted: false },
        { text: "二の腕を細くしたい", highlighted: false },
        { text: "デコルテを綺麗にしたい", disabled: true },
      ],
      height: "h-[278.47px]",
    },
  ];

  const renderBodyPartCard = (part, index) => (
    <article
      key={index}
      className={`relative self-stretch w-full ${part.height} bg-[#ffffff1a] rounded-[9.84px] overflow-hidden border-[0.79px] border-solid border-[#ffffff26] shadow-[0px_0px_5px_#00000026] backdrop-blur-[3.92px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.92px)_brightness(100%)]`}
      aria-labelledby={`body-part-${index}`}
    >
      <header className="absolute top-4 left-[calc(50.00%_-_63px)] w-[126px] h-9 flex items-center justify-center bg-[#ffffff1a] rounded-[9.84px] overflow-hidden border-[0.79px] border-solid border-[#ffffff26] shadow-[0px_0px_9.54px_#0000001a] backdrop-blur-[3.92px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3.92px)_brightness(100%)]">
        <h3
          id={`body-part-${index}`}
          className="flex items-center justify-center mt-0 h-[21px] ml-0 w-[83.92px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13.4px] text-center tracking-[0.93px] leading-[21.0px]"
        >
          {part.title}
        </h3>
      </header>

      <ul className="absolute top-[73px] left-[calc(50.00%_-_65px)] w-[130px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-xs text-center tracking-[0.84px] leading-[17.2px] list-none p-0 m-0">
        {part.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className={`${
              item.highlighted
                ? "inline-flex items-center justify-center gap-[7.63px] px-[29.57px] py-[3.82px] bg-[#ff00001a] rounded-[9.54px] overflow-hidden text-[#da0000] my-1"
                : item.disabled
                  ? "text-[#0000004c] tracking-[0.10px]"
                  : "text-black tracking-[0.10px]"
            }`}
          >
            {item.text.split("\n").map((line, lineIndex) => (
              <span key={lineIndex}>
                {line}
                {lineIndex < item.text.split("\n").length - 1 && <br />}
              </span>
            ))}
            {itemIndex < part.items.length - 1 && !item.highlighted && (
              <>
                <br />
                <br />
              </>
            )}
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <section
      className="relative w-[834px] h-[588px]"
      aria-label="Body diagram section"
    >
      <div className="absolute top-0 left-0 w-[834px] h-[588px] flex justify-center">
        <div className="inline-flex w-[817.3px] h-[588px] ml-[-1.0px] relative items-start gap-[10.49px]">
          <div className="flex flex-col w-[154.5px] items-start gap-[10.49px] relative mb-[-0.42px]">
            {bodyParts.map((part, index) => renderBodyPartCard(part, index))}
          </div>

          <div className="flex flex-col w-[154.5px] h-[597px] items-start gap-[10.49px] pt-0 pb-[10.49px] px-0 relative mb-[-9.00px]">
            {bodyPartsColumn2.map((part, index) =>
              renderBodyPartCard(part, `col2-${index}`),
            )}
          </div>

          <div className="flex flex-col w-[155.45px] items-start gap-[10.49px] relative">
            {bodyPartsColumn3.map((part, index) =>
              renderBodyPartCard(part, `col3-${index}`),
            )}
          </div>

          <div className="flex flex-col w-[155.45px] items-start gap-[10.49px] relative">
            {bodyPartsColumn4.map((part, index) =>
              renderBodyPartCard(part, `col4-${index}`),
            )}
          </div>

          <div className="flex flex-col w-[155.45px] items-start gap-[10.49px] relative">
            {bodyPartsColumn5.map((part, index) =>
              renderBodyPartCard(part, `col5-${index}`),
            )}
          </div>
        </div>
      </div>

      <nav
        className="absolute top-[524px] left-[584px] w-[217px] h-16 bg-[#ffffff1a] rounded-[32px] overflow-hidden shadow-[0px_10px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.14),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        role="tablist"
        aria-label="Body section tabs"
      >
        <button
          className={`absolute top-1 left-1 w-[110px] h-[57px] rounded-[29px] overflow-hidden ${
            activeTab === "upper" ? "bg-[#0088ffb2]" : ""
          }`}
          onClick={() => setActiveTab("upper")}
          role="tab"
          aria-selected={activeTab === "upper"}
          aria-controls="upper-body-panel"
        >
          <span
            className={`absolute h-[62.06%] top-[18.97%] left-[calc(50.00%_-_24px)] w-12 flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[15px] text-center tracking-[1.05px] leading-[35.5px] whitespace-nowrap ${
              activeTab === "upper" ? "text-white" : "text-[#999999]"
            }`}
          >
            上部
          </span>
        </button>

        <button
          className={`absolute top-1 left-[103px] w-[110px] h-[57px] rounded-[29px] overflow-hidden ${
            activeTab === "lower" ? "bg-[#0088ffb2]" : ""
          }`}
          onClick={() => setActiveTab("lower")}
          role="tab"
          aria-selected={activeTab === "lower"}
          aria-controls="lower-body-panel"
        >
          <span
            className={`absolute h-[62.06%] top-[18.97%] left-[calc(50.00%_-_24px)] w-12 flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[15px] text-center tracking-[1.05px] leading-[35.5px] whitespace-nowrap ${
              activeTab === "lower" ? "text-white" : "text-[#999999]"
            }`}
          >
            下部
          </span>
        </button>
      </nav>
    </section>
  );
};
