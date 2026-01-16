export const NotesAndContinuitySection = () => {
  const tabs = [
    {
      id: "overview",
      label: "概要",
      icon: "/img/vector-5.svg",
      isActive: true,
      iconStyles: {
        width: "66.67%",
        height: "83.33%",
        top: "8.33%",
        left: "16.67%",
      },
    },
    {
      id: "concerns",
      label: "お悩み",
      icon: "/img/vector-6.svg",
      isActive: false,
      iconStyles: {
        width: "100%",
        height: "92.88%",
        top: "7.12%",
        left: "0",
      },
      iconWrapper: {
        width: "72.10%",
        height: "89.72%",
        top: "7.69%",
        left: "13.46%",
      },
    },
    {
      id: "questionnaire",
      label: "問診票",
      icon: "/img/icon-park-solid-check-one.svg",
      isActive: false,
      iconStyles: null,
    },
  ];

  return (
    <nav
      className="relative self-stretch w-full h-[181px]"
      role="navigation"
      aria-label="メインナビゲーション"
    >
      <div className="relative top-10 left-[260px] w-[492px] h-[90px]">
        <button
          type="button"
          className="absolute top-0 left-[372px] w-[120px] h-[90px] flex items-center justify-center bg-[#ffffff1a] rounded-[45px] overflow-hidden shadow-[0px_10px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)]"
          aria-label="機能"
        >
          <div className="h-20 w-[108px] flex flex-col items-center gap-[3.1px] rounded-[43px] overflow-hidden">
            <div className="ml-[-0.1px] h-[43.93px] w-[43.93px] relative mt-2.5 aspect-[1]">
              <img
                className="absolute w-[62.50%] h-[12.50%] top-[43.75%] left-[18.75%]"
                alt=""
                src="/img/vector-4.svg"
              />
            </div>

            <span className="flex items-center justify-center -ml-px h-[13px] w-[25px] text-[#999999] text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] font-medium">
              機能
            </span>
          </div>
        </button>

        <div className="absolute top-0 left-[calc(50.00%_-_246px)] w-[315px] h-[90px] flex bg-[#ffffff1a] rounded-[45.29px] overflow-hidden shadow-[0px_11.32px_33.97px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)] backdrop-blur-[2.5px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100.0%)_saturate(100.0%)]">
          <div className="inline-flex mt-[5px] w-[302.68px] h-[80.39px] ml-1.5 relative items-center">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                className={`relative w-[107.56px] h-[80.39px] ${index > 0 ? "-ml-2.5" : ""} ${tab.isActive ? "bg-[#4aa9fc]" : ""} rounded-[45.29px] overflow-hidden`}
                aria-label={tab.label}
                aria-current={tab.isActive ? "page" : undefined}
              >
                {tab.id === "overview" && (
                  <>
                    <div className="absolute top-[calc(50.00%_-_27px)] left-[calc(50.00%_-_19px)] w-[37px] h-[37px] aspect-[1]">
                      <img
                        className="absolute w-[66.67%] h-[83.33%] top-[8.33%] left-[16.67%]"
                        alt=""
                        src={tab.icon}
                      />
                    </div>

                    <span className="absolute top-[55px] left-[calc(50.00%_-_13px)] h-[13px] flex items-center justify-center text-white text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] font-medium">
                      {tab.label}
                    </span>
                  </>
                )}

                {tab.id === "concerns" && (
                  <>
                    <div className="absolute top-[9px] left-[calc(50.00%_-_20px)] w-10 h-10 aspect-[1]">
                      <div className="relative w-[72.10%] h-[89.72%] top-[7.69%] left-[13.46%]">
                        <img
                          className="absolute w-[4.83%] h-[3.11%] top-[-40963.72%] left-[-72485.61%]"
                          alt=""
                          src="/img/image.svg"
                        />

                        <img
                          className="absolute w-full h-[92.88%] top-[7.12%] left-0"
                          alt=""
                          src={tab.icon}
                        />
                      </div>
                    </div>

                    <span className="absolute top-[57px] left-[calc(50.00%_-_19px)] h-[13px] flex items-center justify-center text-[#999999] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] font-medium">
                      {tab.label}
                    </span>
                  </>
                )}

                {tab.id === "questionnaire" && (
                  <>
                    <img
                      className="absolute top-[11px] left-[calc(50.00%_-_21px)] w-[41px] h-[41px] aspect-[1]"
                      alt=""
                      src={tab.icon}
                    />

                    <span className="absolute top-[57px] left-[calc(50.00%_-_19px)] h-[13px] flex items-center justify-center text-[#999999] text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] font-medium">
                      {tab.label}
                    </span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
