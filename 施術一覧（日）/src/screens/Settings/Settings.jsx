import { useState, useEffect } from "react";
import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";

export const Settings = () => {
    const [activeTab, setActiveTab] = useState("treatment");

    // Mock user data
    const userData = [
        { field: "ID", value: "2" },
        { field: "名前", value: "野明みゆ" },
    ];

    // Treatment summary data (matching Summary screen format)
    const treatmentHeaders = ["#", "O", "骨", "顔", "頭", "首", "P", "SS", "SP", "ST", "リ", "上リ", "顔リ", "リP", "SB", "BT", "旧", "旧旧", "初回", "スタート"];
    const treatmentRows = [
        { date: "27日(月)", values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { date: "28日(火)", values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3] },
        { date: "29日(水)", values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { date: "30日(木)", values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { date: "31日(金)", values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { date: "現在日の合計", values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    ];

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
        <div className="min-h-screen bg-neutral-50 flex font-sans overflow-x-hidden">
            {/* Side Navigation - Hidden on mobile and desktop */}
            {!isMobile && !isDesktop && <NavigationSection />}

            {/* Main Content - Add left margin on desktop for sidebar */}
            <div className={`flex-1 flex flex-col pb-20 xl:pb-0 w-full h-screen ${isDesktop ? 'ml-[72px]' : 'lg:mr-16'}`}>
                {/* Unified Header */}
                <HeaderSection selectedStore="銀座店" />

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto pt-16 w-full">
                    <div className="bg-white min-h-full">
                        <div className="px-6 py-8 max-w-4xl mx-auto">
                            {/* User Name Card - Glassmorphism */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100 p-5 mb-8">
                                <h1 className="text-xl font-light text-neutral-700 tracking-wide">
                                    野明みゆさん
                                </h1>
                            </div>

                            {/* User Info Table - Light blue header */}
                            <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100 mb-8">
                                <table className="w-full border-collapse bg-white">
                                    <thead>
                                        <tr className="bg-[#55a5e8] text-white text-left">
                                            <th className="py-3 px-5 font-medium text-sm w-1/3">項目</th>
                                            <th className="py-3 px-5 font-medium text-sm">値</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userData.map((item, index) => (
                                            <tr
                                                key={item.field}
                                                className={`border-b border-neutral-100 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}`}
                                            >
                                                <td className="py-3 px-5 text-sm text-neutral-700 font-medium">{item.field}</td>
                                                <td className="py-3 px-5 text-sm text-neutral-600">{item.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Tab Buttons - Glassmorphism style */}
                            <div className="flex gap-4 justify-center mb-8">
                                <button
                                    onClick={() => setActiveTab("password")}
                                    className={`px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_2px_12px_rgba(0,0,0,0.08)] ${activeTab === "password"
                                        ? "bg-[#4a9fef] text-white backdrop-blur-sm shadow-[0_4px_16px_rgba(74,159,239,0.35)]"
                                        : "bg-white/80 backdrop-blur-sm text-neutral-700 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                                        }`}
                                >
                                    パスワード変更
                                </button>
                                <button
                                    onClick={() => setActiveTab("treatment")}
                                    className={`px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_2px_12px_rgba(0,0,0,0.08)] ${activeTab === "treatment"
                                        ? "bg-[#4a9fef] text-white backdrop-blur-sm shadow-[0_4px_16px_rgba(74,159,239,0.35)]"
                                        : "bg-white/80 backdrop-blur-sm text-neutral-700 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                                        }`}
                                >
                                    施術集計
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100 p-6">
                                {activeTab === "password" ? (
                                    <div className="space-y-6">
                                        <h2 className="text-lg font-medium text-neutral-700 mb-4">パスワード変更</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-neutral-600 mb-2">現在のパスワード</label>
                                                <input
                                                    type="password"
                                                    className="w-full h-11 px-4 bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#55a5e8]/20 focus:border-[#55a5e8]/50 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                                                    placeholder="現在のパスワードを入力"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-neutral-600 mb-2">新しいパスワード</label>
                                                <input
                                                    type="password"
                                                    className="w-full h-11 px-4 bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#55a5e8]/20 focus:border-[#55a5e8]/50 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                                                    placeholder="新しいパスワードを入力"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-neutral-600 mb-2">新しいパスワード（確認）</label>
                                                <input
                                                    type="password"
                                                    className="w-full h-11 px-4 bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#55a5e8]/20 focus:border-[#55a5e8]/50 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all"
                                                    placeholder="新しいパスワードを再入力"
                                                />
                                            </div>
                                            <div className="flex justify-end mt-8">
                                                <button className="px-6 py-3 bg-[#4a9fef] text-white rounded-xl font-medium text-sm hover:bg-[#3b8de0] transition-colors shadow-[0_4px_12px_rgba(74,159,239,0.3)]">
                                                    パスワードを変更
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <h2 className="text-lg font-medium text-neutral-700">施術集計</h2>

                                        {/* Treatment Report Table - matching Summary screen */}
                                        <div className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100 bg-white">
                                            <div className="overflow-x-auto">
                                                <table className="w-full border-collapse text-xs whitespace-nowrap">
                                                    <thead className="bg-[#55a5e8] text-white">
                                                        <tr>
                                                            {treatmentHeaders.map((h, i) => (
                                                                <th key={i} className={`py-2 px-2 text-center min-w-[30px] ${i < treatmentHeaders.length - 1 ? 'border-r border-blue-400/30' : ''}`}>{h}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {treatmentRows.map((row, i) => (
                                                            <tr key={i} className={`border-b border-neutral-100 hover:bg-blue-50/30 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}`}>
                                                                <td className="py-2 px-2 border-r border-neutral-100 font-medium bg-neutral-50/50 sticky left-0 z-10">{row.date}</td>
                                                                {row.values.map((v, j) => (
                                                                    <td key={j} className={`py-2 px-2 text-center text-neutral-600 ${j < row.values.length - 1 ? 'border-r border-neutral-100' : ''}`}>
                                                                        {v}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
