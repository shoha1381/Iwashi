import { useState, useRef, useEffect } from "react";
import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";

// --- Icons ---
const ChevronDownIcon = ({ className }) => (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const CalendarIcon = ({ className }) => (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

export const Summary = () => {
    const [selectedType, setSelectedType] = useState("店舗");
    const [selectedStore, setSelectedStore] = useState("全店舗");
    const [selectedStaff, setSelectedStaff] = useState("矢澤博章");

    // Date Range State
    const [startDate, setStartDate] = useState(new Date(2025, 10, 1)); // Nov 1 2025
    const [endDate, setEndDate] = useState(new Date(2025, 10, 30)); // Nov 30 2025
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [displayedMonth, setDisplayedMonth] = useState({ year: 2025, month: 10 }); // 0-indexed month
    const datePickerRef = useRef(null);

    // Close date picker when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setShowDatePicker(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Month navigation handlers
    const goToPrevMonth = () => {
        setDisplayedMonth(prev => {
            const newMonth = prev.month === 0 ? 11 : prev.month - 1;
            const newYear = prev.month === 0 ? prev.year - 1 : prev.year;
            return { year: newYear, month: newMonth };
        });
    };

    const goToNextMonth = () => {
        setDisplayedMonth(prev => {
            const newMonth = prev.month === 11 ? 0 : prev.month + 1;
            const newYear = prev.month === 11 ? prev.year + 1 : prev.year;
            return { year: newYear, month: newMonth };
        });
    };

    // Get days in displayed month
    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    // タブ（種別）の定義 - 全体を店舗に変更
    const typeOptions = [
        { value: "店舗", label: "店舗" },
        { value: "媒体", label: "媒体" },
        { value: "施術", label: "施術" },
        { value: "売上", label: "売上" },
    ];

    const formatDate = (date) => {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    };

    // Helper to select a full month
    const selectMonth = (year, month) => {
        const start = new Date(year, month, 1);
        const end = new Date(year, month + 1, 0);
        setStartDate(start);
        setEndDate(end);
        setDisplayedMonth({ year, month });
        setShowDatePicker(false);
    };

    return (
        <div className="min-h-screen bg-neutral-50 flex font-sans overflow-x-hidden">
            {/* Side Navigation */}
            <NavigationSection />

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:mr-16 pb-20 lg:pb-0 w-full h-screen">
                {/* Unified Header */}
                <HeaderSection />

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto pt-16 w-full relative">
                    {/* Background decoration */}
                    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                        <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[50%] bg-blue-200/20 rounded-full blur-[100px]" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/20 rounded-full blur-[100px]" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center py-8 px-6">


                        {/* Filter Section - Glassmorphism with refined controls */}
                        <div className="w-full max-w-[1000px] bg-white/70 rounded-[20px] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl mb-8 p-6 flex flex-col gap-6">

                            {/* Top Row: Type and Period */}
                            <div className="flex flex-wrap gap-8 items-center justify-between border-b border-neutral-200/50 pb-6">
                                {/* Type Selector - Glassmorphism Style */}
                                <div className="flex items-center gap-4">
                                    <label className="font-medium text-neutral-600 text-sm">種別</label>
                                    <div className="bg-white/80 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.8)] border border-white/60 p-1.5 flex backdrop-blur-sm">
                                        {typeOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => setSelectedType(option.value)}
                                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedType === option.value
                                                    ? "bg-[#4aa9fc] text-white shadow-[0_4px_12px_rgba(74,169,252,0.4)]"
                                                    : "text-neutral-500 hover:text-neutral-700 hover:bg-white/60"
                                                    }`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Date Range Picker - Clean Display with 〜 */}
                                <div className="flex items-center gap-4 relative" ref={datePickerRef}>
                                    <label className="font-medium text-neutral-600 text-sm">期間</label>
                                    <button
                                        onClick={() => setShowDatePicker(!showDatePicker)}
                                        className="bg-white/80 hover:bg-white border border-white/60 rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all min-w-[260px] justify-center group"
                                    >
                                        <CalendarIcon className="w-4 h-4 text-neutral-400 group-hover:text-[#4aa9fc] transition-colors" />
                                        <span className="text-sm font-medium text-neutral-700">{formatDate(startDate)}</span>
                                        <span className="text-neutral-400 font-light">〜</span>
                                        <span className="text-sm font-medium text-neutral-700">{formatDate(endDate)}</span>
                                        <ChevronDownIcon className="text-neutral-400 ml-1" />
                                    </button>

                                    {/* Mini Calendar Popover with Connected Date Range */}
                                    {showDatePicker && (() => {
                                        const daysInMonth = getDaysInMonth(displayedMonth.year, displayedMonth.month);
                                        const firstDayOffset = getFirstDayOfMonth(displayedMonth.year, displayedMonth.month);
                                        const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

                                        return (
                                            <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-neutral-100 p-5 z-50 w-[340px] animate-fadeIn">
                                                {/* Month Navigation - Schedule Style */}
                                                <div className="flex justify-between items-center mb-5">
                                                    <button onClick={goToPrevMonth} className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors">
                                                        <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    <h3 className="font-bold text-neutral-800 text-lg">{displayedMonth.year}年 {monthNames[displayedMonth.month]}</h3>
                                                    <button onClick={goToNextMonth} className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors">
                                                        <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                {/* Quick Month Pills */}
                                                <div className="flex gap-2 mb-5 pb-4 border-b border-neutral-100 justify-center">
                                                    {[10, 11, 12].map(m => (
                                                        <button
                                                            key={m}
                                                            onClick={() => selectMonth(displayedMonth.year, m - 1)}
                                                            className={`text-xs px-3 py-1.5 rounded-full transition-all ${displayedMonth.month === m - 1 ? 'bg-[#4aa9fc] text-white shadow-md' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
                                                        >
                                                            {m}月
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Calendar Grid with Connected Range */}
                                                <div className="grid grid-cols-7 gap-0 text-center text-xs mb-2 text-neutral-400 font-medium">
                                                    <div>日</div><div>月</div><div>火</div><div>水</div><div>木</div><div>金</div><div>土</div>
                                                </div>
                                                <div className="grid grid-cols-7 gap-0 text-center text-sm relative">
                                                    {/* Connecting Bar extended to edges */}
                                                    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center z-0 pointer-events-none">
                                                        <div className="w-full h-7 bg-[#4aa9fc]/15 rounded-lg"></div>
                                                    </div>

                                                    {/* Empty cells for offset */}
                                                    {[...Array(firstDayOffset)].map((_, i) => (
                                                        <div key={`empty-${i}`} className="w-9 h-9"></div>
                                                    ))}

                                                    {[...Array(daysInMonth)].map((_, i) => {
                                                        const day = i + 1;
                                                        const currentDate = new Date(displayedMonth.year, displayedMonth.month, day);
                                                        const isStart = currentDate.getTime() === startDate.getTime();
                                                        const isEnd = currentDate.getTime() === endDate.getTime();
                                                        const isInRange = currentDate >= startDate && currentDate <= endDate;

                                                        return (
                                                            <button
                                                                key={i}
                                                                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all relative z-10 ${isStart || isEnd
                                                                    ? 'bg-[#4aa9fc] text-white font-bold shadow-md'
                                                                    : isInRange
                                                                        ? 'text-[#0088ff] font-medium hover:bg-[#4aa9fc]/20'
                                                                        : 'text-neutral-700 hover:bg-neutral-100'
                                                                    }`}
                                                            >
                                                                {day}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>
                            </div>

                            {/* Bottom Row: Store/Staff and Gather Button */}
                            <div className="flex flex-wrap gap-8 items-center justify-between">
                                <div className="flex flex-wrap gap-8 items-center">
                                    {/* Store Selector - Matching Type/Period styling */}
                                    <div className="flex items-center gap-4">
                                        <label className="font-medium text-neutral-600 text-sm">店舗</label>
                                        <button className="bg-white/80 hover:bg-white border border-white/60 rounded-xl px-4 py-2.5 flex items-center gap-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all min-w-[140px] justify-between group">
                                            <span className="text-sm font-medium text-neutral-700">{selectedStore}</span>
                                            <ChevronDownIcon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                                        </button>
                                    </div>

                                    {/* Staff Selector - Matching Type/Period styling */}
                                    <div className="flex items-center gap-4">
                                        <label className="font-medium text-neutral-600 text-sm">スタッフ</label>
                                        <button className="bg-white/80 hover:bg-white border border-white/60 rounded-xl px-4 py-2.5 flex items-center gap-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all min-w-[140px] justify-between group">
                                            <span className="text-sm font-medium text-neutral-700">{selectedStaff}</span>
                                            <ChevronDownIcon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                                        </button>
                                    </div>
                                </div>

                                {/* Gather Button */}
                                <button className="h-12 px-8 bg-[#4a9fef] text-white font-bold rounded-full shadow-[0_4px_16px_rgba(74,159,239,0.3)] hover:bg-[#3b8de0] hover:shadow-[0_6px_24px_rgba(74,159,239,0.4)] hover:-translate-y-0.5 transition-all text-sm tracking-widest">
                                    集計
                                </button>
                            </div>
                        </div>

                        {/* Content Switching */}
                        <div className="w-full max-w-[1000px] animate-fadeIn">
                            {selectedType === "店舗" && <StoreReportTable />}
                            {selectedType === "媒体" && <MediaReportTable />}
                            {selectedType === "施術" && <TreatmentReportTable />}
                            {selectedType === "売上" && <SalesReportTable />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* --- Sub Components --- */

// 共通テーブルスタイル
const TableContainer = ({ children }) => (
    <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100 bg-white">
        {children}
    </div>
);

const TableHeader = ({ cols }) => (
    <thead className="bg-[#55a5e8] text-white">
        <tr>
            {cols.map((col, i) => (
                <th key={i} className={`py-3 px-4 font-medium text-sm text-left ${col.className || ''}`}>
                    {col.label}
                </th>
            ))}
        </tr>
    </thead>
);

const TableRow = ({ children, index }) => (
    <tr className={`border-b border-neutral-100 hover:bg-blue-50/30 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}`}>
        {children}
    </tr>
);

// 店舗別集計テーブル
const StoreReportTable = () => {
    const stores = ["全店舗", "事務所", "上野", "新宿", "横浜", "大宮", "川崎", "銀座", "池袋", "渋谷", "表参道", "難波"];
    return (
        <TableContainer>
            <table className="w-full border-collapse">
                <TableHeader cols={[{ label: "店舗", className: "w-1/4" }, { label: "集計", className: "w-3/4" }]} />
                <tbody>
                    {stores.map((store, i) => (
                        <TableRow key={store} index={i}>
                            <td className="py-3 px-6 text-sm text-neutral-700 font-medium">{store}</td>
                            <td className="py-3 px-4">
                                <div className="flex gap-2 justify-end w-full">
                                    <button className="px-3 py-1.5 bg-[#55a5e8] text-white text-xs font-medium rounded hover:bg-[#4a96d8] transition-colors shadow-sm whitespace-nowrap">媒体集計</button>
                                    <button className="px-3 py-1.5 bg-[#55a5e8] text-white text-xs font-medium rounded hover:bg-[#4a96d8] transition-colors shadow-sm whitespace-nowrap">施術集計</button>
                                    <button className="px-3 py-1.5 bg-[#55a5e8] text-white text-xs font-medium rounded hover:bg-[#4a96d8] transition-colors shadow-sm whitespace-nowrap">売上集計</button>
                                </div>
                            </td>
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </TableContainer>
    );
};

// 媒体別集計テーブル
const MediaReportTable = () => {
    const data = [
        { name: "ホットWEB（ネット）", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "ホットWEB（電話）", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "ホットWEB（ネットSP）", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "ホットWEB（ネットSB）", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "旧キャンペーン", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "旧キャンペーン（SP）", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "EPARK", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "EPARK（SP）", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "EPARK（SB）", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "minimo", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "minimo（SP）", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
        { name: "minimo（SB）", visits: 0, cancel: 0, reserve: 0, rate: "0%" },
    ];
    return (
        <TableContainer>
            <table className="w-full border-collapse text-sm">
                <TableHeader cols={[
                    { label: "#" }, { label: "来店" }, { label: "キャンセル" }, { label: "予約" }, { label: "キャンセル率" }
                ]} />
                <tbody>
                    {data.map((row, i) => (
                        <TableRow key={row.name} index={i}>
                            <td className="py-3 px-4 font-medium text-neutral-700">{row.name}</td>
                            <td className="py-3 px-4 text-neutral-600">{row.visits}</td>
                            <td className="py-3 px-4 text-neutral-600">{row.cancel}</td>
                            <td className="py-3 px-4 text-neutral-600">{row.reserve}</td>
                            <td className="py-3 px-4 text-neutral-600">{row.rate}</td>
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </TableContainer>
    );
};

// 施術別集計テーブル（横スクロール対応）
const TreatmentReportTable = () => {
    const headers = ["#", "O", "骨", "顔", "頭", "首", "P", "SS", "SP", "ST", "リ", "上リ", "顔リ", "リP", "SB", "BT", "旧", "旧旧", "初同", "スタート", "追加移", "リピ", "終了", "変更", "既存", "計", "sales", "売上", "変更率", "スタート率", "リピ率"];
    const rows = [
        { date: "27日(月)", values: Array(30).fill(0) },
        { date: "28日(火)", values: [...Array(18).fill(0), 3, ...Array(5).fill(0), 3, 0, 9900, "0%", "0%", "0%"] },
        { date: "29日(水)", values: Array(30).fill(0) },
        { date: "30日(木)", values: Array(30).fill(0) },
        { date: "31日(金)", values: Array(30).fill(0) },
        { date: "現在日の合計", values: Array(30).fill(0) },
    ];

    return (
        <TableContainer>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs whitespace-nowrap">
                    <thead className="bg-[#55a5e8] text-white">
                        <tr>
                            {headers.map((h, i) => (
                                <th key={i} className={`py-2 px-2 text-center min-w-[30px] ${i < headers.length - 1 ? 'border-r border-blue-400/30' : ''}`}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <TableRow key={i} index={i}>
                                <td className="py-2 px-2 border-r border-neutral-100 font-medium bg-neutral-50/50 sticky left-0 z-10">{row.date}</td>
                                {row.values.map((v, j) => (
                                    <td key={j} className={`py-2 px-2 text-center text-neutral-600 ${j < row.values.length - 1 ? 'border-r border-neutral-100' : ''}`}>
                                        {typeof v === 'number' && v > 100 ? `¥${v.toLocaleString()}` : v}
                                    </td>
                                ))}
                            </TableRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </TableContainer>
    );
};

// 売上集計テーブル
const SalesReportTable = () => {
    const data = [
        { date: "1日(水)", cash: 0, card: 0, point: 0, groupon: 0, luxa: 0, total: 0 },
        { date: "2日(木)", cash: 0, card: 0, point: 0, groupon: 0, luxa: 0, total: 0 },
        { date: "3日(金)", cash: 0, card: 0, point: 0, groupon: 0, luxa: 0, total: 0 },
        { date: "4日(土)", cash: 0, card: 0, point: 0, groupon: 0, luxa: 0, total: 0 },
        { date: "5日(日)", cash: 0, card: 0, point: 0, groupon: 0, luxa: 0, total: 0 },
        { date: "6日(月)", cash: 0, card: 0, point: 0, groupon: 0, luxa: 0, total: 0 },
        { date: "7日(火)", cash: 0, card: 0, point: 0, groupon: 0, luxa: 0, total: 0 },
        { date: "8日(水)", cash: 0, card: 0, point: 0, groupon: 0, luxa: 0, total: 0 },
        { date: "9日(木)", cash: 0, card: 0, point: 0, groupon: 0, luxa: 0, total: 0 },
    ];

    return (
        <TableContainer>
            <table className="w-full border-collapse text-sm">
                <TableHeader cols={[
                    { label: "日付" }, { label: "現金" }, { label: "カード" }, { label: "ポイント" },
                    { label: "グルーポン" }, { label: "ルクサ" }, { label: "合計" }, { label: "" }
                ]} />
                <tbody>
                    {data.map((row, i) => (
                        <TableRow key={row.date} index={i}>
                            <td className="py-3 px-4 font-medium text-neutral-700">{row.date}</td>
                            <td className="py-3 px-4 text-neutral-600">¥{row.cash}</td>
                            <td className="py-3 px-4 text-neutral-600">¥{row.card}</td>
                            <td className="py-3 px-4 text-neutral-600">¥{row.point}</td>
                            <td className="py-3 px-4 text-neutral-600">¥{row.groupon}</td>
                            <td className="py-3 px-4 text-neutral-600">¥{row.luxa}</td>
                            <td className="py-3 px-4 font-bold text-neutral-800">¥{row.total}</td>
                            <td className="py-3 px-4 text-right">
                                <button className="px-3 py-1 bg-[#55a5e8] text-white text-xs rounded hover:bg-[#4a96d8] transition-colors shadow-sm">詳細</button>
                            </td>
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </TableContainer >
    );
};
