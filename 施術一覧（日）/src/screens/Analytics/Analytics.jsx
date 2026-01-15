import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";

// Custom Icons using reference assets directly
const TrendUpIcon = () => (
    <div className="relative w-4 h-4">
        <img src="/analytics/vector-43.svg" className="absolute top-[25%] left-[62.5%] w-[25%] h-[25%]" alt="trend" />
        <img src="/analytics/vector-44.svg" className="absolute top-[25%] left-[4%] w-[83%] h-[41%]" alt="trend" />
    </div>
);

const TrendDownIcon = () => (
    <div className="relative w-4 h-4">
        <img src="/analytics/vector-39.svg" className="absolute top-[41%] left-[62.5%] w-[25%] h-[25%]" alt="trend" />
        <img src="/analytics/vector-40.svg" className="absolute top-[25%] left-[4%] w-[83%] h-[41%]" alt="trend" />
    </div>
);

// AI提案アイコン
const AISummaryIcon = () => (
    <div className="relative w-5 h-5">
        <img src="/analytics/vector-50.svg" className="absolute top-[25%] left-[62.5%] w-[25%] h-[25%]" alt="summary" />
        <img src="/analytics/vector-49.svg" className="absolute top-[25%] left-[4%] w-[83%] h-[41%]" alt="summary" />
    </div>
);

const AIEffectIcon = () => (
    <img src="/analytics/vector-51.svg" className="w-5 h-5" alt="effect" />
);

const AITodoIcon = () => (
    <img src="/analytics/vector-55.svg" className="w-5 h-5" alt="todo" />
);

// 売上系アイコン
const SalesIcon = () => (
    <div className="relative w-5 h-5">
        <img src="/analytics/vector.svg" className="absolute top-[25%] left-[62.5%] w-[25%] h-[25%]" alt="sales" />
        <img src="/analytics/vector-1.svg" className="absolute top-[25%] left-[4%] w-[83%] h-[41%]" alt="sales" />
    </div>
);

const TargetIcon = () => (
    <div className="relative w-4 h-4 mr-0.5">
        <img src="/analytics/vector-2.svg" className="absolute w-[25%] h-[25%] top-[25%] left-[62.5%]" alt="target" />
        <img src="/analytics/vector-3.svg" className="absolute w-[83%] h-[41%] top-[25%] left-[4%]" alt="target" />
    </div>
);

const ForecastIcon = () => (
    <div className="relative w-4 h-4 mr-0.5">
        <img src="/analytics/vector-4.svg" className="absolute w-[25%] h-[25%] top-[25%] left-[62.5%]" alt="forecast" />
        <img src="/analytics/vector-5.svg" className="absolute w-[83%] h-[41%] top-[25%] left-[4%]" alt="forecast" />
    </div>
);

const StrategyIcon = () => (
    <div className="relative w-4 h-4 mr-0.5">
        <img src="/analytics/vector-6.svg" className="absolute w-[50%] h-[50%] top-[4%] left-[21%]" alt="strategy" />
        <img src="/analytics/vector-7.svg" className="absolute w-[25%] h-[0%] top-[70%] left-[33%]" alt="strategy" />
        <img src="/analytics/vector-8.svg" className="absolute w-[16%] h-[0%] top-[87%] left-[37%]" alt="strategy" />
    </div>
);

// Mock data
const salesData = {
    target: 75,
    forecast: 50,
    percentage: 67,
    suggestion: "10日後までに初回5件スタートすると100,000円上昇",
};

const metricsData = [
    { label: "5回払い", value: 68, unit: "%", change: -2.1, isPositive: false },
    { label: "継続率", value: 84.3, unit: "%", change: 3.8, isPositive: true },
    { label: "頻度達成率", value: 68, unit: "%", change: -2.1, isPositive: false },
    { label: "10回までの来店ペース", value: 9.2, unit: "日", change: 0.7, isPositive: false, changeUnit: "日" },
    { label: "平均単価", value: 8500, unit: "円", change: 6.3, isPositive: true, fullWidth: true },
];

