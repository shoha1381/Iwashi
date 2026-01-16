import { BodyDiagramSection } from "./sections/BodyDiagramSection";
import { ConcernOptionsSection } from "./sections/ConcernOptionsSection";
import { HeaderSection } from "./sections/HeaderSection";
import { UserInfoSection } from "./sections/UserInfoSection";

export const Screen = () => {
  return (
    <div
      className="flex flex-col h-[1194px] items-start relative bg-white overflow-hidden"
      data-model-id="1:9087"
    >
      <HeaderSection />
      <UserInfoSection />
      <BodyDiagramSection />
      <ConcernOptionsSection />
    </div>
  );
};
