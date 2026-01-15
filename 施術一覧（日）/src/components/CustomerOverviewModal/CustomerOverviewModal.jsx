import React from "react";

export const CustomerOverviewModal = ({ isOpen, onClose, slotInfo }) => {
    if (!isOpen) return null;

    // Derived Data (Mock for Miura Rika)
    const patientInfo = {
        name: "三浦 梨花",
        reading: "ミウラリカ・女・25歳",
        courseInfo: "SP・１回目（初回）",
        lastVisit: "前回来店",
        goal: "1月の結婚式に向けて、右のエラはりを改善する",
        cautions: [
            { label: "注意事項", text: "顎・フェイスライン整形あり" },
            { label: "注意ワード", text: "太った/痩せた、肌の色、整形跡" }
        ],
        photo: "/img/15-1.png" // Using the image from previous Schedule data
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

    // Table Logic
    const historyColumns = [
        { label: "項目", width: "w-14" },
        ...Array.from({ length: 14 }, (_, i) => ({ label: `${i + 2}`, width: "w-8" })),
        { label: "15", width: "w-8" },
        { label: "①\n頻度", width: "w-10" },
        { label: "①\n効果", width: "w-10" },
        { label: "③\n継続", width: "w-10" },
        { label: "④\n代金", width: "w-10" },
        { label: "⑤\n予約", width: "w-10" },
        { label: "⑤\n支払い", width: "w-10" },
        { label: "⑤\n5回分", width: "w-10" },
        { label: "⑤\nメニュー", width: "w-14" },
        { label: "⑧\n写真", width: "w-10" },
    ];

    // Mock Data (Matches image)
    // Row 1: Achievement
    // Row 2: Effect text

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center font-['Noto_Sans_JP']">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container: Bottom Sheet Appearance but Modal Layout */}
            <div className="relative w-full max-w-[1000px] h-[95vh] bg-white rounded-t-[32px] shadow-2xl overflow-hidden flex flex-col animate-slideUp">

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto p-6 bg-neutral-50/50">

                    {/* Header Action Icons (Top Right) */}
                    <div className="flex justify-end gap-3 mb-6">
                        <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-green-500 hover:bg-neutral-50">
                            <span className="font-bold text-lg">i</span>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-orange-500 hover:bg-neutral-50">
                            <span className="font-bold text-lg">¥</span>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-red-500 hover:bg-neutral-50">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center text-blue-500 hover:bg-neutral-50">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button
                            className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-neutral-200"
                            onClick={onClose}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {/* Profile Header Block */}
                    <div className="flex gap-8 mb-8 px-4">
                        {/* Photo */}
                        <div className="flex-shrink-0">
                            <img src={patientInfo.photo} alt={patientInfo.name} className="w-32 h-36 object-cover bg-blue-100 rounded" />
                            {/* Fallback to color if image fails handled by browser default or alt, but assuming img exists in public/img based on previous findings */}
                        </div>

                        {/* Name & Basic Info */}
                        <div className="flex flex-col justify-center gap-4 flex-1">
                            <div>
                                <div className="flex items-baseline gap-4">
                                    <h2 className="text-2xl font-bold text-neutral-800 tracking-wide">{patientInfo.name}</h2>
                                    <span className="text-sm text-neutral-500">{patientInfo.reading}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="border border-neutral-200 bg-white px-4 py-3 min-w-[100px] text-center">
                                    <span className="text-sm font-bold text-neutral-700">施術</span>
                                </div>
                                <div className="text-sm">
                                    <div className="flex gap-4 mb-1">
                                        <span className="text-neutral-400 font-medium whitespace-nowrap">コース内容</span>
                                        <span className="font-bold text-neutral-800">{patientInfo.courseInfo}</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-neutral-400 font-medium whitespace-nowrap">前回来店</span>
                                        <span className="font-bold text-neutral-800">-</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Goals & Cautions (Right Side of Profile) */}
                        <div className="flex gap-4">
                            {/* Goal */}
                            <div className="w-[240px] border border-neutral-200 bg-white p-0">
                                <div className="border-b border-neutral-200 px-4 py-2 text-center">
                                    <span className="text-xs font-bold text-neutral-700">目標</span>
                                </div>
                                <div className="p-4 text-sm font-bold text-neutral-800 leading-relaxed">
                                    {patientInfo.goal}
                                </div>
                            </div>
                            {/* Caution */}
                            <div className="w-[240px] border border-neutral-200 bg-white p-0">
                                <div className="border-b border-neutral-200 px-4 py-2 text-center">
                                    <span className="text-xs font-bold text-neutral-700">注意</span>
                                </div>
                                <div className="p-4">
                                    {patientInfo.cautions.map((c, i) => (
                                        <div key={i} className="mb-2 last:mb-0">
                                            <span className="text-xs text-neutral-400 mr-2">{c.label}</span>
                                            <span className="text-sm font-bold text-neutral-800">{c.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-200 my-6"></div>

                    {/* Middle Section: ToDo & Advice */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        {/* ToDo */}
                        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
                            <div className="px-4 py-3 border-b border-neutral-100 flex items-center gap-2">
                                <div className="w-5 h-5 bg-red-500 rounded text-white flex items-center justify-center text-xs font-bold">✓</div>
                                <h3 className="font-bold text-neutral-700">ToDo</h3>
                            </div>
                            <div className="p-4 flex flex-col gap-2 flex-1">
                                {todoItems.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 bg-white border border-neutral-200 rounded">
                                        <div className="w-5 h-5 bg-blue-400 rounded flex items-center justify-center text-white text-xs">✓</div>
                                        <span className="text-sm font-bold text-neutral-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Advice */}
                        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
                            <div className="px-4 py-3 border-b border-neutral-100 flex items-center gap-2">
                                <div className="w-5 h-5 text-red-500 flex items-center justify-center">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                </div>
                                <h3 className="font-bold text-neutral-700">アドバイス</h3>
                            </div>
                            <div className="p-6">
                                <ul className="list-disc list-inside space-y-2">
                                    {adviceItems.map((item, i) => (
                                        <li key={i} className="text-sm font-bold text-neutral-800 leading-relaxed pl-2 -indent-2">
                                            ・{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Remarks Section */}
                    <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mb-6">
                        <div className="px-4 py-3 border-b border-neutral-100 flex items-center gap-2">
                            <div className="w-5 h-5 bg-blue-400 text-white rounded flex items-center justify-center text-xs">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </div>
                            <h3 className="font-bold text-neutral-700">備考</h3>
                        </div>
                        <div className="h-24 bg-white"></div>
                    </div>

                    {/* History Table */}
                    <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm mb-20">
                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse">
                                <thead>
                                    <tr className="bg-neutral-50 border-b border-neutral-200 text-xs font-bold text-neutral-600">
                                        {historyColumns.map((col, i) => (
                                            <th key={i} className={`p-2 border-r border-neutral-200 whitespace-pre-line ${col.width}`}>
                                                {col.label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-neutral-100 h-10">
                                        <td className="bg-neutral-50 px-2 text-xs font-bold border-r border-neutral-200">達成</td>
                                        {/* Mock Data */}
                                        <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td>
                                        {/* Freq... */}
                                        <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td>
                                    </tr>
                                    <tr className="h-10">
                                        <td className="bg-neutral-50 px-2 text-xs font-bold border-r border-neutral-200">効果</td>
                                        <td colSpan={24} className="px-4 text-left text-xs text-neutral-700">初回の施術です。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                {/* Footer Actions (Sticky Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 flex justify-center gap-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-20">
                    <button className="w-40 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-full font-bold shadow-lg shadow-blue-200 transition-all">
                        問診票入力
                    </button>
                    <button className="w-40 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-full font-bold shadow-lg shadow-blue-200 transition-all">
                        LINE登録
                    </button>
                    <button className="w-40 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-full font-bold shadow-lg shadow-blue-200 transition-all">
                        施術
                    </button>
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
