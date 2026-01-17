import { useState } from "react";

export const ReservationBookingModal = ({ isOpen, onClose, slotInfo, onSave }) => {
    const [selectedTab, setSelectedTab] = useState("treatment");
    const [vacationType, setVacationType] = useState(null);
    const [businessContent, setBusinessContent] = useState("");

    // Mock Options
    const tabs = [
        { id: "treatment", label: "施術" },
        { id: "business", label: "業務" },
        { id: "vacation", label: "休暇" },
    ];

    if (!isOpen) return null;

    // Derived Data
    const displayDate = slotInfo?.date || "10/6 (月)";
    const startTime = slotInfo?.startTime ? slotInfo.startTime.replace(":00", ":00") : "14:00";
    const endTime = slotInfo?.endTime ? slotInfo.endTime.replace(":00", ":00") : "15:00";
    const customerName = slotInfo?.customerName || "三浦 梨花";
    const serviceName = slotInfo?.service || "小顔矯正 / 美顔マッサージ ＋ 首肩矯正";

    // Handle Confirm
    const handleConfirm = () => {
        if (onSave) {
            onSave({
                mode: selectedTab,
                startTime: startTime,
                date: displayDate,
                customerName: customerName, // Mock logic, ideally from state
                service: serviceName, // Mock logic
                content: businessContent,
                vacationType: vacationType?.replace('paid-', '').replace('unpaid-', '')
            });
        } else {
            onClose();
        }
    };

    // Card Style - Stronger Shadow
    const cardStyle = "bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-neutral-100 rounded-[32px] group cursor-pointer transition-all active:scale-[0.99]";

    // Icon Button Style
    const iconButtonClass = "w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-600 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Noto_Sans_JP'] text-[#333333]">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-neutral-900/10 backdrop-blur-[1px] animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className={`relative w-full max-w-[560px] h-[520px] bg-white rounded-[40px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] border border-neutral-50/50 overflow-hidden z-10 animate-scaleIn flex flex-col`}>

                {/* Header Area */}
                <div className="relative h-16 w-full flex items-center justify-center px-6 mt-3 shrink-0">

                    {/* Close Button (Left) */}
                    <button
                        className={`absolute left-6 ${iconButtonClass}`}
                        onClick={onClose}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Tabs (Center) */}
                    <div className="bg-white p-1.5 rounded-full flex items-center w-[280px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-neutral-50 z-10">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedTab(tab.id)}
                                className={`flex-1 relative z-10 py-2 text-sm font-bold tracking-wide rounded-full transition-all duration-200 ${selectedTab === tab.id
                                    ? "bg-[#4a9fef] text-white shadow-[0_4px_16px_rgba(74,159,239,0.35)]"
                                    : "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Trash Button - Absolute Positioned */}
                    <button className={`absolute right-20 ${iconButtonClass} hover:text-red-500`}>
                        <img src="/static/img/booking-trash-real.svg" className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity" alt="Delete" />
                    </button>

                    {/* Confirm Button - Absolute Positioned */}
                    <button
                        className="absolute right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#4a9fef] text-white shadow-[0_4px_16px_rgba(74,159,239,0.35)] hover:shadow-[0_6px_20px_rgba(74,159,239,0.45)] hover:-translate-y-0.5 transition-all z-20"
                        onClick={handleConfirm}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 px-12 pb-8 flex flex-col gap-5 mt-2 overflow-y-auto">

                    {/* --- TREATMENT MODE --- */}
                    {selectedTab === "treatment" && (
                        <>
                            {/* Top Spacer */}
                            <div className="mt-4"></div>

                            {/* Customer Info Card */}
                            <div className={`flex items-center justify-center p-0 ${cardStyle} relative h-[72px]`}>
                                <div className="text-xl font-medium text-neutral-800 tracking-wide text-center">
                                    {customerName}
                                </div>
                                {/* Edit Actions */}
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-3">
                                    {/* Blue Edit Icon */}
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#4a9fef]">
                                        <img src="/img/edit-icon.svg" className="w-4 h-4" alt="Edit" />
                                    </div>
                                    {/* Toggle Icon - Switch to chevron-down-1.svg */}
                                    <div className="text-neutral-300">
                                        <img src="/static/img/chevron-down-1.svg" className="w-4 h-4" alt="Expand" />
                                    </div>
                                </div>
                            </div>

                            {/* Date & Time - Smaller */}
                            <div className="flex flex-col items-center justify-center gap-1 my-1">
                                <div className="text-lg font-medium text-neutral-800 tracking-wide mb-1">
                                    {displayDate}
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-normal text-neutral-800 tracking-tighter tabular-nums">{startTime}</span>
                                    <div className="h-px w-6 bg-neutral-300"></div>
                                    <span className="text-3xl font-normal text-neutral-800 tracking-tighter tabular-nums">{endTime}</span>
                                </div>
                            </div>

                            {/* Service Info - Matching Height */}
                            <div className={`flex items-center justify-center p-0 ${cardStyle} relative h-[72px]`}>
                                <div className="text-base font-medium text-neutral-700 leading-relaxed text-center px-4">
                                    {serviceName}
                                </div>
                                {/* Toggle Mark */}
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-300">
                                    <img src="/static/img/chevron-down-1.svg" className="w-4 h-4" alt="Expand" />
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="flex items-stretch justify-between mt-4 mb-2 divide-x divide-neutral-100">
                                <div className="flex-1 flex flex-col items-center p-4">
                                    <span className="text-[10px] text-neutral-400 font-medium mb-1 tracking-wider">累計来店回数</span>
                                    <span className="text-2xl font-normal text-neutral-700 tabular-nums">
                                        12<span className="text-xs ml-1 text-neutral-400">回</span>
                                    </span>
                                </div>
                                <div className="flex-1 flex flex-col items-center p-4">
                                    <span className="text-[10px] text-neutral-400 font-medium mb-1 tracking-wider">コース消化</span>
                                    <span className="text-2xl font-normal text-neutral-700 tabular-nums">
                                        5<span className="text-neutral-300 mx-1">/</span>8
                                    </span>
                                </div>
                                <div className="flex-1 flex flex-col items-center p-4">
                                    <span className="text-[10px] text-neutral-400 font-medium mb-1 tracking-wider">前回から</span>
                                    <span className="text-2xl font-normal text-neutral-700 tabular-nums">
                                        14<span className="text-xs ml-1 text-neutral-400">日</span>
                                    </span>
                                </div>
                            </div>
                        </>
                    )}

                    {/* --- BUSINESS MODE --- */}
                    {selectedTab === "business" && (
                        <>
                            {/* Top Spacer - Same as Treatment */}
                            <div className="mt-4"></div>

                            {/* Date & Time - Matching Treatment Style (Smaller) */}
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className="text-lg font-medium text-neutral-800 tracking-wide mb-1">
                                    {displayDate}
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-normal text-neutral-800 tracking-tighter tabular-nums">{startTime}</span>
                                    <div className="h-px w-6 bg-neutral-300"></div>
                                    <span className="text-3xl font-normal text-neutral-800 tracking-tighter tabular-nums">{endTime}</span>
                                </div>
                            </div>

                            {/* Business Content Label */}
                            <div className="text-center text-sm font-bold text-neutral-700 tracking-wide mt-4">
                                業務の内容を入力してください
                            </div>

                            {/* Input Area */}
                            <div className={`p-1 ${cardStyle} cursor-text bg-[#fcfcfc]`}>
                                <textarea
                                    className="w-full h-40 p-5 bg-transparent resize-none focus:outline-none text-neutral-700 leading-relaxed placeholder-neutral-300 text-sm font-medium"
                                    placeholder="ここに入力..."
                                    value={businessContent}
                                    onChange={(e) => setBusinessContent(e.target.value)}
                                />
                            </div>
                        </>
                    )}

                    {/* --- VACATION MODE --- */}
                    {selectedTab === "vacation" && (
                        <>
                            {/* Top Spacer - Same as Treatment */}
                            <div className="mt-4"></div>

                            {/* Date Display - Consistent Smaller Style */}
                            <div className="flex flex-col items-center justify-center gap-1 mb-4">
                                <div className="text-lg font-medium text-neutral-800 tracking-wide">
                                    {displayDate}
                                </div>
                                {/* No time for vacation, just date prominence */}
                            </div>

                            <hr className="border-neutral-100 w-full mb-2" />

                            <div className="flex w-full gap-6 mt-2 h-full">
                                {/* Paid Column */}
                                <div className="flex-1 flex flex-col gap-3">
                                    {/* Large Header */}
                                    <div className="text-center text-base font-bold text-neutral-800 mb-2">有給</div>
                                    {["全休", "午前半休", "午後半休"].map((type) => {
                                        const id = `paid-${type}`;
                                        const isSelected = vacationType === id;
                                        return (
                                            <button
                                                key={id}
                                                onClick={() => setVacationType(id)}
                                                className={`w-full py-3 rounded-[20px] text-sm font-bold transition-all shadow-sm border flex items-center justify-center ${isSelected
                                                    ? "bg-[#4a9fef] text-white border-[#4a9fef] shadow-[0_8px_20px_rgba(74,159,239,0.3)] transform scale-[1.02]"
                                                    : "bg-white text-neutral-600 border-neutral-100 hover:bg-neutral-50 hover:border-neutral-200 hover:shadow-md"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Unpaid Column */}
                                <div className="flex-1 flex flex-col gap-3">
                                    {/* Large Header */}
                                    <div className="text-center text-base font-bold text-neutral-800 mb-2">無給</div>
                                    {["全休", "午前半休", "午後半休"].map((type) => {
                                        const id = `unpaid-${type}`;
                                        const isSelected = vacationType === id;
                                        return (
                                            <button
                                                key={id}
                                                onClick={() => setVacationType(id)}
                                                className={`w-full py-3 rounded-[20px] text-sm font-bold transition-all shadow-sm border flex items-center justify-center ${isSelected
                                                    ? "bg-[#4a9fef] text-white border-[#4a9fef] shadow-[0_8px_20px_rgba(74,159,239,0.3)] transform scale-[1.02]"
                                                    : "bg-white text-neutral-600 border-neutral-100 hover:bg-neutral-50 hover:border-neutral-200 hover:shadow-md"
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
};
