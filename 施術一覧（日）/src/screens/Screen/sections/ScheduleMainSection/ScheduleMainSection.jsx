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

export const ScheduleMainSection = ({ date, view, onSlotClick, onReservationClick, scheduleData = [] }) => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

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

    // Check if within bounds (10:00 - 23:00) AND if it is today
    const isToday = date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear();

    const isVisible = isToday && currentHours >= 10 && currentHours < 23;

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
