import React from "react";

export const CustomerOverviewModal = ({ isOpen, onClose, slotInfo }) => {
    if (!isOpen) return null;

    // Derived Data
    const patientInfo = {
        name: "三浦 梨花",
        reading: "ミウラリカ・女・25歳",
        courseInfo: "SP・１回目（初回）",
        goal: "1月の結婚式に向けて、右のエラはりを改善する",
        cautions: [
            { label: "注意事項", text: "顎・フェイスライン整形あり" },
            { label: "注意ワード", text: "太った/痩せた、肌の色、整形跡" }
        ],
        photo: "/img/image-2.png"
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
        { label: "項目", width: "w-12" },
        ...Array.from({ length: 14 }, (_, i) => ({ label: `${i + 2}`, width: "w-7" })),
        { label: "15", width: "w-7" },
        { label: "①\n頻度", width: "w-8" },
        { label: "①\n効果", width: "w-8" },
        { label: "③\n継続", width: "w-8" },
        { label: "④\n代金", width: "w-8" },
        { label: "⑤\n予約", width: "w-8" },
        { label: "⑤\n支払い", width: "w-8" },
        { label: "⑤\n5回分", width: "w-8" },
        { label: "⑤\nメニュー", width: "w-10" },
        { label: "⑧\n写真", width: "w-8" },
    ];

    // Neumorphism Soft Shadow Class
    const softShadow = "shadow-[4px_4px_10px_rgba(0,0,0,0.03),-4px_-4px_10px_rgba(255,255,255,0.8)] border border-white/50";
    const buttonShadow = "shadow-[3px_3px_6px_rgba(0,0,0,0.05),-2px_-2px_5px_rgba(255,255,255,0.8)]";

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center font-['Noto_Sans_JP'] text-[#4a5565]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#f7f8fa]/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-[850px] h-[92vh] bg-[#f7f8fa] rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col animate-slideUp">

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-5 pb-24">

                    {/* Header Action Icons */}
                    <div className="flex justify-end gap-3 mb-6">
                        {/* Info (Green) */}
                        <button className={`w-9 h-9 rounded-full bg-[#f0f4f8] flex items-center justify-center hover:bg-white transition-all ${buttonShadow}`}>
                            <img src="/img/vector-17.svg" className="w-4 h-4" alt="Info" />
                        </button>
                        {/* Payment (Orange) */}
                        <button className={`w-9 h-9 rounded-full bg-[#f0f4f8] flex items-center justify-center hover:bg-white transition-all ${buttonShadow}`}>
                            <img src="/img/vector-15.svg" className="w-4 h-4" alt="Payment" />
                        </button>
                        {/* Trash (Assuming vector-13/14 or generic for now, trying vector-13) */}
                        <button className={`w-9 h-9 rounded-full bg-[#f0f4f8] flex items-center justify-center hover:bg-white transition-all ${buttonShadow}`}>
                            <img src="/img/vector-13.svg" className="w-4 h-4" alt="Delete" />
                        </button>
                        {/* Edit (Assuming vector-11) */}
                        <button className={`w-9 h-9 rounded-full bg-[#f0f4f8] flex items-center justify-center hover:bg-white transition-all ${buttonShadow}`}>
                            <img src="/img/vector-11.svg" className="w-4 h-4" alt="Edit" />
                        </button>
                        {/* Close */}
                        <button
                            className={`w-9 h-9 rounded-full bg-[#f0f4f8] flex items-center justify-center hover:bg-white transition-all ${buttonShadow}`}
                            onClick={onClose}
                        >
                            <img src="/img/vector-10.svg" className="w-3.5 h-3.5" alt="Close" />
                        </button>
                    </div>

                    {/* Profile Section */}
                    <div className="flex gap-6 mb-6 px-2">
                        {/* Photo */}
                        <div className="flex-shrink-0">
                            <img src={patientInfo.photo} alt={patientInfo.name} className="w-28 h-32 object-cover rounded-lg shadow-sm" />
                        </div>

                        {/* Name & Basic Info */}
                        <div className="flex flex-col justify-center gap-3 flex-1">
                            <div>
                                <div className="flex items-baseline gap-3">
                                    <h2 className="text-xl font-medium text-neutral-800 tracking-wider">{patientInfo.name}</h2>
                                    <span className="text-xs text-neutral-500">{patientInfo.reading}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className={`bg-white px-3 py-2 min-w-[80px] text-center rounded-lg ${softShadow}`}>
                                    <span className="text-xs font-medium text-neutral-600">施術</span>
                                </div>
                                <div className="text-xs">
                                    <div className="flex gap-3 mb-1">
                                        <span className="text-neutral-400 whitespace-nowrap">コース内容</span>
                                        <span className="font-medium text-neutral-800 tracking-wide">{patientInfo.courseInfo}</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-neutral-400 whitespace-nowrap">前回来店</span>
                                        <span className="font-medium text-neutral-800">-</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Goals & Cautions */}
                        <div className="flex gap-3">
                            <div className={`w-[200px] bg-white rounded-lg overflow-hidden ${softShadow}`}>
                                <div className="bg-[#f9fafb] px-3 py-1.5 text-center border-b border-white">
                                    <span className="text-[10px] font-medium text-neutral-600">目標</span>
                                </div>
                                <div className="p-3 text-xs font-medium text-neutral-800 leading-relaxed">
                                    {patientInfo.goal}
                                </div>
                            </div>
                            <div className={`w-[200px] bg-white rounded-lg overflow-hidden ${softShadow}`}>
                                <div className="bg-[#f9fafb] px-3 py-1.5 text-center border-b border-white">
                                    <span className="text-[10px] font-medium text-neutral-600">注意</span>
                                </div>
                                <div className="p-3">
                                    {patientInfo.cautions.map((c, i) => (
                                        <div key={i} className="mb-1.5 last:mb-0">
                                            <span className="text-[10px] text-neutral-400 mr-2 block mb-0.5">{c.label}</span>
                                            <span className="text-xs font-medium text-neutral-800 leading-snug block">{c.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-200/60 my-5 mx-2"></div>

                    {/* Middle Section: ToDo & Advice */}
                    <div className="grid grid-cols-2 gap-5 mb-5 px-2">
                        {/* ToDo */}
                        <div className={`bg-white rounded-xl overflow-hidden flex flex-col ${softShadow}`}>
                            <div className="px-4 py-2 bg-[#f9fafb] border-b border-white flex items-center gap-2">
                                <img src="/img/vector-18.svg" className="w-4 h-4" alt="Todo" />
                                <h3 className="font-medium text-sm text-neutral-700">ToDo</h3>
                            </div>
                            <div className="p-4 flex flex-col gap-2.5">
                                {todoItems.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <img src="/img/check.svg" className="w-4 h-4 ml-1" alt="check" />
                                        {/* Reference uses check.svg for checked items */}
                                        <span className="text-xs font-medium text-neutral-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Advice */}
                        <div className={`bg-white rounded-xl overflow-hidden flex flex-col ${softShadow}`}>
                            <div className="px-4 py-2 bg-[#f9fafb] border-b border-white flex items-center gap-2">
                                <img src="/img/vector-19.svg" className="w-4 h-4" alt="Advice" />
                                <h3 className="font-medium text-sm text-neutral-700">アドバイス</h3>
                            </div>
                            <div className="p-4 px-5">
                                <ul className="list-disc list-inside space-y-2">
                                    {adviceItems.map((item, i) => (
                                        <li key={i} className="text-xs font-medium text-neutral-700 leading-relaxed pl-1 -indent-3 marker:text-neutral-400">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Remarks Section */}
                    <div className={`bg-white rounded-xl overflow-hidden mb-5 mx-2 ${softShadow}`}>
                        <div className="px-4 py-2 bg-[#f9fafb] border-b border-white flex items-center gap-2">
                            <img src="/img/icon-park-solid-notes.svg" className="w-4 h-4 opacity-70" alt="Notes" />
                            <h3 className="font-medium text-sm text-neutral-700">備考</h3>
                        </div>
                        <div className="h-20 bg-white"></div>
                    </div>

                    {/* History Table */}
                    <div className={`bg-white rounded-xl overflow-hidden shadow-sm mb-8 mx-2 ${softShadow}`}>
                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse">
                                <thead>
                                    <tr className="bg-[#f9fafb] border-b border-neutral-100 text-[10px] font-medium text-neutral-500">
                                        <th className="p-2 border-r border-neutral-100 w-12 font-medium">項目</th>
                                        {historyColumns.slice(1).map((col, i) => (
                                            <th key={i} className={`p-1.5 border-r border-neutral-100 whitespace-pre-line font-medium ${col.width}`}>
                                                {col.label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-neutral-100 h-9">
                                        <td className="bg-[#f9fafb] px-1 text-[10px] font-medium border-r border-neutral-100 text-neutral-600">達成</td>
                                        <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td>
                                        <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td> <td className="border-r border-neutral-100"> </td>
                                    </tr>
                                    <tr className="h-9">
                                        <td className="bg-[#f9fafb] px-1 text-[10px] font-medium border-r border-neutral-100 text-neutral-600">効果</td>
                                        <td colSpan={24} className="px-3 text-left text-[11px] font-medium text-neutral-600">初回の施術です。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                {/* Footer Actions (Sticky Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#f7f8fa]/95 backdrop-blur border-t border-white/50 p-4 flex justify-center gap-6 z-20">
                    <button className="w-36 h-10 bg-[#54a0ff] hover:bg-[#4a90e2] text-white rounded-full text-xs font-bold tracking-wider shadow-lg shadow-blue-200 transition-all flex items-center justify-center">
                        問診票入力
                    </button>
                    <button className="w-36 h-10 bg-[#54a0ff] hover:bg-[#4a90e2] text-white rounded-full text-xs font-bold tracking-wider shadow-lg shadow-blue-200 transition-all flex items-center justify-center">
                        LINE登録
                    </button>
                    <button className="w-36 h-10 bg-[#54a0ff] hover:bg-[#4a90e2] text-white rounded-full text-xs font-bold tracking-wider shadow-lg shadow-blue-200 transition-all flex items-center justify-center">
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
                    animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
};
