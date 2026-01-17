import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export const PhotoCaptureModal = ({ isOpen, onClose }) => {
    // Screen states: 'capture' | 'review' | 'selectPhoto'
    const [screen, setScreen] = useState('capture');

    // Captured photo data URL
    const [capturedPhoto, setCapturedPhoto] = useState(null);

    // Grid visibility
    const [showGrid, setShowGrid] = useState(true);

    // Reference photo (from previous photos)
    const [referencePhoto, setReferencePhoto] = useState(null);

    // Camera stream ref
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);

    // Previous photos (mock data)
    const previousPhotos = [
        { id: 1, url: "/static/img/ai-face-customer-1.png", date: "2025/01/15" },
        { id: 2, url: "/static/img/ai-face-model-1.png", date: "2025/01/10" },
        { id: 3, url: "/static/img/gemini-generated-image-2.png", date: "2025/01/05" },
    ];

    // Start camera when modal opens
    useEffect(() => {
        if (isOpen && screen === 'capture') {
            startCamera();
        }
        return () => {
            stopCamera();
        };
    }, [isOpen, screen]);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 1920 } }
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                streamRef.current = stream;
            }
        } catch (err) {
            console.error("Camera access denied:", err);
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
    };

    const capturePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
            setCapturedPhoto(dataUrl);
            setScreen('review');
            stopCamera();
        }
    };

    const retakePhoto = () => {
        setCapturedPhoto(null);
        setScreen('capture');
    };

    const completeCapture = () => {
        console.log("Photo saved:", capturedPhoto);
        onClose();
    };

    const selectReferencePhoto = (url) => {
        setReferencePhoto(url);
        setScreen('capture');
    };

    if (!isOpen) return null;

    // Grid labels - 9 rows (a-i), 7 columns (1-7)
    const rowLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    const colLabels = ['1', '2', '3', '4', '5', '6', '7'];

    // Photo selection screen
    if (screen === 'selectPhoto') {
        return ReactDOM.createPortal(
            <div className="fixed inset-0 z-[100] bg-black font-['Noto_Sans_JP'] flex flex-col">
                <header className="flex-shrink-0 h-16 bg-black/80 flex items-center justify-between px-4 z-10">
                    <button onClick={() => setScreen('capture')} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h1 className="text-lg font-normal text-white tracking-wide">写真を選択</h1>
                    <div className="w-10" />
                </header>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                        {/* Clear selection option */}
                        <button
                            onClick={() => selectReferencePhoto(null)}
                            className="aspect-square rounded-xl bg-white/10 border-2 border-dashed border-white/30 flex flex-col items-center justify-center gap-2 hover:bg-white/20 transition-all"
                        >
                            <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-xs text-white/50">なし</span>
                        </button>

                        {previousPhotos.map((photo) => (
                            <button
                                key={photo.id}
                                onClick={() => selectReferencePhoto(photo.url)}
                                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all hover:scale-105 ${referencePhoto === photo.url ? 'border-[#4aa9fc] shadow-[0_0_20px_rgba(74,169,252,0.5)]' : 'border-transparent'
                                    }`}
                            >
                                <img src={photo.url} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>,
            document.body
        );
    }

    // Review screen
    if (screen === 'review') {
        // Use captured photo or mock image for demo
        const displayPhoto = capturedPhoto || "/static/img/ai-face-customer-1.png";

        return ReactDOM.createPortal(
            <div className="fixed inset-0 z-[100] bg-black font-['Noto_Sans_JP'] flex flex-col">
                <header className="flex-shrink-0 h-16 bg-black/80 flex items-center justify-between px-4 z-10">
                    <h1 className="text-lg font-normal text-white tracking-wide ml-2">撮影確認</h1>
                    <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                <div className="flex-1 flex flex-col items-center justify-center px-6 gap-8">
                    <div className="relative w-full max-w-lg aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                        <img src={displayPhoto} alt="Captured" className="w-full h-full object-cover" />
                    </div>

                    {/* Action Buttons - below photo */}
                    <div className="flex justify-center gap-6">
                        <button
                            onClick={retakePhoto}
                            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-full transition-all flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            撮り直す
                        </button>
                        <button
                            onClick={completeCapture}
                            className="px-10 py-3.5 bg-[#4aa9fc] hover:bg-[#3a99ec] text-white text-sm font-bold rounded-full shadow-[0_4px_20px_rgba(74,169,252,0.4)] transition-all flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            完了
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    }

    // Capture screen
    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] bg-black font-['Noto_Sans_JP'] flex flex-col">
            <canvas ref={canvasRef} className="hidden" />

            {/* Camera View Area */}
            <div className="flex-1 relative overflow-hidden">
                {/* Video Feed */}
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Reference Photo (translucent behind grid) */}
                {referencePhoto && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <img
                            src={referencePhoto}
                            alt="Reference"
                            className="w-full h-full object-cover opacity-25"
                        />
                    </div>
                )}

                {/* Grid Overlay - Precise 7x9 grid */}
                {showGrid && (
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Grid Container - with margins for labels */}
                        <div className="absolute top-[3%] bottom-[5%] left-[8%] right-[3%]">
                            {/* Vertical lines (8 lines for 7 columns) */}
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={`v${i}`}
                                    className="absolute top-0 bottom-0 w-px bg-red-500"
                                    style={{ left: `${(i / 7) * 100}%` }}
                                />
                            ))}

                            {/* Horizontal lines (10 lines for 9 rows) */}
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={`h${i}`}
                                    className="absolute left-0 right-0 h-px bg-red-500"
                                    style={{ top: `${(i / 9) * 100}%` }}
                                />
                            ))}

                            {/* Blue center vertical line */}
                            <div
                                className="absolute top-0 bottom-0 w-px bg-[#4aa9fc]"
                                style={{ left: `${(3.5 / 7) * 100}%` }}
                            />

                            {/* Blue center horizontal line */}
                            <div
                                className="absolute left-0 right-0 h-px bg-[#4aa9fc] opacity-60"
                                style={{ top: `${(4.5 / 9) * 100}%` }}
                            />

                            {/* Row labels (a-i) - positioned at each row center */}
                            {rowLabels.map((label, i) => (
                                <span
                                    key={label}
                                    className="absolute text-red-400 text-sm font-medium"
                                    style={{
                                        left: '-20px',
                                        top: `${((i + 0.5) / 9) * 100}%`,
                                        transform: 'translateY(-50%)'
                                    }}
                                >
                                    {label}
                                </span>
                            ))}

                            {/* Column labels (1-7) - positioned at each column center */}
                            {colLabels.map((label, i) => (
                                <span
                                    key={label}
                                    className="absolute text-red-400 text-sm font-medium"
                                    style={{
                                        left: `${((i + 0.5) / 7) * 100}%`,
                                        bottom: '-22px',
                                        transform: 'translateX(-50%)'
                                    }}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Controls - moved higher */}
            <div className="flex-shrink-0 bg-black/80 backdrop-blur-sm py-4 px-6">
                <div className="flex items-center justify-between max-w-sm mx-auto">
                    {/* Grid Toggle - Stylish red grid icon (larger, with top line) */}
                    <button
                        onClick={() => setShowGrid(!showGrid)}
                        className={`w-16 h-16 rounded-full flex flex-col items-center justify-center transition-all relative ${showGrid ? 'bg-white/10' : 'bg-white/5'}`}
                    >
                        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none">
                            {/* Complete rectangle frame */}
                            <rect x="3" y="3" width="18" height="18" stroke={showGrid ? "#ff4444" : "#666"} strokeWidth="1.5" fill="none" rx="1" />
                            {/* Inner grid lines */}
                            <line x1="3" y1="9" x2="21" y2="9" stroke={showGrid ? "#ff4444" : "#666"} strokeWidth="1" />
                            <line x1="3" y1="15" x2="21" y2="15" stroke={showGrid ? "#ff4444" : "#666"} strokeWidth="1" />
                            <line x1="9" y1="3" x2="9" y2="21" stroke={showGrid ? "#ff4444" : "#666"} strokeWidth="1" />
                            <line x1="15" y1="3" x2="15" y2="21" stroke={showGrid ? "#ff4444" : "#666"} strokeWidth="1" />
                        </svg>
                        <span className="text-[10px] text-white/50 mt-0.5">ガイド</span>
                    </button>

                    {/* Capture Button - larger inner circle */}
                    <button
                        onClick={capturePhoto}
                        className="w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform active:scale-95"
                    >
                        <div className="w-[66px] h-[66px] rounded-full border-[3px] border-neutral-300" />
                    </button>

                    {/* Reference Photo Selector */}
                    <button
                        onClick={() => setScreen('selectPhoto')}
                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${referencePhoto ? 'border-[#4aa9fc]' : 'border-white/20'}`}
                    >
                        {referencePhoto ? (
                            <img src={referencePhoto} alt="Reference" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-white/10 flex items-center justify-center">
                                <svg className="w-7 h-7 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* Close Button (top right) */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/70 transition-all z-20"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>,
        document.body
    );
};