const basicAchievementData = [
    [
        { label: "5回払い", value: 68, unit: "%", change: -2.1, isPositive: false },
        { label: "カリキュラム作成費", value: 98.7, unit: "%", change: 2.1, isPositive: true },
        { label: "施術前の予約", value: 50.3, unit: "%", change: -2.1, isPositive: false },
        { label: "変更4日後以降", value: 79.3, unit: "%", change: 3.8, isPositive: true },
    ],
    [
        { label: "① 頻度のグラフ", value: 72.5, unit: "%", change: 5.2, isPositive: true },
        { label: "① 効果のイメージ", value: 68, unit: "%", change: -2.1, isPositive: false },
        { label: "③ 継続の確認", value: 84.3, unit: "%", change: 3.8, isPositive: true },
        { label: "④ 次回支払いの確認", value: 84.3, unit: "%", change: 3.8, isPositive: true },
    ],
    [
        { label: "⑤ 継続の確認・予約", value: 72.5, unit: "%", change: 5.2, isPositive: true },
        { label: "⑤ 次回以降の支払い", value: 68, unit: "%", change: -2.1, isPositive: false },
        { label: "⑤ ５回分の支払い", value: 84.3, unit: "%", change: 3.8, isPositive: true },
        { label: "⑧ After写真撮影", value: 72.5, unit: "%", change: 5.2, isPositive: true },
    ],
];

const aiSuggestions = [
    {
        icon: "summary",
        title: "総括",
        content: "継続率が着実に向上しており、顧客満足度も高い水準で推移しています。特に、施術前の予約取得がスムーズになり、来店ペースが理想に近づいているお客様ほど効果実感が高い傾向が見られます。",
    },
    {
        icon: "effect",
        title: "施術効果",
        content: "フェイスラインの引き締まりや左右バランスの改善、小顔効果が顕著に表れています。特に、咬筋・側頭筋・首周りへのアプローチが安定しており、施術後の変化量が大きく、効果の持続力も高まっています。",
    },
    {
        icon: "todo",
        title: "To Do",
        content: "10回目までのお客様には、来店ペースが結果に直結することを毎回リマインドする。施術前の予約を徹底する。5回目にまとめて支払いを徹底する。",
    },
];

// Metric Card Component
const MetricCard = ({ metric, className = "" }) => (
    <div className={`p-3 rounded-xl border border-blue-200 bg-white ${className}`}>
        <div className="text-[11px] font-medium text-neutral-600 mb-1">{metric.label}</div>
        <div className="flex items-end justify-between">
            <div className="flex items-baseline gap-1">
                <span className="text-2xl font-normal text-neutral-900 tracking-tight">
                    {metric.value >= 1000 ? metric.value.toLocaleString() : metric.value}
                </span>
                <span className="text-sm font-normal text-neutral-600">{metric.unit}</span>
            </div>
            <div className={`flex items-center gap-0.5 text-[11px] font-medium ${metric.isPositive ? 'text-[#00A63E]' : 'text-[#E7000B]'}`}>
                {metric.isPositive ? <TrendUpIcon /> : <TrendDownIcon />}
                {metric.isPositive ? '+' : ''}{metric.change}{metric.changeUnit || '%'}
            </div>
        </div>
    </div>
);

// AI Suggestion Card
const AISuggestionCard = ({ suggestion }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex-1 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
            <div className="text-purple-600">
                {suggestion.icon === "summary" && <AISummaryIcon />}
                {suggestion.icon === "effect" && <AIEffectIcon />}
                {suggestion.icon === "todo" && <AITodoIcon />}
            </div>
            <span className="text-base font-medium text-[#59168b] tracking-wide">{suggestion.title}</span>
        </div>
        <p className="text-[12px] font-normal text-neutral-900 leading-relaxed tracking-wide">{suggestion.content}</p>
    </div>
);

