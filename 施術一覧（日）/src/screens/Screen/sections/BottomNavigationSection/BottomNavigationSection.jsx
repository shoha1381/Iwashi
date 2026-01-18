export const BottomNavigationSection = ({ selectedDate, formatDate, isMobile }) => {
    const dateInfo = formatDate(selectedDate);

    const staffMembers = [
        { name: "野明みゆ", room: "3", absent: false },
        { name: "岩中貴俊", room: "1", absent: false },
        { name: "近藤美華", room: "2", absent: false },
        { name: "大森美鈴", room: "4", absent: false },
        { name: "渡邉真平", room: "5", absent: false },
        { name: "前田愛芽", room: "6", absent: false },
        { name: "伊藤彰吾", room: "7", absent: false },
        { surname: "川合", givenName: "玲潤", room: "", absent: true },
        { surname: "中林", givenName: "香奈", room: "", absent: true },
    ];

    const gridTemplate = isMobile
        ? "24px repeat(7, 1fr) repeat(2, 0.5fr)"
        : "56px repeat(7, 1fr) repeat(2, 0.5fr)";

    return (
        <div className="bg-white border-b border-neutral-100 sticky top-0 z-40">
            <div className="grid" style={{ gridTemplateColumns: gridTemplate }}>
                {/* Date Column */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center pt-6 pb-4 border-r border-neutral-100 bg-neutral-50/50">
                    <span className={`font-normal text-neutral-500 tracking-wide ${isMobile ? "text-[8px] md:text-xs" : "text-[10px] md:text-xs"}`}>
                        {dateInfo.dayOfWeek}
                    </span>
                    <span className={`font-light text-neutral-600 ${isMobile ? "text-sm md:text-xl" : "text-base md:text-xl"}`}>
                        {dateInfo.day}
                    </span>
                </div>

                {/* Staff Columns */}
                {staffMembers.map((staff, index) => (
                    <div
                        key={index}
                        className={`min-w-0 pt-5 pb-3 px-1 border-r border-neutral-100 transition-colors cursor-pointer ${staff.absent
                            ? "bg-neutral-50/50 hover:bg-neutral-100/50"
                            : staff.name === "野明みゆ"
                                ? "bg-[#e6f4ff] hover:bg-[#d9effd]"
                                : "hover:bg-neutral-50"
                            }`}
                    >
                        <div className="text-center">
                            {staff.absent ? (
                                // Absent staff - split surname and given name
                                <div className={`font-medium text-neutral-800 leading-snug ${isMobile ? "text-[8px] tracking-tighter" : "text-[9px] md:text-[12px]"}`}>
                                    <div>{staff.surname}</div>
                                    <div>{staff.givenName}</div>
                                </div>
                            ) : (
                                // Normal staff
                                <div className={`font-medium text-neutral-800 leading-snug ${isMobile ? "text-[8px] tracking-tighter" : "text-[9px] md:text-[12px]"}`}>
                                    {staff.name}
                                </div>
                            )}
                            {staff.room && (
                                <div className={`mt-1 inline-flex items-center justify-center rounded-full border border-neutral-500 text-neutral-600 font-normal ${isMobile ? "w-3 h-3 text-[7px]" : "w-3 h-3 md:w-4 md:h-4 text-[8px] md:text-[9px]"}`}>
                                    {staff.room}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
