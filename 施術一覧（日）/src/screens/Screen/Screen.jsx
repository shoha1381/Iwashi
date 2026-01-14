import { useState, useRef } from "react";
import { DateNavigationSection } from "./sections/DateNavigationSection";
import { BottomNavigationSection } from "./sections/BottomNavigationSection";
import { ScheduleMainSection } from "./sections/ScheduleMainSection";
import { ScheduleGridSection } from "./sections/ScheduleGridSection";

export const Screen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date(2025, 9, 6));
    const [selectedView, setSelectedView] = useState("day");
    const [selectedStore, setSelectedStore] = useState("銀座店");

    const formatDate = (date) => {
        const days = ["日", "月", "火", "水", "木", "金", "土"];
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const dayOfWeek = days[date.getDay()];

        // Calculate week end date (6 days later)
        const weekEndDate = new Date(date);
        weekEndDate.setDate(weekEndDate.getDate() + 6);
        const weekEndYear = weekEndDate.getFullYear();
        const weekEndMonth = String(weekEndDate.getMonth() + 1).padStart(2, "0");
        const weekEndDay = String(weekEndDate.getDate()).padStart(2, "0");
        const weekEndDayOfWeek = days[weekEndDate.getDay()];

        return {
            full: `${year}/${month}/${day}`,
            dayOfWeek,
            day,
            weekEnd: `${weekEndYear}/${weekEndMonth}/${weekEndDay}`,
            weekEndDay: weekEndDayOfWeek
        };
    };

    const navigateDate = (direction) => {
        const newDate = new Date(selectedDate);
        // In week view, navigate by 7 days; in day view, navigate by 1 day
        const step = selectedView === "week" ? 7 : 1;
        newDate.setDate(newDate.getDate() + (direction * step));
        setSelectedDate(newDate);
    };

    // Swipe Navigation Logic
    const touchStart = useRef(null);
    const touchEnd = useRef(null);

    const onTouchStart = (e) => {
        touchEnd.current = null;
        touchStart.current = { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
    };

    const onTouchMove = (e) => {
        touchEnd.current = { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
    };

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const distanceX = touchStart.current.x - touchEnd.current.x;
        const distanceY = touchStart.current.y - touchEnd.current.y;
        const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

        if (isHorizontalSwipe && Math.abs(distanceX) > 50) {
            if (distanceX > 0) navigateDate(1); // Swipe Left -> Next
            else navigateDate(-1); // Swipe Right -> Prev
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50 flex font-sans overflow-x-hidden">
            {/* Side Navigation */}
            <ScheduleGridSection />

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:mr-16 pb-20 lg:pb-0 w-full h-screen">
                {/* Header - Fixed at top */}
                <DateNavigationSection
                    selectedDate={selectedDate}
                    formatDate={formatDate}
                    navigateDate={navigateDate}
                    selectedView={selectedView}
                    setSelectedView={setSelectedView}
                    selectedStore={selectedStore}
                    setSelectedStore={setSelectedStore}
                />

                {/* Schedule Area - Scrollable with sticky staff row */}
                <div
                    className="flex-1 overflow-y-auto overflow-x-hidden pt-16 w-full"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Staff Row - Sticky at top of scroll area */}
                    <div className="sticky top-0 z-30 bg-white">
                        <BottomNavigationSection selectedDate={selectedDate} formatDate={formatDate} />
                    </div>

                    {/* Schedule Grid */}
                    <div className="w-full bg-white">
                        <ScheduleMainSection />
                    </div>
                </div>
            </div>
        </div>
    );
};
