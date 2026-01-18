import { NavigationSection } from "../../components/NavigationSection";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
const TrendUpIcon = () => (
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor">
        <path d="M1 9L4.5 5.5L7 8L11 4M11 4H8M11 4V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TrendDownIcon = () => (
    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor">
        <path d="M1 3L4.5 6.5L7 4L11 8M11 8H8M11 8V5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Mock Data
const salesData = {
    target: 75,
    forecast: 50,
};

const relatedMetrics = [
    { label: "継続率", value: "84.3%", change: "3.8%", isPositive: true },
    { label: "頻度達成率", value: "68.0%", change: "2.1%", isPositive: false },
    { label: "10回までの来店ペース", value: "9.2日", change: "0.5日", isPositive: true },
    { label: "平均単価", value: "8,500円", change: "650円", isPositive: true },
];

const topGoodItems = [
    { label: "カリキュラム作成費", value: 98.7 },
    { label: "③ 継続の確認", value: 84.3 },
    { label: "④ 次回支払いの確認", value: 84.3 },
];

const topBadItems = [
    { label: "施術前の予約", value: 50.3 },
    { label: "5回払い", value: 68.0 },
    { label: "① 効果のイメージ", value: 68.0 },
];

const allAchievementData = [
    { label: "5回払い", value: 68, change: -2.1, isPositive: false },
    { label: "カリキュラム作成費", value: 98.7, change: 2.1, isPositive: true },
    { label: "施術前の予約", value: 50.3, change: -2.1, isPositive: false },
    { label: "変更4日後以降", value: 79.3, change: 3.8, isPositive: true },
    { label: "① 頻度のグラフ", value: 72.5, change: 5.2, isPositive: true },
    { label: "① 効果のイメージ", value: 68, change: -2.1, isPositive: false },
    { label: "③ 継続の確認", value: 84.3, change: 3.8, isPositive: true },
    { label: "④ 次回支払いの確認", value: 84.3, change: 3.8, isPositive: true },
    { label: "⑤ 継続の確認・予約", value: 72.5, change: 5.2, isPositive: true },
    { label: "⑤ 次回以降の支払い", value: 68, change: -2.1, isPositive: false },
    { label: "⑤ ５回分の支払い", value: 84.3, change: 3.8, isPositive: true },
    { label: "⑧ After写真撮影", value: 72.5, change: 5.2, isPositive: true },
];

const todoItems = [
    "10回目までのお客様には、来店ペースが結果に直結することを毎回リマインドする。",
    "施術前の予約を徹底する。",
    "5回目にまとめて支払いを徹底する。",
];

const adviceData = {
    treatment: "フェイスラインの引き締まりや左右バランスの改善、小顔効果が顕著に表れています。特に、咬筋・側頭筋・首周りへのアプローチが安定しており、施術後の変化量が大きく、効果の持続力も高まっています。",
    service: "継続率が着実に向上しており、顧客満足度も高い水準で推移しています。特に、施術前の予約取得がスムーズになり、来店ペースが理想に近づいているお客様ほど効果実感が高い傾向が見られます。"
};

// Style constants
const softShadow = "shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-neutral-100";
const cardHeader = "px-4 py-3 bg-neutral-50 border-b border-neutral-100 flex items-center gap-2";

// Components
const DonutChart = ({ value, total, size = 120, strokeWidth = 8 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = Math.min((value / total) * 100, 100);
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
                {/* Background Circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#f3f4f6"
                    strokeWidth={strokeWidth}
                />
                {/* Progress Circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#4aa9fc"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[10px] text-neutral-400 font-medium">達成率</span>
                <span className="text-xl font-bold text-neutral-800">{Math.round(progress)}<span className="text-xs font-normal">%</span></span>
            </div>
        </div>
    );
};

const CompactMetricCard = ({ label, value, change, isPositive }) => (
    <div className="p-2.5 rounded-lg border border-neutral-100 bg-white h-full flex flex-col justify-between">
        <div className="text-[10px] font-medium text-neutral-500 mb-1 truncate">{label}</div>
        <div className="flex items-end justify-between">
            <span className="text-[15px] font-bold text-neutral-800 tracking-tight leading-none mb-1.5">{value}</span>
            <div className="flex flex-col items-end">
                <div className={`flex items-center gap-0.5 text-[9px] font-medium ${isPositive ? 'text-[#00A63E]' : 'text-[#E7000B]'}`}>
                    {isPositive ? <TrendUpIcon /> : <TrendDownIcon />}
                    {change}
                </div>
                <span className="text-[8px] text-neutral-400">先月比</span>
            </div>
        </div>
    </div>
);

const RankItem = ({ rank, label, value, type }) => (
    <div className={`flex items-center justify-between py-2.5 px-3 bg-white rounded-lg ${softShadow}`}>
        <div className="flex items-center gap-2.5">
            <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${type === 'good' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {rank}
            </span>
            <span className="text-[12px] font-medium text-neutral-700">{label}</span>
        </div>
        <span className={`text-[12px] font-bold ${type === 'good' ? 'text-green-600' : 'text-red-600'}`}>
            {value}%
        </span>
    </div>
);

const AllMetricCard = ({ metric }) => (
    <div className="p-2.5 rounded-lg border border-neutral-100 bg-white">
        <div className="text-[10px] font-medium text-neutral-500 mb-1 truncate">{metric.label}</div>
        <div className="flex items-end justify-between">
            <span className="text-sm font-medium text-neutral-800">{metric.value}%</span>
            <div className="flex flex-col items-end">
                <div className={`flex items-center gap-0.5 text-[9px] font-medium ${metric.isPositive ? 'text-[#00A63E]' : 'text-[#E7000B]'}`}>
                    {metric.isPositive ? <TrendUpIcon /> : <TrendDownIcon />}
                    {metric.isPositive ? '+' : ''}{metric.change}%
                </div>
                <span className="text-[8px] text-neutral-400">先月比</span>
            </div>
        </div>
    </div>
);

export const Analytics = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showAllItems, setShowAllItems] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsDesktop(window.innerWidth >= 1280);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-[#fafafc] flex font-sans overflow-x-hidden">
            {!isMobile && !isDesktop && <NavigationSection />}

            <div className={`flex-1 flex flex-col pb-20 xl:pb-0 w-full h-screen ${isDesktop ? 'ml-[72px]' : 'lg:mr-16'}`}>
                {/* Header */}
                <header className={`header-nav transition-all duration-200 ${isDesktop ? 'left-[72px]' : 'left-0'}`}>
                    <div className="px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
                        <span className="text-base md:text-lg font-normal text-neutral-700 tracking-wide ml-2">分析</span>
                        <Link
                            to="/customer-achievements"
                            className="h-9 px-5 bg-[#4aa9fc] text-white text-sm font-bold rounded-full shadow-md shadow-blue-100 hover:shadow-blue-200 hover:translate-y-[-1px] transition-all flex items-center gap-1.5"
                        >
                            顧客一覧
                        </Link>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 overflow-y-auto w-full pt-14 md:pt-16">
                    <div className="bg-[#fefefe] min-h-full p-4 md:p-6">
                        <div className="max-w-5xl mx-auto space-y-6">

                            {/* Section 1: 売上・関連指標 (Redesigned) */}
                            <div className={`bg-white rounded-xl overflow-hidden ${softShadow}`}>
                                <div className={cardHeader}>
                                    <h2 className="font-medium text-sm text-neutral-800 tracking-wide">売上・関連指標</h2>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6 items-stretch">
                                        {/* Left: Sales & Donut - Compact width to keep border close */}
                                        <div className="flex-none flex items-center gap-8 pr-8 md:border-r border-neutral-100">
                                            <div className="flex flex-col gap-6">
                                                <div>
                                                    <span className="text-[11px] font-medium text-neutral-400 block mb-1">目標売上</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-3xl font-bold text-neutral-800 tracking-tight">{salesData.target}</span>
                                                        <span className="text-sm font-medium text-neutral-500">万円</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-[11px] font-medium text-neutral-400 block mb-1">予想売上</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-4xl font-bold text-[#4aa9fc] tracking-tight">{salesData.forecast}</span>
                                                        <span className="text-base font-medium text-neutral-500">万円</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 pt-2">
                                                <DonutChart value={salesData.forecast} total={salesData.target} />
                                            </div>
                                        </div>

                                        {/* Right: Metrics Grid - Expands to fill remaining space */}
                                        <div className="flex-1 grid grid-cols-2 gap-3 min-w-[320px]">
                                            {relatedMetrics.map((metric, i) => (
                                                <CompactMetricCard key={i} {...metric} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: 基本の達成度 */}
                            <div className={`bg-white rounded-xl overflow-hidden ${softShadow}`}>
                                <div className={`${cardHeader} justify-between`}>
                                    <h2 className="font-medium text-sm text-neutral-800 tracking-wide">基本の達成度</h2>
                                    <button
                                        onClick={() => setShowAllItems(!showAllItems)}
                                        className="text-[11px] font-medium text-[#4aa9fc] hover:text-blue-600 transition-colors"
                                    >
                                        {showAllItems ? '閉じる' : '全ての項目を表示'}
                                    </button>
                                </div>
                                <div className="p-4">
                                    {!showAllItems ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Good Items */}
                                            <div className="bg-[#f8f9fa] p-3 rounded-xl border border-neutral-100">
                                                <h3 className="text-[11px] font-bold text-green-600 mb-2.5 flex items-center gap-1.5 px-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                    よくできている項目 Top 3
                                                </h3>
                                                <div className="space-y-2">
                                                    {topGoodItems.map((item, i) => (
                                                        <RankItem key={i} rank={i + 1} label={item.label} value={item.value} type="good" />
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Bad Items */}
                                            <div className="bg-[#f8f9fa] p-3 rounded-xl border border-neutral-100">
                                                <h3 className="text-[11px] font-bold text-red-600 mb-2.5 flex items-center gap-1.5 px-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                                    必要な項目 Top 3
                                                </h3>
                                                <div className="space-y-2">
                                                    {topBadItems.map((item, i) => (
                                                        <RankItem key={i} rank={i + 1} label={item.label} value={item.value} type="bad" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            {allAchievementData.map((metric, i) => (
                                                <AllMetricCard key={i} metric={metric} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Bottom Row: To Do + アドバイス */}
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-stretch">

                                {/* To Do */}
                                <div className={`bg-white rounded-xl overflow-hidden flex flex-col h-full ${softShadow}`}>
                                    <div className={cardHeader}>
                                        <h2 className="font-medium text-sm text-neutral-800 tracking-wide">To Do</h2>
                                    </div>
                                    <div className="p-4 flex-1">
                                        <ul className="space-y-3">
                                            {todoItems.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[12px] font-medium text-neutral-700 leading-relaxed p-2.5 bg-[#fcfcfc] rounded-lg border border-neutral-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4aa9fc] mt-1.5 flex-shrink-0 shadow-sm"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* アドバイス */}
                                <div className={`bg-white rounded-xl overflow-hidden flex flex-col h-full ${softShadow}`}>
                                    <div className={cardHeader}>
                                        <h2 className="font-medium text-sm text-neutral-800 tracking-wide">アドバイス</h2>
                                    </div>
                                    <div className="flex-1 relative min-h-[160px]">
                                        {/* Divider Lines */}
                                        <div className="absolute top-0 bottom-0 left-[80px] w-px bg-neutral-100" />
                                        <div className="absolute top-[50%] left-0 right-0 h-px bg-neutral-100" />

                                        {/* Labels */}
                                        <div className="absolute top-0 left-0 w-[80px] h-[50%] flex items-center justify-center bg-neutral-50/30">
                                            <span className="text-[12px] font-bold text-neutral-700 tracking-wide">施術</span>
                                        </div>
                                        <div className="absolute top-[50%] left-0 w-[80px] h-[50%] flex items-center justify-center bg-neutral-50/30">
                                            <span className="text-[12px] font-bold text-neutral-700 tracking-wide">接客</span>
                                        </div>

                                        {/* Content */}
                                        <div className="absolute top-0 left-[81px] right-0 h-[50%] p-3 md:p-4 overflow-y-auto">
                                            <p className="text-[11px] font-medium text-neutral-600 leading-relaxed">
                                                {adviceData.treatment}
                                            </p>
                                        </div>
                                        <div className="absolute top-[50%] left-[81px] right-0 h-[50%] p-3 md:p-4 overflow-y-auto">
                                            <p className="text-[11px] font-medium text-neutral-600 leading-relaxed">
                                                {adviceData.service}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
