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
    const [isFunctionMenuOpen, setIsFunctionMenuOpen] = useState(false);

    // Function menu items from reference - using copied icons
    const functionMenuItems = [
        { id: 1, label: "類似症例", icon: "/img/func-similar-cases.svg" },
        { id: 2, label: "頻度のグラフ", icon: "/img/func-frequency-graph.svg" },
        { id: 3, label: "効果のイメージ", icon: "/img/func-effect-image.svg" },
        { id: 4, label: "写真撮影", icon: "/img/func-camera.svg" },
        { id: 5, label: "写真 AI 生成", icon: "/img/func-ai-generate.svg" },
        { id: 6, label: "写真比較", icon: "/img/func-photo-compare.svg" },
        { id: 7, label: "お会計", icon: "/img/func-checkout.svg" },
    ];

    if (!isOpen) return null;

    const data = customerData || {
        name: "三浦 梨花",
        gender: "女",
        age: "25歳",
        birthdate: "2000/9/23",
        photo: "/img/image-2.png",
    };

    // Style from CustomerOverviewModal
    const softShadow = "shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-neutral-100";

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

    const questionnaireData = [
        { id: 1, question: "顔の整形手術（鼻・まぶた［切開または埋没法・アゴ・頬など］）を行ったことがある。", answer: "ある", answerColor: "text-[#ff0000]" },
        { id: 2, question: "リフトアップ整形手術を行ったことがある。", answer: "ない", answerColor: "text-[#999999]" },
        { id: 3, question: "行ったことがある顔の美容治療・美容施術", answer: "エラボトックス、ヒアルロン酸注入（フェイスライン補正）", answerColor: "text-[#ff0000]" },
        { id: 4, question: "行ったことがある顔の美容治療・美容施術", answer: "", answerColor: "text-[#999999]" },
        { id: 5, question: "上記以外で顔の美容治療・美容施術を行っている方は、具体的な内容と時期を教えてください。", answer: "", answerColor: "text-[#999999]" },
        { id: 6, question: "近日中に顔の手術や美容治療を予定している方は、具体的な内容を教えてください。", answer: "", answerColor: "text-[#999999]" },
        { id: 7, question: "ご本人の結婚式等のイベントを控えている。", answer: "いいえ", answerColor: "text-[#999999]" },
        { id: 8, question: "皮膚（頭皮）が弱い／赤くなりやすい。", answer: "いいえ", answerColor: "text-[#999999]" },
        { id: 9, question: "お顔の日焼けで赤み、炎症がある。", answer: "いいえ", answerColor: "text-[#999999]" },
        { id: 10, question: "NOV（ノブ）オリゴマリンローションSで肌荒れ・かぶれを起こしたことがある。", answer: "いいえ", answerColor: "text-[#999999]" },
        { id: 11, question: "妊娠中の方は、妊娠何ヶ月か教えてください。", answer: "", answerColor: "text-[#999999]" },
        { id: 12, question: "熱がある／風邪を引いている。", answer: "いいえ", answerColor: "text-[#999999]" },
        { id: 13, question: "現在、お酒を飲んでいる。", answer: "いいえ", answerColor: "text-[#999999]" },
        { id: 14, question: "頭部疾患や頭部手術経験がある。", answer: "いいえ", answerColor: "text-[#999999]" },
        { id: 15, question: "現在服用している薬", answer: "", answerColor: "text-[#999999]" },
        { id: 16, question: "お顔やお体で現在治療中もしくは過去に患った病気や先天性の疾患", answer: "", answerColor: "text-[#999999]" },
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
        <article className={`bg-white rounded-xl overflow-hidden ${softShadow} ${className}`}>
            {children}
        </article>
    );

    // Modified Header: text-[13px] (slightly smaller than original sm but larger than xs), restored padding (py-3)
    const Header = ({ icon, title, className = "" }) => (
        <header className={`px-4 py-3 bg-neutral-50 border-b border-neutral-100 flex items-center gap-2 ${className}`}>
            {icon && <img src={icon} className="w-3.5 h-3.5 object-contain opacity-70" alt="" />}
            <h2 className="text-[13px] font-medium text-neutral-700 tracking-wide">{title}</h2>
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

                {activeTab === "overview" && (
                    <>
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
                                <div className={`h-full rounded-lg overflow-hidden bg-white flex flex-col justify-center ${softShadow}`}>
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
                        <div className={`rounded-lg overflow-hidden bg-white ${softShadow}`}>
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
                                    {/* ToDo - Softer borders */}
                                    <Card className="h-[240px] flex flex-col">
                                        <Header icon="/img/vector-18.svg" title="ToDo" />
                                        <div className="p-2 space-y-1.5 overflow-y-auto flex-1">
                                            {todos.map((todo) => (
                                                <label key={todo.id} className={`flex items-center gap-2 w-full p-2 rounded-lg border transition-all cursor-pointer ${todo.checked ? 'bg-white border-neutral-100' : 'bg-white border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'}`}>
                                                    <div className="relative w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                        <input type="checkbox" checked={todo.checked} onChange={() => handleTodoToggle(todo.id)} className="peer sr-only" />
                                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${todo.checked ? 'bg-[#4aa9fc] border-[#4aa9fc]' : 'bg-white border-neutral-200'}`}>
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
                                    {/* Advice - Updated bullet color/style */}
                                    <Card className="flex-1 flex flex-col min-h-0">
                                        <Header icon="/img/vector-19.svg" title="アドバイス" />
                                        <div className="p-4 pl-10 overflow-y-auto flex-1">
                                            <ul className="list-disc list-outside space-y-2.5 ml-1">
                                                {adviceItems.map((item, i) => (
                                                    <li key={i} className="text-[12px] font-medium leading-relaxed text-neutral-700 pl-1 marker:text-blue-300 max-w-[90%]">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Card>
                                </div>

                                {/* Right Col */}
                                <div className="flex flex-col gap-3 h-full">
                                    {/* Continuity */}
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

                                    {/* Previous Memo */}
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
                    </>
                )}

                {activeTab === "questionnaire" && (
                    <div className="flex-1 overflow-y-auto -mx-2 px-2">
                        <div className={`rounded-xl overflow-hidden bg-white ${softShadow}`}>
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-neutral-50 sticky top-0 z-10 border-b border-neutral-200">
                                    <tr>
                                        <th className="py-2.5 px-3 w-10 text-[11px] font-medium text-neutral-500 text-center border-r border-neutral-200">No.</th>
                                        <th className="py-2.5 px-4 text-[11px] font-medium text-neutral-500 border-r border-neutral-200">質問事項</th>
                                        <th className="py-2.5 px-4 text-[11px] font-medium text-neutral-500">回答</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {questionnaireData.map((row, index) => (
                                        <tr key={row.id} className="border-b border-neutral-100 last:border-b-0 even:bg-neutral-50/30 hover:bg-neutral-50 transition-colors">
                                            <td className="py-3 px-3 text-center text-[11px] text-neutral-600 border-r border-neutral-100 font-medium bg-neutral-50/50">
                                                {row.id}
                                            </td>
                                            <td className="py-3 px-4 text-[12px] font-medium text-neutral-800 leading-relaxed border-r border-neutral-100">
                                                {row.question}
                                            </td>
                                            <td className={`py-3 px-4 text-[12px] font-medium whitespace-pre-wrap ${row.answerColor === 'text-[#ff0000]' ? 'text-red-500' : 'text-neutral-400'}`}>
                                                {row.answer || <span className="opacity-30">-</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === "concerns" && (
                    <ConcernsTabContent softShadow={softShadow} />
                )}
            </div>

            {/* Footer */}
            <div className="fixed bottom-8 left-0 w-full z-[120] pointer-events-none">
                <div className="relative w-full flex justify-center items-center h-[72px]">
                    <div className={`bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-2 py-1.5 flex items-center gap-1 pointer-events-auto transition-opacity duration-200 ${isFunctionMenuOpen ? 'opacity-20 pointer-events-none' : ''}`}>
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
                        <button
                            onClick={() => setIsFunctionMenuOpen(!isFunctionMenuOpen)}
                            className={`w-[80px] h-[60px] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-0.5 transition-all ${isFunctionMenuOpen ? 'bg-[#4aa9fc]' : 'bg-white hover:bg-neutral-50'}`}
                        >
                            <div className="w-5 h-5 relative flex items-center justify-center">
                                <img
                                    className="w-full h-full object-contain"
                                    alt=""
                                    src="/img/icon-three-dots.svg"
                                    style={{ filter: isFunctionMenuOpen ? WHITE : GRAY_DARK }}
                                />
                            </div>
                            <span className={`text-[9px] font-bold tracking-wide ${isFunctionMenuOpen ? 'text-white' : 'text-[#999999]'}`}>機能</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Dark Overlay - shown when function menu is open */}
            {isFunctionMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[119] pointer-events-auto"
                    onClick={() => setIsFunctionMenuOpen(false)}
                />
            )}

            {/* Function Menu Panel */}
            {isFunctionMenuOpen && (
                <div className="fixed bottom-[120px] right-12 z-[125] pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-200">
                    <nav className="w-[250px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-white/50">
                        <ul className="flex flex-col py-2">
                            {functionMenuItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        className="w-full px-6 py-3.5 flex items-center gap-4 hover:bg-neutral-50 transition-colors"
                                        onClick={() => {
                                            // Handle menu item click
                                            console.log(`Clicked: ${item.label}`);
                                            setIsFunctionMenuOpen(false);
                                        }}
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            <img
                                                src={item.icon}
                                                alt=""
                                                className="w-5 h-5 object-contain"
                                                style={{ filter: GRAY_DARK }}
                                            />
                                        </div>
                                        <span className="text-[14px] font-medium text-neutral-800">{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>,
        document.body
    );
};

const INITIAL_UPPER_COLUMNS = [
    // Col 1: 顔全体 + 頭
    [
        {
            title: "顔全体",
            items: [
                { text: "小さくしたい" },
                { text: "丸顔を改善したい", disabled: true },
                { text: "面長を改善したい", highlighted: true },
                { text: "左右差を取りたい" },
                { text: "むくみを取りたい" },
                { text: "たるみを取りたい\n（リフトUP）" },
                { text: "くすみをとりたい", disabled: true },
                { text: "アンチエイジング" },
                { text: "立体的な顔にしたい" },
            ]
        },
        {
            title: "頭",
            items: [
                { text: "小さくしたい" },
                { text: "左右差を取りたい" },
                { text: "ハチの張りをなくしたい", disabled: true },
            ]
        }
    ],
    // Col 2: 額 + 眉 + 目
    [
        {
            title: "額",
            items: [
                { text: "形を整えたい" },
                { text: "しわを消したい", disabled: true },
            ]
        },
        {
            title: "眉",
            items: [
                { text: "左右差を取りたい" },
                { text: "眉間のしわを消したい" },
            ]
        },
        {
            title: "目",
            items: [
                { text: "大きくしたい" },
                { text: "むくみを取りたい" },
                { text: "クマを消したい" },
                { text: "左右均等にしたい" },
                { text: "たるみを取りたい" },
                { text: "しわを消したい", disabled: true },
            ]
        }
    ],
    // Col 3: 鼻 + 頬
    [
        {
            title: "鼻",
            items: [
                { text: "高くしたい" },
                { text: "小さくしたい" },
                { text: "鼻すじを通したい" },
                { text: "歪みを取りたい" },
            ]
        },
        {
            title: "頬",
            items: [
                { text: "頬骨を凹ませたい" },
                { text: "厚みを取りたい" },
                { text: "ほうれい線を消したい" },
                { text: "頬こけをなくしたい", disabled: true },
            ]
        }
    ],
    // Col 4: 口 + 顎
    [
        {
            title: "口",
            items: [
                { text: "口角を上げたい" },
                { text: "左右差を取りたい" },
                { text: "しわを消したい", disabled: true },
            ]
        },
        {
            title: "顎",
            items: [
                { text: "エラの張りを取りたい▶", highlighted: true },
                { text: "二重あごをなくしたい" },
                { text: "フェイスラインを\nすっきりさせたい" },
                { text: "左右差を取りたい", disabled: true },
                { text: "たるみを取りたい", disabled: true },
                { text: "あご先の肉を取りたい" },
            ]
        }
    ],
    // Col 5: 首 + 肩
    [
        {
            title: "首",
            items: [
                { text: "細くしたい" },
                { text: "長くしたい", disabled: true },
                { text: "コリを取りたい" },
            ]
        },
        {
            title: "肩",
            items: [
                { text: "巻き肩を改善したい" },
                { text: "鎖骨を出したい" },
                { text: "コリを取りたい", disabled: true },
                { text: "肩幅を小さく見せたい" },
                { text: "二の腕を細くしたい" },
                { text: "デコルテを綺麗にしたい", disabled: true },
            ]
        }
    ],
];

const INITIAL_LOWER_COLUMNS = [
    // Col 1
    [
        {
            title: "骨盤",
            items: [
                { text: "下半身を細くしたい" },
                { text: "歪みを整えたい", highlighted: true },
                { text: "産後の骨盤を矯正したい" },
                { text: "反り腰を治したい" },
            ]
        },
        {
            title: "お尻",
            items: [
                { text: "ヒップUPしたい" },
                { text: "小尻にしたい" },
            ]
        }
    ],
    // Col 2
    [
        {
            title: "お腹",
            items: [
                { text: "くびれを作りたい", highlighted: true },
                { text: "お腹を凹ませたい" },
                { text: "便秘を解消したい" },
            ]
        },
        {
            title: "上半身",
            items: [
                { text: "上半身を細くしたい" },
                { text: "姿勢をきれいにしたい" },
            ]
        }
    ],
    // Col 3
    [
        {
            title: "全体",
            items: [
                { text: "スタイルUPしたい" },
                { text: "歩行姿勢をきれいにしたい" },
                { text: "自分の状態を知りたい" },
            ]
        }
    ],
    // Col 4
    [
        {
            title: "美脚",
            items: [
                { text: "O脚を治したい" },
                { text: "美脚にしたい" },
                { text: "太ももを細くしたい" },
                { text: "むくみを取りたい" },
                { text: "ふくらはぎを細くしたい" },
                { text: "足首を細くしたい" },
            ]
        }
    ],
    // Col 5
    [
        {
            title: "その他",
            items: [
                { text: "特になし" },
            ]
        }
    ]
];

const ConcernsTabContent = ({ softShadow }) => {
    const [concernTab, setConcernTab] = useState("upper");
    const [isEditing, setIsEditing] = useState(false);

    // State for modifying items
    const [upperData, setUpperData] = useState(INITIAL_UPPER_COLUMNS);
    const [lowerData, setLowerData] = useState(INITIAL_LOWER_COLUMNS);

    // Handle cycling states: Disabled (Gray) -> Normal (Black) -> Highlighted (Red) -> Disabled
    const handleItemClick = (colIndex, sectionIndex, itemIndex) => {
        if (!isEditing) return;

        const updateData = (prevData) => {
            const newData = [...prevData]; // Shallow copy of columns
            const newColumn = [...newData[colIndex]]; // Shallow copy of column array
            const newSection = { ...newColumn[sectionIndex] }; // Shallow copy of section object
            const newItems = [...newSection.items]; // Shallow copy of items array
            const item = { ...newItems[itemIndex] }; // Shallow copy of item object

            // Cycle Logic
            if (item.disabled) {
                // Gray -> Black
                item.disabled = false;
                item.highlighted = false;
            } else if (!item.highlighted) {
                // Black -> Red
                item.highlighted = true;
            } else {
                // Red -> Gray
                item.highlighted = false;
                item.disabled = true;
            }

            newItems[itemIndex] = item;
            newSection.items = newItems;
            newColumn[sectionIndex] = newSection;
            newData[colIndex] = newColumn;
            return newData;
        };

        if (concernTab === "upper") {
            setUpperData(updateData(upperData));
        } else {
            setLowerData(updateData(lowerData));
        }
    };

    // Card Component - Now Interactive
    const ConcernCard = ({ title, items, onCardClick }) => (
        <article className={`w-full bg-white rounded-xl overflow-hidden ${softShadow} flex flex-col`}>
            <div className="bg-neutral-50/80 backdrop-blur-sm border-b border-neutral-100 py-3 flex justify-center items-center">
                <h3 className="text-[12px] font-semibold text-neutral-800 tracking-wider">
                    {title}
                </h3>
            </div>
            <ul className="flex flex-col items-center gap-2.5 p-4">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        onClick={() => onCardClick(idx)}
                        className={`text-[12px] leading-[1.6] text-center whitespace-pre-wrap font-medium transition-colors duration-200 ${isEditing ? "cursor-pointer select-none hover:opacity-70 active:scale-95 transform" : ""
                            } ${item.highlighted
                                ? "bg-red-50 text-red-600 border border-red-200 px-3 py-1.5 rounded-lg font-semibold"
                                : item.disabled
                                    ? "text-neutral-300"
                                    : "text-neutral-700"
                            }`}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </article>
    );

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* Top Section: Diagrams + Edit Toggle - Slightly smaller */}
            <div className="flex-shrink-0 px-8 pt-4 pb-2 relative min-h-[220px]">

                {/* Edit/Lock Toggle */}
                <div className="absolute top-2 right-4 z-10">
                    <div className="bg-white/80 backdrop-blur-xl rounded-full p-1 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.10)] flex">
                        <button
                            onClick={() => setIsEditing(false)}
                            className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all flex items-center gap-2 ${!isEditing
                                ? "bg-neutral-600 text-white shadow-lg"
                                : "text-neutral-500 hover:bg-white/60"
                                }`}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            ロック
                        </button>
                        <button
                            onClick={() => setIsEditing(true)}
                            className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all flex items-center gap-2 ${isEditing
                                ? "bg-[#4aa9fc] text-white shadow-lg"
                                : "text-neutral-500 hover:bg-white/60"
                                }`}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            編集
                        </button>
                    </div>
                </div>

                {/* Diagrams Container - Shifted Right */}
                <div className="flex items-center gap-12 justify-start pl-12">
                    {/* Face Diagram (Left) - Smaller (160px) */}
                    <div className="relative w-[160px] h-[160px] flex items-center justify-center">
                        <span className="absolute top-0 left-4 text-[12px] font-semibold text-neutral-700">R</span>
                        <span className="absolute top-0 right-4 text-[12px] font-semibold text-neutral-700">L</span>
                        <img src="/img/group.png" className="w-[130px] h-auto object-contain" alt="Face Diagram" />
                        {/* Face Labels - Adjusted position for smaller size */}
                        <div className="absolute top-[28%] left-[-8px] flex flex-col items-center">
                            <svg className="w-4 h-4 text-[#4aa9fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M12 19V5M5 12l7-7 7 7" />
                            </svg>
                            <span className="text-[10px] text-[#4aa9fc] font-semibold whitespace-nowrap">面長の改善</span>
                            <svg className="w-4 h-4 text-[#4aa9fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M12 5v14M19 12l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[45px] h-[25px] bg-[#4aa9fc]/30 rounded-full" />
                        <span className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-[10px] text-[#4aa9fc] font-semibold whitespace-nowrap">エラ張りの解消</span>
                    </div>

                    {/* Body Diagrams (Right) - Smaller (75px) */}
                    <div className="flex gap-8 items-start">
                        {/* Front */}
                        <div className="flex flex-col items-center">
                            <span className="text-[12px] font-semibold text-neutral-500 mb-2">前</span>
                            <div className="relative">
                                <img src="/img/group-1.png" className="w-[75px] opacity-90" alt="Body Front" />
                                <div className="absolute top-[42%] left-[18%] w-[14px] h-[11px] bg-[#4aa9fc]/40 rounded-full" />
                                <div className="absolute top-[42%] right-[18%] w-[14px] h-[11px] bg-[#4aa9fc]/40 rounded-full" />
                            </div>
                            <span className="text-[10px] text-[#4aa9fc] font-semibold mt-2 whitespace-nowrap">歪みを整えたい</span>
                        </div>
                        {/* Back */}
                        <div className="flex flex-col items-center">
                            <span className="text-[12px] font-semibold text-neutral-500 mb-2">後</span>
                            <div className="relative">
                                <img src="/img/group-2.png" className="w-[75px] opacity-90" alt="Body Back" />
                                <div className="absolute top-[42%] left-[18%] w-[14px] h-[11px] bg-[#4aa9fc]/40 rounded-full" />
                                <div className="absolute top-[42%] right-[18%] w-[14px] h-[11px] bg-[#4aa9fc]/40 rounded-full" />
                            </div>
                            <span className="text-[10px] text-[#4aa9fc] font-semibold mt-2 whitespace-nowrap">くびれを作りたい</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section - Moved Down */}
            <div className="flex-1 overflow-y-auto px-6 pb-24 mt-4">
                <div className="grid grid-cols-5 gap-4 items-start">
                    {(concernTab === "upper" ? upperData : lowerData).map((colItems, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-4">
                            {colItems.map((part, sectionIndex) => (
                                <ConcernCard
                                    key={sectionIndex}
                                    title={part.title}
                                    items={part.items}
                                    onCardClick={(itemIndex) => handleItemClick(colIndex, sectionIndex, itemIndex)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Upper/Lower Toggle - Positioned */}
            <div className="fixed bottom-[130px] right-12 z-[115]">
                <div className="bg-white/80 backdrop-blur-xl rounded-full p-1.5 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex">
                    <button
                        onClick={() => setConcernTab("upper")}
                        className={`px-8 py-3 rounded-full text-[15px] font-semibold transition-all ${concernTab === "upper"
                            ? "bg-[#4aa9fc] text-white shadow-lg"
                            : "text-neutral-500 hover:bg-white/60"
                            }`}
                    >
                        上部
                    </button>
                    <button
                        onClick={() => setConcernTab("lower")}
                        className={`px-8 py-3 rounded-full text-[15px] font-semibold transition-all ${concernTab === "lower"
                            ? "bg-[#4aa9fc] text-white shadow-lg"
                            : "text-neutral-500 hover:bg-white/60"
                            }`}
                    >
                        下部
                    </button>
                </div>
            </div>
        </div>
    );
};
