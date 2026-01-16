import { BodyConcernSection } from "./sections/BodyConcernSection";
import { NavigationTabSection } from "./sections/NavigationTabSection";

export const IpadPro = () => {
  return (
    <main
      className="bg-white overflow-hidden w-full min-w-[834px] min-h-[1194px] flex relative"
      data-model-id="1:9828"
    >
      <BodyConcernSection />
      <NavigationTabSection />
    </main>
  );
};
