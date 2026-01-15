import { useState } from "react";

export const AppointmentScheduleSection = () => {
  const [selectedView, setSelectedView] = useState("day");

  const viewOptions = [
    { id: "day", label: "日" },
    { id: "week", label: "週" },
  ];

  return (
    <aside
      className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
      role="complementary"
      aria-label="Appointment schedule controls"
    >
      <div
        className="absolute top-[207px] -left-3 w-[147px] h-[42px] bg-[#ffffff1a] rounded-[20.49px] overflow-hidden rotate-[-90.00deg] shadow-[inset_0px_0px_7.17px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.14),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        role="group"
        aria-label="View selector"
      >
        {viewOptions.map((option, index) => (
          <button
            key={option.id}
            onClick={() => setSelectedView(option.id)}
            className={`absolute top-[3px] ${index === 0 ? "left-[calc(50.00%_-_70px)]" : "left-[71px]"} w-[73px] h-9 flex justify-center ${selectedView === option.id ? "bg-[#0088ffb2]" : ""} rounded-[20.49px] overflow-hidden ${selectedView === option.id ? "backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.14),inset_-1px_0_1px_rgba(0,0,0,0.11)]" : ""}`}
            aria-pressed={selectedView === option.id}
            aria-label={`${option.label} view`}
          >
            <span
              className={`flex items-center justify-center ml-[-0.2px] w-[13px] [font-family:'Noto_Sans_JP',Helvetica] font-normal ${selectedView === option.id ? "text-white" : "text-[#999999]"} text-[13px] text-center tracking-[0.91px] leading-[35.5px] whitespace-nowrap`}
            >
              {option.label}
            </span>
          </button>
        ))}
      </div>

      <button
        className="top-[calc(50.00%_-_348px)] left-[calc(50.00%_-_1px)] w-[23px] h-[23px] rotate-[-90.00deg] absolute aspect-[1]"
        aria-label="Search"
      >
        <img
          className="absolute w-[83.33%] h-[70.83%] top-[11.76%] left-[5.51%]"
          alt=""
          src="/img/vector-8.svg"
        />
      </button>

      <button
        className="absolute top-28 left-[50px] w-[23px] h-[23px] rotate-[-90.00deg] aspect-[1]"
        aria-label="Calendar"
      >
        <img
          className="absolute w-[66.67%] h-[66.67%] top-[13.84%] left-[13.82%]"
          alt=""
          src="/img/vector-9.svg"
        />
      </button>

      <button
        className="absolute top-[772px] left-[49px] w-[26px] h-[26px]"
        aria-label="Navigate down"
      >
        <img
          className="absolute top-2.5 left-2.5 w-[5px] h-2 rotate-[-90.00deg]"
          alt=""
          src="/img/polygon-7.svg"
        />
        <div className="absolute top-px left-0 w-[26px] h-[26px] rounded-[13px] border-[0.7px] border-solid border-[#999999] rotate-[-90.00deg]" />
      </button>

      <button
        className="absolute top-[562px] left-[49px] w-[26px] h-[26px]"
        aria-label="Navigate up"
      >
        <img
          className="absolute top-2 left-2.5 w-[5px] h-2 rotate-[-90.00deg]"
          alt=""
          src="/img/polygon-8.svg"
        />
        <div className="absolute top-px left-0 w-[26px] h-[26px] rounded-[13px] border-[0.7px] border-solid border-[#999999] rotate-[90.00deg]" />
      </button>

      <button
        className="absolute top-[359px] left-[3px] w-[117px] h-[42px] bg-[#ffffff1a] rounded-[20.49px] overflow-hidden rotate-[-90.00deg] shadow-[0px_0px_7.17px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.14),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
        aria-label="Select location"
      >
        <span className="absolute top-[3px] left-[calc(50.00%_-_48px)] w-[85px] h-9 rounded-[20.49px] overflow-hidden">
          <span className="absolute h-[100.41%] top-0 left-[calc(50.00%_-_42px)] w-[82px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#5e6367] text-[13px] text-center tracking-[0.91px] leading-[35.5px] whitespace-nowrap">
            銀座店
          </span>
        </span>
        <img
          className="absolute top-[18px] left-[101px] w-1 h-[5px]"
          alt=""
          src="/img/polygon-10.svg"
        />
      </button>

      <button
        className="absolute top-6 left-[49px] w-[25px] h-[25px] rotate-[-90.00deg]"
        aria-label="More options"
      >
        <img alt="" src="/img/more-horizontal.svg" />
      </button>

      <time
        className="absolute top-[662px] -left-3 rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-transparent text-[21.7px] tracking-[1.09px] leading-[normal]"
        dateTime="2025-10-06"
      >
        <span className="text-black tracking-[0.24px]">2025/10/06 </span>
        <span className="text-[#7c7e79] text-[17.2px] tracking-[0.15px]">
          月
        </span>
      </time>
    </aside>
  );
};
