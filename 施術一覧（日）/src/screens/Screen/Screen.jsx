import { useState } from "react";
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
        return { full: `${year}/${month}/${day}`, dayOfWeek, day };
    };

    const navigateDate = (direction) => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + direction);
        setSelectedDate(newDate);
    };

    return (
        <div className="min-h-screen bg-neutral-50 flex font-sans">
            {/* Side Navigation */}
            <ScheduleGridSection />

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:mr-16 pb-16 lg:pb-0">
                {/* Header */}
                <DateNavigationSection
                    selectedDate={selectedDate}
                    formatDate={formatDate}
                    navigateDate={navigateDate}
                    selectedView={selectedView}
                    setSelectedView={setSelectedView}
                    selectedStore={selectedStore}
                    setSelectedStore={setSelectedStore}
                />

                {/* Schedule Grid */}
                <div className="flex-1 overflow-auto">
                    <div className="min-w-max bg-white">
                        <BottomNavigationSection selectedDate={selectedDate} formatDate={formatDate} />
                        <ScheduleMainSection />
                    </div>
                </div>
            </div>
        </div>
    );
};
