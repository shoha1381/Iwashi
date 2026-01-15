export const PatientDetailsSidebarSection = () => {
  const patientData = {
    name: "佐藤 祥羽",
    nameKana: "サトウショウハ",
    gender: "男",
    age: "21歳",
    courseInfo: "SP・１回目（計16回）",
    lastVisit: "7日前",
    treatmentDetails: {
      line1: "鼻の整形あり",
      line2: "鼻が高い/肌荒れ",
    },
    goal: "同窓会に向けて、面長を改善する",
    warnings: {
      line1: "注意事項",
      line2: "注意ワード",
    },
    photo: "/img/j4230615-2.png",
  };

  const sectionLabels = {
    treatment: "施術",
    goal: "目標",
    warning: "注意",
  };

  const additionalInfo = {
    courseLabel: "コース内容",
    lastVisitLabel: "前回来店",
  };

  return (
    <aside
      className="absolute top-[23px] left-24 w-[111px] h-[766px]"
      role="complementary"
      aria-label="患者詳細サイドバー"
    >
      <section
        className="absolute -top-0.5 left-[61px] w-[50px] h-[337px]"
        aria-label="注意事項セクション"
      >
        <img
          className="absolute top-[166px] left-[25px] w-px h-[37px] rotate-[-90.00deg]"
          alt=""
          src="/img/vector-8-1.svg"
          role="presentation"
        />

        <img
          className="absolute top-[134px] left-[-89px] w-[231px] h-px rotate-[-90.00deg]"
          alt=""
          src="/img/vector-7-1.svg"
          role="presentation"
        />

        <div className="absolute top-[200px] -left-1 w-[58px] h-[42px] flex items-center justify-center rotate-[-90.00deg] opacity-50 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px]">
          {patientData.warnings.line1}
          <br />
          {patientData.warnings.line2}
        </div>

        <div className="absolute top-16 left-[-60px] w-[170px] h-[42px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px]">
          {patientData.treatmentDetails.line1}
          <br />
          {patientData.treatmentDetails.line2}
        </div>

        <div className="inline-flex items-center justify-center gap-2 px-[18px] py-[11px] absolute top-[275px] left-[-5px] border border-solid border-[#0000001a] rotate-[-90.00deg]">
          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs tracking-[0.60px] leading-[27.6px] whitespace-nowrap">
            {sectionLabels.warning}
          </div>
        </div>
      </section>

      <section
        className="absolute top-3 left-px w-[50px] h-[323px] flex flex-col gap-[124.5px]"
        aria-label="目標セクション"
      >
        <div className="flex items-center justify-center ml-[-93.0px] w-[235.97px] h-[38.06px] mt-[99.0px] rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21px]">
          {patientData.goal}
        </div>

        <div className="inline-flex ml-[-5.5px] w-[61px] h-[50px] relative items-center justify-center gap-2 px-[18px] py-[11px] border border-solid border-[#0000001a] rotate-[-90.00deg]">
          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs tracking-[0.60px] leading-[27.6px] whitespace-nowrap">
            {sectionLabels.goal}
          </div>
        </div>
      </section>

      <section
        className="absolute top-[352px] left-[61px] w-[50px] h-[272px]"
        aria-label="患者情報セクション"
      >
        <h2 className="absolute top-[195px] left-[-72px] h-8 flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[16.5px] tracking-[0.82px] leading-[31.9px] whitespace-nowrap">
          {patientData.name}
        </h2>

        <div className="absolute top-[73px] left-[-108px] w-[150px] h-7 flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[11.6px] tracking-[0.58px] leading-[27.6px]">
          {patientData.nameKana}・{patientData.gender}・{patientData.age}
        </div>

        <img
          className="absolute top-[92px] left-[-67px] w-[185px] h-px rotate-[-90.00deg]"
          alt=""
          src="/img/vector-6-1.svg"
          role="presentation"
        />

        <img
          className="absolute top-[101px] left-6 w-px h-[37px] rotate-[-90.00deg]"
          alt=""
          src="/img/vector-8-1.svg"
          role="presentation"
        />

        <div className="absolute top-[129px] left-[-11px] h-[42px] flex items-center justify-center rotate-[-90.00deg] opacity-50 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px]">
          {additionalInfo.courseLabel}
          <br />
          {additionalInfo.lastVisitLabel}
        </div>

        <div className="inline-flex items-center gap-[7px] absolute top-[205px] left-px">
          <div className="inline-flex items-center justify-center gap-2 px-5 py-[11px] relative flex-[0_0_auto] ml-[-7.50px] mr-[-7.50px] border border-solid border-[#0000001a] rotate-[-90.00deg]">
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs tracking-[0.60px] leading-[27.6px] whitespace-nowrap">
              {sectionLabels.treatment}
            </div>
          </div>
        </div>

        <div className="absolute top-[39px] left-[-47px] h-[21px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px] whitespace-nowrap">
          {patientData.courseInfo}
        </div>

        <div className="absolute top-[84px] left-5 h-[21px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px] whitespace-nowrap">
          {patientData.lastVisit}
        </div>
      </section>

      <img
        className="absolute top-[653px] -left-px w-28 h-[113px] rotate-[-90.00deg] aspect-[0.99]"
        alt={`${patientData.name}の写真`}
        src={patientData.photo}
      />
    </aside>
  );
};
