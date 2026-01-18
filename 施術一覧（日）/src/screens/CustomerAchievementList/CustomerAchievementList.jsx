import { NavigationSection } from "../../components/NavigationSection";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Checkmark Icon
const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

// Mock Data
const topCustomers = [
    {
        name: "山田花子",
        visitPace: [3, 4, 3, 4, 4, 3, 4, 4, 3, 4, 3, 4, 4, 4],
        achievements: { frequency: true, effect: true, continuation: true, payment: true, reservation: true, paymentMethod: true, fiveSessions: true, menu: true, photo: true },
        treatmentEffect: "顔全体が劇的に改善されました。左右差が整い、フェイスラインがすっきりしています。",
    },
    {
        name: "佐藤美咲",
        visitPace: [3, 4, 3, 4, 4, 3, 4, 4, 2, 3, 4, 3, 4, 4],
        achievements: { frequency: true, effect: true, continuation: true, payment: true, reservation: true, paymentMethod: true, fiveSessions: true, menu: true, photo: true },
        treatmentEffect: "顔の透明感が大幅に向上し、むくみが改善されています。エラの張りも目立たなくなりました。",
    },
    {
        name: "高橋恵",
        visitPace: [3, 4, 3, 4, 4, 3, 4, 4, 3, 4, 3, 4, 4, 4],
        achievements: { frequency: true, effect: true, continuation: true, payment: true, reservation: true, paymentMethod: true, fiveSessions: true, menu: true, photo: true },
        treatmentEffect: "全体的に良好な状態を維持できています。",
    },
];

const allCustomers = [
    ...topCustomers,
    {
        name: "小林沙織",
        visitPace: [3, 2, 3, 4, 4, 3, 1, 4, 3, 4, 3, 4, 4, 4],
        achievements: { frequency: true, effect: true, continuation: true, payment: true, reservation: true, paymentMethod: true, fiveSessions: true, menu: true, photo: false },
        treatmentEffect: "むくみが取れて輪郭が整い、表情が明るくなっています。",
    },
    {
        name: "鈴木愛",
        visitPace: [3, 4, 3, 4, 4, 3, 4, 4, 3, 9, 3, 4, 4, 4],
        achievements: { frequency: true, effect: true, continuation: false, payment: true, reservation: false, paymentMethod: true, fiveSessions: true, menu: true, photo: true },
        treatmentEffect: "顎まわりの緊張が緩み、フェイスラインがすっきりしています。",
    },
    {
        name: "青空大成",
        visitPace: [3, 4, 3, 2, 4, 3, 7, 4, 3, 9, 3, 4, 4, 4],
        achievements: { frequency: true, effect: true, continuation: true, payment: true, reservation: false, paymentMethod: true, fiveSessions: true, menu: true, photo: true },
        treatmentEffect: "巡りが良くなり、目元とエラまわりが軽く見えるようになっています。",
    },
    {
        name: "向井葵",
        visitPace: [3, 4, 10, 4, 4, 3, 4, 4, 1, 4, 2, 4, 4, 4],
        achievements: { frequency: true, effect: true, continuation: true, payment: true, reservation: true, paymentMethod: false, fiveSessions: true, menu: false, photo: true },
        treatmentEffect: "肌の巡りが改善し、頬まわりが自然に引き締まっています。",
    },
];

const paceNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const achievementColumns = [
    { key: "frequency", label: "①頻度" },
    { key: "effect", label: "①効果" },
    { key: "continuation", label: "③継続" },
    { key: "payment", label: "④代金" },
    { key: "reservation", label: "⑤予約" },
    { key: "paymentMethod", label: "⑤支払い" },
    { key: "fiveSessions", label: "⑤5回分" },
    { key: "menu", label: "⑤メニュー" },
    { key: "photo", label: "⑧写真" },
];

// Components
const PaceCell = ({ value }) => {
    const isWarning = value >= 7;
    const isGood = value <= 4;
    return (
        <div className={`w-6 h-8 flex items-center justify-center text-xs font-medium border-r border-neutral-100 ${isWarning ? 'bg-red-100 text-red-700' : isGood ? 'bg-green-100 text-green-700' : 'bg-white text-neutral-600'}`}>
            {value}
        </div>
    );
};

const CustomerRow = ({ customer }) => (
    <>
        {/* Main Row */}
        <div className="flex border-b border-neutral-100">
            {/* Name */}
            <div className="w-20 flex-shrink-0 py-2 px-2 border-r border-neutral-100 flex items-center">
                <span className="text-xs font-medium text-neutral-800 truncate">{customer.name}</span>
            </div>
            {/* Visit Pace */}
            <div className="flex flex-shrink-0">
                {customer.visitPace.map((pace, i) => (
                    <PaceCell key={i} value={pace} />
                ))}
            </div>
            {/* Achievements */}
            <div className="flex flex-shrink-0">
                {achievementColumns.map((col, index) => (
                    <div key={col.key} className={`w-9 h-8 flex items-center justify-center ${index < achievementColumns.length - 1 ? 'border-r border-neutral-100' : ''}`}>
                        {customer.achievements[col.key] && <CheckIcon />}
                    </div>
                ))}
            </div>
        </div>
        {/* Effect Row */}
        <div className="flex border-b border-neutral-200 bg-neutral-50/50">
            <div className="w-20 flex-shrink-0 py-1.5 px-2 border-r border-neutral-100">
                <span className="text-[10px] text-neutral-500">施術効果</span>
            </div>
            <div className="flex-1 py-1.5 px-3">
                <p className="text-[11px] text-neutral-600 leading-relaxed">{customer.treatmentEffect}</p>
            </div>
        </div>
    </>
);

