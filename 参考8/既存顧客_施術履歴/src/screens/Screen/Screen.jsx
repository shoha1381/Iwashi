import { BottomNavigationSection } from "./sections/BottomNavigationSection";
import { PatientInfoAndTreatmentListSection } from "./sections/PatientInfoAndTreatmentListSection";
import { TreatmentHistorySection } from "./sections/TreatmentHistorySection";

export const Screen = () => {
  return (
    <main
      className="bg-white w-full min-w-[834px] min-h-[1194px] flex justify-center relative"
      data-model-id="1:11389"
    >
      <TreatmentHistorySection />
      <PatientInfoAndTreatmentListSection />
      <button
        className="fixed top-[1053px] left-[632px] w-[120px] h-[90px] z-[3] flex items-center justify-center bg-[#ffffff1a] rounded-[45px] overflow-hidden shadow-[0px_10px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)]"
        aria-label="機能"
        type="button"
      >
        <div className="h-20 w-[108px] flex flex-col items-center gap-[3.1px] rounded-[43px] overflow-hidden">
          <div className="ml-[-0.1px] h-[43.93px] w-[43.93px] relative mt-2.5 aspect-[1]">
            <img
              className="absolute w-[62.50%] h-[12.50%] top-[43.75%] left-[18.75%]"
              alt=""
              src="/img/vector-1.svg"
            />
          </div>

          <span className="flex items-center justify-center -ml-px h-[13px] w-[25px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
            機能
          </span>
        </div>
      </button>

      <BottomNavigationSection />
    </main>
  );
};
