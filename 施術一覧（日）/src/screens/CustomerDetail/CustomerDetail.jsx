import { Link, useParams } from "react-router-dom";
import { NavigationSection } from "../../components/NavigationSection";

// Icons
const DocumentIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const AIIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const TrashIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const EditIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

const CloseIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// Mock customer detail data
const mockCustomerDetail = {
    id: 1,
    name: "佐藤 祥羽",
    nameKana: "サトウショウハ",
    gender: "男",
    age: 21,
    photo: "/img/j4230615-2-1.png",
    label: "アドバ",
    labelColor: "bg-red-500",
    target: "同窓会に向けて、面長を改善する",
    advice: "初回から5回分まとめてスタートさせる流れを徹底しましょう。\nSP・1回目（計16回）\n5回目の施術時に次の5回分を必ず提案・決済してください注意\n施術前に前払いと次回予約確定 を行い、来院開隔を空けないようにしましょう。",
    notes: "鼻の整形あり\n肌が高い/肌荒れ",
    memo: "Iの緊張が強く、特に右側に左右差が見られたため、次回以降はデコルテ〜肩甲骨まわりの可動域改善を優先すると感じた。また、顎まわりのむくみが出やすい体質のため、写真撮影の前に軽いリンパ流しを入れるとより明確になりそう。",
    sessions: [
        { label: "顔", count: 3 },
        { label: "代金", count: 4 },
        { label: "予約", count: 5 },
        { label: "支払い", count: 5 },
        { label: "5回分", count: 6 },
        { label: "メニュー", count: 7 },
        { label: "写真", count: 8 },
    ],
};

export const CustomerDetail = () => {
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-neutral-50 to-blue-100 flex font-sans overflow-x-hidden">
            {/* Side Navigation */}
            <NavigationSection />

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:mr-16 pb-20 lg:pb-0 w-full h-screen overflow-auto">
                {/* Header with Date - Matching calendar style */}
                <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-200/50 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="text-lg text-neutral-700 font-medium">2025/10/06</span>
                        <span className="text-sm text-neutral-400">月</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-neutral-600">銀座店</span>
                        <div className="flex gap-1">
                            <Link to="/" className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded-full shadow-sm hover:bg-blue-600 transition-colors">日</Link>
                            <button className="px-4 py-1.5 bg-white text-neutral-600 text-sm rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors">週</button>
                        </div>
                    </div>
                </header>

                {/* Customer Profile Card */}
                <div className="p-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/50 overflow-hidden">
                        {/* Close button */}
                        <div className="flex justify-end p-3">
                            <Link to="/customers" className="p-2 hover:bg-neutral-100 rounded-lg transition-colors text-neutral-400 hover:text-neutral-600">
                                <CloseIcon />
                            </Link>
                        </div>

                        {/* Profile Header */}
                        <div className="px-6 pb-6 flex gap-6">
                            {/* Photo */}
                            <div className="w-32 h-40 bg-neutral-200 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                                <img
                                    src={mockCustomerDetail.photo}
                                    alt={mockCustomerDetail.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/128x160?text=No+Photo'; }}
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                                {/* Action Bar */}
                                <div className="flex items-center gap-2 mb-4">
                                    <button className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-xl shadow-sm hover:bg-green-600 transition-colors">
                                        <DocumentIcon />
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-white rounded-xl shadow-sm hover:bg-yellow-500 transition-colors">
                                        <AIIcon />
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-xl shadow-sm hover:bg-red-600 transition-colors">
                                        <TrashIcon />
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-xl shadow-sm hover:bg-blue-600 transition-colors">
                                        <EditIcon />
                                    </button>
                                </div>

                                {/* Name */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className={`px-2.5 py-1 ${mockCustomerDetail.labelColor} text-white text-xs font-medium rounded-md`}>
                                        {mockCustomerDetail.label}
                                    </span>
                                    <h2 className="text-xl font-bold text-neutral-800">{mockCustomerDetail.name}</h2>
                                    <span className="text-sm text-neutral-500">
                                        {mockCustomerDetail.nameKana}・{mockCustomerDetail.gender}・{mockCustomerDetail.age}歳
                                    </span>
                                </div>

                                {/* Target and Notes */}
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-neutral-600 mb-2">目標</h3>
                                        <p className="text-sm text-neutral-800 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                                            {mockCustomerDetail.target}
                                        </p>
                                    </div>
                                    <div className="w-52">
                                        <h3 className="text-sm font-semibold text-neutral-600 mb-2">注意事項</h3>
                                        <p className="text-sm text-neutral-800 bg-neutral-50 p-3 rounded-xl whitespace-pre-line border border-neutral-100">
                                            {mockCustomerDetail.notes}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Advice Section */}
                        <div className="px-6 pb-6">
                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
                                <p className="text-sm text-neutral-700 whitespace-pre-line leading-relaxed">
                                    {mockCustomerDetail.advice}
                                </p>
                            </div>
                        </div>

                        {/* Memo Section */}
                        <div className="px-6 pb-6">
                            <div className="bg-neutral-50 border border-neutral-100 p-4 rounded-xl">
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    {mockCustomerDetail.memo}
                                </p>
                            </div>
                        </div>

                        {/* Session Counters */}
                        <div className="px-6 pb-6 flex flex-wrap gap-3">
                            {mockCustomerDetail.sessions.map((session, index) => (
                                <div key={index} className="flex items-center gap-2 bg-neutral-100 px-4 py-2 rounded-full border border-neutral-200/50">
                                    <span className="text-sm text-neutral-600">{session.label}</span>
                                    <span className="w-6 h-6 flex items-center justify-center bg-neutral-300 text-neutral-700 text-xs font-medium rounded-full">
                                        {session.count}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="px-6 pb-6 flex justify-end gap-3">
                            <Link to="/" className="px-6 py-2.5 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors shadow-sm">
                                施術
                            </Link>
                            <button className="px-6 py-2.5 bg-neutral-200 text-neutral-700 text-sm font-medium rounded-full hover:bg-neutral-300 transition-colors">
                                週
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
