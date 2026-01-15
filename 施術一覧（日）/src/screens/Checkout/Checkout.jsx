import { Link } from "react-router-dom";
import { useState } from "react";
import { NavigationSection } from "../../components/NavigationSection";
import { HeaderSection } from "../../components/HeaderSection";

// Icons
const CloseIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const Checkout = () => {
    const [surveyDiscount, setSurveyDiscount] = useState(false);

    const basePrice = 3300;
    const discountAmount = surveyDiscount ? -300 : 0;
    const total = basePrice + discountAmount;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-neutral-50 to-blue-100 flex font-sans overflow-x-hidden">
            {/* Side Navigation */}
            <NavigationSection />

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:mr-16 pb-20 lg:pb-0 w-full h-screen overflow-auto">
                {/* Unified Header */}
                <HeaderSection selectedStore="銀座店" />

                {/* Modal Container */}
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-neutral-200/50 overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200/50 bg-white/80 backdrop-blur-sm">
                            <h1 className="text-xl font-bold text-neutral-800">お会計</h1>
                            <Link to="/" className="p-2 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-400 hover:text-neutral-600">
                                <CloseIcon />
                            </Link>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* 施術料金 Section */}
                            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-100">
                                <h2 className="text-lg font-bold text-neutral-800 mb-4">施術料金</h2>
                                <hr className="border-neutral-200 mb-4" />
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-neutral-700">
                                        小顔矯正 / 美顔マッサージ＋首肩矯正（初回）
                                    </span>
                                    <span className="text-sm font-medium text-neutral-800">
                                        {basePrice.toLocaleString()}円
                                    </span>
                                </div>
                            </div>

                            {/* オプション Section */}
                            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-100">
                                <h2 className="text-lg font-bold text-neutral-800 mb-4">オプション</h2>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => setSurveyDiscount(!surveyDiscount)}
                                            className={`relative w-12 h-7 rounded-full transition-colors shadow-inner ${surveyDiscount ? 'bg-blue-500' : 'bg-neutral-300'
                                                }`}
                                        >
                                            <span
                                                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all ${surveyDiscount ? 'right-1' : 'left-1'
                                                    }`}
                                            />
                                        </button>
                                        <span className="text-sm text-neutral-700">アンケートに回答</span>
                                    </div>
                                    <span className="text-sm font-medium text-neutral-500">
                                        -300円
                                    </span>
                                </div>
                            </div>

                            {/* 総額 Section */}
                            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-100">
                                <h2 className="text-lg font-bold text-neutral-800 mb-4">総額</h2>
                                <hr className="border-neutral-200 mb-4" />
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-neutral-800">
                                        {total.toLocaleString()}円
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="px-6 pb-6 flex gap-3">
                            <Link
                                to="/"
                                className="flex-1 py-3 text-center bg-neutral-200 text-neutral-700 text-sm font-medium rounded-full hover:bg-neutral-300 transition-colors"
                            >
                                キャンセル
                            </Link>
                            <button className="flex-1 py-3 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors shadow-sm">
                                支払い確定
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
