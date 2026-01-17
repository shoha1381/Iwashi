import React, { useState } from "react";
import ReactDOM from "react-dom";

export const PhotoComparisonModal = ({ isOpen, onClose }) => {
    // All photos taken so far (mock data)
    const [allPhotos] = useState([
        { id: 1, date: "2023/10/06", type: "before", count: 1, imageUrl: "/img/photo-sample.png", note: "初回施術前" },
        { id: 2, date: "2023/10/06", type: "after", count: 1, imageUrl: "/static/img/photo-sample.png", note: "初回施術後" },
        { id: 3, date: "2023/10/20", type: "before", count: 2, imageUrl: "/img/photo-sample.png", note: "2回目施術前" },
        { id: 4, date: "2023/10/20", type: "after", count: 2, imageUrl: "/static/img/photo-sample.png", note: "2回目施術後" },
        { id: 5, date: "2023/11/03", type: "before", count: 3, imageUrl: "/img/photo-sample.png", note: "3回目施術前" },
    ]);

    // Selected photos for comparison
    const [selectedBefore, setSelectedBefore] = useState(null);
    const [selectedAfter, setSelectedAfter] = useState(null);

    // Selection mode: null | 'before' | 'after'
    const [selectionMode, setSelectionMode] = useState(null);

    if (!isOpen) return null;

    const handleSlotClick = (type) => {
        // If already in selection mode for this type, cancel it
        if (selectionMode === type) {
            setSelectionMode(null);
        } else {
            setSelectionMode(type);
        }
    };

    const handlePhotoSelect = (photo) => {
        if (!selectionMode) return;

        if (selectionMode === 'before') {
            setSelectedBefore(photo);
        } else {
            setSelectedAfter(photo);
        }
        setSelectionMode(null); // Exit selection mode after selecting
    };

    const canCompare = selectedBefore && selectedAfter;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] bg-white font-['Noto_Sans_JP'] flex flex-col">
            {/* Header */}
            <header className="flex-shrink-0 h-16 bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-between px-4 z-10">
                <h1 className="text-lg font-normal text-neutral-700 tracking-wide ml-2">
                    写真比較
                    <span className="text-neutral-500 text-sm font-normal ml-4">三浦梨花 様</span>
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

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto bg-neutral-50 p-6 flex flex-col gap-6">
                {/* Selection Area Card */}
                <div className="bg-white rounded-[20px] shadow-sm border border-neutral-100 p-6 flex flex-col items-center max-w-2xl mx-auto w-full">
                    {/* Instruction Text */}
                    <p className="text-sm text-neutral-500 mb-4">比較する写真を選んでください</p>

                    <div className="flex items-center gap-8 w-full">
                        {/* Before Slot */}
                        <div className="flex-1 flex flex-col gap-2 items-center">
                            <span className="text-xs text-neutral-400 font-medium tracking-wide">ビフォー</span>
                            <div
                                className={`w-full aspect-square max-w-[180px] rounded-2xl border-2 flex items-center justify-center cursor-pointer transition-all group relative overflow-hidden bg-white ${selectionMode === 'before'
                                        ? 'border-blue-400 bg-blue-50 shadow-md'
                                        : 'border-neutral-200 hover:bg-neutral-50'
                                    }`}
                                onClick={() => handleSlotClick('before')}
                            >
                                {selectedBefore ? (
                                    <>
                                        <img src={selectedBefore.imageUrl} alt="before" className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                            <span className="text-white text-xs font-medium">{selectedBefore.count}回目</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-1">
                                        <img
                                            src="/static/img/photo-plus.svg"
                                            className={`w-8 h-8 transition-opacity ${selectionMode === 'before' ? 'opacity-60' : 'opacity-30 group-hover:opacity-50'}`}
                                            alt="Add"
                                        />
                                        {selectionMode === 'before' && (
                                            <span className="text-[10px] text-blue-500 font-medium">選択中...</span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-neutral-300 text-2xl font-light">→</div>

                        {/* After Slot */}
                        <div className="flex-1 flex flex-col gap-2 items-center">
                            <span className="text-xs text-neutral-400 font-medium tracking-wide">アフター</span>
                            <div
                                className={`w-full aspect-square max-w-[180px] rounded-2xl border-2 flex items-center justify-center cursor-pointer transition-all group relative overflow-hidden bg-white ${selectionMode === 'after'
                                        ? 'border-orange-400 bg-orange-50 shadow-md'
                                        : 'border-neutral-200 hover:bg-neutral-50'
                                    }`}
                                onClick={() => handleSlotClick('after')}
                            >
                                {selectedAfter ? (
                                    <>
                                        <img src={selectedAfter.imageUrl} alt="after" className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                            <span className="text-white text-xs font-medium">{selectedAfter.count}回目</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-1">
                                        <img
                                            src="/static/img/photo-plus.svg"
                                            className={`w-8 h-8 transition-opacity ${selectionMode === 'after' ? 'opacity-60' : 'opacity-30 group-hover:opacity-50'}`}
                                            alt="Add"
                                        />
                                        {selectionMode === 'after' && (
                                            <span className="text-[10px] text-orange-500 font-medium">選択中...</span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Compare Button */}
                    <button
                        disabled={!canCompare}
                        className={`mt-6 px-12 py-3 text-sm font-bold rounded-full shadow-md transition-all active:scale-95 tracking-wide ${canCompare
                                ? 'bg-[#4aa9fc] hover:bg-[#3a99ec] text-white'
                                : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                            }`}
                    >
                        比較する
                    </button>
                </div>

                {/* Photo Gallery - All taken photos */}
                <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full">
                    <h3 className="text-sm font-bold text-neutral-600 tracking-wide px-1">撮影した写真</h3>

                    {selectionMode && (
                        <p className="text-xs text-blue-500 px-1 -mt-1">
                            {selectionMode === 'before' ? 'ビフォー' : 'アフター'}写真を選んでください
                        </p>
                    )}

                    <div className="grid grid-cols-3 gap-3">
                        {allPhotos.map((photo) => (
                            <div
                                key={photo.id}
                                onClick={() => selectionMode ? handlePhotoSelect(photo) : null}
                                className={`bg-white rounded-xl overflow-hidden shadow-sm border transition-all ${selectionMode
                                        ? 'cursor-pointer hover:shadow-md hover:scale-[1.02] border-transparent hover:border-blue-300'
                                        : 'border-neutral-100'
                                    } ${(selectedBefore?.id === photo.id || selectedAfter?.id === photo.id)
                                        ? 'ring-2 ring-blue-400'
                                        : ''
                                    }`}
                            >
                                {/* Thumbnail */}
                                <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                                    <img src={photo.imageUrl} alt="" className="w-full h-full object-cover" />
                                    {/* Type Badge */}
                                    <div className={`absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded ${photo.type === 'before'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-orange-500 text-white'
                                        }`}>
                                        {photo.type === 'before' ? 'B' : 'A'}
                                    </div>
                                    {/* Selection Indicator */}
                                    {(selectedBefore?.id === photo.id || selectedAfter?.id === photo.id) && (
                                        <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                                            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Info Footer */}
                                <div className="p-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-medium text-neutral-500">{photo.date}</span>
                                        <span className="text-xs font-bold text-neutral-700">{photo.count}回目</span>
                                    </div>
                                    {photo.note && (
                                        <p className="text-[10px] text-neutral-400 truncate mt-0.5">{photo.note}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
