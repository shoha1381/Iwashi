import React, { useState } from "react";
import ReactDOM from "react-dom";

export const CheckoutScreen = ({ isOpen, onClose, customerName, treatmentData }) => {
    const [step, setStep] = useState("summary"); // 'summary', 'payment', 'completed'
    const [surveyToggle, setSurveyToggle] = useState(false);
    const [paymentValues, setPaymentValues] = useState({
        cash: "",
        card: "",
        point: "",
        groupon: "",
        luxa: "",
    });

    if (!isOpen) return null;

    // Default treatment items if not provided
    const treatmentItems = treatmentData?.items || [
        {
            id: 1,
            name: "小顔矯正 / 美顔マッサージ＋首肩矯正（初回）",
            price: 3300,
        },
    ];

    // Option items
    const optionItems = [
        {
            id: 1,
            name: "アンケートに回答",
            discount: 300,
            enabled: surveyToggle,
        },
    ];

    // Calculate total
    const treatmentTotal = treatmentItems.reduce((sum, item) => sum + item.price, 0);
    const discountTotal = surveyToggle ? optionItems.reduce((sum, opt) => sum + opt.discount, 0) : 0;
    const totalAmount = treatmentTotal - discountTotal;

    // Payment methods
    const paymentMethods = [
        { id: "cash", label: "現金", name: "cash" },
        { id: "card", label: "カード", name: "card" },
        { id: "point", label: "ポイント", name: "point" },
        { id: "groupon", label: "グルーポン", name: "groupon" },
        { id: "luxa", label: "ルクサ", name: "luxa" },
    ];

    const handlePaymentInputChange = (name, value) => {
        setPaymentValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Glassmorphism card style
    const cardStyle = "bg-white/70 rounded-2xl border border-white/20 shadow-[0px_0px_18px_rgba(0,0,0,0.07)] backdrop-blur-xl transition-all duration-300";
    const innerCardStyle = "bg-white/70 rounded-xl border border-white/20 shadow-[0px_0px_8px_rgba(0,0,0,0.05)] backdrop-blur-lg flex items-center";

    // Standardized Button style from Overview screen
    const iconButtonClass = "w-11 h-11 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-600 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] active:scale-90 transition-all";

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[200] bg-neutral-100 font-['Noto_Sans_JP'] flex flex-col animate-in fade-in duration-300">
            {/* Header */}
            <header className="flex-shrink-0 h-16 bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-between px-4 z-10">
                {/* Title */}
                <h1 className="text-lg font-normal text-neutral-700 tracking-wide ml-2">
                    お会計
                </h1>

                {/* Right Side Actions */}
                <div className="flex gap-2 items-center">
                    {/* Back Button - Only shown when on payment step */}
                    {step === "payment" && (
                        <button
                            onClick={() => setStep("summary")}
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all"
                            aria-label="戻る"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Close Button - Overview style */}
                    <button
                        onClick={() => {
                            setStep("summary"); // Reset step when closing
                            onClose();
                        }}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all"
                        aria-label="閉じる"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto pt-10 pb-20 px-6 no-scrollbar">
                <div className="max-w-xl mx-auto flex flex-col gap-6">

                    {step === "summary" && (
                        <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300">
                            {/* Section: 施術料金 */}
                            <section className={`${cardStyle} p-6`}>
                                <h2 className="text-xl font-medium text-neutral-800 tracking-wide mb-4">
                                    施術料金
                                </h2>
                                <div className="border-t border-neutral-200/60 pt-4 flex flex-col gap-3">
                                    {treatmentItems.map((item) => (
                                        <div key={item.id} className="flex gap-3">
                                            <div className={`${innerCardStyle} flex-1 px-5 py-4`}>
                                                <span className="text-[15px] font-medium text-neutral-800 tracking-wide">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className={`${innerCardStyle} w-32 px-4 py-4 flex items-center justify-end`}>
                                                <span className="text-[15px] font-medium text-neutral-800 tracking-wide">
                                                    {item.price.toLocaleString()}円
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section: オプション */}
                            <section className={`${cardStyle} p-6`}>
                                <h2 className="text-xl font-medium text-neutral-800 tracking-wide mb-4">
                                    オプション
                                </h2>
                                <div className="border-t border-neutral-200/60 pt-4 flex flex-col gap-3">
                                    {optionItems.map((option) => (
                                        <div key={option.id} className="flex gap-3 items-center">
                                            {/* Toggle Switch */}
                                            <label className="relative w-[72px] h-[36px] cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={surveyToggle}
                                                    onChange={(e) => setSurveyToggle(e.target.checked)}
                                                    aria-label={option.name}
                                                />
                                                <div className="absolute inset-0 bg-neutral-200 rounded-full peer-checked:bg-[#4aa9fc] transition-colors duration-200" />
                                                <div className={`absolute top-[3px] left-[3px] w-[30px] h-[30px] bg-white rounded-full shadow-md transition-transform duration-200 ${surveyToggle ? 'translate-x-[36px]' : ''}`} />
                                            </label>

                                            {/* Option Name */}
                                            <div className={`${innerCardStyle} flex-1 px-5 py-4`}>
                                                <span className="text-[15px] font-medium text-neutral-800 tracking-wide">
                                                    {option.name}
                                                </span>
                                            </div>

                                            {/* Discount Amount */}
                                            <div className={`${innerCardStyle} w-32 px-4 py-4 flex items-center justify-end`}>
                                                <span className={`text-[15px] font-medium tracking-wide ${surveyToggle ? 'text-[#4aa9fc]' : 'text-neutral-400'}`}>
                                                    -{option.discount.toLocaleString()}円
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section: 総額 */}
                            <section className={`${cardStyle} p-6`}>
                                <h2 className="text-xl font-medium text-neutral-800 tracking-wide mb-4">
                                    総額
                                </h2>
                                <div className="border-t border-neutral-200/60 pt-6 flex items-center justify-center">
                                    <span className={`text-4xl font-medium tracking-wider ${discountTotal > 0 ? 'text-[#4aa9fc]' : 'text-neutral-800'}`}>
                                        {totalAmount.toLocaleString()}円
                                    </span>
                                </div>
                            </section>

                            {/* Payment Button - Moved inline */}
                            <div className="mt-12 mb-12 flex justify-center">
                                <button
                                    className="w-80 h-14 bg-[#4aa9fc] hover:bg-[#3d96e3] active:scale-[0.98] rounded-full shadow-[0_4px_12px_rgba(74,169,252,0.2)] transition-all flex items-center justify-center group"
                                    onClick={() => setStep("payment")}
                                >
                                    <span className="text-white text-lg font-bold tracking-wide">
                                        {totalAmount.toLocaleString()}円お支払いへ
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === "payment" && (
                        <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300">
                            <form className={`${cardStyle} p-8 flex flex-col gap-4`}>
                                {paymentMethods.map((method, index) => (
                                    <div key={method.id} className="flex flex-col gap-1">
                                        <div className="flex items-center gap-6 py-4">
                                            <label
                                                htmlFor={method.id}
                                                className="w-28 text-xl font-medium text-neutral-800 tracking-wide whitespace-nowrap"
                                            >
                                                {method.label}
                                            </label>
                                            <div className={`${innerCardStyle} flex-1 h-[60px] flex items-center px-6 shadow-inner bg-neutral-50/50`}>
                                                <input
                                                    type="text"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    name={method.name}
                                                    id={method.id}
                                                    value={paymentValues[method.name]}
                                                    onChange={(e) => handlePaymentInputChange(method.name, e.target.value)}
                                                    placeholder="数字（半角）を入力してください"
                                                    className="w-full bg-transparent outline-none text-lg text-neutral-700 placeholder:text-neutral-300 tracking-wider text-center"
                                                />
                                            </div>
                                        </div>
                                        {index < paymentMethods.length - 1 && (
                                            <div className="w-full h-px bg-neutral-100" />
                                        )}
                                    </div>
                                ))}
                            </form>

                            {/* Payment Enter Button - Moved inline */}
                            <div className="mt-8 mb-12 flex justify-center">
                                <button
                                    className="w-80 h-14 bg-[#4aa9fc] hover:bg-[#3d96e3] active:scale-[0.98] rounded-full shadow-[0_4px_12px_rgba(74,169,252,0.2)] transition-all flex items-center justify-center"
                                    onClick={() => setStep("completed")}
                                >
                                    <span className="text-white text-lg font-bold tracking-wide">
                                        {totalAmount.toLocaleString()}円入金する
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === "completed" && (
                        <div className="flex flex-col items-center justify-center pt-8 pb-12 animate-in fade-in zoom-in duration-500">
                            <h1 className="text-[38px] font-medium text-neutral-800 tracking-[2px] mb-8">
                                支払い完了
                            </h1>
                            <div className="w-[450px] h-[450px] relative mb-12">
                                <img
                                    src="/img/checkout-success.png"
                                    alt="Payment Completed"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Completed Button - inline */}
                            <div className="w-full flex justify-center">
                                <button
                                    className="w-80 h-14 bg-[#999999] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all flex items-center justify-center cursor-default"
                                >
                                    <span className="text-white text-lg font-bold tracking-wide">
                                        {totalAmount.toLocaleString()}円支払い済み
                                    </span>
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* Animation Style */}
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>,
        document.body
    );
};
