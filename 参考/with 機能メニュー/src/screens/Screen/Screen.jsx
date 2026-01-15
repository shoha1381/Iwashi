import { DateAndStoreSelectorSection } from "./sections/DateAndStoreSelectorSection";
import { NavigationTabSection } from "./sections/NavigationTabSection";
import { QuickActionsSection } from "./sections/QuickActionsSection";
import { ScheduleDetailsSection } from "./sections/ScheduleDetailsSection";
import { StaffScheduleSection } from "./sections/StaffScheduleSection";

export const Screen = () => {
  const verticalLinePositions = [64, 162, 258, 356, 452, 550, 646, 744, 788];

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] relative"
      data-model-id="112:6923"
    >
      <ScheduleDetailsSection />
      <NavigationTabSection />

      {verticalLinePositions.map((leftPosition, index) => (
        <img
          key={`vertical-line-${index}`}
          className="fixed top-[183px] w-px h-[1011px] object-cover"
          style={{ left: `${leftPosition}px` }}
          alt="Vector"
          src="/img/vector-47-1.svg"
        />
      ))}

      <div className="fixed top-[203px] left-[65px] w-[97px] h-[901px] border border-solid border-[#46a7fd]" />

      <StaffScheduleSection />
      <DateAndStoreSelectorSection />

      <img
        className="fixed top-[522px] left-16 w-[770px] h-0.5"
        alt="Vector"
        src="/img/vector-69.svg"
      />

      <div className="fixed top-[calc(50.00%_-_597px)] left-[calc(50.00%_-_417px)] w-[834px] h-[1194px] bg-[#00000080]" />

      <img
        className="fixed top-[46px] left-[785px] w-[25px] h-[25px]"
        alt="More horizontal"
        src="/img/more-horizontal.svg"
      />

      <QuickActionsSection />
    </div>
  );
};
