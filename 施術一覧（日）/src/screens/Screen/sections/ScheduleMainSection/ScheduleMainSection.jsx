import { useState, useEffect } from "react";

// Appointment Card
const AppointmentCard = ({ slot, view, onClick }) => {
    if (!slot.name && !slot.service) return null;
    if (slot.nameColor === "text-transparent") return null;

    const getCardStyle = () => {
        if (slot.bgColor?.includes("ffd5dd")) return "appointment-card-pink";
        if (slot.bgColor?.includes("e5d2ec")) return "appointment-card-purple";
        if (slot.bgColor?.includes("e5f2e5")) return "appointment-card-green";
        if (slot.bgColor?.includes("fde5cc")) return "appointment-card-orange";
        return "appointment-card-gray";
    };

    return (
        <div
            className={`appointment-card ${getCardStyle()} h-full flex flex-col cursor-pointer hover:ring-2 hover:ring-[#4aa9fc]/50 transition-all`}
            onClick={onClick}
        >
            {/* Badge Row */}
            {(slot.badge || slot.icon) && (
                <div className="flex items-center gap-1 mb-1">
                    {slot.badge && (
                        <span className={`badge ${slot.badge === "G" ? "badge-work" : "badge-alert"}`}>
                            {slot.badge}
                        </span>
                    )}
                    {slot.icon && <img src={slot.icon} alt="" className="w-5 h-5 rounded object-cover" />}
                </div>
            )}

            {/* Name */}
            {slot.name && (
                <div className="appointment-name text-[11px]">{slot.name}</div>
            )}

            {/* Service - visible only in Day view */}
            {view === 'day' && slot.service && (
                <div className="mt-auto pt-1">
                    <span className="appointment-service">{slot.service}</span>
                </div>
            )}
        </div>
    );
};

// Time Row - with absent columns and highlighted first column
const TimeRow = ({ row, isEven, view, onSlotClick, onReservationClick }) => {
    const heightClass = view === 'day' ? 'h-28' : 'h-20';
    return (
        <div
            className={`grid ${isEven ? "bg-white" : "bg-neutral-50/30"}`}
            style={{ gridTemplateColumns: "56px repeat(7, 1fr) repeat(2, 0.5fr)" }}
        >
            <div className={`flex-shrink-0 ${heightClass} flex items-center justify-center border-r border-b border-neutral-100`}>
                <span className="text-[13px] font-medium text-neutral-500">{row.time}:00</span>
            </div>

            {row.slots.map((slot, i) => (
                <div
                    key={i}
                    className={`min-w-0 ${heightClass} p-1 border-r border-b border-neutral-100 
                        ${i === 0 ? "bg-[#e6f4ff]/40" : ""} 
                        ${!slot.name && !slot.service ? 'cursor-pointer hover:bg-[#4aa9fc]/5 transition-colors' : ''}`}
                    onClick={() => {
                        if (slot.name || slot.service) {
                            onReservationClick?.(slot, row.time);
                        } else {
                            onSlotClick?.(row.time, i);
                        }
                    }}
                >
                    <AppointmentCard
                        slot={slot}
                        view={view}
                        onClick={() => onReservationClick?.(slot, row.time)}
                    />
                </div>
            ))}

            {/* Absent staff columns */}
            <div className={`min-w-0 ${heightClass} border-r border-b border-neutral-100 bg-neutral-50/50`} />
            <div className={`min-w-0 ${heightClass} border-b border-neutral-100 bg-neutral-50/50`} />
        </div>
    );
};

