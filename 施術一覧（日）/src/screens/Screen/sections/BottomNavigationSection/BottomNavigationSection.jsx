export const BottomNavigationSection = ({ selectedDate, formatDate }) => {
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

    return (
        <div className="bg-white border-b border-neutral-100 sticky top-0 z-40">
            <div className="flex">
                {/* Date Column */}
                <div className="w-16 min-w-[64px] flex-shrink-0 flex flex-col items-center justify-center pt-6 pb-4 border-r border-neutral-100 bg-neutral-50/50">
                    <span className="text-xs font-normal text-neutral-500 tracking-wide">{dateInfo.dayOfWeek}</span>
                    <span className="text-xl font-light text-neutral-600">{dateInfo.day}</span>
                </div>

                {/* Staff Columns */}
                {staffMembers.map((staff, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 pt-5 pb-3 px-1 border-r border-neutral-100 transition-colors cursor-pointer ${staff.absent
                                ? "w-14 min-w-[56px] bg-neutral-50/50 hover:bg-neutral-100/50"
                                : "w-24 min-w-[96px] hover:bg-neutral-50"
                            }`}
                    >
                        <div className="text-center">
                            {staff.absent ? (
                                // Absent staff - split surname and given name
                                <div className="text-[12px] font-medium text-neutral-800 leading-snug">
                                    <div>{staff.surname}</div>
                                    <div>{staff.givenName}</div>
                                </div>
                            ) : (
                                // Normal staff
                                <div className="text-[12px] font-medium text-neutral-800 leading-snug">
                                    {staff.name}
                                </div>
                            )}
                            {staff.room && (
                                <div className="mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full border border-neutral-500 text-neutral-600 text-[9px] font-normal">
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
