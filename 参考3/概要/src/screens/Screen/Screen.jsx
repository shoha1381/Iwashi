import { AppointmentScheduleSection } from "./sections/AppointmentScheduleSection";
import { NotesAndContinuitySection } from "./sections/NotesAndContinuitySection";
import { PatientDetailsSection } from "./sections/PatientDetailsSection";
import { PatientInfoHeaderSection } from "./sections/PatientInfoHeaderSection";
import { TaskAndAdviceSection } from "./sections/TaskAndAdviceSection";

export const Screen = () => {
  return (
    <main
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] relative"
      data-model-id="1:8733"
    >
      <div className="flex flex-col w-[834px] items-start fixed top-[-3px] left-0">
        <TaskAndAdviceSection />
        <PatientInfoHeaderSection />
        <AppointmentScheduleSection />
        <PatientDetailsSection />
        <NotesAndContinuitySection />
        <img
          className="absolute top-[243px] left-0 w-[834px] h-px"
          alt="Vector"
          src="/img/vector-85-1.svg"
        />

        <img
          className="absolute top-[352px] left-0 w-[834px] h-px"
          alt="Vector"
          src="/img/vector-87.svg"
        />

        <img
          className="absolute top-[1016px] left-0 w-[834px] h-px"
          alt="Vector"
          src="/img/vector-86.svg"
        />
      </div>
    </main>
  );
};
