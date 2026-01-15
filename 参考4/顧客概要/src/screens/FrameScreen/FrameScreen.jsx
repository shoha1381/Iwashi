import { PatientDashboardSection } from "./sections/PatientDashboardSection";
import { PatientProfileSection } from "./sections/PatientProfileSection";

export const FrameScreen = () => {
  const toggleButtons = [
    {
      id: "line-registration",
      top: "252px",
      activeLabel: "LINE登録",
      inactiveLabel: "週",
    },
    {
      id: "questionnaire-input",
      top: "419px",
      activeLabel: "問診票入力",
      inactiveLabel: "週",
    },
    {
      id: "treatment",
      top: "85px",
      activeLabel: "施術",
      inactiveLabel: "週",
    },
  ];

  const navigationIcons = [
    {
      id: "calendar",
      icon: (
        <>
          <img
            className="absolute w-[62.94%] h-[62.93%] top-[15.95%] left-[21.11%]"
            alt="Calendar icon"
            src="/img/vector-4.svg"
          />
          <img
            className="absolute w-[53.02%] h-[53.02%] top-[25.86%] left-[21.11%]"
            alt="Calendar detail"
            src="/img/vector-10.svg"
          />
        </>
      ),
      size: "30px",
    },
    {
      id: "document",
      icon: (
        <>
          <img
            className="absolute w-[76.01%] h-full top-0 left-[12.00%]"
            alt="Document icon"
            src="/img/vector-11.svg"
          />
          <img
            className="absolute w-[66.12%] h-[64.43%] top-[35.31%] left-[16.88%]"
            alt="Document detail"
            src="/img/vector-12.svg"
          />
        </>
      ),
      size: "20px",
    },
    {
      id: "notification",
      icon: (
        <>
          <div className="absolute w-[62.96%] h-[62.96%] top-[18.52%] left-[18.52%] bg-[#00a63e4c] rounded-[8.81px]" />
          <img
            className="absolute w-[87.50%] h-[87.50%] top-[6.25%] left-[6.25%]"
            alt="Notification icon"
            src="/img/vector-14.svg"
          />
        </>
      ),
      size: "28px",
      hasBackground: true,
    },
    {
      id: "alert",
      icon: (
        <>
          <div className="absolute top-[3px] left-[5px] w-3 h-[15px] bg-[#ff83004c]" />
          <img
            className="absolute w-full top-[calc(50.00%_-_11px)] left-0 h-[22px] aspect-[1]"
            alt="Alert icon"
            src="/img/vector-13.svg"
          />
        </>
      ),
      size: "22px",
    },
  ];

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[834.0px] min-h-[890.0px] relative"
      data-model-id="1:4792"
      role="main"
    >
      <img
        className="absolute top-[758px] left-[21px] w-[33px] h-[33px] rotate-[-90.00deg] aspect-[1] object-cover"
        alt="Decorative element"
        src="/img/1.png"
      />

      <img
        className="absolute top-[417px] left-[-345px] w-[834px] h-px rotate-[-90.00deg]"
        alt=""
        role="presentation"
        src="/img/vector-6.svg"
      />

      <img
        className="absolute top-[417px] left-[-186px] w-[834px] h-px rotate-[-90.00deg]"
        alt=""
        role="presentation"
        src="/img/vector-6.svg"
      />

      <img
        className="absolute top-[417px] left-[377px] w-[834px] h-px rotate-[-90.00deg]"
        alt=""
        role="presentation"
        src="/img/vector-6.svg"
      />

      <PatientProfileSection />

      {toggleButtons.map((button) => (
        <div
          key={button.id}
          className="absolute left-[calc(50.00%_+_337px)] w-[155px] h-[45px] flex gap-[41px] bg-[#ffffff1a] rounded-[22.22px] overflow-hidden rotate-[-90.00deg] shadow-[inset_0px_0px_7.78px_#00000021,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)]"
          style={{ top: button.top }}
          role="group"
          aria-label={`${button.activeLabel} toggle`}
        >
          <button
            className="mt-[3.0px] w-[147px] h-[39px] relative ml-[4.0px] bg-[#0088ffb2] rounded-[22.22px] overflow-hidden backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)]"
            aria-pressed="true"
            type="button"
          >
            <div className="absolute h-[100.41%] top-0 left-[calc(50.00%_-_45px)] w-[90px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[14.1px] text-center tracking-[0.99px] leading-[38.5px] whitespace-nowrap">
              {button.activeLabel}
            </div>
          </button>

          <button
            className="mt-[3.3px] w-[96.67px] h-[38.89px] relative rounded-[22.22px] overflow-hidden"
            aria-pressed="false"
            type="button"
          >
            <div className="absolute h-[100.29%] top-0 left-[calc(50.00%_-_7px)] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#999999] text-[14.1px] text-center tracking-[0.99px] leading-[38.5px] whitespace-nowrap">
              {button.inactiveLabel}
            </div>
          </button>
        </div>
      ))}

      <PatientDashboardSection />

      <nav
        className="absolute top-[calc(50.00%_-_411px)] left-3.5 w-[42px] h-[42px] rotate-[-90.00deg]"
        aria-label="Primary navigation"
      >
        <button
          className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]"
          type="button"
          aria-label="Home"
        >
          <img
            className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] -top-3.5 left-[-23px] object-cover"
            alt=""
            role="presentation"
            src="/img/blur.svg"
          />

          <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

          <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />

          <div className="top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] absolute aspect-[1]">
            <img
              className="absolute w-[66.67%] h-[66.67%] top-[13.25%] left-[13.24%]"
              alt=""
              src="/img/vector-2.svg"
            />
          </div>
        </button>
      </nav>

      <nav
        className="flex flex-col w-[42px] items-start gap-5 absolute top-24 left-3.5"
        aria-label="Secondary navigation"
      >
        {navigationIcons.map((navItem, index) => (
          <button
            key={navItem.id}
            className="relative self-stretch w-full h-[42px] rotate-[-90.00deg]"
            type="button"
            aria-label={navItem.id}
          >
            <div className="absolute w-[100.00%] h-[100.00%] top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
              <img
                className="absolute w-[calc(100%_+_45px)] h-[calc(100%_+_45px)] -top-3.5 left-[-23px] object-cover"
                alt=""
                role="presentation"
                src={`/img/blur-${index + 1}.svg`}
              />

              <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

              <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
            </div>

            <div
              className={`absolute ${
                navItem.hasBackground
                  ? "top-2 left-2 w-7 h-7 overflow-hidden"
                  : `top-[calc(50.00%_-_${
                      Number.parseInt(navItem.size) / 2
                    }px)] left-[calc(50.00%_-_${
                      Number.parseInt(navItem.size) / 2
                    }px)]`
              } aspect-[1]`}
              style={
                !navItem.hasBackground
                  ? { width: navItem.size, height: navItem.size }
                  : {}
              }
            >
              {navItem.icon}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
};
