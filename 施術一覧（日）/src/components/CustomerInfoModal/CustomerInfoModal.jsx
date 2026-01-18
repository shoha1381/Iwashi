import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { TreatmentHistoryTab } from "./TreatmentHistoryTab";
import { ConcernsTab } from "./ConcernsTab";

export const CustomerInfoModal = ({ isOpen, onClose, customerData, initialTab = "overview" }) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        if (isOpen) {
            setActiveTab(initialTab);
        }
    }, [isOpen, initialTab]);

    if (!isOpen) return null;

    const data = customerData || {
        name: "三浦 梨花",
        nameKana: "ミウラリカ",
        id: "500809",
        phone: "090-1234-5678",
        store: "銀座",
        staff: "",
        balance: "27,900 円",
        email: "",
        birthday: "−",
        prefecture: "北海道",
        address: "",
        treatmentCount: { face: 0, body: 0, lymph: 0 },
        endFace: false,
        endBody: false,
    };

    // Determine if returning customer (Sato Shoha logic)
    const isReturning = data.name.includes("佐藤 祥羽");

    // Dynamic Tabs Definition
    const tabs = [
        { id: "overview", label: "概要", icon: "/img/tab-overview.svg" },
        { id: "concerns", label: "お悩み", icon: "/img/icon-treatment-concerns.svg" }, // Assuming icon exists or use generic
        // Dynamic 3rd Tab
        isReturning
            ? { id: "history", label: "施術履歴", icon: "/img/tab-treatment.svg" }
            : { id: "questionnaire", label: "問診票", icon: "/img/questionnaire-icon.png" },
        // 4th Tab: Functions (contains Payment/Transactions access?) or just keep as is?
        // User screenshot showed 4th tab as "機能" (Functions) or "入出金履歴"?
        // Current code had "Transactions". Let's name it "Function" to match screenshot roughly, 
        // or kep it "Transactions" if that's what the icon implies.
        // User said: "Overview, Concerns, Treatment History (toggleable)" -> 3 main tabs.
        // But screenshot has 4.
        // Let's use "Functions" (with 3-dots icon) as 4th? Or keep "Payment/Transactions"?
        // "Payment" tab content exists.
        // Let's map "Functions" to handle Payment/Transactions/etc.
        // BUT for now, to safe, let's keep "Functions" logic simple or keep "Transactions".
        // Screenshot bottom right label says "機能" (Functions).
        { id: "functions", label: "機能", icon: "/img/more-horizontal.svg" },
    ];

    // CSS filters
    const WHITE = 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)';
    const GRAY_LIGHT = 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';

    // Overview fields
    const overviewFields = [
        { label: "ID", value: data.id },
        { label: "名前", value: `${data.name} ❤️` },
        { label: "名前（カナ）", value: data.nameKana },
        { label: "電話番号", value: data.phone || "" },
        { label: "店舗", value: data.store || "銀座" },
        { label: "担任", value: data.staff || "" },
        { label: "現在の残金", value: data.balance },
        { label: "メールアドレス", value: data.email || "" },
        { label: "誕生日", value: data.birthday },
        { label: "都道府県", value: data.prefecture },
        { label: "住所", value: data.address || "" },
        { label: "通院回数(システム移行前)", value: `顔：${data.treatmentCount?.face || 0}回\n身体：${data.treatmentCount?.body || 0}回\nリンパ：${data.treatmentCount?.lymph || 0}回` },
        { label: "終了・顔", value: data.endFace ? "☑" : "☐" },
        { label: "終了・身体", value: data.endBody ? "☑" : "☐" },
    ];

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] bg-white flex flex-col font-['Noto_Sans_JP']">
            {/* Header */}
            <header className="flex-shrink-0 h-16 bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-between px-6 z-20">
                <h1 className="text-lg font-normal text-neutral-700 tracking-wide">
                    {data.name}
                    <span className="text-neutral-500 text-sm font-normal ml-4">
                        {data.nameKana} 様
                    </span>
                </h1>
                <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </header>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 py-8 pb-32 bg-[#f8f9fa]">
                {/* Section Title & Actions */}
                <div className="flex items-center justify-between mb-8 pl-2 mt-2">
                    <h2 className="text-xl font-normal text-neutral-800 tracking-wider">
                        {tabs.find(t => t.id === activeTab)?.label}
                    </h2>

                    {/* Actions */}
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-red-500 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all">
                            <img src="/img/trash-icon.svg" className="w-6 h-6" alt="Delete" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-blue-500 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all">
                            <img src="/img/edit-icon.svg" className="w-6 h-6" alt="Edit" />
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                {activeTab === "overview" && (
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-neutral-200">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[#55a5e8] text-white">
                                    <th className="py-3 px-6 text-left text-sm font-medium w-1/3">項目</th>
                                    <th className="py-3 px-6 text-left text-sm font-medium">値</th>
                                </tr>
                            </thead>
                            <tbody>
                                {overviewFields.map((field, i) => (
                                    <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/30'}`}>
                                        <td className="py-3 px-6 text-sm text-neutral-600 font-medium">{field.label}</td>
                                        <td className="py-3 px-6 text-sm text-neutral-800 whitespace-pre-line">{field.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === "concerns" && <ConcernsTab />}

                {activeTab === "history" && <TreatmentHistoryTab />}

                {activeTab === "questionnaire" && (
                    <div className="flex flex-col items-center justify-center p-12 text-neutral-400">
                        <p>問診票（実装済みコンポーネントがあればここに配置）</p>
                    </div>
                )}

                {activeTab === "payment" && (
                    <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300">
                        {/* Existing Payment Content */}
                        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 flex flex-col gap-4">
                            {["現金", "カード", "ポイント", "グルーポン", "ルクサ"].map((method, index) => {
                                return (
                                    <div key={method} className="flex flex-col gap-1">
                                        <div className="flex items-center gap-6 py-4">
                                            <label className="w-24 text-lg font-medium text-neutral-700 tracking-wide whitespace-nowrap">
                                                {method}
                                            </label>
                                            <div className="bg-neutral-50 rounded-xl border border-neutral-200 flex-1 h-[56px] flex items-center px-4">
                                                <input
                                                    type="text"
                                                    placeholder="0"
                                                    className="w-full bg-transparent outline-none text-lg text-neutral-800 text-right font-medium tracking-wide"
                                                />
                                                <span className="ml-2 text-neutral-400">円</span>
                                            </div>
                                        </div>
                                        {index < 4 && <div className="w-full h-px bg-neutral-100" />}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="pt-4 flex justify-center">
                            <button className="w-full max-w-md h-14 bg-[#4aa9fc] text-white text-lg font-bold rounded-full shadow-lg shadow-blue-100 hover:shadow-blue-200 hover:translate-y-[-2px] transition-all tracking-wide">
                                入金する
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === "functions" && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <button onClick={() => setActiveTab("payment")} className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                <img src="/img/tab-payment.svg" className="w-6 h-6" style={{ filter: BLUE_DARK }} />
                            </div>
                            <span className="text-sm font-medium text-neutral-700">入金</span>
                        </button>
                        <button className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                                <img src="/img/tab-transaction.svg" className="w-6 h-6" style={{ filter: 'brightness(0) saturate(100%) invert(60%) sepia(20%) saturate(500%) hue-rotate(80deg)' }} />
                            </div>
                            <span className="text-sm font-medium text-neutral-700">入出金履歴</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Bottom Tab Bar */}
            <div className="fixed bottom-8 left-0 w-full z-[120] pointer-events-none">
                <div className="relative w-full flex justify-center items-center h-[72px]">
                    <div className="bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-6 py-2 flex items-center gap-4 pointer-events-auto border border-neutral-100">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex flex-col items-center justify-center rounded-2xl transition-all duration-200 w-[72px] h-[56px] relative group`}
                                >
                                    <div className={`w-12 h-8 relative flex items-center justify-center rounded-full mb-1 transition-all ${isActive ? "bg-[#4aa9fc]/10" : "group-hover:bg-neutral-50"}`}>
                                        <img
                                            src={tab.icon}
                                            alt={tab.label}
                                            className="w-5 h-5 object-contain transition-all duration-300"
                                            style={{
                                                filter: isActive
                                                    ? 'brightness(0) saturate(100%) invert(63%) sepia(29%) saturate(4973%) hue-rotate(188deg) brightness(101%) contrast(98%)' // Blue #4aa9fc
                                                    : 'brightness(0) saturate(100%) invert(80%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' // Gray #ccc
                                            }}
                                        />
                                    </div>
                                    <span className={`text-[10px] font-bold tracking-wide ${isActive ? "text-[#4aa9fc]" : "text-[#bbbbbb] group-hover:text-neutral-500"}`}>
                                        {tab.label}
                                    </span>
                                    {isActive && (
                                        <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#4aa9fc]"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

// Helper for filter to avoid undef error in Function map
const BLUE_DARK = 'brightness(0) saturate(100%) invert(44%) sepia(83%) saturate(1352%) hue-rotate(187deg) brightness(102%) contrast(101%)';

