import React, { useState } from "react";
import ReactDOM from "react-dom";

export const EffectImageModal = ({ isOpen, onClose }) => {
    const [currentPage, setCurrentPage] = useState(1);

    if (!isOpen) return null;

    const handleNext = () => setCurrentPage(2);
    const handlePrev = () => setCurrentPage(1);

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[200] bg-white font-['Noto_Sans_JP'] flex items-center justify-center">

            {/* Top Right Controls Container */}
            <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
                {/* Navigation Buttons - Numbered 1, 2 */}
                <div className="flex bg-neutral-100 rounded-full p-1 shadow-sm gap-1">
                    <button
                        onClick={() => setCurrentPage(1)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currentPage === 1
                                ? 'bg-white text-blue-500 shadow-sm'
                                : 'text-neutral-400 hover:text-neutral-600 hover:bg-white/50'
                            }`}
                    >
                        1
                    </button>
                    <button
                        onClick={() => setCurrentPage(2)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${currentPage === 2
                                ? 'bg-white text-blue-500 shadow-sm'
                                : 'text-neutral-400 hover:text-neutral-600 hover:bg-white/50'
                            }`}
                    >
                        2
                    </button>
                </div>

                {/* Close Button - Styled like CustomerOverviewModal */}
                <button
                    onClick={onClose}
                    className="w-11 h-11 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-neutral-700 hover:bg-neutral-200 shadow-sm transition-all"
                    aria-label="閉じる"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Page Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                <div className={`w-2 h-2 rounded-full transition-all ${currentPage === 1 ? 'bg-blue-500 w-4' : 'bg-neutral-300'}`} />
                <div className={`w-2 h-2 rounded-full transition-all ${currentPage === 2 ? 'bg-blue-500 w-4' : 'bg-neutral-300'}`} />
            </div>

            {/* Image Display - Reduced size with padding */}
            <div className="w-full h-full flex items-center justify-center p-8 md:p-16">
                <img
                    src={currentPage === 1 ? "/static/img/effect-image-1.png" : "/static/img/effect-image-2.png"}
                    alt={`効果のイメージ ${currentPage}`}
                    className="max-w-full max-h-full object-contain animate-in fade-in duration-300 shadow-lg rounded-lg"
                    key={currentPage} // Force re-render animation on page change
                />
            </div>
        </div>,
        document.body
    );
};
