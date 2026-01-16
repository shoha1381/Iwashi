import React, { useState } from "react";
import ReactDOM from "react-dom";

// CSS filters for colors (Matched with NavigationSection)
const BLUE_DARK = 'brightness(0) saturate(100%) invert(44%) sepia(83%) saturate(1352%) hue-rotate(187deg) brightness(102%) contrast(101%)';
const BLUE_LIGHT = 'brightness(0) saturate(100%) invert(65%) sepia(50%) saturate(500%) hue-rotate(187deg) brightness(110%) contrast(95%)';
const GRAY_DARK = 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';
const GRAY_LIGHT = 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';

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

    const appointmentData = [
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

    // Tab icons using same structure as NavigationSection
    const tabs = [
        {
            id: "overview",
            label: "概要",
            icon: (isActive) => (
                <div className="w-7 h-7 relative flex items-center justify-center">
                    {/* Clipboard/Document icon - similar to NavigationSection treatment icon */}
                    <img
                        className="absolute w-[83%] h-[83%] top-[8%] left-[8%]"
                        alt=""
                        src="/img/vector.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                    <img
                        className="absolute w-[83%] h-[25%] top-[17%] left-[8%]"
                        alt=""
                        src="/img/vector-1.svg"
                        style={{ filter: isActive ? BLUE_DARK : GRAY_DARK }}
                    />
                </div>
            ),
        },
        {
            id: "concerns",
            label: "お悩み",
            icon: (isActive) => (
                <div className="w-7 h-7 relative flex items-center justify-center">
                    {/* Chat/Bubble icon - using frame-517 like analysis */}
                    <img
                        className="w-full h-full"
                        alt=""
                        src="/img/frame-517.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
        {
            id: "questionnaire",
            label: "問診票",
            icon: (isActive) => (
                <div className="w-7 h-7 relative flex items-center justify-center">
                    {/* Check/Checkmark icon */}
                    <img
                        className="w-full h-full"
                        alt=""
                        src="/img/icon-park-solid-check-one.svg"
                        style={{ filter: isActive ? BLUE_LIGHT : GRAY_LIGHT }}
                    />
                </div>
            ),
        },
    ];

    // Card Component
    const Card = ({ children, className = "" }) => (
        <article className={`bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${className}`}>
            {children}
        </article>
    );

    const Header = ({ icon, title, className = "" }) => (
        <header className={`px-5 py-4 flex items-center gap-3 border-b border-neutral-100 ${className}`}>
            {icon && <img src={icon} className="w-5 h-5 object-contain" alt="" />}
            <h2 className="text-sm font-medium text-neutral-800 tracking-wide">{title}</h2>
        </header>
    );

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[100] bg-neutral-50/50 flex justify-center items-start overflow-y-auto font-['Noto_Sans_JP']">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors"
                aria-label="閉じる"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Main Content Container */}
            <div className="w-[834px] min-h-[1194px] bg-white relative shadow-2xl pb-40">

                {/* --- PatientInfoHeaderSection --- */}
                <div className="pt-10 px-10 pb-6">
                    <div className="flex items-start gap-8">
                        <img className="w-[88px] h-[88px] object-cover rounded-lg shadow-sm flex-shrink-0" alt="profile" src={patientInfo.profileImage} />

                        <div className="flex-1">
                            <div className="flex items-baseline gap-4 mb-2">
                                <h1 className="text-2xl font-bold text-neutral-800 tracking-wider text-[26px]">{patientInfo.name}</h1>
                            </div>
                            <div className="text-sm text-neutral-500 font-medium tracking-wide mb-1">
                                {patientInfo.gender}・{patientInfo.age}（{patientInfo.birthdate}）
                            </div>
                        </div>

                        {/* Details Columns */}
                        <div className="flex gap-10 mt-1">
                            <div className="space-y-1">
                                {patientInfo.leftColumn.map((item, i) => (
                                    <div key={i} className="flex text-[11px] leading-relaxed">
                                        <span className="w-[70px] font-medium text-neutral-800">{item.label}</span>
                                        <span className="text-neutral-600 font-medium">： {item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-1">
                                {patientInfo.rightColumn.map((item, i) => (
                                    <div key={i} className="flex text-[11px] leading-relaxed">
                                        <span className="w-[50px] font-medium text-neutral-800">{item.label}</span>
                                        <span className="text-neutral-600 font-medium">： {item.value || ""}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- AppointmentScheduleSection --- */}
                <div className="px-10 pb-6">
                    <div className="space-y-2">
                        {appointmentData.map((item, index) => (
                            <div key={index} className="flex text-[13px] font-medium leading-relaxed">
                                <span className="w-24 flex-shrink-0 text-neutral-800">{item.label}</span>
                                <span className="text-neutral-800 flex-1">{item.content}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-neutral-100 mb-8" />

                {/* --- Main Content Area --- */}
                <div className="flex px-8 gap-6">
                    {/* Sidebar */}
                    <div className="w-[80px] flex-shrink-0 pt-24 text-center relative">
                        <div className="absolute top-0 right-0 h-full w-px bg-neutral-100" />
                        <div className="space-y-8">
                            <div className="relative">
                                <span className="block text-xl text-neutral-900 font-medium tracking-wide">SP</span>
                                <span className="text-[11px] text-neutral-400 font-medium">1回目</span>
                            </div>
                            <div className="h-12 w-px bg-neutral-200 mx-auto" />
                            <div>
                                <span className="block text-xl text-neutral-900 font-medium tracking-wide">10/6</span>
                                <span className="text-[11px] text-neutral-400 font-medium">月</span>
                            </div>
                            <div className="h-12 w-px bg-neutral-200 mx-auto" />
                            <div className="text-lg text-neutral-900 font-medium tracking-wide">13:00〜</div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="flex-1 grid grid-cols-2 gap-5">
                        {/* ToDo Card */}
                        <Card className="min-h-[250px]">
                            <Header icon="/img/vector-1.svg" title="ToDo" />
                            <div className="p-5 space-y-3">
                                {todos.map((todo) => (
                                    <div key={todo.id} className="relative">
                                        <label className={`flex items-center gap-3 w-full p-3 rounded-lg border transition-all cursor-pointer ${todo.checked ? 'bg-white border-neutral-200' : 'bg-white border-neutral-200 shadow-sm'}`}>
                                            <div className="relative w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                <input type="checkbox" checked={todo.checked} onChange={() => handleTodoToggle(todo.id)} className="peer sr-only" />
                                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${todo.checked ? 'bg-[#4aa9fc] border-[#4aa9fc]' : 'bg-white border-neutral-300'}`}>
                                                    <svg className={`w-3.5 h-3.5 text-white ${todo.checked ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="text-[13px] font-medium text-neutral-700">{todo.text}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Right Column */}
                        <div className="space-y-5">
                            <Card className="h-[120px]">
                                <Header icon="/img/icon-park-solid-notes-1.svg" title="継続の確認" />
                                <div className="p-5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[13px] font-bold text-neutral-700">3回目</span>
                                        <div className="bg-neutral-100 rounded-md px-3 py-1.5 w-24">
                                            <select value={session3} onChange={(e) => setSession3(e.target.value)} className="bg-transparent text-[11px] w-full outline-none text-neutral-600 font-medium cursor-pointer">
                                                <option>選択</option>
                                                <option>確定</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-px h-8 bg-neutral-200" />
                                    <div className="flex items-center gap-3">
                                        <span className="text-[13px] font-bold text-neutral-700">4回目</span>
                                        <div className="bg-neutral-100 rounded-md px-3 py-1.5 w-24">
                                            <select value={session4} onChange={(e) => setSession4(e.target.value)} className="bg-transparent text-[11px] w-full outline-none text-neutral-600 font-medium cursor-pointer">
                                                <option>選択</option>
                                                <option>確定</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="flex-1 min-h-[350px]">
                                <Header icon="/img/icon-park-solid-notes.svg" title="前回メモ" />
                                <div className="flex h-[300px]">
                                    <div className="w-[80px] flex-shrink-0 bg-neutral-50/50 border-r border-neutral-100 flex flex-col items-center py-6 gap-32">
                                        <span className="text-[12px] text-neutral-400 font-medium">施術部位</span>
                                        <span className="text-[12px] text-neutral-400 font-medium">備考</span>
                                    </div>
                                    <div className="flex-1 py-6 px-4 flex flex-col gap-32">
                                        <div className="h-[20px] text-[13px] text-neutral-700"></div>
                                        <div className="h-[60px] text-[13px] text-neutral-700 leading-relaxed"></div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Advice Card */}
                        <Card className="min-h-[300px]">
                            <Header icon="/img/vector-2.svg" title="アドバイス" />
                            <div className="p-6">
                                <ul className="space-y-4">
                                    {adviceItems.map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="text-neutral-800 mt-1.5 w-1 h-1 bg-neutral-800 rounded-full flex-shrink-0" />
                                            <span className="text-[13px] font-medium leading-7 text-neutral-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>

                        {/* Add Memo Button */}
                        <button className="h-[55px] bg-[#4aa9fc] hover:bg-[#3a99ec] active:scale-[0.99] transition-all rounded-[12px] text-white flex items-center justify-center gap-3 shadow-md hover:shadow-lg w-full">
                            <span className="text-[20px] font-light mb-0.5">✏️</span>
                            <span className="text-[14px] font-bold tracking-wide">今日のメモを追加</span>
                        </button>
                    </div>
                </div>

                {/* --- Bottom Navigation (Matching NavigationSection style) --- */}
                <div className="fixed bottom-0 left-0 w-full z-[120]">
                    <div className="bg-white border-t border-neutral-100 px-safe py-3 flex justify-center items-center h-[80px]">

                        {/* Tabs - Centered */}
                        <div className="flex gap-12">
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className="flex flex-col items-center gap-1.5 w-16"
                                    >
                                        {tab.icon(isActive)}
                                        <span
                                            className={`text-[10px] font-bold tracking-wide ${isActive ? "text-[#54a0ff]" : "text-[#999999]"
                                                }`}
                                        >
                                            {tab.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Function Button (Right side, independent) */}
                        <div className="absolute right-8 top-1/2 -translate-y-1/2">
                            <button className="flex flex-col items-center gap-1.5 w-16">
                                <div className="w-7 h-7 relative flex items-center justify-center">
                                    {/* Three dots - using vector-4 similar to Summary icon in NavSection */}
                                    <img
                                        className="absolute w-[75%] h-[75%] top-[12%] left-[12%]"
                                        alt=""
                                        src="/img/vector-3.svg"
                                        style={{ filter: GRAY_LIGHT }}
                                    />
                                    <img
                                        className="absolute w-[75%] h-[25%] top-[12%] left-[12%]"
                                        alt=""
                                        src="/img/vector-4.svg"
                                        style={{ filter: GRAY_DARK }}
                                    />
                                </div>
                                <span className="text-[10px] font-bold text-[#999999] tracking-wide">機能</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
