export const PatientProfileSection = () => {
  const patientInfo = {
    name: "三浦 梨花",
    nameReading: "ミウラリカ・女・25歳",
    courseInfo: "SP・１回目（初回）",
    previousVisit: "コース内容\n前回来店",
    goal: "1月の結婚式に向けて、右のエラはりを改善する",
    cautionNotes: "顎・フェイスライン整形あり\n太った/痩せた、肌の色、整形跡",
    cautionWords: "注意事項\n注意ワード",
    photo: "/img/image-2.png",
  };

  return (
    <aside
      className="absolute top-[23px] left-24 w-[111px] h-[766px]"
      role="complementary"
      aria-label="患者プロフィール"
    >
      <img
        className="absolute top-[654px] left-0 w-[111px] h-28 rotate-[-90.00deg] aspect-[0.99]"
        alt="患者の写真"
        src={patientInfo.photo}
      />

      <section className="absolute -top-0.5 left-[61px] w-[50px] h-[337px]">
        <img
          className="absolute top-[166px] left-[25px] w-px h-[37px] rotate-[-90.00deg]"
          alt=""
          src="/img/vector-8.svg"
          role="presentation"
        />

        <img
          className="absolute top-[134px] left-[-89px] w-[231px] h-px rotate-[-90.00deg]"
          alt=""
          src="/img/vector-7.svg"
          role="presentation"
        />

        <div
          className="absolute top-[200px] -left-1 w-[58px] h-[42px] flex items-center justify-center rotate-[-90.00deg] opacity-50 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px]"
          aria-label="注意ワード"
        >
          注意事項
          <br />
          注意ワード
        </div>

        <div
          className="absolute top-16 left-[-60px] w-[170px] h-[42px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px]"
          aria-label="注意事項の詳細"
        >
          顎・フェイスライン整形あり
          <br />
          太った/痩せた、肌の色、整形跡
        </div>

        <div
          className="inline-flex items-center justify-center gap-2 px-[18px] py-[11px] absolute top-[275px] left-[-5px] border border-solid border-[#0000001a] rotate-[-90.00deg]"
          role="button"
          tabIndex={0}
          aria-label="注意セクション"
        >
          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs tracking-[0.60px] leading-[27.6px] whitespace-nowrap">
            注意
          </div>
        </div>
      </section>

      <section className="absolute top-3 left-px w-[50px] h-[323px] flex flex-col gap-[124.5px]">
        <div
          className="flex items-center justify-center ml-[-93.0px] w-[235.97px] h-[38.06px] mt-[99.0px] rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21px]"
          aria-label="治療目標"
        >
          1月の結婚式に向けて、右のエラはりを改善する
        </div>

        <div
          className="inline-flex ml-[-5.5px] w-[61px] h-[50px] relative items-center justify-center gap-2 px-[18px] py-[11px] border border-solid border-[#0000001a] rotate-[-90.00deg]"
          role="button"
          tabIndex={0}
          aria-label="目標セクション"
        >
          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs tracking-[0.60px] leading-[27.6px] whitespace-nowrap">
            目標
          </div>
        </div>
      </section>

      <section className="absolute top-[352px] left-[61px] w-[50px] h-[272px]">
        <h2
          className="absolute top-[195px] left-[-72px] h-8 flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[16.5px] tracking-[0.82px] leading-[31.9px] whitespace-nowrap"
          aria-label="患者名"
        >
          三浦 梨花
        </h2>

        <div
          className="absolute top-[83px] left-[-98px] w-[130px] h-7 flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[11.6px] tracking-[0.58px] leading-[27.6px]"
          aria-label="患者情報"
        >
          ミウラリカ・女・25歳
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
          src="/img/vector-8.svg"
          role="presentation"
        />

        <div
          className="absolute top-[129px] left-[-11px] h-[42px] flex items-center justify-center rotate-[-90.00deg] opacity-50 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px]"
          aria-label="コース情報"
        >
          コース内容
          <br />
          前回来店
        </div>

        <div className="inline-flex items-center gap-[7px] absolute top-[205px] left-px">
          <div
            className="inline-flex items-center justify-center gap-2 px-5 py-[11px] relative flex-[0_0_auto] ml-[-7.50px] mr-[-7.50px] border border-solid border-[#0000001a] rotate-[-90.00deg]"
            role="button"
            tabIndex={0}
            aria-label="施術セクション"
          >
            <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs tracking-[0.60px] leading-[27.6px] whitespace-nowrap">
              施術
            </div>
          </div>
        </div>

        <div
          className="absolute top-[46px] -left-10 h-[21px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px] whitespace-nowrap"
          aria-label="コース詳細"
        >
          SP・１回目（初回）
        </div>
      </section>
    </aside>
  );
};
