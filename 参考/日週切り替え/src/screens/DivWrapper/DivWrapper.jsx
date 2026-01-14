import { useState } from "react";

export const DivWrapper = () => {
  const [activeTab, setActiveTab] = useState("day");

  const tabs = [
    { id: "day", label: "日", position: "left-[calc(50.00%_-_70px)]" },
    { id: "week", label: "週", position: "left-[71px]" },
  ];

  return (
    <div
      className="relative w-[147px] h-[42px] bg-[#ffffff1a] rounded-[20.49px] overflow-hidden"
      data-model-id="5:1638"
      role="tablist"
      aria-label="Time period selector"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`${tab.id}-panel`}
          onClick={() => setActiveTab(tab.id)}
          className={`${tab.position} absolute top-[3px] w-[73px] h-9 flex justify-center rounded-[20.49px] overflow-hidden transition-all duration-200 ${
            activeTab === tab.id
              ? "bg-[#0088ffb2] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.14),inset_-1px_0_1px_rgba(0,0,0,0.11)]"
              : ""
          }`}
        >
          <div
            className={`flex items-center justify-center ml-[-0.2px] w-[13px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[13px] text-center tracking-[0.91px] leading-[35.5px] whitespace-nowrap ${
              activeTab === tab.id ? "text-white" : "text-[#999999]"
            }`}
          >
            {tab.label}
          </div>
        </button>
      ))}
    </div>
  );
};
