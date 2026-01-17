import React, { useState } from "react";
import ReactDOM from "react-dom";

export const SimilarCasesModal = ({ isOpen, onClose }) => {
    const [selectedTab, setSelectedTab] = useState('upper');
    const [fullscreenImage, setFullscreenImage] = useState(null);

    // Upper tab items - using provided face images
    const upperItems = [
        { id: 'face-length', label: '面長を改善したい', image: '/static/img/similar-upper-face-length.png' },
        { id: 'jawline', label: 'エラの張りを取りたい（R）', image: '/static/img/similar-upper-jawline.png' }
    ];

    // Lower tab items
    const lowerItems = [
        { id: 'distortion', label: '歪みを整えたい', image: '/static/img/similar-lower-distortion.png' },
        { id: 'waist', label: 'くびれを作りたい', image: '/static/img/similar-lower-waistline.png' }
    ];

    const currentItems = selectedTab === 'upper' ? upperItems : lowerItems;

    if (!isOpen) return null;

    // App-consistent soft shadow
    const softShadow = "shadow-[0_8px_32px_rgba(0,0,0,0.08)]";

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] bg-white font-['Noto_Sans_JP'] flex flex-col">
            {/* Header - Matching app style */}
            <header className="flex-shrink-0 h-16 bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-between px-4 z-20">
                <h1 className="text-lg font-normal text-neutral-700 tracking-wide ml-2">
                    類似症例
                </h1>
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

            {/* Main Content Area */}
            <div className="flex-1 bg-neutral-50 overflow-hidden flex flex-col">

                {/* Top Controls Container - App-consistent glassmorphism */}
                <div className="flex-shrink-0 px-8 py-5 flex items-center justify-center gap-5">
                    {/* Search Bar - Enlarged to match button height (approx 54px) */}
                    <div className={`w-[320px] h-[54px] bg-white/90 backdrop-blur-xl rounded-full ${softShadow} border border-white/50 flex items-center px-6 gap-3`}>
                        <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-base text-neutral-400 font-light">Search</span>
                    </div>

                    {/* Tab Switcher - App style matching concern page toggle */}
                    <div className={`bg-white/90 backdrop-blur-xl rounded-full p-1.5 border border-white/50 ${softShadow} flex`}>
                        <button
                            onClick={() => setSelectedTab('upper')}
                            className={`px-8 py-3 rounded-full text-[14px] font-semibold transition-all ${selectedTab === 'upper' ? 'bg-[#4aa9fc] text-white shadow-md' : 'text-neutral-500 hover:bg-white/60'}`}
                        >
                            上部
                        </button>
                        <button
                            onClick={() => setSelectedTab('lower')}
                            className={`px-8 py-3 rounded-full text-[14px] font-semibold transition-all ${selectedTab === 'lower' ? 'bg-[#4aa9fc] text-white shadow-md' : 'text-neutral-500 hover:bg-white/60'}`}
                        >
                            下部
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center pb-12">
                    <div className="w-full max-w-[600px] flex flex-col gap-5 animate-in fade-in duration-300 px-6">

                        {/* Selection Panel */}
                        <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-neutral-100 overflow-hidden">
                            <div className="bg-[#4aa9fc] py-3 px-5">
                                <h3 className="text-white font-bold text-sm tracking-wide">改善したい箇所</h3>
                            </div>
                            <div className="px-5 py-3">
                                {currentItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`py-2.5 text-sm font-medium text-neutral-700 ${index < currentItems.length - 1 ? 'border-b border-neutral-100' : ''}`}
                                    >
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cards Area */}
                        <div className="flex flex-col gap-5 pb-10">
                            {currentItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden p-5 relative group cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow"
                                    onClick={() => setFullscreenImage(item.image)}
                                >
                                    {/* Title Badge - Soft shadow instead of border */}
                                    <div className="flex justify-center mb-4">
                                        <div className="bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 py-2 rounded-full">
                                            <span className="text-sm font-bold text-neutral-800">{item.label}</span>
                                        </div>
                                    </div>

                                    {/* Image wrapper */}
                                    <div className="flex justify-center">
                                        <div className="w-full aspect-[1.6] relative rounded-lg overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.label}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Expand Button - Top Right */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setFullscreenImage(item.image);
                                        }}
                                        className="absolute top-5 right-5 w-11 h-11 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-neutral-500 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                                    >
                                        {/* Top-right to Bottom-left diagonal arrows */}
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 14v6h6M20 10V4h-6" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l6-6M10 14l-6 6" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Image Overlay - SCALED UP */}
            {fullscreenImage && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center animate-in fade-in duration-200 p-2"
                    onClick={() => setFullscreenImage(null)}
                >
                    <button
                        onClick={() => setFullscreenImage(null)}
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-10"
                        aria-label="閉じる"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={fullscreenImage}
                        alt="Fullscreen view"
                        className="h-[95vh] w-auto max-w-[98vw] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>,
        document.body
    );
};
