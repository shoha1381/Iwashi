import { useState } from "react";

export const IpadPro = () => {
  const [activeComparison, setActiveComparison] = useState(null);

  const comparisonData = [
    {
      id: 1,
      title: "三浦様",
      columns: [
        {
          label: "施術を受けない場合",
          image: "/img/1.png",
          hasOverlay: true,
          overlayImage: "/img/gemini-generated-image-3-1.png",
          icon: "/img/union-3.svg",
        },
        {
          label: "現在",
          image: "/img/gemini-generated-image-3-1.png",
          hasOverlay: false,
          icon: "/img/union-4.svg",
        },
        {
          label: "施術を受けた場合",
          image: "/img/3-3.png",
          hasOverlay: false,
          icon: "/img/union-5.svg",
        },
      ],
    },
    {
      id: 2,
      title: "モデルケース",
      columns: [
        {
          label: "施術を受けた場合",
          image: "/img/google-gemini-1-2.png",
          hasOverlay: false,
          icon: "/img/union-3.svg",
        },
        {
          label: "現在",
          image: "/img/3-2.png",
          hasOverlay: true,
          overlayImage: "/img/google-gemini-1-2.png",
          icon: "/img/union-4.svg",
        },
        {
          label: "施術を受けた場合",
          image: "/img/google-gemini-1-2.png",
          hasOverlay: true,
          overlayImage: "/img/3-3.png",
          icon: "/img/union-5.svg",
        },
      ],
    },
  ];

  const handleCompareClick = (comparisonId) => {
    setActiveComparison(
      activeComparison === comparisonId ? null : comparisonId,
    );
  };

  return (
    <div
      className="bg-white w-full min-w-[834px] min-h-[1194px] flex flex-col relative"
      data-model-id="1:3234"
    >
      <header className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[2] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
        <button
          className="absolute top-[calc(50.00%_-_374px)] left-[34px] w-[42px] h-[42px] rotate-[-90.00deg]"
          aria-label="閉じる"
        >
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
            <img
              className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
              alt=""
              src="/img/blur.svg"
            />

            <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

            <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
          </div>

          <div className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] aspect-[1]">
            <img
              className="absolute w-[66.67%] h-[66.67%] top-[13.24%] left-[13.24%]"
              alt="閉じる"
              src="/img/vector.svg"
            />
          </div>
        </button>

        <h1 className="absolute top-[680px] left-[-13px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          写真AI生成
        </h1>
      </header>

      <main className="fixed top-[188px] left-[calc(50.00%_-_372px)] w-[744px] h-[911px] z-[1] flex flex-col">
        {comparisonData.map((comparison, index) => (
          <section key={comparison.id}>
            <article className="h-[337px] relative bg-[#ffffff47] rounded-[6.71px] overflow-hidden border-[0.54px] border-solid border-[#ffffff1a] shadow-[0px_0px_7px_#00000026] backdrop-blur-[11.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.9px)_brightness(100%)]">
              <img
                className="absolute top-14 left-[calc(50.00%_-_124px)] w-px h-[281px]"
                alt=""
                src="/img/vector-96-1.svg"
              />

              <img
                className="absolute top-14 left-[calc(50.00%_+_125px)] w-px h-[281px]"
                alt=""
                src="/img/vector-96-1.svg"
              />

              <img
                className="absolute top-14 left-0 w-[744px] h-px"
                alt=""
                src="/img/vector-97-1.svg"
              />

              <img
                className="absolute top-[103px] left-0 w-[744px] h-px"
                alt=""
                src="/img/vector-97-1.svg"
              />

              {comparison.columns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className={`absolute top-[${colIndex === 0 ? "104" : "103"}px] left-[${colIndex * 248 + (colIndex === 2 ? 1 : 0)}px] w-[247px] h-[${colIndex === 0 ? "233" : "234"}px]`}
                >
                  <div
                    className={`top-[${colIndex === 0 ? "44" : "45"}px] absolute left-[43px] w-40 h-40 rounded-[8.8px] border-[0.88px] border-solid border-[#0000004c]`}
                  />

                  <img
                    className={`absolute top-[${colIndex === 0 ? "100" : "101"}px] left-[99px] w-12 h-12`}
                    alt=""
                    src={column.icon}
                  />

                  {column.hasOverlay && column.overlayImage && (
                    <img
                      className={`absolute top-[${colIndex === 0 ? "23" : "24"}px] left-[calc(50.00%_-_${colIndex === 0 ? "94" : "92"}px)] w-[185px] h-[${colIndex === 0 ? "185" : "186"}px] ${colIndex === 0 ? "" : "aspect-[0.99]"}`}
                      alt=""
                      src={column.overlayImage}
                    />
                  )}

                  <img
                    className={`absolute top-[${colIndex === 0 ? "23" : "24"}px] left-[${colIndex === 0 ? "30" : "calc(50.00%_-_92px)"}px] w-[${colIndex === 0 ? "185" : "185"}px] h-[${colIndex === 0 ? "185" : "186"}px] ${colIndex === 0 ? "aspect-[1]" : "aspect-[0.99]"} object-cover`}
                    alt={column.label}
                    src={column.image}
                  />
                </div>
              ))}

              <h2 className="absolute top-3.5 left-[calc(50.00%_-_${comparison.id === 1 ? '28' : '56'}px)] h-[29px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-lg tracking-[0.90px] leading-[28.2px] whitespace-nowrap">
                {comparison.title}
              </h2>

              {comparison.columns.map((column, colIndex) => (
                <div
                  key={`label-${colIndex}`}
                  className={`absolute top-[65px] left-[calc(50.00%_${colIndex === 0 ? "-" : colIndex === 1 ? "-" : "+"}${colIndex === 0 ? (comparison.id === 1 ? "323" : "315") : colIndex === 1 ? "17" : "180"}px)] h-[29px] font-medium text-black text-base tracking-[0.80px] leading-[28.2px] whitespace-nowrap flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] text-center`}
                >
                  {column.label}
                </div>
              ))}
            </article>

            <div className="ml-[-0.6px] h-[72.11px] w-[351.37px] self-center mt-[25px] flex bg-[#ffffff1a] rounded-[36.71px] overflow-hidden shadow-[0px_0px_9.4px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)] backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)]">
              <button
                className="mt-[3.9px] w-[342.19px] h-[64.24px] ml-[5.2px] relative bg-[#0088ffb2] rounded-[36.71px] overflow-hidden backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)]"
                onClick={() => handleCompareClick(comparison.id)}
                aria-label="比較する"
              >
                <span className="h-full top-0 left-[calc(50.00%_-_109px)] w-[220px] font-bold text-white text-[17px] tracking-[1.19px] leading-[46.5px] absolute flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] text-center">
                  比較する
                </span>
              </button>
            </div>

            {index === 0 && <div className="mt-[42.9px]" />}
          </section>
        ))}
      </main>
    </div>
  );
};