export const Analytics = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex font-sans overflow-x-hidden">
            {/* Side Navigation */}
            <NavigationSection />

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:mr-16 pb-20 lg:pb-0 w-full h-screen">
                {/* Unified Header */}
                <HeaderSection selectedStore="銀座店" />

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto pt-16 w-full">
                    <div className="bg-white min-h-full p-4 md:p-6">
                        <div className="max-w-4xl mx-auto space-y-6">

                            {/* Top Row: Sales + Metrics */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Sales Card */}
                                <div className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-7">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <img src="/analytics/vector-62.svg" alt="" className="w-full h-full" />
                                        </div>
                                        <h2 className="text-lg font-medium text-neutral-900 tracking-wide">売上</h2>
                                    </div>

                                    <div className="flex gap-6">
                                        {/* Progress Bar */}
                                        <div className="flex flex-col items-center w-16">
                                            <div className="text-sm font-medium text-neutral-900 mb-2">100%</div>
                                            <div className="flex-1 w-2 bg-neutral-100 rounded-full h-40 relative">
                                                <div
                                                    className="absolute bottom-0 w-full bg-[#0088ff] rounded-full transition-all duration-500"
                                                    style={{ height: `${salesData.percentage}%` }}
                                                />
                                            </div>
                                            <div className="text-base font-medium text-[#0088ff] mt-2">{salesData.percentage}%</div>
                                            <div className="text-sm font-normal text-neutral-400 mt-1">0%</div>
                                        </div>

                                        {/* Targets */}
                                        <div className="flex-1 space-y-4">
                                            <div className="p-4 rounded-xl border border-blue-200">
                                                <div className="text-[11px] font-medium text-neutral-600 flex items-center gap-1.5 mb-2">
                                                    <TargetIcon />
                                                    売上目標
                                                </div>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-3xl font-normal text-[#34c759] tracking-tight">{salesData.target}</span>
                                                    <span className="text-base font-medium text-neutral-900">万円</span>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-xl border border-blue-200">
                                                <div className="text-[11px] font-medium text-neutral-600 flex items-center gap-1.5 mb-2">
                                                    <ForecastIcon />
                                                    売上予測
                                                </div>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-3xl font-normal text-[#0088ff] tracking-tight">{salesData.forecast}</span>
                                                    <span className="text-base font-medium text-neutral-900">万円</span>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-xl border border-blue-200">
                                                <div className="text-[11px] font-medium text-neutral-600 flex items-center gap-1.5 mb-2">
                                                    <StrategyIcon />
                                                    施策
                                                </div>
                                                <p className="text-[12px] font-medium text-neutral-900 leading-relaxed tracking-wide">{salesData.suggestion}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Metrics Card */}
                                <div className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-7">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center justify-center w-5 h-5">
                                                <img src="/analytics/vector-63.svg" alt="" className="w-full h-full" />
                                            </div>
                                            <h2 className="text-lg font-medium text-neutral-900 tracking-wide">指標</h2>
                                        </div>
                                        <span className="text-[11px] font-medium text-neutral-700">※先月比</span>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="grid grid-cols-2 gap-3">
                                            {metricsData.slice(0, 2).map((metric, i) => (
                                                <MetricCard key={i} metric={metric} />
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {metricsData.slice(2, 4).map((metric, i) => (
                                                <MetricCard key={i} metric={metric} />
                                            ))}
                                        </div>
                                        <MetricCard metric={metricsData[4]} />
                                    </div>
                                </div>
                            </div>

                            {/* Basic Achievement Section */}
                            <div className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-7">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 flex items-center justify-center">
                                            <img src="/analytics/vector-64.svg" alt="" className="w-full h-full" />
                                        </div>
                                        <h2 className="text-lg font-medium text-neutral-900 tracking-wide">基本の達成度</h2>
                                    </div>
                                    <span className="text-[11px] font-medium text-neutral-700">※先月比</span>
                                </div>

                                <div className="space-y-3">
                                    {basicAchievementData.map((row, rowIndex) => (
                                        <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {row.map((metric, colIndex) => (
                                                <MetricCard key={colIndex} metric={metric} />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* AI Suggestions Section */}
                            <div className="rounded-2xl p-6 md:p-7 bg-gradient-to-br from-[#FAF5FF] to-[#EFF6FF] border border-[#F2E7FE] shadow-[0px_4px_24px_rgba(152,16,250,0.06)]">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="relative w-5 h-5">
                                        <img src="/analytics/vector-61.svg" alt="" className="w-full h-full" />
                                    </div>
                                    <h2 className="text-lg font-medium text-[#59168b] tracking-wide">AIからの提案</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {aiSuggestions.map((suggestion, index) => (
                                        <AISuggestionCard key={index} suggestion={suggestion} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
