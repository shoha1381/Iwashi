import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

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
        phone: "",
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

    // Treatment history mock data
    const treatmentHistory = [
        { id: "3936720", date: "2025/10/29 15:00", store: "銀座", staff: "矢澤博章", menu: "小顔・首肩・頭蓋骨", count: 31, inputBy: "矢澤博章", editBy: "矢澤博章", note: "" },
        { id: "3931127", date: "2025/10/14 15:00", store: "銀座", staff: "矢澤博章", menu: "O脚・骨盤・お腹", count: 32, inputBy: "矢澤博章", editBy: "矢澤博章", note: "解除予定" },
        { id: "3924846", date: "2025/10/10 17:00", store: "銀座", staff: "矢澤博章", menu: "O脚・骨盤・お腹", count: 31, inputBy: "矢澤博章", editBy: "矢澤博章", note: "" },
        { id: "3903843", date: "2025/10/06 16:00", store: "銀座", staff: "矢澤博章", menu: "O脚・骨盤・お腹", count: 30, inputBy: "矢澤博章", editBy: "矢澤博章", note: "" },
        { id: "3903838", date: "2025/10/06 15:00", store: "銀座", staff: "矢澤博章", menu: "小顔・首肩・頭蓋骨", count: 30, inputBy: "矢澤博章", editBy: "矢澤博章", note: "" },
        { id: "3890358", date: "2025/09/26 10:00", store: "銀座", staff: "矢澤博章", menu: "O脚・骨盤・お腹", count: 29, inputBy: "矢澤博章", editBy: "矢澤博章", note: "" },
        { id: "3890355", date: "2025/09/26 09:00", store: "銀座", staff: "矢澤博章", menu: "小顔・首肩・頭蓋骨", count: 29, inputBy: "矢澤博章", editBy: "矢澤博章", note: "" },
        { id: "3870127", date: "2025/09/19 16:00", store: "銀座", staff: "矢澤博章", menu: "O脚・骨盤・お腹", count: 28, inputBy: "矢澤博章", editBy: "矢澤博章", note: "" },
    ];

    // Payment history mock data
    const paymentHistory = [
        { date: "29日(木)", cash: "¥3,300", card: "¥3,000", point: "¥300", groupon: "¥0", luxa: "¥0", total: "¥6,600" },
    ];

    // CSS filters
    const WHITE = 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)';
    const GRAY_LIGHT = 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';

    const tabs = [
        { id: "overview", label: "概要", icon: "/img/tab-overview.svg" },
        { id: "payment", label: "入金", icon: "/img/tab-payment.svg" },
        { id: "history", label: "施術履歴", icon: "/img/tab-treatment.svg" },
        { id: "transactions", label: "入出金履歴", icon: "/img/tab-transaction.svg" },
    ];

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
            <div className="flex-1 overflow-y-auto px-12 py-8 pb-32">
                {/* Section Title & Actions - Title moved right and down */}
                <div className="flex items-center justify-between mb-12 pl-4 mt-2">
                    <h2 className="text-xl font-normal text-neutral-800 tracking-wider">
                        {activeTab === "overview" && "概要"}
                        {activeTab === "payment" && "入金"}
                        {activeTab === "history" && "施術履歴"}
                        {activeTab === "transactions" && "入出金履歴"}
                    </h2>

                    {/* Reuse Edit/Trash Icons from Overview */}
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
                    <div className="rounded-lg overflow-hidden border border-neutral-200">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[#55a5e8] text-white">
                                    <th className="py-2 px-4 text-left text-sm font-medium w-1/3">項目</th>
                                    <th className="py-2 px-4 text-left text-sm font-medium">値</th>
                                </tr>
                            </thead>
                            <tbody>
                                {overviewFields.map((field, i) => (
                                    <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}`}>
                                        <td className="py-2.5 px-4 text-sm text-neutral-700">{field.label}</td>
                                        <td className="py-2.5 px-4 text-sm text-neutral-800 whitespace-pre-line">{field.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === "payment" && (
                    <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300">
                        <form className="bg-white/70 rounded-2xl border border-white/20 shadow-[0px_0px_18px_rgba(0,0,0,0.07)] backdrop-blur-xl p-8 flex flex-col gap-4">
                            {["現金", "カード", "ポイント", "グルーポン", "ルクサ"].map((method, index) => {
                                const id = ["cash", "card", "point", "groupon", "luxa"][index];
                                return (
                                    <div key={method} className="flex flex-col gap-1">
                                        <div className="flex items-center gap-6 py-4">
                                            <label className="w-24 text-xl font-medium text-neutral-800 tracking-wide whitespace-nowrap">
                                                {method}
                                            </label>
                                            <div className="bg-white/70 rounded-xl border border-white/20 shadow-[0px_0px_8px_rgba(0,0,0,0.05)] backdrop-blur-lg flex-1 h-[60px] flex items-center px-6 shadow-inner bg-neutral-50/50">
                                                <input
                                                    type="text"
                                                    placeholder="数字（半角）を入力してください"
                                                    className="w-full bg-transparent outline-none text-lg text-neutral-700 placeholder:text-neutral-300 tracking-wider text-center"
                                                />
                                            </div>
                                        </div>
                                        {index < 4 && <div className="w-full h-px bg-neutral-100" />}
                                    </div>
                                );
                            })}
                        </form>
                        <div className="pt-6 flex justify-center">
                            <button className="w-80 h-14 bg-[#4aa9fc] text-white text-lg font-bold rounded-full shadow-[0_4px_16px_rgba(74,169,252,0.3)] hover:bg-[#3a99ec] transition-all tracking-wide">
                                入金する
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === "history" && (
                    <div className="rounded-lg overflow-hidden border border-neutral-200">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-xs whitespace-nowrap">
                                <thead className="bg-[#55a5e8] text-white">
                                    <tr>
                                        {["予約ID", "日時", "店舗", "担当者", "メニュー", "施術回数", "入力者", "最終編集者", "備考"].map((h, i) => (
                                            <th key={i} className="py-2 px-3 text-left font-medium">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {treatmentHistory.map((row, i) => (
                                        <tr key={i} className={`border-b border-neutral-100 hover:bg-blue-50/30 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}`}>
                                            <td className="py-2 px-3 text-neutral-700">{row.id}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.date}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.store}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.staff}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.menu}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.count}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.inputBy}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.editBy}</td>
                                            <td className="py-2 px-3">
                                                {row.note && <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px]">{row.note}</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === "transactions" && (
                    <div className="rounded-lg overflow-hidden border border-neutral-200">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-xs whitespace-nowrap">
                                <thead className="bg-[#55a5e8] text-white">
                                    <tr>
                                        {["日付", "現金", "カード", "ポイント", "グルーポン", "ルクサ", "合計", ""].map((h, i) => (
                                            <th key={i} className="py-2 px-3 text-left font-medium">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {paymentHistory.map((row, i) => (
                                        <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}`}>
                                            <td className="py-2 px-3 text-neutral-700">{row.date}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.cash}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.card}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.point}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.groupon}</td>
                                            <td className="py-2 px-3 text-neutral-600">{row.luxa}</td>
                                            <td className="py-2 px-3 text-neutral-700 font-medium">{row.total}</td>
                                            <td className="py-2 px-3">
                                                <button className="px-2 py-1 bg-[#4aa9fc] text-white rounded text-[10px] hover:bg-[#3a99ec]">詳細</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Tab Bar (TreatmentModal Style) */}
            <div className="fixed bottom-8 left-0 w-full z-[120] pointer-events-none">
                <div className="relative w-full flex justify-center items-center h-[72px]">
                    <div className="bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-2 py-1.5 flex items-center gap-1 pointer-events-auto">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex flex-col items-center justify-center rounded-full transition-colors duration-200 w-[90px] h-[60px] ${isActive ? "bg-[#4aa9fc] shadow-md" : "hover:bg-neutral-50"
                                        }`}
                                >
                                    <div className="w-6 h-6 relative flex items-center justify-center">
                                        <img
                                            src={tab.icon}
                                            alt={tab.label}
                                            className="w-full h-full object-contain"
                                            style={{ filter: isActive ? WHITE : GRAY_LIGHT }}
                                        />
                                    </div>
                                    <span className={`text-[10px] font-bold tracking-wide mt-1 ${isActive ? "text-white" : "text-[#999999]"
                                        }`}>
                                        {tab.label}
                                    </span>
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
