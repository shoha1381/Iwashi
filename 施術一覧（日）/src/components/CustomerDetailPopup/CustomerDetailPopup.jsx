export const CustomerDetailPopup = ({ isOpen, onClose, reservationInfo }) => {
    if (!isOpen) return null;

    // Default customer data, merged with any passed reservation info
    const defaultData = {
        name: "三浦 梨花",
        reading: "ミウラリカ",
        gender: "女",
        age: 25,
        course: "SP・１回目（初回）",
        goal: "1月の結婚式に向けて、右のエラはりを改善する",
        notes: ["顎・フェイスライン整形あり", "太った/痩せた、肌の色、整形跡"],
        photo: null,
    };

    const customerData = { ...defaultData, ...reservationInfo };

    const todoItems = [
        { text: "頻度のグラフを使った説明", done: true },
        { text: "ビフォー写真撮影", done: false },
        { text: "効果イメージを使った説明", done: false },
        { text: "施術料金支払い", done: false },
    ];

    const adviceItems = [
        "初回から5回分まとめてスタートさせる流れを徹底しましょう。",
        "5回目の来院時に次の5回分を必ず提案・決済してください。",
        "施術前に前払いと次回予約確定を行い、来院間隔を空けないようにしましょう。",
        "短い間隔で通っていただくと、定着が良くなることを伝えましょう。",
    ];

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            />

            {/* Popup - Bottom Sheet Style */}
            <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col max-h-[85vh] animate-slideUp">
                <div className="bg-white rounded-t-3xl shadow-2xl flex-1 overflow-hidden flex flex-col">
                    {/* Header Bar */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
                        {/* Customer Info */}
                        <div className="flex items-center gap-4">
                            {/* Photo */}
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center overflow-hidden">
                                {customerData.photo ? (
                                    <img src={customerData.photo} alt={customerData.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-2xl">👩</span>
                                )}
                            </div>
                            <div>
                                <h2 className="font-bold text-lg text-neutral-800">{customerData.name}</h2>
                                <p className="text-sm text-neutral-500">{customerData.reading}・{customerData.gender}・{customerData.age}歳</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm font-medium text-neutral-700 transition-colors">
                                施術
                            </button>
                            <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm font-medium text-neutral-700 transition-colors">
                                注意
                            </button>
                            <button className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm font-medium text-neutral-700 transition-colors">
                                目標
                            </button>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors ml-2"
                            >
                                <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Customer Details Column */}
                            <div className="space-y-4">
                                {/* Course Info */}
                                <div className="bg-neutral-50 rounded-xl p-4">
                                    <p className="text-sm text-neutral-500 mb-1">コース内容</p>
                                    <p className="font-medium text-neutral-800">{customerData.course}</p>
                                </div>

                                {/* Goal */}
                                <div className="bg-neutral-50 rounded-xl p-4">
                                    <p className="text-sm text-neutral-500 mb-1">目標</p>
                                    <p className="font-medium text-neutral-800">{customerData.goal}</p>
                                </div>

                                {/* Notes */}
                                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                                    <p className="text-sm text-amber-600 mb-1">注意事項 / 注意ワード</p>
                                    {customerData.notes.map((note, i) => (
                                        <p key={i} className="font-medium text-neutral-800">{note}</p>
                                    ))}
                                </div>
                            </div>

                            {/* ToDo Column */}
                            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
                                <div className="px-4 py-3 border-b border-neutral-100 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                    <span className="font-medium text-neutral-700">ToDo</span>
                                </div>
                                <div className="p-4 space-y-3">
                                    {todoItems.map((item, index) => (
                                        <label key={index} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${item.done
                                                ? "bg-[#4aa9fc] border-[#4aa9fc]"
                                                : "border-neutral-300 group-hover:border-[#4aa9fc]"
                                                }`}>
                                                {item.done && (
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className={`text-sm ${item.done ? "text-neutral-400 line-through" : "text-neutral-700"}`}>
                                                {item.text}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Advice Column */}
                            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
                                <div className="px-4 py-3 border-b border-neutral-100 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium text-neutral-700">アドバイス</span>
                                </div>
                                <ul className="p-4 space-y-2">
                                    {adviceItems.map((item, index) => (
                                        <li key={index} className="text-sm text-neutral-600 leading-relaxed flex gap-2">
                                            <span className="text-[#4aa9fc] flex-shrink-0">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Notes Section */}
                        <div className="mt-5 bg-white border border-neutral-200 rounded-xl overflow-hidden">
                            <div className="px-4 py-3 border-b border-neutral-100 flex items-center gap-2">
                                <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <span className="font-medium text-neutral-700">備考</span>
                            </div>
                            <textarea
                                className="w-full p-4 text-sm text-neutral-700 resize-none focus:outline-none"
                                rows={3}
                                placeholder="メモを入力..."
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for animation */}
            <style>{`
                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </>
    );
};
