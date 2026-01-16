import React from "react";
import ReactDOM from "react-dom";

export const LineRegistrationModal = ({ isOpen, onClose, customerName }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] bg-white font-['Noto_Sans_JP'] flex flex-col">
            {/* Header - Matching other screens style */}
            <header className="flex-shrink-0 h-16 bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-between px-4 z-10">
                {/* Title */}
                <h1 className="text-lg font-normal text-neutral-700 tracking-wide ml-2">
                    LINE登録
                    {customerName && (
                        <span className="text-neutral-500 text-sm font-normal ml-4">{customerName}様</span>
                    )}
                </h1>

                {/* Close Button - Top Right */}
                <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all"
                    aria-label="閉じる"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </header>

            {/* QR Code Content - Full Screen Centered */}
            <div className="flex-1 flex flex-col items-center justify-center bg-neutral-50">
                <img
                    src="/img/l-gainfriends-2dbarcodes-gw-1.png"
                    alt="LINE QR Code"
                    className="w-[320px] h-[320px] object-contain"
                />
                <p className="mt-8 text-neutral-500 text-sm">
                    QRコードをスキャンしてLINE登録してください
                </p>
            </div>
        </div>,
        document.body
    );
};