export const CustomerAchievementList = () => {
    const navigate = useNavigate();
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [sortBy, setSortBy] = useState("date");

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsDesktop(window.innerWidth >= 1280);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sortOptions = [
        { id: "date", label: "日付順" },
        { id: "pace", label: "ペース順" },
        { id: "achievement", label: "達成率順" },
        { id: "status", label: "ステータス順" },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 flex font-sans overflow-x-hidden">
            {!isMobile && !isDesktop && <NavigationSection />}

            <div className={`flex-1 flex flex-col pb-20 xl:pb-0 w-full h-screen ${isDesktop ? 'ml-[72px]' : 'lg:mr-16'}`}>
                {/* Header */}
                <header className={`header-nav transition-all duration-200 ${isDesktop ? 'left-[72px]' : 'left-0'}`}>
                    <div className="px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
                        <span className="text-base md:text-lg font-normal text-neutral-700 tracking-wide ml-2">顧客一覧</span>
                        <button
                            onClick={() => navigate('/analytics')}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 overflow-y-auto w-full pt-14 md:pt-16">
                    <div className="bg-white min-h-full p-4 md:p-6">
                        <div className="max-w-6xl mx-auto space-y-6">

                            {/* 自己ベスト3 */}
                            <section>
                                <h2 className="text-sm font-medium text-neutral-800 mb-3">自己ベスト3</h2>
                                <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden overflow-x-auto">
                                    {/* Header */}
                                    <div className="flex bg-neutral-50 border-b border-neutral-200">
                                        <div className="w-20 flex-shrink-0 py-2 px-2 border-r border-neutral-100">
                                            <span className="text-[10px] font-bold text-neutral-600">氏名</span>
                                        </div>
                                        <div className="flex-shrink-0 py-2 px-1 border-r border-neutral-100 flex items-center justify-center" style={{ width: `${paceNumbers.length * 24}px` }}>
                                            <span className="text-[10px] font-bold text-neutral-600">来店ペース</span>
                                        </div>
                                        <div className="flex-shrink-0 py-2 px-1 flex items-center justify-center" style={{ width: `${achievementColumns.length * 36}px` }}>
                                            <span className="text-[10px] font-bold text-neutral-600">マニュアル達成</span>
                                        </div>
                                    </div>
                                    {/* Sub Header */}
                                    <div className="flex bg-neutral-50 border-b border-neutral-200">
                                        <div className="w-20 flex-shrink-0 py-1 px-2 border-r border-neutral-100">
                                            <span className="text-[9px] text-neutral-500">項目</span>
                                        </div>
                                        <div className="flex flex-shrink-0">
                                            {paceNumbers.map((num) => (
                                                <div key={num} className="w-6 h-6 flex items-center justify-center text-[9px] font-bold text-neutral-500 border-r border-neutral-100">
                                                    {num}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-shrink-0">
                                            {achievementColumns.map((col, index) => (
                                                <div key={col.key} className={`w-9 h-6 flex items-center justify-center text-[7px] font-bold text-neutral-500 text-center leading-tight ${index < achievementColumns.length - 1 ? 'border-r border-neutral-100' : ''}`}>
                                                    {col.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Rows */}
                                    {topCustomers.map((customer, i) => (
                                        <CustomerRow key={i} customer={customer} />
                                    ))}
                                </div>
                            </section>

                            {/* 顧客一覧 */}
                            <section>
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className="text-sm font-medium text-neutral-800">顧客一覧</h2>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-neutral-500">並び替え：</span>
                                        <div className="flex gap-1">
                                            {sortOptions.map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => setSortBy(opt.id)}
                                                    className={`px-3 py-1 text-[10px] font-medium rounded-md transition-colors ${sortBy === opt.id
                                                        ? 'bg-neutral-800 text-white'
                                                        : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                                                        }`}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden overflow-x-auto">
                                    {/* Header */}
                                    <div className="flex bg-neutral-50 border-b border-neutral-200">
                                        <div className="w-20 flex-shrink-0 py-2 px-2 border-r border-neutral-100">
                                            <span className="text-[10px] font-bold text-neutral-600">氏名</span>
                                        </div>
                                        <div className="flex-shrink-0 py-2 px-1 border-r border-neutral-100 flex items-center justify-center" style={{ width: `${paceNumbers.length * 24}px` }}>
                                            <span className="text-[10px] font-bold text-neutral-600">来店ペース</span>
                                        </div>
                                        <div className="flex-shrink-0 py-2 px-1 flex items-center justify-center" style={{ width: `${achievementColumns.length * 36}px` }}>
                                            <span className="text-[10px] font-bold text-neutral-600">マニュアル達成</span>
                                        </div>
                                    </div>
                                    {/* Sub Header */}
                                    <div className="flex bg-neutral-50 border-b border-neutral-200">
                                        <div className="w-20 flex-shrink-0 py-1 px-2 border-r border-neutral-100">
                                            <span className="text-[9px] text-neutral-500">項目</span>
                                        </div>
                                        <div className="flex flex-shrink-0">
                                            {paceNumbers.map((num) => (
                                                <div key={num} className="w-6 h-6 flex items-center justify-center text-[9px] font-bold text-neutral-500 border-r border-neutral-100">
                                                    {num}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-shrink-0">
                                            {achievementColumns.map((col, index) => (
                                                <div key={col.key} className={`w-9 h-6 flex items-center justify-center text-[7px] font-bold text-neutral-500 text-center leading-tight ${index < achievementColumns.length - 1 ? 'border-r border-neutral-100' : ''}`}>
                                                    {col.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Rows */}
                                    {allCustomers.map((customer, i) => (
                                        <CustomerRow key={i} customer={customer} />
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
