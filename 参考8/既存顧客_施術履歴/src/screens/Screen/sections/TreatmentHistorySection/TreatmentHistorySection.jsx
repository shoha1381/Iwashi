import { useState } from "react";

export const TreatmentHistorySection = () => {
  const [expandedSessions, setExpandedSessions] = useState({ session2: true });

  const toggleSession = (sessionId) => {
    setExpandedSessions((prev) => ({
      ...prev,
      [sessionId]: !prev[sessionId],
    }));
  };

  const treatmentSessions = [
    {
      id: "session2",
      title: "SP",
      subtitle: "2回目・2025/8/22 〜2025/9/27",
      treatments: [
        {
          sessionNumber: 5,
          totalSessions: 13,
          date: "9/27",
          dayOfWeek: "土",
          time: "18:00〜",
          notes:
            "むくみがほぼ消失。フェイスラインがシャープに。肩の緊張も軽減。ビフォーアフター提示、アンケート回答、キャンペーン案内。",
          areas: ["小顔矯正", "背中", "頭", "肩"],
        },
        {
          sessionNumber: 4,
          totalSessions: 13,
          date: "9/14",
          dayOfWeek: "日",
          time: "10:30〜",
          notes:
            "左右差がほぼ消え、顎のライン安定。笑顔も自然に。写真比較とフィードバック。",
          areas: ["小顔矯正", "背中", "頭", "肩"],
        },
        {
          sessionNumber: 3,
          totalSessions: 9,
          date: "9/5",
          dayOfWeek: "金",
          time: "14:00〜",
          notes:
            "頬の位置がやや上がり、顎ラインが安定。肩の張りはまだある。生活習慣（睡眠・PC姿勢）のヒアリング。むくみがほぼ消失。フェイスラインがシャープに。肩の緊張も軽減。ビ",
          areas: ["小顔矯正", "背中", "頭", "肩"],
        },
        {
          sessionNumber: 2,
          totalSessions: 7,
          date: "8/29",
          dayOfWeek: "金",
          time: "19:00〜",
          notes:
            "顎まわりがややスッキリ。首の付け根に張り残る。噛み癖注意を案内。",
          areas: ["小顔矯正", "背中", "頭", "肩"],
        },
        {
          sessionNumber: 1,
          totalSessions: 6,
          date: "8/22",
          dayOfWeek: "金",
          time: "18:30〜",
          notes: "むくみと左右差が目立ち、首・肩の張りも強い。姿勢チェック。",
          areas: ["小顔矯正", "背中", "頭", "肩"],
        },
      ],
    },
    {
      id: "session1",
      title: "SP",
      subtitle: "1回目・2025/7/21 〜2025/8/18",
      treatments: [],
    },
  ];

  return (
    <section className="flex z-[1] mt-[140px] w-[794px] h-[806px] relative flex-col items-start gap-5">
      {expandedSessions.session2 && (
        <article className="relative self-stretch w-full h-[632px] bg-[#ffffff47] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff1a] shadow-[0px_0px_5px_#00000026] backdrop-blur-[18.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.3px)_brightness(100%)]">
          <header className="absolute top-4 left-[47px] h-[39px] flex items-center justify-center">
            <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-transparent text-xl tracking-[1.00px] leading-[38.7px] whitespace-nowrap">
              <span className="text-black tracking-[0.20px]">
                {treatmentSessions[0].title}{" "}
              </span>
              <span className="text-[#999999] text-[15px] tracking-[0.11px]">
                {treatmentSessions[0].subtitle}
              </span>
            </h2>
          </header>

          <img
            className="absolute top-[67px] left-0 w-[794px] h-px"
            alt=""
            src="/img/vector-79.svg"
          />

          <img
            className="absolute top-[92px] left-0 w-[794px] h-px"
            alt=""
            src="/img/vector-79.svg"
          />

          <button
            className="absolute top-4 left-[712px] w-[35px] h-[35px] flex bg-[#46a7fd] rounded-[17.5px] rotate-[-90.00deg] shadow-[0px_0px_4px_#0000001a] cursor-pointer"
            onClick={() => toggleSession("session2")}
            aria-label="セッションを折りたたむ"
          >
            <img
              className="mt-[7.0px] w-[21px] h-[21px] ml-[6.0px] rotate-[90.00deg]"
              alt=""
              src="/img/chevron-left.svg"
            />
          </button>

          <div className="absolute top-[70px] left-[383px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13px] text-center tracking-[0.91px] leading-[normal]">
            備考
          </div>

          <div className="absolute top-[70px] left-[701px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13px] text-center tracking-[0.91px] leading-[normal]">
            施術部位
          </div>

          <img
            className="absolute top-[67px] left-[138px] w-px h-[564px]"
            alt=""
            src="/img/vector-78.svg"
          />

          <img
            className="absolute top-[67px] left-[654px] w-px h-[564px]"
            alt=""
            src="/img/vector-78.svg"
          />

          {treatmentSessions[0].treatments.map((treatment, index) => {
            const topPositions = [92, 200, 308, 416, 524];
            const topPosition = topPositions[index];
            const rowHeight = 108;
            const contentTop = topPosition + 12;

            return (
              <div key={index}>
                {index > 0 && (
                  <>
                    <img
                      className={`absolute left-[79px] w-[715px] h-px`}
                      style={{ top: `${topPosition}px` }}
                      alt=""
                      src="/img/vector-85.svg"
                    />
                    <img
                      className={`absolute left-0 w-[51px] h-px`}
                      style={{ top: `${topPosition}px` }}
                      alt=""
                      src="/img/vector-97.svg"
                    />
                  </>
                )}

                <img
                  className={`absolute left-16 w-px`}
                  style={{
                    top: `${topPosition}px`,
                    height:
                      index === 4 ? "66px" : index === 0 ? "94px" : "81px",
                  }}
                  alt=""
                  src={
                    index === 4
                      ? "/img/vector-93.svg"
                      : index === 0
                        ? "/img/vector-75.svg"
                        : "/img/vector-92.svg"
                  }
                />

                <div
                  className="absolute left-[30px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[11.3px] tracking-[0] leading-[normal]"
                  style={{ top: `${contentTop + 46}px` }}
                >
                  回目
                </div>

                <div
                  className="absolute left-3.5 text-black text-[21.7px] tracking-[0] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] font-normal whitespace-nowrap"
                  style={{ top: `${contentTop + 37}px` }}
                >
                  {treatment.sessionNumber}
                </div>

                <p
                  className="absolute [font-family:'Noto_Sans_JP',Helvetica] font-normal text-transparent text-[14.4px] text-center tracking-[1.01px] leading-[25px]"
                  style={{
                    top: `${contentTop + 28}px`,
                    left: index === 2 ? "81px" : "79px",
                  }}
                >
                  <span className="text-black tracking-[0.15px]">
                    {treatment.date}{" "}
                  </span>
                  <span className="text-[#999999] text-xs tracking-[0.10px]">
                    {treatment.dayOfWeek}
                    <br />
                  </span>
                  <span className="text-black text-xs tracking-[0.10px]">
                    {treatment.time}
                  </span>
                </p>

                <div
                  className="absolute h-[17px] flex items-center justify-center text-[#999999] text-[11px] tracking-[0.77px] leading-[17px] [font-family:'Noto_Sans_JP',Helvetica] font-normal whitespace-nowrap"
                  style={{
                    top: `${topPosition + (index === 0 ? 99 : 107)}px`,
                    left: index === 0 ? "59px" : "62px",
                  }}
                >
                  {treatment.totalSessions}
                </div>

                <input
                  type="checkbox"
                  className={`absolute left-[51px] w-7 h-7 rounded-[14px] border border-solid border-[#e8eaed] cursor-pointer`}
                  style={{ top: `${topPosition + 94}px` }}
                  aria-label={`${treatment.sessionNumber}回目の治療を選択`}
                />

                <div
                  className="absolute left-[167px] w-[460px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[13px] tracking-[0.91px] leading-[21px]"
                  style={{ top: `${contentTop}px` }}
                >
                  {treatment.notes}
                </div>

                <div
                  className="absolute left-[683px] h-[84px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[13px] tracking-[0.91px] leading-[21px]"
                  style={{ top: `${contentTop}px` }}
                >
                  {treatment.areas.map((area, areaIndex) => (
                    <span key={areaIndex}>
                      {area}
                      {areaIndex < treatment.areas.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </article>
      )}

      <article className="relative self-stretch w-full h-[67px] bg-[#ffffff47] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff1a] shadow-[0px_0px_5px_#00000026] backdrop-blur-[18.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.3px)_brightness(100%)]">
        <header className="absolute top-4 left-[47px] h-[39px] flex items-center justify-center">
          <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-transparent text-xl tracking-[1.00px] leading-[38.7px] whitespace-nowrap">
            <span className="text-black tracking-[0.20px]">
              {treatmentSessions[1].title}{" "}
            </span>
            <span className="text-[#999999] text-[15px] tracking-[0.11px]">
              {treatmentSessions[1].subtitle}
            </span>
          </h2>
        </header>

        <button
          className="absolute top-4 left-[712px] w-[35px] h-[35px] flex bg-[#ffffff1a] rounded-[17.5px] shadow-[0px_0px_4px_#0000001a] cursor-pointer"
          onClick={() => toggleSession("session1")}
          aria-label="セッションを展開"
        >
          <img
            className="mt-[7px] w-[21px] h-[21px] ml-1.5"
            alt=""
            src="/img/chevron-left-1.svg"
          />
        </button>
      </article>

      <article className="relative self-stretch w-full h-[67px] bg-[#ffffff47] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff1a] shadow-[0px_0px_5px_#00000026] backdrop-blur-[18.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(18.3px)_brightness(100%)]">
        <header className="absolute top-4 left-[47px] h-[39px] flex items-center justify-center">
          <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-xl tracking-[1.00px] leading-[38.7px] whitespace-nowrap">
            問診票
          </h2>
        </header>

        <a
          href="#"
          className="absolute top-4 left-[712px] w-[35px] h-[35px] flex bg-[#ffffff1a] rounded-[17.5px] shadow-[0px_0px_4px_#0000001a]"
          aria-label="問診票を開く"
        >
          <img
            className="mt-2 w-5 h-5 ml-2"
            alt=""
            src="/img/arrow-up-right.svg"
          />
        </a>
      </article>
    </section>
  );
};
