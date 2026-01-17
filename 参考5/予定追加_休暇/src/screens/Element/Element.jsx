import { useState } from "react";

export const Element = () => {
  const [selectedTab, setSelectedTab] = useState("vacation");
  const [selectedLeaveType, setSelectedLeaveType] = useState(null);

  const tabs = [
    { id: "treatment", label: "施術" },
    { id: "business", label: "業務" },
    { id: "vacation", label: "休暇" },
  ];

  const leaveOptions = [
    { id: "full-day", label: "全休" },
    { id: "morning-half", label: "午前半休" },
    { id: "afternoon-half", label: "午後半休" },
  ];

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  const handleLeaveOptionClick = (optionId, isPaid) => {
    setSelectedLeaveType({ optionId, isPaid });
  };

  return (
    <div
      className="relative w-[622px] h-[548px] bg-white rounded-[25px]"
      data-model-id="1:2208"
    >
      <img
        className="absolute w-[100.00%] h-0 top-[33.27%] left-0"
        alt="Vector"
        src="/img/vector-5.svg"
      />

      <img
        className="absolute h-0 top-[33.58%] left-[calc(50.00%_-_1px)] w-px"
        alt="Vector"
        src="/img/vector-6.svg"
      />

      <h1 className="absolute h-[10.40%] top-[19.71%] left-[calc(50.00%_-_52px)] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[29.5px] text-center tracking-[0] leading-[56.7px] whitespace-nowrap">
        10/6 (月)
      </h1>

      <button
        className="absolute w-[7.72%] h-[8.76%] top-[2.92%] left-[2.89%] shadow-[0px_7px_20px_#0000000d]"
        aria-label="Close"
      >
        <img
          className="w-[calc(100%_+_52px)] h-[calc(100%_+_52px)] top-[-26px] left-[-26px] absolute object-cover"
          alt=""
          src="/img/blur.svg"
        />

        <div className="rounded-[296px] absolute w-full h-full top-0 left-0 bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

        <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[296px] backdrop-blur-[3.0px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(3.0px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_2px_rgba(0,0,0,0.20),inset_-1px_0_2px_rgba(0,0,0,0.16)]" />
      </button>

      <button
        className="absolute w-[7.72%] h-[8.76%] top-[2.92%] left-[89.39%] flex rounded-[1000px] shadow-[0px_1px_8px_#0000001f,0px_0px_2px_#0000001a] bg-[linear-gradient(0deg,rgba(0,145,255,1)_0%,rgba(0,145,255,1)_100%),linear-gradient(0deg,rgba(153,153,153,1)_0%,rgba(153,153,153,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%)]"
        aria-label="Confirm"
      >
        <div className="flex-1 w-12 bg-[#00000001] rounded-[296px] backdrop-blur-[3.0px] backdrop-brightness-[96.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(3.0px)_brightness(96.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_1px_0_0_rgba(255,255,255,0.28),inset_0_-1px_2px_rgba(0,0,0,0.20),inset_-1px_0_2px_rgba(0,0,0,0.16)]" />
      </button>

      <div
        className="absolute w-[51.41%] h-[9.17%] top-[2.74%] left-[21.06%] bg-white rounded-[25.13px] shadow-[0px_7px_20px_#0000000d]"
        role="tablist"
        aria-label="Category selection"
      >
        <div
          className="absolute w-[32.44%] h-[82.98%] top-[8.51%] rounded-[25.13px] bg-[#4cabff] transition-all duration-300 ease-in-out"
          style={{
            left:
              selectedTab === "treatment"
                ? "1.34%"
                : selectedTab === "business"
                  ? "33.78%"
                  : "66.22%",
          }}
        />

        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`absolute w-[9.38%] h-[57.69%] top-[21.28%] text-[14.9px] leading-[28.6px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium tracking-[0] whitespace-nowrap transition-colors duration-300 ${
              selectedTab === tab.id ? "text-white" : "text-[#999999]"
            }`}
            style={{
              left: index === 0 ? "13.04%" : index === 1 ? "45.48%" : "77.93%",
            }}
            role="tab"
            aria-selected={selectedTab === tab.id}
            aria-controls={`${tab.id}-panel`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <img
        className="absolute w-[5.00%] h-[5.67%] top-[4.38%] left-[90.68%]"
        alt="Check"
        src="/img/check.svg"
      />

      <img
        className="absolute w-[5.00%] h-[5.67%] top-[3.28%] left-[3.22%]"
        alt="Plus"
        src="/img/plus.svg"
      />

      <div className="flex flex-col w-[254px] items-start gap-[15px] absolute top-[293px] left-7">
        {leaveOptions.map((option) => (
          <button
            key={`paid-${option.id}`}
            onClick={() => handleLeaveOptionClick(option.id, true)}
            className={`flex h-[58px] items-center justify-center gap-2 px-[168px] py-0 relative self-stretch w-full bg-white rounded-[10px] overflow-hidden border border-solid transition-colors duration-200 ${
              selectedLeaveType?.optionId === option.id &&
              selectedLeaveType?.isPaid
                ? "border-[#4cabff] bg-[#4cabff]/5"
                : "border-[#0000001a]"
            }`}
            aria-pressed={
              selectedLeaveType?.optionId === option.id &&
              selectedLeaveType?.isPaid
            }
          >
            <div className="relative w-fit mt-[-9.00px] mb-[-7.00px] ml-[-61.00px] mr-[-61.00px] text-black text-xl text-center leading-[73.4px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium tracking-[0] whitespace-nowrap">
              {option.label}
            </div>
          </button>
        ))}
      </div>

      <h2 className="absolute top-[212px] left-[135px] h-[74px] text-black text-xl text-center leading-[73.4px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium tracking-[0] whitespace-nowrap">
        有給
      </h2>

      <h2 className="absolute top-[212px] left-[447px] h-[74px] text-black text-xl text-center leading-[73.4px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium tracking-[0] whitespace-nowrap">
        無給
      </h2>

      <div className="flex flex-col w-[254px] items-start gap-[15px] absolute top-[293px] left-[340px]">
        {leaveOptions.map((option) => (
          <button
            key={`unpaid-${option.id}`}
            onClick={() => handleLeaveOptionClick(option.id, false)}
            className={`flex h-[58px] items-center justify-center gap-2 px-[168px] py-0 relative self-stretch w-full bg-white rounded-[10px] overflow-hidden border border-solid transition-colors duration-200 ${
              selectedLeaveType?.optionId === option.id &&
              !selectedLeaveType?.isPaid
                ? "border-[#4cabff] bg-[#4cabff]/5"
                : "border-[#0000001a]"
            }`}
            aria-pressed={
              selectedLeaveType?.optionId === option.id &&
              !selectedLeaveType?.isPaid
            }
          >
            <div className="relative w-fit mt-[-9.00px] mb-[-7.00px] ml-[-61.00px] mr-[-61.00px] text-black text-xl text-center leading-[73.4px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium tracking-[0] whitespace-nowrap">
              {option.label}
            </div>
          </button>
        ))}
      </div>

      <button
        className="absolute w-[7.56%] h-[8.58%] top-[2.92%] left-[78.94%]"
        aria-label="Delete"
      >
        <div className="absolute w-[100.00%] h-[100.00%] top-0 left-0 shadow-[0px_7px_20px_#0000000d]">
          <img
            className="w-[calc(100%_+_51px)] h-[calc(100%_+_51px)] top-[-25px] left-[-25px] absolute object-cover"
            alt=""
            src="/img/blur-1.svg"
          />

          <div className="rounded-[289.83px] absolute w-full h-full top-0 left-0 bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

          <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[289.83px] backdrop-blur-[2.9px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.9px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.20),inset_-1px_0_1px_rgba(0,0,0,0.16)]" />
        </div>

        <div className="absolute top-[calc(50.00%_-_11px)] left-[calc(50.00%_-_11px)] w-[22px] h-[22px] aspect-[1]">
          <img
            className="absolute w-[76.00%] h-[100.00%] top-0 left-[12.00%]"
            alt=""
            src="/img/vector.svg"
          />

          <img
            className="absolute w-[66.12%] h-[64.43%] top-[35.31%] left-[16.87%]"
            alt=""
            src="/img/vector-1.svg"
          />
        </div>
      </button>
    </div>
  );
};
