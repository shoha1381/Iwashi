import React from "react";

export const CustomerOverviewModal = ({ isOpen, onClose, slotInfo }) => {
    if (!isOpen) return null;

    // Data Mock
    const patientInfo = {
        name: "三浦 梨花",
        reading: "ミウラリカ・女・25歳",
        course: "SP・1回目（初回）",
        goal: "1月の結婚式に向けて、右のエラはりを改善する",
        cautions: [
            { title: "注意事項", content: "顎・フェイスライン整形あり" },
            { title: "注意ワード", content: "太った/痩せた、肌の色、整形跡" }
        ]
    };

    const todoItems = ["頻度のグラフを使った説明", "ビフォー写真撮影", "効果イメージを使った説明", "施術料金支払い"];
    const adviceItems = [
        "初回から5回分まとめてスタートさせる流れを徹底しましょう。",
        "5回目の来院時に次の5回分を必ず提案・決済してください。",
        "施術前に前払いと次回予約確定を行い、来院間隔を空けないようにしましょう。",
        "短い間隔で通っていただくと、定着が良くなることを伝えましょう。"
    ];

    const historyColumns = [
        "項目", ...Array.from({ length: 15 }, (_, i) => `${i + 2}`),
        "①\n頻度", "①\n効果", "③\n継続", "④\n代金", "⑤\n予約", "⑤\n支払い", "⑤\n5回分", "⑤\nメニュー", "⑧\n写真"
    ];

    // Widths relative to design
    const colWidths = [
        "w-16", ...Array(15).fill("w-8"), // Items + 2-16
        "w-10", "w-10", "w-10", "w-10", "w-10", "w-10", "w-10", "w-20", "w-10"
    ];

    const historyData = [
        "達成", 3, 4, 3, 4, 4, 3, 4, 4, 3, 4, 3, 4, 4, 4, 4,
        "達成", "順調", "継続", "済", "済", "済", "提案", "SP", "済"
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center font-['Noto_Sans_JP']">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Bottom Sheet Container */}
            <div className="relative w-full max-w-[1400px] h-[92vh] bg-[#f2f4f8] rounded-t-[40px] shadow-2xl overflow-hidden flex flex-col animate-slideUp">

                {/* Decorative Background Elements (Vectors) */}
                <div className="absolute inset-0 pointer-events-none opacity-50">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/30 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100/30 rounded-full blur-[100px]" />
                </div>

                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/50 hover:bg-white text-neutral-500 hover:text-neutral-800 transition-all flex items-center justify-center shadow-sm backdrop-blur-md"
                    onClick={onClose}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Content Layout: Sidebar + Main */}
                <div className="flex h-full relative z-10">

                    {/* Navigation Sidebar */}
                    <nav className="w-20 py-10 flex flex-col items-center gap-8 border-r border-white/30 bg-white/20 backdrop-blur-md shadow-[inset_-1px_0_0_rgba(255,255,255,0.3)]">
                        {[
                            { icon: "calendar", active: false },
                            { icon: "document", active: true }, // Active based on context
                            { icon: "bell", active: false },
                            { icon: "alert", active: false }
                        ].map((item, i) => (
                            <button key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${item.active ? 'bg-white shadow-sm text-blue-500' : 'text-neutral-400 hover:bg-white/50'}`}>
                                {/* Placeholder Icons */}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        ))}
                    </nav>

                    {/* Profile Section (Left Column) */}
                    <aside className="w-[320px] p-8 flex flex-col gap-6 overflow-y-auto">
                        {/* Profile Card */}
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full bg-neutral-200 shadow-inner mb-4 flex items-center justify-center overflow-hidden border-4 border-white">
                                <svg className="w-12 h-12 text-neutral-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-800 tracking-widest">{patientInfo.name}</h2>
                            <p className="text-xs text-neutral-500 mt-1">{patientInfo.reading}</p>
                            <div className="mt-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{patientInfo.course}</div>
                        </div>

                        {/* Dashed Lines / Connectors (Decorative) */}
                        <div className="relative py-4">
                            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-neutral-300"></div>
                        </div>

                        {/* Goal */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white shadow-sm relative">
                            <span className="absolute -top-3 left-4 bg-white px-2 py-0.5 text-[10px] font-bold text-neutral-500 border border-neutral-100 rounded">目標</span>
                            <p className="text-sm font-medium text-neutral-700 leading-relaxed">{patientInfo.goal}</p>
                        </div>

                        {/* Cautions */}
                        <div className="bg-red-50/50 backdrop-blur-sm rounded-2xl p-5 border border-red-100 shadow-sm relative space-y-3">
                            <span className="absolute -top-3 left-4 bg-white px-2 py-0.5 text-[10px] font-bold text-red-500 border border-red-100 rounded">注意</span>
                            {patientInfo.cautions.map((c, i) => (
                                <div key={i}>
                                    <div className="text-[10px] font-bold text-red-400 mb-0.5">{c.title}</div>
                                    <div className="text-sm font-medium text-neutral-700">{c.content}</div>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Main Dashboard (Right Column) */}
                    <main className="flex-1 p-8 flex flex-col gap-6 overflow-y-auto">

                        {/* Toggle Buttons Row */}
                        <div className="flex justify-end gap-4 mb-4">
                            {["施術", "LINE登録", "問診票入力"].map((label, i) => (
                                <button key={i} className={`px-6 py-2 rounded-full text-sm font-bold shadow-sm backdrop-blur-md transition-all ${i === 0 ? 'bg-blue-500 text-white shadow-blue-200' : 'bg-white/40 text-neutral-600 border border-white/50 hover:bg-white/60'}`}>
                                    {label}
                                </button>
                            ))}
                        </div>

                        {/* Dashboard Cards Row */}
                        <div className="grid grid-cols-2 gap-6 h-[260px]">
                            {/* ToDo */}
                            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-1 border border-white/50 shadow-sm flex flex-col relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-neutral-800/10"></div>
                                <div className="p-4 flex items-center gap-2 border-b border-neutral-100/50">
                                    <div className="w-5 h-5 bg-neutral-800 text-white rounded flex items-center justify-center text-xs">✓</div>
                                    <h3 className="font-bold text-neutral-700">ToDo</h3>
                                </div>
                                <div className="p-5 flex flex-col gap-3 overflow-y-auto">
                                    {todoItems.map((todo, i) => (
                                        <label key={i} className="flex items-center gap-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                                            <span className="text-sm text-neutral-700 font-medium">{todo}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Advice */}
                            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-1 border border-white/50 shadow-sm flex flex-col relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-orange-400/20"></div>
                                <div className="p-4 flex items-center gap-2 border-b border-neutral-100/50">
                                    <div className="w-5 h-5 bg-orange-400 text-white rounded-full flex items-center justify-center font-bold text-xs">!</div>
                                    <h3 className="font-bold text-neutral-700">アドバイス</h3>
                                </div>
                                <div className="p-5 flex flex-col gap-3 overflow-y-auto">
                                    {adviceItems.map((adv, i) => (
                                        <li key={i} className="text-sm text-neutral-700 font-medium list-none flex gap-2">
                                            <span className="text-orange-400">•</span> {adv}
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* History Table */}
                        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-1 border border-white/50 shadow-sm flex-1 flex flex-col relative overflow-hidden">
                            <div className="p-4 flex items-center gap-2 border-b border-neutral-100/50">
                                <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                </div>
                                <h3 className="font-bold text-neutral-700">備考・来店記録</h3>
                            </div>
                            <div className="flex-1 overflow-auto p-4">
                                <table className="w-full text-center border-collapse">
                                    <thead>
                                        <tr className="border-b border-neutral-200">
                                            {historyColumns.map((col, i) => (
                                                <th key={i} className={`p-2 text-[10px] text-neutral-500 font-bold bg-neutral-50/50 border-r border-white ${colWidths[i] || 'w-10'}`}>
                                                    <pre className="font-sans">{col}</pre>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white/40">
                                            {historyData.map((d, i) => (
                                                <td key={i} className="p-2 border-r border-neutral-100 text-xs font-medium text-neutral-700">
                                                    {d}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="bg-white/40 border-t border-neutral-100">
                                            <td className="p-2 border-r border-neutral-100 text-xs font-bold text-neutral-700">効果</td>
                                            <td colSpan={24} className="p-2 text-left pl-4 text-xs text-neutral-600">
                                                初回の施術です。
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </main>
                </div>
            </div>

            {/* Animation Style */}
            <style>{`
                @keyframes slideUp {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slideUp {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
};
