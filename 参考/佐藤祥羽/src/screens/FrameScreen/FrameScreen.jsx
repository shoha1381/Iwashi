import { PatientDetailsSection } from "./sections/PatientDetailsSection";
import { PatientDetailsSidebarSection } from "./sections/PatientDetailsSidebarSection";

export const FrameScreen = () => {
  const sidebarButtons = [
    {
      id: "home",
      icon: "/img/vector-4.svg",
      iconWidth: "62.94%",
      iconHeight: "62.93%",
      iconTop: "15.95%",
      iconLeft: "21.11%",
      containerSize: "30px",
      blur: "/img/blur-1.svg",
    },
    {
      id: "chart",
      icon: "/img/vector-7.svg",
      icon2: "/img/vector-8.svg",
      iconWidth: "76.01%",
      iconHeight: "100%",
      iconTop: "0",
      iconLeft: "12.00%",
      icon2Width: "66.12%",
      icon2Height: "64.43%",
      icon2Top: "35.31%",
      icon2Left: "16.88%",
      containerSize: "20px",
      blur: "/img/blur-2.svg",
    },
    {
      id: "notification",
      icon: "/img/vector-9.svg",
      iconWidth: "100%",
      iconHeight: "22px",
      iconTop: "calc(50.00%_-_11px)",
      iconLeft: "0",
      containerSize: "22px",
      hasBackground: true,
      blur: "/img/blur-3.svg",
    },
    {
      id: "calendar",
      icon: "/img/vector-10.svg",
      iconWidth: "87.50%",
      iconHeight: "87.50%",
      iconTop: "6.25%",
      iconLeft: "6.25%",
      containerSize: "28px",
      hasCalendarBg: true,
      blur: "/img/blur-4.svg",
    },
  ];

  return (
    <div
      className="relative w-[834px] h-[890px] bg-white overflow-hidden"
      data-model-id="1:5421"
    >
      <img
        className="absolute top-[417px] left-[-345px] w-[834px] h-px rotate-[-90.00deg]"
        alt="Vector"
        src="/img/vector-6.svg"
      />

      <img
        className="absolute top-[417px] left-[-186px] w-[834px] h-px rotate-[-90.00deg]"
        alt="Vector"
        src="/img/vector-6.svg"
      />

      <img
        className="absolute top-[417px] left-[377px] w-[834px] h-px rotate-[-90.00deg]"
        alt="Vector"
        src="/img/vector-6.svg"
      />

      <div className="absolute top-[85px] left-[calc(50.00%_+_337px)] w-[155px] h-[45px] flex gap-[41px] bg-[#ffffff1a] rounded-[22.22px] overflow-hidden rotate-[-90.00deg] shadow-[inset_0px_0px_7.78px_#00000021,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)]">
        <div className="mt-[3.0px] w-[147px] h-[39px] relative ml-[4.0px] bg-[#0088ffb2] rounded-[22.22px] overflow-hidden backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)]">
          <div className="absolute h-[100.41%] top-0 left-[calc(50.00%_-_45px)] w-[90px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[14.1px] text-center tracking-[0.99px] leading-[38.5px] whitespace-nowrap">
            施術
          </div>
        </div>

        <div className="mt-[3.3px] w-[96.67px] h-[38.89px] relative rounded-[22.22px] overflow-hidden">
          <div className="absolute h-[100.29%] top-0 left-[calc(50.00%_-_7px)] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#999999] text-[14.1px] text-center tracking-[0.99px] leading-[38.5px] whitespace-nowrap">
            週
          </div>
        </div>
      </div>

      <PatientDetailsSection />

      <div className="absolute top-[calc(50.00%_-_411px)] left-3.5 w-[42px] h-[42px] rotate-[-90.00deg]">
        <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
          <img
            className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] -top-3.5 left-[-23px] object-cover"
            alt="Blur"
            src="/img/blur.svg"
          />

          <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

          <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
        </div>

        <div className="top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] absolute aspect-[1]">
          <img
            className="absolute w-[66.67%] h-[66.67%] top-[13.25%] left-[13.24%]"
            alt="Vector"
            src="/img/vector-2.svg"
          />
        </div>
      </div>

      <div className="flex flex-col w-[42px] items-start gap-5 absolute top-24 left-3.5">
        {sidebarButtons.map((button) => (
          <div
            key={button.id}
            className="relative self-stretch w-full h-[42px] rotate-[-90.00deg]"
          >
            <div className="absolute w-[100.00%] h-[100.00%] top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
              <img
                className="absolute w-[calc(100%_+_45px)] h-[calc(100%_+_45px)] -top-3.5 left-[-23px] object-cover"
                alt="Blur"
                src={button.blur}
              />

              <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

              <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
            </div>

            {button.id === "home" && (
              <div
                className={`absolute top-[calc(50.00%_-_15px)] left-[calc(50.00%_-_15px)] w-[${button.containerSize}] h-[${button.containerSize}] aspect-[1]`}
              >
                <img
                  className={`absolute w-[${button.iconWidth}] h-[${button.iconHeight}] top-[${button.iconTop}] left-[${button.iconLeft}]`}
                  alt="Vector"
                  src={button.icon}
                />
              </div>
            )}

            {button.id === "chart" && (
              <div
                className={`absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_10px)] w-5 h-5 aspect-[1]`}
              >
                <img
                  className={`absolute w-[${button.iconWidth}] h-[${button.iconHeight}] top-[${button.iconTop}] left-[${button.iconLeft}]`}
                  alt="Vector"
                  src={button.icon}
                />

                <img
                  className={`absolute w-[${button.icon2Width}] h-[${button.icon2Height}] top-[${button.icon2Top}] left-[${button.icon2Left}]`}
                  alt="Vector"
                  src={button.icon2}
                />
              </div>
            )}

            {button.id === "notification" && (
              <div className="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_10px)] w-[22px] h-[22px]">
                <div className="absolute top-[3px] left-[5px] w-3 h-[15px] bg-[#ff83004c]" />

                <img
                  className={`absolute w-[${button.iconWidth}] top-[${button.iconTop}] left-[${button.iconLeft}] h-[${button.iconHeight}] aspect-[1]`}
                  alt="Vector"
                  src={button.icon}
                />
              </div>
            )}

            {button.id === "calendar" && (
              <div className="absolute top-2 left-2 w-7 h-7 overflow-hidden aspect-[1]">
                <img
                  className="absolute w-[25.00%] h-[50.39%] top-[-36851.79%] left-[-59478.57%]"
                  alt="Vector"
                  src="/img/image.svg"
                />

                <div className="absolute w-[62.96%] h-[62.96%] top-[18.52%] left-[18.52%] bg-[#00a63e4c] rounded-[8.81px]" />

                <img
                  className={`absolute w-[${button.iconWidth}] h-[${button.iconHeight}] top-[${button.iconTop}] left-[${button.iconLeft}]`}
                  alt="Vector"
                  src={button.icon}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <PatientDetailsSidebarSection />
    </div>
  );
};
