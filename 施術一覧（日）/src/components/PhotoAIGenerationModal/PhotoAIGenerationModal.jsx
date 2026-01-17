import React, { useState } from "react";
import ReactDOM from "react-dom";

export const PhotoAIGenerationModal = ({ isOpen, onClose }) => {
    // Screen states: 'main' | 'select' | 'compare'
    const [screen, setScreen] = useState('main');

    // Which section is being compared
    const [activeSection, setActiveSection] = useState(null);

    // Selected images for comparison (multiple selection)
    const [selectedImages, setSelectedImages] = useState([]);

    // View mode: 'grid' (横並び) or 'slider' (スライドバー)
    const [viewMode, setViewMode] = useState('slider');

    // Slider position (0-100)
    const [sliderPosition, setSliderPosition] = useState(50);

    // Soft shadow style
    const softShadow = "shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-neutral-100";

    // Customer's AI generated images
    const customerImages = {
        before: "/static/img/ai-face-customer-1.png",
        current: "/static/img/ai-face-customer-1.png",
        after: "/static/img/ai-face-customer-1.png",
    };

    // Model cases
    const modelImages = {
        before: "/static/img/ai-face-model-1.png",
        current: "/static/img/ai-face-model-1.png",
        after: "/static/img/ai-face-model-1.png",
    };

    if (!isOpen) return null;

    const handleCompareClick = (section) => {
        setActiveSection(section);
        setSelectedImages([]);
        setScreen('select');
    };

    const handleBack = () => {
        if (screen === 'compare') {
            setScreen('select');
        } else if (screen === 'select') {
            setScreen('main');
            setActiveSection(null);
        } else {
            onClose();
        }
    };

    const toggleImageSelection = (type) => {
        setSelectedImages(prev => {
            if (prev.includes(type)) {
                return prev.filter(t => t !== type);
            } else {
                return [...prev, type];
            }
        });
    };

    const handleDoCompare = () => {
        if (selectedImages.length >= 2) {
            setScreen('compare');
        }
    };

    const images = activeSection === 'customer' ? customerImages : modelImages;
    const sectionName = activeSection === 'customer' ? '三浦様' : 'モデルケース';

    // Glassmorphism Mode toggle component (matching お悩み screen style)
    const ModeToggle = ({ className = "" }) => (
        <div className={`bg-white/80 backdrop-blur-xl rounded-full p-1.5 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex ${className}`}>
            <button
                onClick={() => setViewMode('grid')}
                className={`px-8 py-3 rounded-full text-[15px] font-semibold transition-all ${viewMode === 'grid'
                        ? 'bg-[#4aa9fc] text-white shadow-lg'
                        : 'text-neutral-500 hover:bg-white/60'
                    }`}
            >
                横並び
            </button>
            <button
                onClick={() => setViewMode('slider')}
                className={`px-8 py-3 rounded-full text-[15px] font-semibold transition-all ${viewMode === 'slider'
                        ? 'bg-[#4aa9fc] text-white shadow-lg'
                        : 'text-neutral-500 hover:bg-white/60'
                    }`}
            >
                スライドバー
            </button>
        </div>
    );

    // Comparison view (supports 2 or 3 images)
    if (screen === 'compare') {
        const selectedImageUrls = selectedImages.map(type => images[type]);

        return ReactDOM.createPortal(
            <div className="fixed inset-0 z-[100] bg-white font-['Noto_Sans_JP'] flex flex-col">
                {/* Header */}
                <header className="flex-shrink-0 h-16 bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-between px-4 z-10">
                    <h1 className="text-lg font-normal text-neutral-700 tracking-wide ml-2">写真AI生成</h1>
                    <div className="flex items-center gap-2">
                        <button onClick={handleBack} className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-200 transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={onClose} className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-200 transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center justify-center bg-neutral-50 p-6 gap-8">
                    {viewMode === 'slider' && selectedImageUrls.length === 2 ? (
                        <>
                            {/* Slider comparison - larger size */}
                            <div className="relative w-full max-w-xl aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <img src={selectedImageUrls[1]} alt="After" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                                    <img src={selectedImageUrls[0]} alt="Before" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg" style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }} />
                                <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6">
                                    <span className="text-sm font-medium text-neutral-700 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">現在</span>
                                    <span className="text-sm font-medium text-neutral-700 bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">施術を受けた場合</span>
                                </div>
                            </div>
                            <div className="w-full max-w-xl">
                                <input type="range" min="5" max="95" value={sliderPosition} onChange={(e) => setSliderPosition(parseInt(e.target.value))} className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer accent-[#4aa9fc]" />
                            </div>
                        </>
                    ) : (
                        /* Grid Comparison - larger images */
                        <div className="flex gap-6 w-full max-w-4xl justify-center">
                            {selectedImageUrls.map((url, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center max-w-[280px]">
                                    <span className="text-sm text-neutral-600 font-medium mb-3">
                                        {selectedImages[index] === 'before' ? '施術を受けない場合' : selectedImages[index] === 'current' ? '現在' : '施術を受けた場合'}
                                    </span>
                                    <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
                                        <img src={url} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Mode Toggle - Below photos */}
                    <ModeToggle />
                </div>
            </div>,
            document.body
        );
    }

    // Image selection screen
    if (screen === 'select') {
        const imageTypes = ['before', 'current', 'after'];
        const labels = { before: '施術を受けない場合', current: '現在', after: '施術を受けた場合' };

        return ReactDOM.createPortal(
            <div className="fixed inset-0 z-[100] bg-white font-['Noto_Sans_JP'] flex flex-col">
                {/* Header */}
                <header className="flex-shrink-0 h-16 bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-between px-4 z-10">
                    <h1 className="text-lg font-normal text-neutral-700 tracking-wide ml-2">写真AI生成</h1>
                    <div className="flex items-center gap-2">
                        <button onClick={handleBack} className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-200 transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={onClose} className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-200 transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 overflow-y-auto bg-white px-6 py-8 flex flex-col items-center">
                    <p className="text-lg font-medium text-neutral-700 mb-8">比較したい画像を選んでください。</p>

                    {/* Section Card */}
                    <div className={`bg-white rounded-xl overflow-hidden max-w-3xl w-full mb-8 ${softShadow}`}>
                        <div className="px-4 py-3 bg-neutral-50 border-b border-neutral-100 text-center">
                            <span className="text-sm font-medium text-neutral-700">{sectionName}</span>
                        </div>

                        <div className="grid grid-cols-3 border-b border-neutral-100 bg-neutral-50/50">
                            {imageTypes.map((type, index) => (
                                <div key={type} className={`py-2.5 text-center text-xs text-neutral-500 font-medium ${index < 2 ? 'border-r border-neutral-100' : ''}`}>
                                    {labels[type]}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 bg-white">
                            {imageTypes.map((type, index) => {
                                const isSelected = selectedImages.includes(type);
                                return (
                                    <div key={type} className={`p-5 flex justify-center ${index < 2 ? 'border-r border-neutral-100' : ''}`}>
                                        <div
                                            onClick={() => toggleImageSelection(type)}
                                            className={`relative w-full max-w-[140px] aspect-square rounded-xl overflow-hidden cursor-pointer transition-all ${isSelected
                                                    ? 'ring-4 ring-[#4aa9fc] shadow-lg'
                                                    : 'border border-neutral-100 hover:shadow-md'
                                                }`}
                                        >
                                            <img src={images[type]} alt="" className="w-full h-full object-cover" />
                                            {isSelected && (
                                                <div className="absolute inset-0 bg-[#4aa9fc]/20 flex items-center justify-center">
                                                    <div className="w-10 h-10 rounded-full bg-[#4aa9fc] flex items-center justify-center shadow-lg">
                                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Action Buttons - Glassmorphism style */}
                    <div className="flex items-center gap-6 mb-8">
                        <ModeToggle />

                        {/* Compare Button - Blue */}
                        <button
                            onClick={handleDoCompare}
                            disabled={selectedImages.length < 2}
                            className={`px-12 py-3 text-sm font-bold rounded-full transition-all ${selectedImages.length >= 2
                                    ? 'bg-[#4aa9fc] hover:bg-[#3a99ec] text-white shadow-[0_4px_10px_rgba(84,160,255,0.3)]'
                                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                                }`}
                        >
                            比較する
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    }

    // Main screen
    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] bg-white font-['Noto_Sans_JP'] flex flex-col">
            <header className="flex-shrink-0 h-16 bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-between px-4 z-10">
                <h1 className="text-lg font-normal text-neutral-700 tracking-wide ml-2">
                    写真AI生成
                    <span className="text-neutral-500 text-sm font-normal ml-4">三浦梨花 様</span>
                </h1>
                <button onClick={onClose} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </header>

            <div className="flex-1 overflow-y-auto bg-white px-6 py-8 flex flex-col gap-8">
                {/* Customer Section */}
                <div className={`bg-white rounded-xl overflow-hidden max-w-3xl mx-auto w-full ${softShadow}`}>
                    <div className="px-4 py-3 bg-neutral-50 border-b border-neutral-100">
                        <span className="text-sm font-medium text-neutral-700">三浦様</span>
                    </div>
                    <div className="grid grid-cols-3 border-b border-neutral-100 bg-neutral-50/50">
                        <div className="py-2.5 text-center text-xs text-neutral-500 font-medium border-r border-neutral-100">施術を受けない場合</div>
                        <div className="py-2.5 text-center text-xs text-neutral-500 font-medium border-r border-neutral-100">現在</div>
                        <div className="py-2.5 text-center text-xs text-neutral-500 font-medium">施術を受けた場合</div>
                    </div>
                    <div className="grid grid-cols-3 bg-white">
                        {['before', 'current', 'after'].map((type, index) => (
                            <div key={type} className={`p-5 flex justify-center ${index < 2 ? 'border-r border-neutral-100' : ''}`}>
                                <div className="w-full max-w-[140px] aspect-square rounded-xl overflow-hidden border border-neutral-100">
                                    <img src={customerImages[type]} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="py-5 flex justify-center bg-white border-t border-neutral-100">
                        <button onClick={() => handleCompareClick('customer')} className="px-14 py-3 bg-[#4aa9fc] hover:bg-[#3a99ec] text-white text-sm font-bold rounded-full shadow-[0_4px_10px_rgba(84,160,255,0.3)] transition-all active:scale-95">
                            比較する
                        </button>
                    </div>
                </div>

                {/* Model Section */}
                <div className={`bg-white rounded-xl overflow-hidden max-w-3xl mx-auto w-full ${softShadow}`}>
                    <div className="px-4 py-3 bg-neutral-50 border-b border-neutral-100">
                        <span className="text-sm font-medium text-neutral-700">モデルケース</span>
                    </div>
                    <div className="grid grid-cols-3 border-b border-neutral-100 bg-neutral-50/50">
                        <div className="py-2.5 text-center text-xs text-neutral-500 font-medium border-r border-neutral-100">施術を受けた場合</div>
                        <div className="py-2.5 text-center text-xs text-neutral-500 font-medium border-r border-neutral-100">現在</div>
                        <div className="py-2.5 text-center text-xs text-neutral-500 font-medium">施術を受けた場合</div>
                    </div>
                    <div className="grid grid-cols-3 bg-white">
                        {['before', 'current', 'after'].map((type, index) => (
                            <div key={type} className={`p-5 flex justify-center ${index < 2 ? 'border-r border-neutral-100' : ''}`}>
                                <div className="w-full max-w-[140px] aspect-square rounded-xl overflow-hidden border border-neutral-100">
                                    <img src={modelImages[type]} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="py-5 flex justify-center bg-white border-t border-neutral-100">
                        <button onClick={() => handleCompareClick('model')} className="px-14 py-3 bg-[#4aa9fc] hover:bg-[#3a99ec] text-white text-sm font-bold rounded-full shadow-[0_4px_10px_rgba(84,160,255,0.3)] transition-all active:scale-95">
                            比較する
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
