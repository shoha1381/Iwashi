import { useState, useRef, useEffect } from "react";
import { DateNavigationSection } from "./sections/DateNavigationSection";
import { BottomNavigationSection } from "./sections/BottomNavigationSection";
import { ScheduleMainSection } from "./sections/ScheduleMainSection";
import { NavigationSection } from "../../components/NavigationSection";

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

    // Infinite Scroll & Sync Logic
    const [dateList, setDateList] = useState([selectedDate]);
    const [viewingDate, setViewingDate] = useState(selectedDate);
    const isLoadingRef = useRef(false);
    const dateRefs = useRef([]);

    useEffect(() => {
        setDateList([selectedDate]);
        setViewingDate(selectedDate);
    }, [selectedDate, selectedView]);

    const onScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target;

        // Infinite Scroll
        if (scrollHeight - scrollTop - clientHeight < 100 && !isLoadingRef.current) {
            isLoadingRef.current = true;
            setDateList(prev => {
                const last = new Date(prev[prev.length - 1]);
                const next = new Date(last);
                const step = 1;
                next.setDate(next.getDate() + step);
                return [...prev, next];
            });
            setTimeout(() => { isLoadingRef.current = false; }, 500);
        }

        // Active Date Sync
        const stickyOffset = 80; // Approximate height of sticky header
        // Find the section that is currently at the top
        for (let i = dateRefs.current.length - 1; i >= 0; i--) {
            const el = dateRefs.current[i];
            if (el && el.offsetTop <= scrollTop + stickyOffset) {
                // This is the active section
                const targetDate = dateList[i];
                // Only update if day changed (to avoid excessive renders)
                // Use formatting to compare to ignore time differences if any
                if (targetDate && formatDate(targetDate).full !== formatDate(viewingDate).full) {
                    setViewingDate(targetDate);
                }
                break;
            }
        }
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

    // Wheel (Trackpad) Navigation Logic
    const wheelAccumulator = useRef(0);
    const lastWheelTime = useRef(0);
    const isWheelNavigating = useRef(false);

    const onWheel = (e) => {
        // Only navigate if horizontal scroll is dominant
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;

        const now = Date.now();
        // Reset if too much time passed (new gesture)
        if (now - lastWheelTime.current > 200) {
            wheelAccumulator.current = 0;
        }
        lastWheelTime.current = now;

        if (isWheelNavigating.current) return;

        wheelAccumulator.current += e.deltaX;

        // Threshold for navigation to prevent rapid firing
        if (Math.abs(wheelAccumulator.current) > 100) {
            if (wheelAccumulator.current > 0) navigateDate(1);
            else navigateDate(-1);

            // Cooldown
            isWheelNavigating.current = true;
            wheelAccumulator.current = 0;
            setTimeout(() => {
                isWheelNavigating.current = false;
            }, 500);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50 flex font-sans overflow-x-hidden">
            {/* Side Navigation */}
            <NavigationSection />

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:mr-16 pb-20 lg:pb-0 w-full h-screen">
                {/* Header - Fixed at top */}
                <DateNavigationSection
                    selectedDate={viewingDate}
                    formatDate={formatDate}
                    navigateDate={navigateDate}
                    selectedView={selectedView}
                    setSelectedView={setSelectedView}
                    selectedStore={selectedStore}
                    setSelectedStore={setSelectedStore}
                    onTodayClick={() => setSelectedDate(new Date())}
                    onSearchClick={() => alert("検索機能は開発中です")}
                />

                {/* Schedule Area - Scrollable with sticky staff row */}
                <div
                    className="flex-1 overflow-y-auto overflow-x-hidden pt-16 w-full"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onWheel={onWheel}
                    onScroll={onScroll}
                >
                    {/* Staff Row - Sticky at top of scroll area */}
                    <div className="sticky top-0 z-30 bg-white shadow-sm">
                        <BottomNavigationSection selectedDate={viewingDate} formatDate={formatDate} />
                    </div>

                    {/* Schedule Grid - Infinite List */}
                    <div className="w-full bg-white pb-20">
                        {dateList.map((date, index) => (
                            <div key={index} ref={el => dateRefs.current[index] = el}>
                                {index > 0 && (
                                    <div className="bg-neutral-100 py-3 px-4 flex items-center gap-2 border-b border-t border-neutral-200">
                                        <span className="text-sm font-bold text-neutral-600">
                                            {formatDate(date).full} ({formatDate(date).dayOfWeek})
                                        </span>
                                    </div>
                                )}
                                <ScheduleMainSection date={date} view={selectedView} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
