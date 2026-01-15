import { ClinicInfoSection } from "./sections/ClinicInfoSection/ClinicInfoSection";
import { PatientFormSection } from "./sections/PatientFormSection";

export const Screen = () => {
  return (
    <div
      className="bg-white w-full min-w-[834px] min-h-[1194px] flex justify-center relative"
      data-model-id="1:7240"
    >
      <ClinicInfoSection />
      <PatientFormSection />
    </div>
  );
};
