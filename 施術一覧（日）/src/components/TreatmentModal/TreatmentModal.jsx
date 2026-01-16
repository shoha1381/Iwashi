import React, { useState } from "react";
import ReactDOM from "react-dom";

// CSS filters for colors (Matched with NavigationSection)
const BLUE_DARK = 'brightness(0) saturate(100%) invert(44%) sepia(83%) saturate(1352%) hue-rotate(187deg) brightness(102%) contrast(101%)';
const GRAY_DARK = 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';
const GRAY_LIGHT = 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';
const WHITE = 'brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)';

export const TreatmentModal = ({ isOpen, onClose, customerData }) => {
    const [todos, setTodos] = useState([
        { id: 1, text: "頻度のグラフを使った説明", checked: true },
        { id: 2, text: "ビフォー写真撮影", checked: false },
        { id: 3, text: "効果イメージを使った説明", checked: false },
        { id: 4, text: "施術料金支払い", checked: false },
    ]);
    const [activeTab, setActiveTab] = useState("overview");
    const [session3, setSession3] = useState("選択");
    const [session4, setSession4] = useState("選択");

    if (!isOpen) return null;

    const data = customerData || {
        name: "三浦 梨花",
        gender: "女",
        age: "25歳",
        birthdate: "2000/9/23",
        photo: "/img/image-2.png",
    };

    // Patient Info - Layout matches new image (clean columns)
    const patientInfo = {
        name: data.name,
        gender: data.gender || "女",
        age: data.age || "25歳",
        birthdate: data.birthdate || "2000/9/23",
        profileImage: data.photo,
        leftColumn: [
            { label: "住所", value: "東京都台東区上野公園 9-99" },
            { label: "最寄り駅", value: "上野駅" },
            { label: "通いやすい時間帯", value: "日,月 15:00~" },
            { label: "仕事", value: "会社員" },
            { label: "休み", value: "家でまったり" },
        ],
        rightColumn: [
            { label: "習慣", value: "" },
            { label: "出身", value: "栃木" },
            { label: "きっかけ", value: "Instagram" },
            { label: "趣味", value: "映画" },
            { label: "習い事", value: "なし" },
        ],
    };

    // Appointment Data - Array for row mapping
    const appointmentRows = [
        { label: "目標", content: "1月の結婚式に向けて、右のエラはりを改善する" },
        { label: "注意事項", content: "顎・フェイスライン整形あり" },
        { label: "注意ワード", content: "太った/痩せた、肌の色、整形跡" },
    ];

    const handleTodoToggle = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo));
    };

    const adviceItems = [
        "初回から5回分まとめてスタートさせる流れを徹底しましょう。",
        "5回目の来院時に次の5回分を必ず提案・決済してください。",
        "施術前に前払いと次回予約確定を行い、来院間隔を空けないようにしましょう。",
        "今の時期は短い間隔で通っていただくと、定着が良くなることを伝えましょう。",
    ];

    const tabs = [
        {
            id: "overview",
            label: "概要",
            icon: (isActive) => (
                <div className="w-6 h-6 relative flex items-center justify-center">
                    <img
                        className="absolute w-[83%] h-[83%] top-[8%] left-[8%]"
                        alt=""
                        src="/img/icon-treatment-overview.svg"
                        style={{ filter: isActive ? WHITE : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
        {
            id: "concerns",
            label: "お悩み",
            icon: (isActive) => (
                <div className="w-6 h-6 relative flex items-center justify-center">
                    <img
                        className="w-full h-full"
                        alt=""
                        src="/img/icon-treatment-concerns.svg"
                        style={{ filter: isActive ? WHITE : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
        {
            id: "questionnaire",
            label: "問診票",
            icon: (isActive) => (
                <div className="w-6 h-6 relative flex items-center justify-center">
                    <img
                        className="w-full h-full"
                        alt=""
                        src="/img/icon-park-solid-check-one.svg"
                        style={{ filter: isActive ? WHITE : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
    ];

    const Card = ({ children, className = "" }) => (
        <article className={`bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${className}`}>
            {children}
        </article>
    );

    const Header = ({ icon, title, className = "" }) => (
        <header className={`px-4 py-3 flex items-center gap-2.5 border-b border-neutral-100 ${className}`}>
            {icon && <img src={icon} className="w-4 h-4 object-contain opacity-80" alt="" />}
            <h2 className="text-sm font-medium text-neutral-800 tracking-wider">{title}</h2>
        </header>
    );

    const getSelectBgColor = (value) => {
        if (value === "継続") return "bg-green-50 text-green-700";
        if (value === "終了") return "bg-red-50 text-red-700";
        return "bg-neutral-100 text-neutral-600";
    };

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] bg-white flex flex-col font-['Noto_Sans_JP']">
            {/* Header - Preserved */}
            <header className="flex-shrink-0 h-16 bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-between px-4 z-20">
                <h1 className="text-lg font-normal text-neutral-700 tracking-wide ml-2">
                    {data.name}
                    <span className="text-neutral-500 text-sm font-normal ml-4">
                        ミウラリカ 様
                    </span>
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
            <div className="flex-1 bg-white px-5 py-4 pb-28 overflow-hidden flex flex-col">

                {/* --- Top Section: Matches Reference Image Step 4566 --- */}
                <div className="flex flex-col gap-5 mb-5 border-b border-neutral-100 pb-5">

                    {/* 1. Patient Info Row (Image | Name | Info Cols) */}
                    <div className="flex items-start gap-8 px-2">
                        {/* Image */}
                        <div className="w-[100px] h-[100px] flex-shrink-0">
                            <img className="w-full h-full object-cover rounded shadow-sm" alt="profile" src={data.photo} />
                        </div>

                        {/* Info Container */}
                        <div className="flex-1 flex gap-10 pt-1">
                            {/* Name Block */}
                            <div className="w-[180px] flex-shrink-0">
                                <h1 className="text-2xl font-medium text-neutral-900 mb-3 tracking-wide">{patientInfo.name}</h1>
                                <div className="text-[13px] text-neutral-400 font-normal tracking-wide">
                                    {patientInfo.gender}・{patientInfo.age} <span className="ml-1">（{patientInfo.birthdate}）</span>
                                </div>
                            </div>

                            {/* Details Cols */}
                            <div className="flex-1 flex gap-12">
                                <div className="space-y-1">
                                    {patientInfo.leftColumn.map((item, i) => (
                                        <div key={i} className="flex text-[11px] leading-relaxed">
                                            <span className="w-[90px] text-neutral-800 font-medium">{item.label}</span>
                                            <span className="w-3 text-neutral-800 font-medium text-center">:</span>
                                            <span className="text-neutral-800 font-medium">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-1">
                                    {patientInfo.rightColumn.map((item, i) => (
                                        <div key={i} className="flex text-[11px] leading-relaxed">
                                            <span className="w-[70px] text-neutral-800 font-medium">{item.label}</span>
                                            <span className="w-3 text-neutral-800 font-medium text-center">:</span>
                                            <span className="text-neutral-800 font-medium">{item.value || ""}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-neutral-100" />

                    {/* 2. Goals / Notes Row (Clean Text) */}
                    <div className="px-2 space-y-3">
                        {appointmentRows.map((row, index) => (
                            <div key={index} className="flex text-[12px] leading-relaxed items-start">
                                <span className="w-[120px] flex-shrink-0 font-medium text-neutral-900 tracking-wide">{row.label}</span>
                                <span className="flex-1 font-medium text-neutral-800 tracking-wide">{row.content}</span>
                            </div>
                        ))}
                    </div>

                </div>

                {/* --- Bottom Grid (ToDo, Advice, etc.) - Preserved Exactly --- */}
                <div className="flex gap-4 flex-1 min-h-0">
                    {/* Sidebar */}
                    <div className="w-[60px] flex-shrink-0 pt-2 text-center relative">
                        <div className="absolute top-0 right-0 h-full w-px bg-neutral-100" />
                        <div className="space-y-6">
                            <div className="relative">
                                <span className="block text-xl text-neutral-900 font-medium tracking-wide">SP</span>
                                <span className="text-[10px] text-neutral-400 font-medium">1回目</span>
                            </div>
                            <div className="w-full border-t border-neutral-100" />
                            <div>
                                <span className="block text-xl text-neutral-900 font-medium tracking-wide">10/6</span>
                                <span className="text-[10px] text-neutral-400 font-medium">月</span>
                            </div>
                            <div className="w-full border-t border-neutral-100" />
                            <div className="text-sm text-neutral-900 font-medium tracking-wide">13:00〜</div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-3 h-full overflow-hidden">
                        {/* Left Col */}
                        <div className="flex flex-col gap-3 h-full">
                            {/* ToDo */}
                            <Card className="flex-[0.8] flex flex-col min-h-0">
                                <Header icon="/img/vector-18.svg" title="ToDo" />
                                <div className="p-2 space-y-1.5 overflow-y-auto flex-1">
                                    {todos.map((todo) => (
                                        <label key={todo.id} className={`flex items-center gap-2 w-full p-2 rounded-lg border transition-all cursor-pointer ${todo.checked ? 'bg-white border-neutral-200' : 'bg-white border-neutral-200 shadow-sm'}`}>
                                            <div className="relative w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                <input type="checkbox" checked={todo.checked} onChange={() => handleTodoToggle(todo.id)} className="peer sr-only" />
                                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${todo.checked ? 'bg-[#4aa9fc] border-[#4aa9fc]' : 'bg-white border-neutral-300'}`}>
                                                    <svg className={`w-3.5 h-3.5 text-white ${todo.checked ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="text-[11px] font-medium text-neutral-800 line-clamp-1">{todo.text}</span>
                                        </label>
                                    ))}
                                </div>
                            </Card>
                            {/* Advice */}
                            <Card className="flex-1 flex flex-col min-h-0">
                                <Header icon="/img/vector-19.svg" title="アドバイス" />
                                <div className="p-3 overflow-y-auto flex-1">
                                    <ul className="space-y-1.5">
                                        {adviceItems.map((item, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="text-neutral-800 mt-1.5 w-1 h-1 bg-neutral-800 rounded-full flex-shrink-0" />
                                                <span className="text-[11px] font-medium leading-5 text-neutral-800">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </div>

                        {/* Right Col */}
                        <div className="flex flex-col gap-3 h-full">
                            {/* Continuity */}
                            <Card className="h-[90px] flex-shrink-0">
                                <Header icon="/img/mask-group.png" title="継続の確認" />
                                <div className="px-2 h-[45px] flex items-center">
                                    <div className="flex-1 flex items-center justify-center gap-2">
                                        <span className="text-[11px] font-bold text-neutral-700">3回目</span>
                                        <div className={`rounded-md px-2 py-1 w-[80px] relative flex items-center transition-colors ${getSelectBgColor(session3)}`}>
                                            <select value={session3} onChange={(e) => setSession3(e.target.value)} className="bg-transparent text-[11px] w-full outline-none font-bold cursor-pointer appearance-none pl-1 z-10">
                                                <option value="選択">選択</option>
                                                <option value="継続">継続</option>
                                                <option value="終了">終了</option>
                                            </select>
                                            <img src="/img/chevron-down-1.svg" className="w-2.5 h-2.5 absolute right-2 opacity-50" alt="" />
                                        </div>
                                    </div>
                                    <div className="w-px h-6 bg-neutral-100" />
                                    <div className="flex-1 flex items-center justify-center gap-2">
                                        <span className="text-[11px] font-bold text-neutral-700">4回目</span>
                                        <div className={`rounded-md px-2 py-1 w-[80px] relative flex items-center transition-colors ${getSelectBgColor(session4)}`}>
                                            <select value={session4} onChange={(e) => setSession4(e.target.value)} className="bg-transparent text-[11px] w-full outline-none font-bold cursor-pointer appearance-none pl-1 z-10">
                                                <option value="選択">選択</option>
                                                <option value="継続">継続</option>
                                                <option value="終了">終了</option>
                                            </select>
                                            <img src="/img/chevron-down-1.svg" className="w-2.5 h-2.5 absolute right-2 opacity-50" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Previous Memo */}
                            <Card className="flex-1 min-h-0 flex flex-col">
                                <Header icon="/img/mask-group.png" title="前回メモ" />
                                <div className="flex-1 relative min-h-0">
                                    <div className="absolute top-0 bottom-0 left-[70px] w-px bg-neutral-100" />
                                    <div className="absolute top-[40px] left-0 right-0 h-px bg-neutral-100" />
                                    <div className="absolute top-0 left-0 w-[70px] h-[40px] flex items-center justify-center text-[10px] text-neutral-400 font-medium">施術部位</div>
                                    <div className="absolute top-[40px] left-0 w-[70px] h-full flex pt-4 justify-center text-[10px] text-neutral-400 font-medium">備考</div>

                                    <div className="absolute top-0 left-[71px] right-0 h-[40px] p-2 text-[11px] text-neutral-700 font-medium"></div>
                                    <div className="absolute top-[41px] left-[71px] right-0 bottom-0 p-2 text-[11px] text-neutral-700 leading-relaxed overflow-y-auto font-medium"></div>
                                </div>
                            </Card>

                            {/* Add Memo */}
                            <div className="flex justify-center flex-shrink-0">
                                <button className="h-[45px] w-[260px] bg-[#4aa9fc] hover:bg-[#3a99ec] active:scale-[0.99] transition-all rounded-full text-white flex items-center justify-center gap-3 shadow-md hover:shadow-lg">
                                    <img src="/img/icon-pen-white.svg" className="w-5 h-5 object-contain" alt="" />
                                    <span className="text-[14px] font-bold tracking-wide">今日のメモを追加</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-neutral-100" />
            </div>

            {/* Footer - Preserved */}
            <div className="fixed bottom-8 left-0 w-full z-[120] pointer-events-none">
                <div className="relative w-full flex justify-center items-center h-[72px]">
                    <div className="bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-2 py-1.5 flex items-center gap-1 pointer-events-auto">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex flex-col items-center justify-center rounded-full transition-colors duration-200 w-[90px] h-[60px] ${isActive ? "bg-[#4aa9fc] shadow-md" : "hover:bg-neutral-50"
                                        }`}
                                >
                                    {tab.icon(isActive)}
                                    <span
                                        className={`text-[10px] font-bold tracking-wide mt-1 ${isActive ? "text-white" : "text-[#999999]"
                                            }`}
                                    >
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                    <div className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-auto">
                        <button className="w-[80px] h-[60px] bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-0.5 hover:bg-neutral-50 transition-all">
                            <div className="w-5 h-5 relative flex items-center justify-center">
                                <img
                                    className="w-full h-full object-contain"
                                    alt=""
                                    src="/img/icon-three-dots.svg"
                                    style={{ filter: GRAY_DARK }}
                                />
                            </div>
                            <span className="text-[9px] font-bold text-[#999999] tracking-wide">機能</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
