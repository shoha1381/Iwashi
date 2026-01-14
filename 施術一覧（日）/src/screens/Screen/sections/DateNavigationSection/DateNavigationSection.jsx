import { useState } from "react";

// Icons
const CalendarIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const MoreIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export const DateNavigationSection = ({
    selectedDate,
    formatDate,
    navigateDate,
    selectedView,
    setSelectedView,
    selectedStore,
}) => {
    const dateInfo = formatDate(selectedDate);
    const viewOptions = [
        { id: "day", label: "日" },
        { id: "week", label: "週" },
    ];

    return (
        <header className="header-nav">
            <div className="px-4 md:px-6 py-3 md:py-4">
                <div className="flex items-center justify-between gap-2 md:gap-4 flex-wrap">
                    {/* Left: Date Navigation */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <button onClick={() => navigateDate(-1)} className="nav-arrow" aria-label="前の日">
                            <ChevronLeftIcon />
                        </button>

                        <div className="flex items-baseline gap-1 md:gap-2">
                            <span className="text-base md:text-lg font-normal text-neutral-700 tracking-wide">{dateInfo.full}</span>
                            <span className="text-xs md:text-sm font-normal text-neutral-400">{dateInfo.dayOfWeek}</span>
                        </div>

                        <button onClick={() => navigateDate(1)} className="nav-arrow" aria-label="次の日">
                            <ChevronRightIcon />
                        </button>
                    </div>

                    {/* Right: Controls grouped together */}
                    <div className="flex items-center gap-1 md:gap-2">
                        {/* Store Selector - Compact with soft shadow */}
                        <button
                            className="relative h-9 px-4 bg-white/90 rounded-full overflow-hidden flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow duration-200"
                            type="button"
                            aria-label="店舗を選択"
                        >
                            <span className="font-medium text-[#5e6367] text-[13px] tracking-[0.5px] whitespace-nowrap">
                                {selectedStore}
                            </span>
                            <svg className="w-2 h-2 text-[#999]" viewBox="0 0 8 5" fill="currentColor">
                                <path d="M4 5L0 0h8L4 5z" />
                            </svg>
                        </button>

                        {/* View Toggle - Clean segmented control with soft shadow */}
                        <div
                            className="relative h-9 p-1 bg-white/90 rounded-full flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                            role="tablist"
                            aria-label="表示期間選択"
                        >
                            {viewOptions.map((option) => (
                                <button
                                    key={option.id}
                                    role="tab"
                                    aria-selected={selectedView === option.id}
                                    onClick={() => setSelectedView(option.id)}
                                    className={`relative px-5 h-7 flex items-center justify-center rounded-full text-[13px] font-medium tracking-[0.5px] transition-all duration-200 ${selectedView === option.id
                                        ? "bg-[#0088ffb2] text-white shadow-[0_2px_6px_rgba(0,136,255,0.25)]"
                                        : "text-[#888] hover:text-[#666]"
                                        }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>

                        {/* Action Buttons - hide some on mobile */}
                        <button className="icon-button hidden sm:flex" aria-label="検索"><SearchIcon /></button>
                        <button className="icon-button" aria-label="今日に戻る"><CalendarIcon /></button>
                        <button className="icon-button" aria-label="メニュー"><MoreIcon /></button>
                    </div>
                </div>
            </div>
        </header>
    );
};
