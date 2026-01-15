import { useState } from "react";
import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";

export const Settings = () => {
    const [activeTab, setActiveTab] = useState("treatment");

    // Mock user data
    const userData = [
        { field: "ID", value: "2" },
        { field: "名前", value: "伊藤彰吾" },
    ];

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
                    <div className="bg-white min-h-full">
                        <div className="px-6 py-8 max-w-4xl mx-auto">
                            {/* User Name Card - Glassmorphism */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-neutral-100 p-5 mb-8">
                                <h1 className="text-xl font-light text-neutral-700 tracking-wide">
                                    伊藤彰吾さん
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
                                            ? "bg-[#55a5e8]/80 text-white backdrop-blur-sm shadow-[0_4px_16px_rgba(85,165,232,0.35)]"
                                            : "bg-white/80 backdrop-blur-sm text-neutral-700 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                                        }`}
                                >
                                    パスワード変更
                                </button>
                                <button
                                    onClick={() => setActiveTab("treatment")}
                                    className={`px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_2px_12px_rgba(0,0,0,0.08)] ${activeTab === "treatment"
                                            ? "bg-[#55a5e8]/80 text-white backdrop-blur-sm shadow-[0_4px_16px_rgba(85,165,232,0.35)]"
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
                                            <button className="mt-4 px-6 py-3 bg-[#55a5e8] text-white rounded-xl font-medium text-sm hover:bg-[#4a96d8] transition-colors shadow-[0_4px_12px_rgba(85,165,232,0.3)]">
                                                パスワードを変更
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <h2 className="text-lg font-medium text-neutral-700 mb-4">施術集計</h2>
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                                <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-neutral-500">施術集計データが表示されます</p>
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
