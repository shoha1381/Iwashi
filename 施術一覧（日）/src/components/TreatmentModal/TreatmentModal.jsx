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
        ],
        rightColumn: [
            { label: "休み", value: "家でまったり" },
            { label: "出身", value: "栃木" },
            { label: "趣味", value: "映画" },
            { label: "習い事", value: "なし" },
        ],
    };

    // Goals/Notes as table rows
    const goalsRows = [
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
                        className="w-5 h-5"
                        alt=""
                        src="/img/questionnaire-icon.png"
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
        if (value === "継続") return "bg-green-50 text-green-700 border-green-200";
        if (value === "終了") return "bg-red-50 text-red-700 border-red-200";
        return "bg-neutral-50 text-neutral-600 border-neutral-200";
    };

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] bg-white flex flex-col font-['Noto_Sans_JP']">
            {/* Header */}
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
            <div className="flex-1 bg-white px-5 py-4 pb-28 overflow-hidden flex flex-col gap-4">

                {/* --- Top Section: [Photo] [Name & Basic Info] [Framed Info Box] --- */}
                <div className="flex gap-8 items-start">
                    {/* Photo */}
                    <div className="w-[100px] h-[100px] flex-shrink-0">
                        <img className="w-full h-full object-cover rounded-lg shadow-sm border border-neutral-100" alt="profile" src={data.photo} />
                    </div>

                    {/* Name & Basic Info Group */}
                    <div className="flex flex-col justify-center h-[100px] flex-shrink-0 min-w-[180px]">
                        {/* Name - Normal weight (thin) */}
                        <h2 className="text-2xl font-normal text-neutral-800 mb-1.5 tracking-wide">{patientInfo.name}</h2>
                        {/* Basic Info - Gender/Age/Birthdate */}
                        <div className="text-sm text-neutral-500 font-normal tracking-wide">
                            {patientInfo.gender}・{patientInfo.age}（{patientInfo.birthdate}）
                        </div>
                    </div>

                    {/* Framed Info Box - Even wider label columns */}
                    <div className="flex-1 min-w-0 h-[100px]">
                        <div className="h-full border border-neutral-200/60 rounded overflow-hidden bg-white shadow-sm flex flex-col justify-center">
                            {/* Compressed Table Layout - 4 Rows for 8 items */}
                            <div className="flex h-full">
                                {/* Left Col - wider label */}
                                <div className="flex-1 border-r border-neutral-200/60 h-full">
                                    {patientInfo.leftColumn.map((item, i) => (
                                        <div key={i} className="flex border-b border-neutral-200/60 last:border-b-0 h-[25%] items-center px-2">
                                            <div className="w-[110px] bg-neutral-50 text-[10px] text-neutral-600 font-medium h-full flex items-center -ml-2 pl-3 border-r border-neutral-200/60 mr-2 whitespace-nowrap">{item.label}</div>
                                            <div className="text-[10px] text-neutral-700 font-medium truncate flex-1">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Right Col */}
                                <div className="flex-1 h-full">
                                    {patientInfo.rightColumn.map((item, i) => (
                                        <div key={i} className="flex border-b border-neutral-200/60 last:border-b-0 h-[25%] items-center px-2">
                                            <div className="w-[60px] bg-neutral-50 text-[10px] text-neutral-600 font-medium truncate h-full flex items-center -ml-2 pl-3 border-r border-neutral-200/60 mr-2">{item.label}</div>
                                            <div className="text-[10px] text-neutral-700 font-medium truncate flex-1">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Middle Section: Goals/Notes as Connected Table --- */}
                <div className="border border-neutral-200/60 rounded overflow-hidden bg-white shadow-sm">
                    {goalsRows.map((item, index) => (
                        <div key={index} className="flex border-b border-neutral-200/60 last:border-b-0 h-[32px] items-center">
                            <div className="w-[100px] bg-neutral-50 text-[11px] text-neutral-600 font-medium h-full flex items-center pl-3 border-r border-neutral-200/60">{item.label}</div>
                            <div className="text-[11px] text-neutral-700 font-medium flex-1 px-3 truncate">{item.content}</div>
                        </div>
                    ))}
                </div>

                <div className="w-full h-px bg-neutral-100" />

                {/* --- Bottom Grid --- */}
                <div className="flex gap-4 flex-1 min-h-0">
                    {/* Sidebar - Refined tone matching */}
                    <div className="w-[70px] flex-shrink-0 pt-3 text-center relative">
                        <div className="absolute top-0 right-0 h-full w-px bg-neutral-100" />
                        <div className="space-y-4">
                            {/* Course & Visit */}
                            <div className="flex flex-col gap-1">
                                <span className="text-sm font-medium text-neutral-700 tracking-wide">SP</span>
                                <span className="text-[11px] text-neutral-500 font-normal">1回目</span>
                            </div>
                            <div className="w-full border-t border-neutral-100" />
                            {/* Date */}
                            <div className="flex flex-col gap-1">
                                <span className="text-sm font-medium text-neutral-700 tracking-wide">10/6</span>
                                <span className="text-[11px] text-neutral-500 font-normal">月</span>
                            </div>
                            <div className="w-full border-t border-neutral-100" />
                            {/* Time */}
                            <div>
                                <span className="text-[12px] font-medium text-neutral-700 tracking-wide">13:00〜</span>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-3 h-full overflow-hidden">
                        {/* Left Col */}
                        <div className="flex flex-col gap-3 h-full">
                            {/* ToDo - Taller to fit 4 items comfortably */}
                            <Card className="h-[240px] flex flex-col">
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
                            {/* Advice - Bolder text, positioned more to the right */}
                            <Card className="flex-1 flex flex-col min-h-0">
                                <Header icon="/img/vector-19.svg" title="アドバイス" />
                                <div className="p-4 pl-6 overflow-y-auto flex-1">
                                    <ul className="space-y-2.5">
                                        {adviceItems.map((item, i) => (
                                            <li key={i} className="flex gap-2.5">
                                                <span className="text-neutral-700 mt-2 w-1 h-1 bg-neutral-700 rounded-full flex-shrink-0" />
                                                <span className="text-[12px] font-medium leading-relaxed text-neutral-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </div>

                        {/* Right Col */}
                        <div className="flex flex-col gap-3 h-full">
                            {/* Continuity - Better element spacing, bolder labels */}
                            <Card className="flex-shrink-0">
                                <Header icon="/img/mask-group.png" title="継続の確認" />
                                <div className="px-4 py-4 flex items-center justify-evenly">
                                    {/* 3回目 */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-[11px] font-medium text-neutral-700 tracking-wide whitespace-nowrap">3回目</span>
                                        <div className={`rounded-lg px-3 py-1.5 min-w-[90px] relative flex items-center justify-center transition-colors border ${getSelectBgColor(session3)}`}>
                                            <select value={session3} onChange={(e) => setSession3(e.target.value)} className="bg-transparent text-[11px] w-full outline-none font-medium cursor-pointer appearance-none text-center z-10">
                                                <option value="選択">選択</option>
                                                <option value="継続">継続</option>
                                                <option value="終了">終了</option>
                                            </select>
                                            <img src="/img/chevron-down-1.svg" className="w-2.5 h-2.5 absolute right-2.5 opacity-60" alt="" />
                                        </div>
                                    </div>
                                    {/* 4回目 */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-[11px] font-medium text-neutral-700 tracking-wide whitespace-nowrap">4回目</span>
                                        <div className={`rounded-lg px-3 py-1.5 min-w-[90px] relative flex items-center justify-center transition-colors border ${getSelectBgColor(session4)}`}>
                                            <select value={session4} onChange={(e) => setSession4(e.target.value)} className="bg-transparent text-[11px] w-full outline-none font-medium cursor-pointer appearance-none text-center z-10">
                                                <option value="選択">選択</option>
                                                <option value="継続">継続</option>
                                                <option value="終了">終了</option>
                                            </select>
                                            <img src="/img/chevron-down-1.svg" className="w-2.5 h-2.5 absolute right-2.5 opacity-60" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Previous Memo - Center aligned labels, 備考 vertically centered */}
                            <Card className="flex-1 min-h-0 flex flex-col">
                                <Header icon="/img/mask-group.png" title="前回メモ" />
                                <div className="flex-1 relative min-h-0">
                                    <div className="absolute top-0 bottom-0 left-[80px] w-px bg-neutral-100" />
                                    <div className="absolute top-[40px] left-0 right-0 h-px bg-neutral-100" />
                                    {/* 施術部位 - centered */}
                                    <div className="absolute top-0 left-0 w-[80px] h-[40px] flex items-center justify-center text-[11px] text-neutral-800 font-medium tracking-wide">施術部位</div>
                                    {/* 備考 - vertically centered in remaining space */}
                                    <div className="absolute top-[40px] left-0 w-[80px] bottom-0 flex items-center justify-center text-[11px] text-neutral-800 font-medium tracking-wide">備考</div>

                                    <div className="absolute top-0 left-[81px] right-0 h-[40px] p-3 text-[11px] text-neutral-700 font-normal"></div>
                                    <div className="absolute top-[41px] left-[81px] right-0 bottom-0 p-3 text-[11px] text-neutral-700 leading-relaxed overflow-y-auto font-normal"></div>
                                </div>
                            </Card>

                            {/* Add Memo */}
                            <div className="flex justify-center flex-shrink-0">
                                <button className="h-[42px] w-[200px] bg-[#4aa9fc] hover:bg-[#3a99ec] active:scale-[0.99] transition-all rounded-full text-white flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg">
                                    <img src="/img/icon-pen-white.svg" className="w-4 h-4 object-contain" alt="" />
                                    <span className="text-[13px] font-medium tracking-wide">今日のメモを追加</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-neutral-100" />
            </div>

            {/* Footer */}
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
