import { ActionButtonsSection } from "./sections/ActionButtonsSection/ActionButtonsSection";
import { AppointmentScheduleSection } from "./sections/AppointmentScheduleSection";
import { NotesAndProgressSection } from "./sections/NotesAndProgressSection";
import { PatientInfoSection } from "./sections/PatientInfoSection";
import { TaskAndAdviceSection } from "./sections/TaskAndAdviceSection";

export const Screen = () => {
  const verticalLines = [
    { left: 64 },
    { left: 162 },
    { left: 258 },
    { left: 356 },
    { left: 452 },
    { left: 550 },
    { left: 646 },
    { left: 744 },
    { left: 788 },
  ];

  return (
    <div
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] relative"
      data-model-id="1:4419"
    >
      <TaskAndAdviceSection />
      <NotesAndProgressSection />

      {verticalLines.map((line, index) => (
        <img
          key={index}
          className="fixed top-[183px] w-px h-[1011px] object-cover"
          style={{ left: `${line.left}px` }}
          alt="Vector"
          src="/img/vector-47-1.svg"
        />
      ))}

      <div className="fixed top-[203px] left-[65px] w-[97px] h-[901px] border border-solid border-[#46a7fd]" />

      <PatientInfoSection />
      <AppointmentScheduleSection />

      <img
        className="fixed top-[522px] left-16 w-[770px] h-0.5"
        alt="Vector"
        src="/img/vector-69.svg"
      />

      <ActionButtonsSection />
    </div>
  );
};
