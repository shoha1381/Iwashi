import React, { useState } from "react";

// Mock data for Sato Shoha
const HISTORY_DATA = [
    {
        course: "SP",
        count: "2回目",
        period: "2025/8/22 〜 2025/9/27",
        expanded: true,
        records: [
            {
                count: 5,
                date: "9/27",
                day: "土",
                time: "18:00〜",
                note: "むくみがほぼ消失。フェイスラインがシャープに。肩の緊張も軽減。ビフォーアフター提示、アンケート回答、キャンペーン案内。",
                treatments: ["小顔矯正", "背中", "頭", "肩"]
            },
            {
                count: 4,
                date: "9/14",
                day: "日",
                time: "10:30〜",
                note: "左右差がほぼ消え、顎のライン安定。笑顔も自然に。写真比較とフィードバック。",
                treatments: ["小顔矯正", "背中", "頭", "肩"]
            },
            {
                count: 3,
                date: "9/5",
                day: "金",
                time: "14:00〜",
                note: "頬の位置がやや上がり、顎ラインが安定。肩の張りはまだある。生活習慣（睡眠・PC姿勢）のヒアリング。むくみがほぼ消失。フェイスラインがシャープに。肩の緊張も軽減。ビ",
                treatments: ["小顔矯正", "背中", "頭", "肩"]
            },
            {
                count: 2,
                date: "8/29",
                day: "金",
                time: "19:00〜",
                note: "顎まわりがややスッキリ。首の付け根に張り残る。噛み癖注意を案内。",
                treatments: ["小顔矯正", "背中", "頭", "肩"]
            },
            {
                count: 1,
                date: "8/22",
                day: "金",
                time: "18:30〜",
                note: "むくみと左右差が目立ち、首・肩の張りも強い。姿勢チェック。",
                treatments: ["小顔矯正", "背中", "頭", "肩"]
            }
        ]
    },
    {
        course: "SP",
        count: "1回目",
        period: "2025/7/21 〜 2025/8/18",
        expanded: false,
        records: []
    }
];

export const TreatmentHistoryTab = () => {
    const [history, setHistory] = useState(HISTORY_DATA);

    const toggleExpand = (index) => {
        const newHistory = [...history];
        newHistory[index].expanded = !newHistory[index].expanded;
        setHistory(newHistory);
    };

    return (
        <div className="flex flex-col gap-4 animate-in fade-in duration-300 pb-24">
            {/* Added pb-24 for bottom tab bar clearance */}
            {history.map((group, groupIndex) => (
                <div key={groupIndex} className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
                    {/* Accordion Header */}
                    <button
                        onClick={() => toggleExpand(groupIndex)}
                        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-neutral-50 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-xl font-medium text-neutral-800">{group.course}</span>
                            <span className="text-sm text-neutral-400 font-normal mt-1">{group.count}・{group.period}</span>
                        </div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${group.expanded ? "bg-[#4aa9fc] text-white rotate-180" : "bg-neutral-100 text-neutral-400"}`}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>

                    {/* Accordion Content */}
                    {group.expanded && (
                        <div className="border-t border-neutral-100 animate-in slide-in-from-top-2 duration-200">
                            {/* Table Header */}
                            {group.records.length > 0 && (
                                <div className="flex text-[11px] text-neutral-400 px-6 py-2 border-b border-neutral-100 bg-neutral-50/30">
                                    <div className="w-16"></div> {/* Count Column */}
                                    <div className="w-24 border-l border-neutral-100 pl-4"></div> {/* Date Column */}
                                    <div className="flex-1 border-l border-neutral-100 pl-4">備考</div>
                                    <div className="w-32 border-l border-neutral-100 pl-4">施術部位</div>
                                </div>
                            )}

                            {group.records.map((record, i) => (
                                <div key={i} className={`flex min-h-[100px] ${i !== group.records.length - 1 ? "border-b border-neutral-100" : ""}`}>
                                    {/* Count Column */}
                                    <div className="w-16 flex items-center justify-center flex-shrink-0">
                                        <div className="flex items-end gap-0.5">
                                            <span className="text-xl font-normal text-neutral-800">{record.count}</span>
                                            <span className="text-[10px] text-neutral-400 mb-1">回目</span>
                                        </div>
                                    </div>

                                    {/* Date Column */}
                                    <div className="w-24 border-l border-neutral-100 flex flex-col items-center justify-center gap-1 flex-shrink-0 bg-neutral-50/10">
                                        <div className="flex items-center gap-1">
                                            <span className="text-[15px] font-medium text-neutral-800">{record.date}</span>
                                            <span className="text-[10px] text-neutral-400">{record.day}</span>
                                        </div>
                                        <span className="text-[11px] text-neutral-500">{record.time}</span>
                                    </div>

                                    {/* Note Column */}
                                    <div className="flex-1 border-l border-neutral-100 p-4 flex items-center">
                                        <p className="text-[13px] leading-relaxed text-neutral-800 tracking-wide">
                                            {record.note}
                                        </p>
                                    </div>

                                    {/* Treatments Column */}
                                    <div className="w-32 border-l border-neutral-100 p-4 flex items-center bg-neutral-50/10 flex-shrink-0">
                                        <ul className="text-[11px] text-neutral-700 space-y-1">
                                            {record.treatments.map((t, idx) => (
                                                <li key={idx} className="flex items-center gap-1.5">
                                                    <span className="w-1 h-1 rounded-full bg-neutral-400"></span>
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
