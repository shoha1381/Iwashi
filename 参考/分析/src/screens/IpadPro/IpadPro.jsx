import { AISuggestionsSection } from "./sections/AISuggestionsSection";
import { AchievementMetricsSection } from "./sections/AchievementMetricsSection";
import { PerformanceOverviewSection } from "./sections/PerformanceOverviewSection";

export const IpadPro = () => {
  return (
    <main
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] flex flex-col relative"
      data-model-id="1:8107"
      role="main"
      aria-label="Dashboard"
    >
      <div className="flex-1 flex flex-col overflow-hidden">
        <AchievementMetricsSection />
        <AISuggestionsSection />
        <PerformanceOverviewSection />
      </div>
    </main>
  );
};
