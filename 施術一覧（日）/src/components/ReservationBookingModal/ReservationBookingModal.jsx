import { useState } from "react";

export const ReservationBookingModal = ({ isOpen, onClose, slotInfo }) => {
    const [selectedTab, setSelectedTab] = useState("treatment");

    // Mock Options
    const tabs = [
        { id: "treatment", label: "施術" },
        { id: "business", label: "業務" },
        { id: "vacation", label: "休暇" },
    ];

    if (!isOpen) return null;

    // Derived Data
    const displayDate = slotInfo?.date || "2025/10/06 (月)";
    const startTime = slotInfo?.startTime || "17:00";
    const endTime = slotInfo?.endTime || "18:00";
    const customerName = slotInfo?.customerName || "三浦梨花";
    const serviceName = slotInfo?.service || "小顔矯正 / 美顔マッサージ ＋ 首肩矯正";

    // Updated Visit Info Logic
    const visitInfo = {
        total: 12,
        courseCurrent: 5,
        courseTotal: 8,
        lastVisitDays: 14
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Noto_Sans_JP']">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-neutral-900/10 backdrop-blur-[1px] animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-[560px] bg-white rounded-[40px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] border border-neutral-50/50 overflow-hidden z-10 animate-scaleIn flex flex-col">

                {/* Header Area - Centered Layout */}
                <div className="relative h-24 w-full flex items-center justify-center px-8 mt-4">

                    {/* Close Button (Left) */}
                    <button
                        className="absolute left-8 w-11 h-11 flex items-center justify-center rounded-full bg-white text-neutral-400 hover:text-neutral-600 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all z-20"
                        onClick={onClose}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Tabs (Center) - Larger Size & Adjusted Blue */}
                    <div className="bg-white p-1.5 rounded-full flex items-center w-[300px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-neutral-50 z-10">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedTab(tab.id)}
                                className={`flex-1 relative z-10 py-2.5 text-sm font-bold tracking-wide rounded-full transition-all duration-200 ${selectedTab === tab.id
                                        ? "bg-[#4a9fef] text-white shadow-[0_4px_16px_rgba(74,159,239,0.35)]"
                                        : "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Confirm Button (Right) - Adjusted Blue & Removed Trash */}
                    <button
                        className="absolute right-8 w-11 h-11 flex items-center justify-center rounded-full bg-[#4a9fef] text-white shadow-[0_4px_16px_rgba(74,159,239,0.35)] hover:shadow-[0_6px_20px_rgba(74,159,239,0.45)] hover:-translate-y-0.5 transition-all z-20"
                        onClick={onClose}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 px-12 pb-12 flex flex-col gap-8 mt-4">

                    {/* Customer Info - Spacing Wide */}
                    <div className="flex items-center justify-center p-6 rounded-[32px] bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)] border border-neutral-50/50 relative group cursor-pointer hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-all">
                        <div className="text-3xl font-medium text-neutral-800 tracking-wide text-center">
                            {customerName}
                        </div>
                        {/* Edit Icon */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-300 group-hover:text-[#4a9fef] transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="text-sm font-medium text-neutral-400 tracking-wider">
                            {displayDate}
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-4xl font-light text-neutral-800 tracking-tighter tabular-nums">{startTime}</span>
                            <div className="h-px w-6 bg-neutral-300"></div>
                            <span className="text-4xl font-light text-neutral-800 tracking-tighter tabular-nums">{endTime}</span>
                        </div>
                    </div>

                    {/* Service Info - With Toggle Mark */}
                    <div className="flex items-center justify-center p-6 rounded-[32px] bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)] border border-neutral-50/50 relative group cursor-pointer hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] transition-all">
                        <div className="text-lg text-neutral-700 leading-relaxed font-normal text-center px-4">
                            {serviceName}
                        </div>
                        {/* Toggle Mark (Chevron) */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-300 group-hover:text-[#4a9fef] transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Stats Row - Spacing Fixed */}
                    <div className="flex items-stretch justify-between mt-2 divide-x divide-neutral-100">
                        <div className="flex-1 flex flex-col items-center p-4">
                            <span className="text-[10px] text-neutral-400 font-medium mb-1 tracking-wider">累計来店回数</span>
                            <span className="text-2xl font-normal text-neutral-700 tabular-nums">
                                {visitInfo.total}<span className="text-xs ml-1 text-neutral-400">回</span>
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col items-center p-4">
                            <span className="text-[10px] text-neutral-400 font-medium mb-1 tracking-wider">コース消化</span>
                            <span className="text-2xl font-normal text-neutral-700 tabular-nums">
                                {visitInfo.courseCurrent}<span className="text-neutral-300 mx-1">/</span>{visitInfo.courseTotal}
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col items-center p-4">
                            <span className="text-[10px] text-neutral-400 font-medium mb-1 tracking-wider">前回から</span>
                            <span className="text-2xl font-normal text-neutral-700 tabular-nums">
                                {visitInfo.lastVisitDays}<span className="text-xs ml-1 text-neutral-400">日</span>
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
