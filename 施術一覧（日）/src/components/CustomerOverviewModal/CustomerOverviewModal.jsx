import React from "react";

export const CustomerOverviewModal = ({ isOpen, onClose, slotInfo }) => {
    if (!isOpen) return null;

    // Derived Data (Mock for Miura Rika)
    const patientInfo = {
        name: "三浦 梨花",
        nameReading: "ミウラリカ・女・25歳",
        courseInfo: "SP・１回目（初回）",
        goal: "1月の結婚式に向けて、右のエラはりを改善する",
        cautions: [
            { label: "注意事項", text: "顎・フェイスライン整形あり" },
            { label: "注意ワード", text: "太った/痩せた、肌の色、整形跡" }
        ],
        photo: "/static/img/user_placeholder.png" // Placeholder
    };

    const todoItems = [
        "頻度のグラフを使った説明",
        "ビフォー写真撮影",
        "効果イメージを使った説明",
        "施術料金支払い",
    ];

    const adviceItems = [
        "初回から5回分まとめてスタートさせる流れを徹底しましょう。",
        "5回目の来院時に次の5回分を必ず提案・決済してください。",
        "施術前に前払いと次回予約確定を行い、来院間隔を空けないようにしましょう。",
        "短い間隔で通っていただくと、定着が良くなることを伝えましょう。",
    ];

    // Table Data
    const historyColumns = [
        { label: "項目", width: "w-16" },
        ...Array.from({ length: 15 }, (_, i) => ({ label: `${i + 2}`, width: "w-8" })),
        { label: "頻度", width: "w-12", sub: "①" },
        { label: "効果", width: "w-12", sub: "①" },
        { label: "継続", width: "w-12", sub: "③" },
        { label: "代金", width: "w-12", sub: "④" },
        { label: "予約", width: "w-12", sub: "⑤" },
        { label: "支払い", width: "w-12", sub: "⑤" },
        { label: "5回分", width: "w-12", sub: "⑤" },
        { label: "メニュー", width: "w-20", sub: "⑤" }, // Wider
        { label: "写真", width: "w-12", sub: "⑧" },
    ];

    // Mock Achievement Data (Rows)
    const achievementRow = [
        "", // Item Header
        3, 4, 3, 4, 4, 3, 4, 4, 3, 4, 3, 4, 4, 4, 4, // 1-15 (15 items)
        "達成", "順調", "継続", "済", "済", "済", "提案", "SP", "済"
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Noto_Sans_JP']">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-neutral-900/20 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Content - Large Landscape */}
            <div className="relative w-full max-w-[1100px] h-[85vh] bg-white rounded-[32px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] border border-neutral-50 overflow-hidden z-10 animate-scaleIn flex">

                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 transition-colors"
                    onClick={onClose}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Sidebar: Profile */}
                <aside className="w-[300px] bg-neutral-50/50 p-8 flex flex-col gap-8 border-r border-neutral-100 overflow-y-auto">
                    {/* Basic Info */}
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full bg-neutral-200 shadow-inner mb-4 flex items-center justify-center overflow-hidden">
                            {/* Placeholder for Photo */}
                            <svg className="w-16 h-16 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-neutral-800 tracking-wide mb-1">{patientInfo.name}</h2>
                        <p className="text-xs text-neutral-500 font-medium">{patientInfo.nameReading}</p>

                        <div className="mt-4 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wide border border-blue-100">
                            {patientInfo.courseInfo}
                        </div>
                    </div>

                    {/* Goal */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white border border-neutral-200 text-neutral-500">目標</span>
                            <h3 className="text-sm font-bold text-neutral-700">改善目標</h3>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-neutral-100 text-sm text-neutral-700 leading-relaxed">
                            {patientInfo.goal}
                        </div>
                    </div>

                    {/* Cautions */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white border border-neutral-200 text-neutral-500">注意</span>
                            <h3 className="text-sm font-bold text-red-500">注意事項・ワード</h3>
                        </div>
                        {patientInfo.cautions.map((item, idx) => (
                            <div key={idx} className="p-4 bg-red-50/50 rounded-xl border border-red-100">
                                <span className="block text-xs font-bold text-red-400 mb-1">{item.label}</span>
                                <p className="text-sm text-neutral-700 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main Content: Dashboard */}
                <main className="flex-1 flex flex-col min-w-0 bg-white">
                    {/* Top Section: Dashboard Cards */}
                    <div className="flex-1 p-8 grid grid-cols-2 gap-6 overflow-y-auto max-h-[50%]">

                        {/* ToDo Card */}
                        <div className="flex flex-col rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-100 overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
                            <div className="px-6 py-4 bg-neutral-50/50 border-b border-neutral-100 flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-neutral-700">本日やること (ToDo)</h3>
                            </div>
                            <div className="p-6 flex flex-col gap-3">
                                {todoItems.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer group">
                                        <div className="w-5 h-5 rounded border-2 border-neutral-300 flex items-center justify-center text-white group-hover:border-blue-400 group-hover:bg-blue-400 transition-all">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-sm text-neutral-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Advice Card */}
                        <div className="flex flex-col rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-100 overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow">
                            <div className="px-6 py-4 bg-neutral-50/50 border-b border-neutral-100 flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-neutral-700">アドバイス・定着誘導</h3>
                            </div>
                            <div className="p-6 flex flex-col gap-4">
                                {adviceItems.map((item, i) => (
                                    <div key={i} className="flex gap-3">
                                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-orange-400" />
                                        <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: History Table */}
                    <div className="h-[50%] bg-neutral-50 border-t border-neutral-200 overflow-auto p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            </div>
                            <h3 className="font-bold text-neutral-700">来店・目標達成記録</h3>
                        </div>

                        {/* Table Container */}
                        <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-center border-collapse">
                                    <thead>
                                        <tr className="bg-neutral-100 text-neutral-600 text-[10px] font-bold tracking-wider">
                                            {historyColumns.map((col, i) => (
                                                <th key={i} className={`p-2 border-r border-neutral-200 last:border-0 ${col.width}`}>
                                                    {col.sub && <span className="block text-[9px] text-neutral-400 mb-0.5">{col.sub}</span>}
                                                    {col.label}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Mock Row: Achievement */}
                                        <tr className="border-t border-neutral-100">
                                            <td className="p-3 text-xs font-bold text-neutral-700 bg-neutral-50/50 border-r border-neutral-200">
                                                達成
                                            </td>
                                            {/* Data Cells (shifted by 1 because 1st is header) */}
                                            {historyColumns.slice(1).map((_, i) => (
                                                <td key={i} className="p-2 border-r border-neutral-100 text-xs text-neutral-600">
                                                    {/* Mock Data Mapping logic could go here */}
                                                    {achievementRow[i + 1] || "-"}
                                                </td>
                                            ))}
                                        </tr>
                                        {/* Mock Row: Effect */}
                                        <tr className="border-t border-neutral-100">
                                            <td className="p-3 text-xs font-bold text-neutral-700 bg-neutral-50/50 border-r border-neutral-200">
                                                効果
                                            </td>
                                            <td colSpan={15} className="p-3 text-xs text-left pl-4 text-neutral-700 border-r border-neutral-100">
                                                初回の施術です。
                                            </td>
                                            {/* Remaining empty cells */}
                                            {historyColumns.slice(16).map((_, i) => <td key={i} className="border-r border-neutral-100"></td>)}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </main>

            </div>
        </div>
    );
};
