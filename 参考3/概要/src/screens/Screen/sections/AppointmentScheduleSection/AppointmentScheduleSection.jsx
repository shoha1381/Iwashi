export const AppointmentScheduleSection = () => {
  const appointmentData = [
    {
      label: "目標",
      content: "1月の結婚式に向けて、右のエラはりを改善する",
    },
    {
      label: "注意事項",
      content: "顎・フェイスライン整形あり",
    },
    {
      label: "注意ワード",
      content: "太った/痩せた、肌の色、整形跡",
    },
  ];

  return (
    <section
      className="flex flex-col w-[536px] items-start gap-2 px-[63px] py-[17px] relative flex-[0_0_auto]"
      aria-label="予約スケジュール情報"
    >
      <dl className="relative self-stretch w-full h-[75px]">
        <div className="absolute top-0 left-0 w-[111px] h-[75px] flex flex-col items-start justify-center">
          {appointmentData.map((item, index) => (
            <dt
              key={`label-${index}`}
              className="text-black text-[13px] tracking-[0.65px] leading-[25px] [font-family:'Noto_Sans_JP',Helvetica] font-medium"
            >
              {item.label}
            </dt>
          ))}
        </div>

        <div className="absolute top-0 left-28 w-[298px] h-[75px] flex flex-col items-start justify-center">
          {appointmentData.map((item, index) => (
            <dd
              key={`content-${index}`}
              className="text-black text-[13px] tracking-[0.65px] leading-[25px] [font-family:'Noto_Sans_JP',Helvetica] font-medium"
            >
              {item.content}
            </dd>
          ))}
        </div>
      </dl>
    </section>
  );
};
