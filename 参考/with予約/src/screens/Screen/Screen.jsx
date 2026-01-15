import { AppointmentActionsSection } from "./sections/AppointmentActionsSection";
import { AppointmentDetailsSection } from "./sections/AppointmentDetailsSection";
import { AppointmentInfoSection } from "./sections/AppointmentInfoSection";
import { AppointmentServiceSelectionSection } from "./sections/AppointmentServiceSelectionSection";
import { AppointmentTimeSection } from "./sections/AppointmentTimeSection";

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
      data-model-id="13:6591"
    >
      <AppointmentInfoSection />
      <AppointmentTimeSection />

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

      <AppointmentActionsSection />
      <AppointmentDetailsSection />

      <img
        className="fixed top-[522px] left-16 w-[770px] h-0.5"
        alt="Vector"
        src="/img/vector-69.svg"
      />

      <div className="fixed top-[calc(50.00%_-_597px)] left-[calc(50.00%_-_417px)] w-[834px] h-[1194px] bg-[#00000080]" />

      <AppointmentServiceSelectionSection />
    </div>
  );
};
