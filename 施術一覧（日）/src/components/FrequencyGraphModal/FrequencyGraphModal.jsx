import React from "react";
import ReactDOM from "react-dom";

export const FrequencyGraphModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[200] bg-white font-['Noto_Sans_JP'] flex items-center justify-center">
            {/* Close Button - Top Right (Styled like CustomerOverviewModal) */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-600 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all z-10"
                aria-label="閉じる"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Full Screen Image */}
            <img
                src="/static/img/frequency-graph-v2.png"
                alt="頻度のグラフ"
                className="max-w-full max-h-full object-contain p-4"
            />
        </div>,
        document.body
    );
};
