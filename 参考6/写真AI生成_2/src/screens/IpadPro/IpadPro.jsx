import { useState } from "react";

export const IpadPro = () => {
  const [viewMode, setViewMode] = useState("slider");
  const [selectedImages, setSelectedImages] = useState({
    withoutTreatment: false,
    current: false,
    withTreatment: false,
  });

  const comparisonData = {
    userName: "三浦様",
    columns: [
      {
        id: "withoutTreatment",
        label: "施術を受けない場合",
        image: "/img/1.png",
        overlayImage: "/img/gemini-generated-image-3.png",
      },
      {
        id: "current",
        label: "現在",
        image: "/img/3.png",
        overlayImage: null,
      },
      {
        id: "withTreatment",
        label: "施術を受けた場合",
        image: "/img/3-1.png",
        overlayImage: null,
      },
    ],
  };

  const navigationButtons = [
    {
      icon: "/img/vector.svg",
      label: "写真AI生成",
      position: "top-[-369px]",
    },
    {
      icon: "/img/icon.svg",
      label: "ホーム",
      position: "top-[calc(50.00%_-_303px)]",
    },
  ];

  const handleImageSelect = (columnId) => {
    setSelectedImages((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  const handleCompare = () => {
    const selected = Object.entries(selectedImages)
      .filter(([_, isSelected]) => isSelected)
      .map(([id]) => id);
    console.log("Comparing images:", selected);
  };

  return (
    <div
      className="bg-white w-full min-w-[834px] min-h-[1194px] flex flex-col relative"
      data-model-id="1:3310"
    >
      <aside
        className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[2] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        role="navigation"
        aria-label="サイドナビゲーション"
      >
        <button
          className="absolute top-[calc(50.00%_-_374px)] left-[34px] w-[42px] h-[42px] rotate-[-90.00deg]"
          aria-label="写真AI生成"
          type="button"
        >
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
            <img
              className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
              alt=""
              src="/img/blur.svg"
              aria-hidden="true"
            />

            <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

            <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
          </div>

          <div className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] aspect-[1]">
            <img
              className="absolute w-[66.67%] h-[66.67%] top-[13.24%] left-[13.24%]"
              alt=""
              src="/img/vector.svg"
              aria-hidden="true"
            />
          </div>
        </button>

        <div
          className="absolute top-[680px] left-[-13px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]"
          aria-hidden="true"
        >
          写真AI生成
        </div>

        <button
          className="absolute top-[calc(50.00%_-_303px)] left-[34px] w-[42px] h-[42px] rotate-[-90.00deg]"
          aria-label="ホーム"
          type="button"
        >
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
            <img
              className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
              alt=""
              src="/img/blur-1.svg"
              aria-hidden="true"
            />

            <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

            <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
          </div>

          <div className="absolute top-[calc(50.00%_-_13px)] left-[calc(50.00%_-_13px)] w-[26px] h-[26px]">
            <img
              className="absolute w-[25.00%] h-[50.00%] top-[22.50%] left-[35.00%]"
              alt=""
              src="/img/icon.svg"
              aria-hidden="true"
            />
          </div>
        </button>
      </aside>

      <main className="fixed top-[164px] left-[calc(50.00%_-_372px)] w-[744px] h-[943px] z-[1] flex flex-col">
        <h1 className="h-8 w-[502px] self-center mt-[146px] font-medium text-black text-3xl text-center tracking-[1.50px] leading-[31.8px] whitespace-nowrap flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica]">
          比較したい画像を選んでください。
        </h1>

        <section
          className="h-[337px] relative mt-[72px] bg-[#ffffff47] rounded-[6.71px] overflow-hidden border-[0.54px] border-solid border-[#ffffff1a] shadow-[0px_0px_7px_#00000026] backdrop-blur-[11.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(11.9px)_brightness(100%)]"
          aria-label="画像比較グリッド"
        >
          <img
            className="absolute top-14 left-[calc(50.00%_-_124px)] w-px h-[281px]"
            alt=""
            src="/img/vector-96.svg"
            aria-hidden="true"
          />

          <img
            className="absolute top-14 left-[calc(50.00%_+_125px)] w-px h-[281px]"
            alt=""
            src="/img/vector-96.svg"
            aria-hidden="true"
          />

          <img
            className="absolute top-14 left-0 w-[744px] h-px"
            alt=""
            src="/img/vector-97.svg"
            aria-hidden="true"
          />

          <img
            className="absolute top-[103px] left-0 w-[744px] h-px"
            alt=""
            src="/img/vector-97.svg"
            aria-hidden="true"
          />

          <div className="absolute top-[104px] left-0 w-[247px] h-[233px]">
            <button
              className="top-11 absolute left-[43px] w-40 h-40 rounded-[8.8px] border-[0.88px] border-solid border-[#0000004c]"
              onClick={() => handleImageSelect("withoutTreatment")}
              aria-label="施術を受けない場合の画像を選択"
              aria-pressed={selectedImages.withoutTreatment}
              type="button"
            />

            <img
              className="absolute top-[100px] left-[99px] w-12 h-12 pointer-events-none"
              alt=""
              src="/img/union.svg"
              aria-hidden="true"
            />

            <img
              className="absolute top-[23px] left-[calc(50.00%_-_94px)] w-[185px] h-[185px] pointer-events-none"
              alt=""
              src="/img/gemini-generated-image-3.png"
              aria-hidden="true"
            />

            <img
              className="absolute top-[23px] left-[30px] w-[185px] h-[185px] aspect-[1] object-cover pointer-events-none"
              alt="施術を受けない場合の画像"
              src="/img/1.png"
            />
          </div>

          <div className="absolute top-[103px] left-[248px] w-[247px] h-[234px]">
            <button
              className="top-[45px] absolute left-[43px] w-40 h-40 rounded-[8.8px] border-[0.88px] border-solid border-[#0000004c]"
              onClick={() => handleImageSelect("current")}
              aria-label="現在の画像を選択"
              aria-pressed={selectedImages.current}
              type="button"
            />

            <img
              className="absolute top-[101px] left-[99px] w-12 h-12 pointer-events-none"
              alt=""
              src="/img/union-1.svg"
              aria-hidden="true"
            />

            <img
              className="absolute top-6 left-[calc(50.00%_-_92px)] w-[185px] h-[186px] aspect-[0.99] pointer-events-none"
              alt="現在の画像"
              src="/img/3.png"
            />
          </div>

          <div className="absolute top-[103px] left-[497px] w-[247px] h-[234px]">
            <button
              className="top-[45px] absolute left-[43px] w-40 h-40 rounded-[8.8px] border-[0.88px] border-solid border-[#0000004c]"
              onClick={() => handleImageSelect("withTreatment")}
              aria-label="施術を受けた場合の画像を選択"
              aria-pressed={selectedImages.withTreatment}
              type="button"
            />

            <img
              className="absolute top-[101px] left-[99px] w-12 h-12 pointer-events-none"
              alt=""
              src="/img/union-2.svg"
              aria-hidden="true"
            />

            <img
              className="absolute top-6 left-[calc(50.00%_-_93px)] w-[185px] h-[186px] aspect-[0.99] pointer-events-none"
              alt="施術を受けた場合の画像"
              src="/img/3-1.png"
            />
          </div>

          <div className="absolute top-3.5 left-[calc(50.00%_-_28px)] h-[29px] font-medium text-black text-lg tracking-[0.90px] leading-[28.2px] whitespace-nowrap flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica]">
            {comparisonData.userName}
          </div>

          <div className="absolute top-[65px] left-[calc(50.00%_-_17px)] h-[29px] font-medium text-black text-base tracking-[0.80px] leading-[28.2px] whitespace-nowrap flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica]">
            現在
          </div>

          <div className="absolute top-[65px] left-[calc(50.00%_+_180px)] h-[29px] font-medium text-black text-base text-center tracking-[0.80px] leading-[28.2px] whitespace-nowrap flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica]">
            施術を受けた場合
          </div>

          <div className="absolute top-[65px] left-[calc(50.00%_-_323px)] h-[29px] font-medium text-black text-base text-center tracking-[0.80px] leading-[28.2px] whitespace-nowrap flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica]">
            施術を受けない場合
          </div>
        </section>

        <div className="inline-flex w-[746.08px] h-[72.11px] relative mt-[65px] items-center gap-[39px]">
          <div
            className="relative w-[355.71px] h-[67.3px] bg-[#ffffff1a] rounded-[32.83px] overflow-hidden shadow-[inset_0px_0px_11.49px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_2.0px_rgba(0,0,0,0.20),inset_-1px_0_2.0px_rgba(0,0,0,0.16)] backdrop-blur-[3.3px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(3.3px)_brightness(100.0%)_saturate(100.0%)]"
            role="group"
            aria-label="表示モード切り替え"
          >
            <button
              className="absolute top-[5px] left-[calc(50.00%_-_171px)] w-[175px] h-[58px] flex justify-center rounded-[32.83px] overflow-hidden"
              onClick={() => setViewMode("sideBySide")}
              aria-label="横並べ表示"
              aria-pressed={viewMode === "sideBySide"}
              type="button"
            >
              <div className="ml-[-0.7px] w-[67.3px] font-bold text-[#999999] text-[17.6px] text-center tracking-[1.23px] leading-[56.9px] whitespace-nowrap flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica]">
                横並べ
              </div>
            </button>

            <button
              className="absolute top-[5px] left-44 w-[175px] h-[58px] bg-[#0088ffb2] rounded-[32.83px] overflow-hidden backdrop-blur-[3.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(3.2px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_2.0px_rgba(0,0,0,0.20),inset_-1px_0_2.0px_rgba(0,0,0,0.16)]"
              onClick={() => setViewMode("slider")}
              aria-label="スライドバー表示"
              aria-pressed={viewMode === "slider"}
              type="button"
            >
              <div className="absolute h-[100.41%] top-0 left-[calc(50.00%_-_68px)] w-[133px] font-bold text-white text-[17.6px] text-center tracking-[1.23px] leading-[56.9px] whitespace-nowrap flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica]">
                スライドバー
              </div>
            </button>
          </div>

          <button
            className="relative w-[351.37px] h-[72.11px] bg-[#ffffff1a] rounded-[36.71px] overflow-hidden shadow-[0px_0px_9.4px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)] backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)]"
            onClick={handleCompare}
            aria-label="選択した画像を比較する"
            type="button"
          >
            <div className="relative top-1 left-[5px] w-[342px] h-16 bg-[#999999] rounded-[36.71px] overflow-hidden backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)]">
              <div className="absolute h-full top-0 left-[calc(50.00%_-_109px)] w-[220px] font-bold text-white text-[17px] text-center tracking-[1.19px] leading-[46.5px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica]">
                比較する
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
};