export const ScheduleMainSection = ({ date, view, onSlotClick, onReservationClick }) => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    // Initial dummy data
    const scheduleData = [
        {
            time: "10", slots: [
                { name: "沖中 彩 オ", service: "SP 2 (7)", bgColor: "bg-[#ffd5dd]" },
                { name: "山崎 弘美 タ ❤ H20", service: "SP 3 (6)" },
                { name: "安里 修一 カ 口コミGH", service: "首 3 (8)" },
                {}, {}, {}, {}
            ]
        },
        {
            time: "11", slots: [
                { name: "沖中 彩 オ", service: "SP 3 (0)", bgColor: "bg-[#ffd5dd]" },
                { name: "前田 梓那 タ ×", service: "頭 1 (42)" },
                { name: "成田 みのり ❤ カ 口コミHHGH", service: "SP 34 (21)" },
                { name: "加藤 真奈美 リ", service: "SP 8 (5)" },
                { name: "藤澤 枝利子 ペ", service: "首 2 (4)" },
                { name: "業務", badge: "G" },
                { name: "大久保 ワタル", service: "SP初 ネSP", icon: "/img/15-1.png", badge: "！" }
            ]
        },
        {
            time: "12", slots: [
                { name: "三浦 梨花", service: "SP初 ネSP", icon: "/img/15-1.png" },
                { name: "川村 梨絵 タ 口コミH", service: "SS 9 (9)" },
                { name: "山岸 美由紀 カ 口コミHG", service: "SP初 ネSP", icon: "/img/15-1.png", badge: "P" },
                { name: "神頭 彩智リ 口コミ", service: "腹初 CAM", icon: "/img/15-1.png" },
                { name: "田湯 亜蓮 ペ 口コミHG", service: "首 13 (21)" },
                { name: "業務", badge: "G" },
                {}
            ]
        },
        {
            time: "13", slots: [
                { name: "佐藤 祥羽 ❤", service: "SP 16 (7)" },
                { name: "佐藤 照美 タ ❤ × 口コミH", service: "SP 40 (11)", bgColor: "bg-[#e5d2ec]" },
                { name: "小野 梨帆 カ 口コミHGH", service: "SP 14 (13)", bgColor: "bg-[#e5f2e5]" },
                { name: "奥山 陸生 ❤ リ 口コミH × ×", service: "SP 86 (3)" },
                { name: "藤澤 枝利子 ペ", service: "首 2 (4)" },
                { name: "業務", badge: "G" },
                { name: "大久保 ワタル", service: "SP初 ネSP", icon: "/img/15-1.png", badge: "！" }
            ]
        },
        {
            time: "14", slots: [
                {},
                { name: "佐藤 照美 タ ❤ × 口コミH", service: "SP 40 (0)", bgColor: "bg-[#e5d2ec]" },
                { name: "小野 梨帆 カ 口コミHGH", service: "SP 15 (0)", bgColor: "bg-[#e5f2e5]" },
                { name: "長野 天音 リ", service: "首 7 (16)", bgColor: "bg-[#fde5cc]" },
                {}, {},
                { name: "廣田 みか メ", service: "首初 CAM", icon: "/img/15-1.png" }
            ]
        },
        {
            time: "15", slots: [
                { name: "工藤 みほ オ", service: "SP 4 (5)" },
                { name: "小坂 穂果", service: "首初 ネ", icon: "/img/15-1.png" },
                { name: "徳光 真奈巳 ❤ カ オ 口コミHG", service: "SB 14 (6)" },
                { name: "長野 天音 リ", service: "首 8 (0)", bgColor: "bg-[#fde5cc]" },
                { name: "北川 孝一", service: "首初 CAM", icon: "/img/15-1.png" },
                {}, {}
            ]
        },
        {
            time: "16", slots: [
                { name: "徳光 真奈巳 ❤ カ オ 口コミ HG", service: "SP初 ネSP" },
                { name: "田辺 広志 タ", service: "SS 9 (9)" },
                { name: "佐久間 美華 ❤ カ 口コミ HGHH", service: "首 13 (21)" },
                { name: "佐々木 愛", service: "腹初 CAM", icon: "/img/15-1.png" },
                { name: "業務", badge: "G" },
                {}, {}
            ]
        },
        { time: "17", slots: [{}, {}, {}, {}, {}, {}, {}] },
        { time: "18", slots: [{}, {}, {}, {}, {}, {}, {}] },
        { time: "19", slots: [{}, {}, {}, {}, {}, {}, {}] },
        { time: "20", slots: [{}, {}, {}, {}, {}, {}, {}] },
        { time: "21", slots: [{}, {}, {}, {}, {}, {}, {}] },
        { time: "22", slots: [{}, {}, {}, {}, {}, {}, {}] },
    ];

    // Current Time Line Position Logic
    // Grid starts at 10:00
    // Each hour is 'h-28' (112px) in Day view, 'h-20' (80px) in Week view
    // Note: Tailwind h-28 is 7rem = 112px. h-20 is 5rem = 80px.
    const startHour = 10;
    const hourHeight = view === 'day' ? 112 : 80;

    // Calculate minutes from 10:00
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const minutesFromStart = (currentHours - startHour) * 60 + currentMinutes;

    // Calculate pixel offset
    const topOffset = (minutesFromStart / 60) * hourHeight;

    // Check if within bounds (10:00 - 23:00)
    const isVisible = currentHours >= 10 && currentHours < 23;

    return (
        <section className="relative">
            {/* Current Time Indicator */}
            {isVisible && (
                <div
                    className="absolute left-0 right-0 z-20 pointer-events-none flex items-center"
                    style={{ top: `${topOffset}px` }}
                >
                    {/* Circle Indicator on the left axis */}
                    <div className="w-[56px] flex justify-end pr-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#00bfff] shadow-[0_0_0_2px_rgba(0,191,255,0.2)]"></div>
                    </div>
                    {/* Line across the board */}
                    <div className="flex-1 h-[2px] bg-[#00bfff] shadow-[0_1px_3px_rgba(0,191,255,0.3)]"></div>
                </div>
            )}

            {scheduleData.map((row, i) => (
                <TimeRow
                    key={i}
                    row={row}
                    isEven={i % 2 === 0}
                    view={view}
                    onSlotClick={onSlotClick}
                    onReservationClick={onReservationClick}
                />
            ))}
        </section>
    );
};
