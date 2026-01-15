import React from "react";

export const CustomerOverviewModal = ({ isOpen, onClose, slotInfo }) => {
    if (!isOpen) return null;

    // Derived Data
    const patientInfo = {
        name: "三浦 梨花",
        reading: "ミウラリカ・女・25歳",
        courseInfo: "SP・初回",
        media: "ネSP", // Changed from Previous Visit
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

    const historyColumns = [
        { label: "項目", width: "w-12" },
        ...Array.from({ length: 14 }, (_, i) => ({ label: `${i + 2}`, width: "w-7" })),
        // Fixed: Removed duplicate 15
        // Expanded widths and removed newlines as requested
        { label: "①頻度", width: "w-11" },
        { label: "①効果", width: "w-11" },
        { label: "③継続", width: "w-11" },
        { label: "④代金", width: "w-11" },
        { label: "⑤予約", width: "w-11" },
        { label: "⑤支払い", width: "w-11" },
        { label: "⑤5回分", width: "w-12" },
        { label: "⑤メニュー", width: "w-14" },
        { label: "⑧写真", width: "w-11" },
    ];

    // Standardized Shadow to match ReservationBookingModal 'Super Good' style
    const iconButtonClass = "w-11 h-11 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-600 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all";
    const softShadow = "shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-neutral-100";

    // Deep Red / Deep Blue Filters - Enhanced saturation
    const redFilter = "invert(12%) sepia(95%) saturate(7000%) hue-rotate(0deg) brightness(85%) contrast(120%)";
    const blueFilter = "invert(10%) sepia(100%) saturate(6000%) hue-rotate(220deg) brightness(70%) contrast(130%)";

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center font-['Noto_Sans_JP'] text-[#333333]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-[900px] h-[92vh] bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col animate-slideUp">

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-5 pb-28 no-scrollbar">

                    {/* Header Action Icons - Order from right: Close, Edit, Trash */}
                    <div className="flex justify-end gap-3 mb-4">
                        {/* Info (Green) */}
                        <button className={iconButtonClass}>
                            <img src="/img/vector-17.svg" className="w-5 h-5" alt="Info" />
                        </button>
                        {/* Payment (Orange) */}
                        <button className={iconButtonClass}>
                            <img src="/img/vector-15.svg" className="w-5 h-5" alt="Payment" />
                        </button>
                        {/* Trash - New icon from 捨てる folder */}
                        <button className={iconButtonClass}>
                            <div className="w-5 h-5 relative">
                                <img src="/img/trash-icon.svg" className="absolute w-full h-full" alt="Delete" />
                                <img src="/img/trash-icon-lid.svg" className="absolute w-[80%] h-[20%] top-0 left-[10%]" alt="" />
                            </div>
                        </button>
                        {/* Edit - Blue */}
                        <button className={iconButtonClass}>
                            <img src="/img/edit-icon.svg" className="w-5 h-5" alt="Edit" />
                        </button>
                        {/* Close - Standard SVG X Icon */}
                        <button
                            className={iconButtonClass}
                            onClick={onClose}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Profile Section */}
                    <div className="flex gap-4 mb-2 px-1">
                        {/* Photo - Enlarged to match Caution height */}
                        <div className="flex-shrink-0">
                            <img src={patientInfo.photo} alt={patientInfo.name} className="w-28 h-36 object-cover rounded-lg shadow-sm border border-neutral-100" />
                        </div>

                        {/* Name & Basic Info - Narrower table */}
                        <div className="flex flex-col justify-center gap-3 flex-1 min-w-0">
                            <div className="flex flex-col gap-0.5">
                                <h2 className="text-xl font-medium text-neutral-800 tracking-wider whitespace-nowrap">{patientInfo.name}</h2>
                                <span className="text-[10px] text-neutral-500 whitespace-nowrap">{patientInfo.reading}</span>
                            </div>

                            <div className="min-w-0 w-full max-w-[200px]">
                                {/* Compact Table - Narrower width */}
                                <div className="border border-neutral-200/60 rounded overflow-hidden">
                                    <div className="flex border-b border-neutral-200/60">
                                        <div className="w-[70px] flex-shrink-0 px-2 py-1 bg-neutral-50 text-[10px] font-medium text-neutral-700 border-r border-neutral-200/60 whitespace-nowrap">コース内容</div>
                                        <div className="px-2 py-1 text-[10px] font-medium text-neutral-800 tracking-wide bg-white flex-1 whitespace-nowrap">{patientInfo.courseInfo}</div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-[70px] flex-shrink-0 px-2 py-1 bg-neutral-50 text-[10px] font-medium text-neutral-700 border-r border-neutral-200/60 whitespace-nowrap">媒体</div>
                                        <div className="px-2 py-1 text-[10px] font-medium text-neutral-800 tracking-wide bg-white flex-1 whitespace-nowrap">{patientInfo.media}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Goals & Cautions */}
                        <div className="flex gap-3 flex-shrink-0">
                            {/* Goal */}
                            <div className={`w-[160px] bg-white rounded-lg overflow-hidden flex flex-col ${softShadow}`}>
                                <div className="px-3 py-2 bg-neutral-50 border-b border-neutral-100 flex items-center gap-2">
                                    <h3 className="font-medium text-[11px] text-neutral-700 tracking-wide">目標</h3>
                                </div>
                                <div className="p-3 text-[11px] font-medium text-neutral-800 leading-relaxed flex-1 flex text-left items-start">
                                    {patientInfo.goal}
                                </div>
                            </div>

                            {/* Caution */}
                            <div className={`w-[190px] bg-white rounded-lg overflow-hidden flex flex-col ${softShadow}`}>
                                <div className="px-3 py-2 bg-neutral-50 border-b border-neutral-100 flex items-center gap-2">
                                    <h3 className="font-medium text-[11px] text-neutral-700 tracking-wide">注意</h3>
                                </div>
                                <div className="flex flex-col h-full">
                                    <div className="p-2 border-b border-dashed border-neutral-200">
                                        <span className="text-[10px] text-neutral-400 block mb-0.5">注意事項</span>
                                        <span className="text-[11px] font-medium text-neutral-800 leading-snug block">
                                            {patientInfo.cautions[0].text}
                                        </span>
                                    </div>
                                    <div className="p-2">
                                        <span className="text-[10px] text-neutral-400 block mb-0.5">注意ワード</span>
                                        <span className="text-[11px] font-medium text-neutral-800 leading-snug block">
                                            {patientInfo.cautions[1].text}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-neutral-100 my-2 mx-1"></div>

                    {/* Middle Section: ToDo & Advice - Equal Height */}
                    <div className="grid grid-cols-[1fr_2fr] gap-4 mb-2 px-1 items-stretch">
                        {/* ToDo */}
                        <div className={`bg-white rounded-xl overflow-hidden flex flex-col h-full ${softShadow}`}>
                            <div className="px-4 py-2 bg-neutral-50 border-b border-neutral-100 flex items-center gap-2">
                                <img src="/img/vector-18.svg" className="w-4 h-4" alt="Todo" />
                                <h3 className="font-medium text-xs text-neutral-700 tracking-wide">ToDo</h3>
                            </div>
                            <div className="p-3 flex flex-col gap-1.5 flex-1">
                                {todoItems.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2.5 p-1.5 rounded-lg hover:bg-blue-50/50 active:scale-[0.99] transition-all cursor-pointer group"
                                    >
                                        <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center bg-white border border-neutral-300 rounded-full group-hover:border-blue-400 transition-colors">
                                            {/* Unchecked */}
                                        </div>
                                        <span className="text-[11px] font-medium text-neutral-700 group-hover:text-blue-600 transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Advice */}
                        <div className={`bg-white rounded-xl overflow-hidden flex flex-col h-full ${softShadow}`}>
                            <div className="px-4 py-2 bg-neutral-50 border-b border-neutral-100 flex items-center gap-2">
                                <img src="/img/vector-19.svg" className="w-4 h-4" alt="Advice" />
                                <h3 className="font-medium text-xs text-neutral-700 tracking-wide">アドバイス</h3>
                            </div>
                            <div className="p-3 px-6 flex-1">
                                <ul className="list-disc list-outside space-y-2 ml-2">
                                    {adviceItems.map((item, i) => (
                                        <li key={i} className="text-[11px] font-medium text-neutral-700 leading-relaxed marker:text-blue-300 pl-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Remarks Section */}
                    <div className={`bg-white rounded-xl overflow-hidden mb-4 mx-1 ${softShadow}`}>
                        <div className="px-4 py-2 bg-neutral-50 border-b border-neutral-100 flex items-center gap-2">
                            {/* Notes Icon - New icon from reference */}
                            <img src="/img/notes-icon.png" className="w-4 h-4" alt="Notes" />
                            <h3 className="font-medium text-xs text-neutral-700 tracking-wide">備考</h3>
                        </div>
                        <div className="h-16 bg-white p-3">
                            <textarea className="w-full h-full resize-none outline-none text-xs text-neutral-700" placeholder="備考を入力..."></textarea>
                        </div>
                    </div>

                    {/* History Table - No bottom margin */}
                    <div className={`bg-white rounded-xl overflow-hidden shadow-sm mx-1 ${softShadow}`}>
                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse">
                                <thead>
                                    <tr className="bg-neutral-50 border-b border-neutral-200 text-[10px] font-medium text-neutral-500">
                                        <th className="p-1.5 border-r border-neutral-200 w-12 font-medium bg-neutral-100">項目</th>
                                        {historyColumns.slice(1).map((col, i) => (
                                            <th key={i} className={`p-1 border-r border-neutral-200 whitespace-nowrap font-medium ${col.width}`}>
                                                {col.label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-neutral-100 h-8 hover:bg-neutral-50/50">
                                        <td className="bg-neutral-50 px-1 text-[10px] font-medium border-r border-neutral-200 text-neutral-600">達成</td>
                                        {Array.from({ length: 24 }).map((_, i) => (
                                            <td key={i} className="border-r border-neutral-200 text-[10px] text-neutral-700"> </td>
                                        ))}
                                    </tr>
                                    <tr className="h-8 hover:bg-neutral-50/50">
                                        <td className="bg-neutral-50 px-1 text-[10px] font-medium border-r border-neutral-200 text-neutral-600">効果</td>
                                        <td colSpan={24} className="px-2 text-left text-[10px] font-medium text-neutral-600 border-r border-neutral-200">初回の施術です。</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                {/* Footer Actions (Sticky Bottom) - Increased vertical padding (p-8) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-neutral-100 p-8 flex justify-end gap-5 z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] pr-8">
                    <button className="w-32 h-10 bg-[#54a0ff] hover:bg-[#4a8fe0] active:bg-[#3f84d4] text-white rounded-full text-xs font-bold tracking-wider shadow-[0_4px_10px_rgba(84,160,255,0.3)] hover:shadow-[0_6px_14px_rgba(84,160,255,0.4)] active:scale-95 transition-all flex items-center justify-center">
                        問診票入力
                    </button>
                    <button className="w-32 h-10 bg-[#54a0ff] hover:bg-[#4a8fe0] active:bg-[#3f84d4] text-white rounded-full text-xs font-bold tracking-wider shadow-[0_4px_10px_rgba(84,160,255,0.3)] hover:shadow-[0_6px_14px_rgba(84,160,255,0.4)] active:scale-95 transition-all flex items-center justify-center">
                        LINE登録
                    </button>
                    <button className="w-32 h-10 bg-[#54a0ff] hover:bg-[#4a8fe0] active:bg-[#3f84d4] text-white rounded-full text-xs font-bold tracking-wider shadow-[0_4px_10px_rgba(84,160,255,0.3)] hover:shadow-[0_6px_14px_rgba(84,160,255,0.4)] active:scale-95 transition-all flex items-center justify-center">
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
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};
