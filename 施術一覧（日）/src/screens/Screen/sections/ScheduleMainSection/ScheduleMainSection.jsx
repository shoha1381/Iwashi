import { useState, useEffect } from "react";

// Appointment Card
const AppointmentCard = ({ slot, view, onClick, isMobile }) => {
    if (!slot.name && !slot.service) return null;
    if (slot.nameColor === "text-transparent") return null;

    const getCardStyle = () => {
        if (slot.bgColor?.includes("ffd5dd")) return "bg-[#ffd5dd]";
        if (slot.bgColor?.includes("e5d2ec")) return "bg-[#e5d2ec]";
        if (slot.bgColor?.includes("e5f2e5")) return "bg-[#e5f2e5]";
        if (slot.bgColor?.includes("fde5cc")) return "bg-[#fde5cc]";
        return "bg-[#f0f4fa]";
    };

    // Mobile: full cell color, no padding/border-radius at cell level, but padding inside card
    // Desktop: card style with padding and rounded corners
    const cardClass = isMobile
        ? `${getCardStyle()} h-full flex flex-col cursor-pointer p-1` // Added p-1 for mobile inner padding
        : `appointment-card ${slot.bgColor?.includes("ffd5dd") ? "appointment-card-pink" : slot.bgColor?.includes("e5d2ec") ? "appointment-card-purple" : slot.bgColor?.includes("e5f2e5") ? "appointment-card-green" : slot.bgColor?.includes("fde5cc") ? "appointment-card-orange" : "appointment-card-gray"} h-full flex flex-col cursor-pointer hover:ring-2 hover:ring-[#4aa9fc]/50 transition-all`;

    return (
        <div className={cardClass} onClick={onClick}>
            {/* Badge Row */}
            {(slot.badge || slot.icon) && (
                <div className={`flex items-center gap-0.5 ${isMobile ? "mb-1" : "gap-1 mb-1"}`}>
                    {slot.badge && (
                        <span className={`badge ${slot.badge === "G" ? "badge-work" : "badge-alert"} ${isMobile ? "text-[7px] w-3 h-3" : ""}`}>
                            {slot.badge}
                        </span>
                    )}
                    {slot.icon && <img src={slot.icon} alt="" className={`rounded object-cover ${isMobile ? "w-3 h-3" : "w-5 h-5"}`} />}
                </div>
            )}

            {/* Name */}
            {slot.name && (
                <div className={`appointment-name whitespace-normal break-words ${isMobile ? "text-[8px] leading-3" : "text-[9px] md:text-[11px] leading-3 md:leading-tight"}`}>{slot.name}</div>
            )}

            {/* Service - visible only in Day view */}
            {view === 'day' && slot.service && (
                <div className={`${isMobile ? "mt-0.5" : "mt-0.5 md:mt-auto pt-0.5 md:pt-1"}`}>
                    <span className={`appointment-service whitespace-normal break-words block ${isMobile ? "text-[7px] leading-3" : "text-[8px] md:text-[10px] leading-3"}`}>{slot.service}</span>
                </div>
            )}
        </div>
    );
};

// Time Row - with absent columns and highlighted first column
const TimeRow = ({ row, isEven, view, onSlotClick, onReservationClick, isMobile }) => {
    const heightClass = !isMobile && view === 'day' ? 'h-28' : 'h-20';
    const gridTemplate = isMobile
        ? "24px repeat(7, 1fr) repeat(2, 0.5fr)"
        : "56px repeat(7, 1fr) repeat(2, 0.5fr)";

    return (
        <div
            className={`grid ${isEven ? "bg-white" : "bg-neutral-50/30"}`}
            style={{ gridTemplateColumns: gridTemplate }}
        >
            <div className={`flex-shrink-0 ${heightClass} flex items-center justify-center border-r border-b border-neutral-100`}>
                <span className={`font-medium text-neutral-500 ${isMobile ? "text-[7px] tracking-tighter" : "text-[10px] md:text-[13px]"}`}>
                    {isMobile ? row.time : `${row.time}:00`}
                </span>
            </div>

            {row.slots.map((slot, i) => (
                <div
                    key={i}
                    className={`min-w-0 ${heightClass} ${isMobile ? 'p-0' : 'p-1'} border-r border-b border-neutral-100 ${i === 0 ? 'bg-[#e6f4ff]/40' : ''} ${!slot.name && !slot.service ? 'cursor-pointer hover:bg-[#4aa9fc]/5 transition-colors' : ''}`}
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
                        isMobile={isMobile}
                    />
                </div>
            ))
            }

            {/* Absent staff columns */}
            <div className={`min-w-0 ${heightClass} border-r border-b border-neutral-100 bg-neutral-50/50`} />
            <div className={`min-w-0 ${heightClass} border-b border-neutral-100 bg-neutral-50/50`} />
        </div >
    );
};

export const ScheduleMainSection = ({ date, view, onSlotClick, onReservationClick, scheduleData = [], isMobile }) => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    // Current Time Line Position Logic
    // Grid starts at 10:00
    // Each hour is 'h-28' (112px) in Day view (Desktop), 'h-20' (80px) in Week view or Mobile Day view
    // Note: Tailwind h-28 is 7rem = 112px. h-20 is 5rem = 80px.
    const startHour = 10;
    const hourHeight = !isMobile && view === 'day' ? 112 : 80;

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
                    <div className={`${isMobile ? "w-[24px]" : "w-[56px]"} flex justify-end pr-1`}>
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
                    isMobile={isMobile}
                />
            ))}
        </section>
    );
};
