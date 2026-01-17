import { useState } from "react";

export const IpadPro = () => {
  const [formValues, setFormValues] = useState({
    cash: "",
    card: "",
    point: "",
    groupon: "",
    luxa: "",
  });

  const paymentMethods = [
    { id: "cash", label: "現金", name: "cash" },
    { id: "card", label: "カード", name: "card" },
    { id: "point", label: "ポイント", name: "point" },
    { id: "groupon", label: "グルーポン", name: "groupon" },
    { id: "luxa", label: "ルクサ", name: "luxa" },
  ];

  const handleInputChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formValues);
  };

  return (
    <div
      className="bg-white w-full min-w-[834px] min-h-[1194px] flex justify-center relative"
      data-model-id="1:3474"
    >
      <form className="z-[1] mt-[201px] w-[612px] h-[712px] flex bg-[#ffffff73] rounded-[24.64px] border-[1.12px] border-solid border-[#ffffff1a] shadow-[0px_0px_18.48px_#0000001a] backdrop-blur-[15.12px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.12px)_brightness(100%)]">
        <div className="flex w-[612px] h-[714px] relative flex-col items-start">
          {paymentMethods.map((method, index) => (
            <div key={method.id}>
              <div className="relative w-[612px] h-[143px]">
                <div className="absolute top-[calc(50.00%_-_34px)] left-[calc(50.00%_-_82px)] w-[334px] h-[71px] flex">
                  <div className="flex w-[334px] h-[71px] relative items-center gap-[8.96px] pl-[30px] pr-[133.26px] py-[4.48px] bg-[#ffffff73] rounded-[18.48px] border-[1.12px] border-solid border-[#ffffff1a] shadow-[inset_0px_0px_7.84px_#0000001a] backdrop-blur-[15.12px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15.12px)_brightness(100%)]">
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      name={method.name}
                      id={method.id}
                      value={formValues[method.name]}
                      onChange={(e) =>
                        handleInputChange(method.name, e.target.value)
                      }
                      placeholder="数字（半角）を入力してください。"
                      className="relative flex items-center justify-center w-fit mr-[-115.26px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[16.8px] text-center tracking-[1.18px] leading-[52.1px] whitespace-nowrap placeholder:text-[#999999]"
                      aria-label={`${method.label}の金額を入力`}
                    />
                  </div>
                </div>

                <label
                  htmlFor={method.id}
                  className="absolute top-[calc(50.00%_-_40px)] left-[68px] h-[81px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[22.2px] tracking-[1.55px] leading-[80.8px] whitespace-nowrap"
                >
                  {method.label}
                </label>
              </div>

              {index < paymentMethods.length - 1 && (
                <img
                  className="relative self-stretch w-full h-[1.23px]"
                  alt=""
                  src="/img/vector-74.svg"
                  role="presentation"
                />
              )}
            </div>
          ))}
        </div>
      </form>

      <button
        type="button"
        onClick={handleSubmit}
        className="fixed top-[982px] left-[calc(50.00%_-_176px)] w-[351px] h-[72px] z-[2] flex bg-[#ffffff1a] rounded-[36.71px] overflow-hidden shadow-[0px_0px_9.4px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)] backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)]"
        aria-label="3,000円入金する"
      >
        <div className="mt-[3.9px] w-[342.19px] h-[64.24px] ml-[5.2px] relative bg-[#0088ffb2] rounded-[36.71px] overflow-hidden backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)]">
          <span className="absolute h-full top-0 left-[calc(50.00%_-_110px)] w-[220px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[17px] text-center tracking-[1.19px] leading-[46.5px]">
            3,000円入金する
          </span>
        </div>
      </button>

      <header className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[3] bg-white rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
        <button
          type="button"
          className="top-[calc(50.00%_-_374px)] absolute left-[34px] w-[42px] h-[42px] rotate-[-90.00deg]"
          aria-label="戻る"
        >
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
            <img
              className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
              alt=""
              src="/img/blur.svg"
              role="presentation"
            />

            <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

            <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
          </div>

          <div className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] aspect-[1]">
            <img
              className="absolute w-[66.67%] h-[66.67%] top-[13.24%] left-[13.24%]"
              alt=""
              src="/img/vector.svg"
              role="presentation"
            />
          </div>
        </button>

        <h1 className="absolute top-[708px] left-[15px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          お会計
        </h1>

        <button
          type="button"
          className="top-[calc(50.00%_-_303px)] absolute left-[34px] w-[42px] h-[42px] rotate-[-90.00deg]"
          aria-label="閉じる"
        >
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
            <img
              className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
              alt=""
              src="/img/blur-1.svg"
              role="presentation"
            />

            <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

            <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
          </div>

          <div className="absolute top-[calc(50.00%_-_13px)] left-[calc(50.00%_-_13px)] w-[26px] h-[26px]">
            <img
              className="absolute w-[25.00%] h-[50.00%] top-[22.50%] left-[35.00%]"
              alt=""
              src="/img/icon.svg"
              role="presentation"
            />
          </div>
        </button>
      </header>
    </div>
  );
};
