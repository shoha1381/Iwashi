import { useState } from "react";

export const IpadPro = () => {
  const [surveyToggle, setSurveyToggle] = useState(false);

  const treatmentItems = [
    {
      id: 1,
      name: "小顔矯正 / 美顔マッサージ＋首肩矯正（初回）",
      price: "3,300円",
    },
  ];

  const optionItems = [
    {
      id: 1,
      name: "アンケートに回答",
      discount: "-300円",
      enabled: surveyToggle,
    },
  ];

  const calculateTotal = () => {
    const treatmentTotal = 3300;
    const discount = surveyToggle ? 300 : 0;
    return treatmentTotal - discount;
  };

  const totalAmount = calculateTotal();

  return (
    <main
      className="bg-white w-full min-w-[834px] min-h-[1194px] flex flex-col relative"
      data-model-id="1:3406"
    >
      <header className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[3] bg-white rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
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

        <h1 className="absolute top-[708px] left-[15px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          お会計
        </h1>
      </header>

      <div className="flex z-[1] flex-col w-[612px] items-start gap-[41.84px] fixed top-[201px] left-[calc(50.00%_-_306px)]">
        <section className="relative self-stretch w-full h-[210.38px] bg-[#ffffff73] rounded-[23.91px] border-[1.09px] border-solid border-[#ffffff1a] shadow-[0px_0px_17.93px_#00000012] backdrop-blur-[14.67px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.67px)_brightness(100%)]">
          <div className="absolute top-[114px] left-[calc(50.00%_-_273px)] w-[549px] h-[60px] flex gap-[10.8px]">
            {treatmentItems.map((item) => (
              <div key={item.id} className="contents">
                <div className="flex w-[421.95px] h-[59.77px] relative items-center gap-[8.69px] pl-[21.73px] pr-[129.31px] py-[4.35px] bg-[#ffffff73] rounded-[11.95px] border-[1.09px] border-solid border-[#ffffff1a] shadow-[0px_0px_7.61px_#00000012] backdrop-blur-[14.67px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.67px)_brightness(100%)]">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.05px] mr-[-94.10px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[16.3px] text-center tracking-[1.14px] leading-[50.6px] whitespace-nowrap">
                    {item.name}
                  </span>
                </div>

                <div className="flex w-[116.27px] h-[59.77px] relative items-center justify-end gap-[8.69px] pl-[27.17px] pr-[21.73px] py-[4.35px] bg-[#ffffff73] rounded-[11.95px] border-[1.09px] border-solid border-[#ffffff1a] shadow-[0px_0px_7.61px_#00000012] backdrop-blur-[14.67px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.67px)_brightness(100%)]">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.05px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[16.3px] text-right tracking-[1.14px] leading-[50.6px] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="absolute top-0 left-[33px] h-[79px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[22.7px] tracking-[1.59px] leading-[78.4px] whitespace-nowrap">
            施術料金
          </h2>

          <img
            className="absolute top-[78px] left-[calc(50.00%_-_300px)] w-[600px] h-px"
            alt=""
            src="/img/vector-70-2.svg"
          />
        </section>

        <section className="relative self-stretch w-full h-[210.38px] bg-[#ffffff73] rounded-[23.91px] border-[1.09px] border-solid border-[#ffffff1a] shadow-[0px_0px_17.93px_#00000012] backdrop-blur-[14.67px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.67px)_brightness(100%)]">
          <div className="absolute top-[114px] left-[calc(50.00%_-_273px)] w-[549px] h-[60px] flex">
            {optionItems.map((option) => (
              <div key={option.id} className="contents">
                <label className="mt-[13.1px] w-[76.5px] h-[33.47px] bg-[#78787833] rounded-[119.53px] overflow-hidden cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={surveyToggle}
                    onChange={(e) => setSurveyToggle(e.target.checked)}
                    aria-label="アンケートに回答"
                  />
                  <div
                    className={`relative h-[85.71%] top-[7.14%] w-[47px] bg-white rounded-[119.53px] transition-all duration-200 ${
                      surveyToggle
                        ? "left-[calc(100%_-_47px_-_2px)]"
                        : "left-0.5"
                    }`}
                  />
                </label>

                <div className="flex w-[323.93px] h-[59.77px] relative ml-[21.5px] items-center gap-[8.69px] pl-[21.73px] pr-[129.31px] py-[4.35px] bg-[#ffffff73] rounded-[11.95px] border-[1.09px] border-solid border-[#ffffff1a] shadow-[0px_0px_7.61px_#00000012] backdrop-blur-[14.67px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.67px)_brightness(100%)]">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.05px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[16.3px] text-center tracking-[1.14px] leading-[50.6px] whitespace-nowrap">
                    {option.name}
                  </span>
                </div>

                <div className="flex w-[116.27px] h-[59.77px] relative ml-[10.8px] items-center justify-end gap-[8.69px] pl-[27.17px] pr-[21.73px] py-[4.35px] bg-[#ffffff73] rounded-[11.95px] border-[1.09px] border-solid border-[#ffffff1a] shadow-[0px_0px_7.61px_#00000012] backdrop-blur-[14.67px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.67px)_brightness(100%)]">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.05px] opacity-90 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[16.3px] text-center tracking-[1.14px] leading-[50.6px] whitespace-nowrap">
                    {option.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="absolute top-0 left-[33px] h-[79px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[22.7px] tracking-[1.59px] leading-[78.4px] whitespace-nowrap">
            オプション
          </h2>

          <img
            className="absolute top-[78px] left-[calc(50.00%_-_300px)] w-[600px] h-px"
            alt=""
            src="/img/vector-70-2.svg"
          />
        </section>

        <section className="relative self-stretch w-full h-[210.38px] bg-[#ffffff73] rounded-[23.91px] border-[1.09px] border-solid border-[#ffffff1a] shadow-[0px_0px_17.93px_#00000012] backdrop-blur-[14.67px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.67px)_brightness(100%)]">
          <div className="absolute top-[117px] left-[calc(50.00%_-_47px)] h-[51px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[23.9px] text-right tracking-[1.67px] leading-[50.6px] whitespace-nowrap">
            {totalAmount.toLocaleString()}円
          </div>

          <h2 className="absolute top-0 left-[33px] h-[79px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[22.7px] tracking-[1.59px] leading-[78.4px] whitespace-nowrap">
            総額
          </h2>

          <img
            className="absolute top-[78px] left-[calc(50.00%_-_300px)] w-[600px] h-px"
            alt=""
            src="/img/vector-70-2.svg"
          />
        </section>
      </div>

      <button className="fixed top-[982px] left-[calc(50.00%_-_176px)] w-[351px] h-[72px] z-[2] flex bg-[#ffffff1a] rounded-[36.71px] overflow-hidden shadow-[0px_0px_9.4px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)] backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)]">
        <div className="mt-[3.9px] w-[342.19px] h-[64.24px] ml-[5.2px] relative bg-[#0088ffb2] rounded-[36.71px] overflow-hidden backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)]">
          <span className="absolute h-full top-0 left-[calc(50.00%_-_109px)] w-[220px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[17px] text-center tracking-[1.19px] leading-[46.5px]">
            {totalAmount.toLocaleString()}円お支払いへ
          </span>
        </div>
      </button>
    </main>
  );
};
