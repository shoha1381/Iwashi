export const BusinessAppointmentModal = ({ isOpen, onClose, appointmentData, onEdit, onDelete }) => {
    if (!isOpen) return null;

    const data = appointmentData || {
        content: "",
        date: "",
        time: "",
        staffName: "",
    };

    // Format time as "HH:00~HH+1:00"
    const formatTimeRange = (time) => {
        if (!time) return "";
        const hour = parseInt(time);
        if (isNaN(hour)) return time;
        return `${hour}:00〜${hour + 1}:00`;
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            />

            {/* Popup - Bottom Sheet Style */}
            <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col max-h-[50vh] animate-slideUp font-['Noto_Sans_JP']">
                <div className="bg-white rounded-t-3xl shadow-2xl flex-1 overflow-hidden flex flex-col">
                    {/* Header Bar - Matching 施術 popup style */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
                        {/* Title & Time - No icon, just text like 施術 popup */}
                        <div className="flex items-center gap-6">
                            <h2 className="text-lg font-normal text-neutral-800 tracking-wide">業務</h2>
                            {(data.date || data.time) && (
                                <span className="text-sm text-neutral-500 font-normal">
                                    {data.date && data.date}
                                    {data.time && ` ${formatTimeRange(data.time)}`}
                                </span>
                            )}
                        </div>

                        {/* Action Buttons - Matching 施術 popup icons */}
                        <div className="flex items-center gap-3">
                            {/* Delete Button - Red trash icon */}
                            <button
                                onClick={onDelete}
                                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all"
                            >
                                <img src="/img/trash-icon.svg" className="w-6 h-6" alt="削除" />
                            </button>
                            {/* Edit Button - Blue pencil icon */}
                            <button
                                onClick={onEdit}
                                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all"
                            >
                                <img src="/img/edit-icon.svg" className="w-6 h-6" alt="編集" />
                            </button>
                            {/* Close Button - Gray X icon */}
                            <button
                                onClick={onClose}
                                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all"
                            >
                                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6 bg-white">
                        {/* Work Content Card */}
                        <div className="rounded-xl overflow-hidden border border-neutral-100 shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
                            <div className="px-4 py-3 border-b border-neutral-100 bg-neutral-50">
                                <span className="text-[13px] font-medium text-neutral-700 tracking-wide">業務内容</span>
                            </div>
                            <div className="p-4 bg-white">
                                <p className="text-[13px] text-neutral-700 leading-relaxed whitespace-pre-wrap min-h-[60px] font-normal">
                                    {data.content || <span className="text-neutral-400">内容が入力されていません</span>}
                                </p>
                            </div>
                        </div>

                        {/* Staff Info (Optional) */}
                        {data.staffName && (
                            <div className="mt-4 rounded-xl border border-neutral-100 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] p-4 bg-white flex items-center gap-3">
                                <span className="text-[13px] text-neutral-500">担当:</span>
                                <span className="text-[13px] text-neutral-700 font-medium">{data.staffName}</span>
                            </div>
                        )}
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
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
            `}</style>
        </>
    );
};

export default BusinessAppointmentModal;
