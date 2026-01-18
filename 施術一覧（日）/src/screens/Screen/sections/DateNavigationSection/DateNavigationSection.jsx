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
    onSearchClick,
    onTodayClick,
    onMoreClick,
}) => {
    const dateInfo = formatDate(selectedDate);
    const viewOptions = [
        { id: "day", label: "日" },
        { id: "week", label: "週" },
    ];

    return (
        <header className="header-nav">
            <div className="px-2 md:px-6 py-2 md:py-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                    {/* Row 1: Date Navigation & View Toggle (Mobile) / Left Side (Desktop) */}
                    <div className="flex items-center justify-between md:justify-start w-full md:w-auto gap-2">
                        {/* Date Nav */}
                        <div className="flex items-center gap-1 md:gap-4 flex-shrink-0">
                            <button onClick={() => navigateDate(-1)} className="nav-arrow" aria-label="前の日">
                                <ChevronLeftIcon />
                            </button>

                            <div className="flex items-baseline gap-1 md:gap-2 whitespace-nowrap">
                                {selectedView === "week" ? (
                                    <>
                                        <span className="text-sm md:text-lg font-normal text-neutral-700 tracking-wide">
                                            {dateInfo.full}
                                        </span>
                                        <span className="text-[10px] md:text-sm font-normal text-neutral-400">{dateInfo.dayOfWeek}</span>
                                        <span className="text-[10px] md:text-sm font-normal text-neutral-400 mx-0.5 md:mx-1">〜</span>
                                        <span className="text-sm md:text-lg font-normal text-neutral-700 tracking-wide">
                                            {dateInfo.weekEnd}
                                        </span>
                                        <span className="text-[10px] md:text-sm font-normal text-neutral-400">{dateInfo.weekEndDay}</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-sm md:text-lg font-normal text-neutral-700 tracking-wide">{dateInfo.full}</span>
                                        <span className="text-[10px] md:text-sm font-normal text-neutral-400">{dateInfo.dayOfWeek}</span>
                                    </>
                                )}
                            </div>

                            <button onClick={() => navigateDate(1)} className="nav-arrow" aria-label="次の日">
                                <ChevronRightIcon />
                            </button>
                        </div>

                        {/* View Toggle - Visible here on Mobile */}
                        <div className="md:hidden">
                            <div
                                className="relative h-7 p-0.5 bg-white/90 rounded-full flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                                role="tablist"
                            >
                                {viewOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        role="tab"
                                        aria-selected={selectedView === option.id}
                                        onClick={() => setSelectedView(option.id)}
                                        className={`relative px-3 h-6 flex items-center justify-center rounded-full text-[10px] font-medium tracking-[0.5px] transition-all duration-200 ${selectedView === option.id
                                            ? "bg-[#0088ffb2] text-white shadow-[0_2px_6px_rgba(0,136,255,0.25)]"
                                            : "text-[#888] hover:text-[#666]"
                                            }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Store/Actions (Mobile) / Right Side (Desktop) */}
                    <div className="flex items-center justify-end w-full md:w-auto gap-2">
                        {/* View Toggle - Desktop Only */}
                        <div className="hidden md:block">
                            <div
                                className="relative h-9 p-1 bg-white/90 rounded-full flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                                role="tablist"
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
                        </div>

                        {/* Store Selector - positioned near icons */}
                        <button
                            className="relative h-7 md:h-9 px-3 md:px-4 bg-white/90 rounded-full overflow-hidden flex items-center gap-1 md:gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow duration-200"
                            type="button"
                            aria-label="店舗を選択"
                        >
                            <span className="font-medium text-[#5e6367] text-[10px] md:text-[13px] tracking-[0.5px] whitespace-nowrap">
                                {selectedStore}
                            </span>
                            <svg className="w-1.5 h-1.5 md:w-2 md:h-2 text-[#999]" viewBox="0 0 8 5" fill="currentColor">
                                <path d="M4 5L0 0h8L4 5z" />
                            </svg>
                        </button>

                        {/* Action Buttons - search now visible on mobile */}
                        <button className="icon-button" aria-label="検索" onClick={onSearchClick}><SearchIcon /></button>
                        <button className="icon-button" aria-label="今日に戻る" onClick={onTodayClick}><CalendarIcon /></button>
                        <button className="icon-button" aria-label="メニュー" onClick={onMoreClick}><MoreIcon /></button>
                    </div>
                </div>
            </div>
        </header>
    );
};
