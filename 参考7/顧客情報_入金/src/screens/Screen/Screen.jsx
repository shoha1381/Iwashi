import { useState } from "react";

export const Screen = () => {
  const paymentMethods = [
    { id: "cash", label: "現金" },
    { id: "card", label: "カード" },
    { id: "point", label: "ポイント" },
    { id: "groupon", label: "グルーポン" },
    { id: "luxsa", label: "ルクサ" },
  ];

  const [formValues, setFormValues] = useState({
    cash: "",
    card: "",
    point: "",
    groupon: "",
    luxsa: "",
  });

  const handleInputChange = (id, value) => {
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formValues);
  };

  const navigationItems = [
    {
      id: "overview",
      label: "概要",
      icon: "/img/vector.svg",
      active: false,
    },
    {
      id: "payment",
      label: "入金",
      icon: "/img/vector-1.svg",
      active: true,
    },
    {
      id: "history",
      label: "施術履歴",
      icon: "/img/vector-2.svg",
      active: false,
    },
    {
      id: "transactions",
      label: "入出金履歴",
      icons: ["/img/vector-3.svg", "/img/vector-4.svg"],
      active: false,
    },
  ];

  return (
    <div
      className="bg-white w-full min-w-[834px] min-h-[1194px] flex flex-col relative"
      data-model-id="1:8862"
    >
      <header className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[3] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
        <button
          className="absolute top-[calc(50.00%_-_374px)] left-[34px] w-[42px] h-[42px] rotate-[-90.00deg]"
          aria-label="メニューを閉じる"
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
              className="absolute w-[66.67%] h-[66.67%] top-[13.25%] left-[13.25%]"
              alt="閉じる"
              src="/img/vector-5.svg"
            />
          </div>
        </button>

        <p className="absolute top-[609px] left-[-83px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-transparent text-[26.2px] tracking-[1.84px] leading-[normal]">
          <span className="text-black tracking-[0.48px]">
            三浦梨花&nbsp;&nbsp;{" "}
          </span>

          <span className="text-[#999999] text-[20.8px] tracking-[0.30px]">
            ミウラリカ&nbsp;&nbsp;{" "}
          </span>

          <span className="text-black text-[20.8px] tracking-[0.30px]">様</span>
        </p>
      </header>

      <main className="z-[2] ml-px h-[783.11px] w-[709px] self-center mt-40 flex flex-col">
        <h1 className="w-[55px] h-[43px] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
          入金
        </h1>

        <form
          className="h-[578px] w-[709px] self-center mt-[34px] flex bg-[#ffffff73] rounded-[20px] border-[0.91px] border-solid border-[#ffffff1a] shadow-[0px_0px_15px_#00000012] backdrop-blur-[12.27px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12.27px)_brightness(100%)]"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="flex w-[709px] h-[580px] relative flex-col items-start">
            {paymentMethods.map((method, index) => (
              <div key={method.id}>
                <div className="relative self-stretch w-full h-[116px]">
                  <div className="absolute top-[calc(50.00%_-_29px)] left-[calc(50.00%_-_166px)] w-[479px] h-[58px] flex">
                    <div className="flex w-[479px] h-[58px] relative items-center gap-[7.27px] pl-[18.18px] pr-[108.18px] py-[3.64px] bg-[#ffffff73] rounded-[15px] border-[0.91px] border-solid border-[#ffffff1a] shadow-[inset_0px_0px_6.36px_#0000001a] backdrop-blur-[12.27px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12.27px)_brightness(100%)]">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={formValues[method.id]}
                        onChange={(e) =>
                          handleInputChange(method.id, e.target.value)
                        }
                        placeholder="数字（半角）を入力してください。"
                        className="relative flex items-center justify-center w-full [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13.6px] text-left tracking-[0.95px] leading-[42.3px] placeholder:text-[#999999] bg-transparent"
                        aria-label={`${method.label}の金額`}
                      />
                    </div>
                  </div>

                  <label
                    htmlFor={method.id}
                    className="absolute top-[calc(50.00%_-_33px)] left-[55px] h-[66px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-lg tracking-[1.26px] leading-[65.6px] whitespace-nowrap"
                  >
                    {method.label}
                  </label>
                </div>

                {index < paymentMethods.length - 1 && (
                  <img
                    className="relative w-[709px] h-px object-cover"
                    alt=""
                    src="/img/vector-74.svg"
                  />
                )}
              </div>
            ))}
          </div>
        </form>

        <button
          type="button"
          onClick={handleSubmit}
          className="ml-[-1.6px] h-[72.11px] w-[351.37px] self-center mt-14 flex bg-[#ffffff1a] rounded-[36.71px] overflow-hidden shadow-[0px_0px_9.4px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)] backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)]"
        >
          <div className="mt-[3.9px] w-[342.19px] h-[64.24px] ml-[5.2px] relative bg-[#0088ffb2] rounded-[36.71px] overflow-hidden backdrop-blur-[2.7px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.7px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)]">
            <span className="absolute h-full top-0 left-[calc(50.00%_-_109px)] w-[220px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[17px] text-center tracking-[1.19px] leading-[46.5px]">
              入金する
            </span>
          </div>
        </button>
      </main>

      <nav
        className="z-[1] h-[90px] w-[412px] self-center mt-[109.9px] flex bg-[#ffffff1a] rounded-[45.29px] overflow-hidden shadow-[0px_11.32px_33.97px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)] backdrop-blur-[2.5px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100.0%)_saturate(100.0%)]"
        aria-label="メインナビゲーション"
      >
        <div className="inline-flex mt-[5px] w-[400.24px] h-[80.39px] ml-1.5 relative items-center">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              className={`relative w-[107.56px] h-[80.39px] ${index > 0 ? "-ml-2.5" : ""} ${item.active ? "bg-[#4aa9fc]" : ""} rounded-[45.29px] overflow-hidden`}
              aria-label={item.label}
              aria-current={item.active ? "page" : undefined}
            >
              {item.icons ? (
                <>
                  <div className="absolute top-[13px] left-[calc(50.00%_-_17px)] w-[34px] h-[34px] aspect-[1]">
                    <img
                      className="absolute w-full h-[18.75%] top-[13.63%] left-0"
                      alt=""
                      src={item.icons[0]}
                    />

                    <img
                      className="absolute w-full h-[46.88%] top-[40.62%] left-0"
                      alt=""
                      src={item.icons[1]}
                    />
                  </div>
                </>
              ) : item.id === "payment" ? (
                <>
                  <div className="absolute top-2 left-[calc(50.00%_-_20px)] w-10 h-10 flex items-center aspect-[1]">
                    <img
                      className="mt-[7.1px] h-[31.18px] ml-[13.76%] w-[31.18px] mr-[7.84%] flex-1 aspect-[1]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                </>
              ) : item.id === "history" ? (
                <>
                  <div className="absolute top-2.5 left-[calc(50.00%_-_21px)] w-[41px] h-[41px] aspect-[1]">
                    <img
                      className="absolute w-[76.38%] h-[74.04%] top-[14.63%] left-[17.07%]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute top-[calc(50.00%_-_27px)] left-[calc(50.00%_-_19px)] w-[37px] h-[37px] aspect-[1]">
                    <img
                      className="absolute w-[82.69%] h-[82.69%] top-[10.22%] left-[7.90%]"
                      alt=""
                      src={item.icon}
                    />
                  </div>
                </>
              )}

              <span
                className={`absolute ${item.id === "payment" ? "top-[57px]" : item.id === "overview" ? "top-[55px]" : "top-[57px]"} left-[calc(50.00%_-_${item.id === "overview" ? "13px" : item.id === "payment" ? "12px" : item.id === "history" ? "25px" : "32px"})] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium ${item.active ? "text-white" : "text-[#999999]"} text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};
