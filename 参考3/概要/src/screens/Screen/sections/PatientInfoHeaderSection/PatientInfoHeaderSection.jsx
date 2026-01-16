export const PatientInfoHeaderSection = () => {
  const patientInfo = {
    name: "三浦 梨花",
    gender: "女",
    age: "25歳",
    birthdate: "2000/9/23",
    profileImage: "/img/gemini-generated-image-2.png",
    leftColumn: [
      { label: "住所", value: "東京都台東区上野公園 9-99" },
      { label: "最寄り駅", value: "上野駅" },
      { label: "通いやすい時間帯", value: "日,月 15:00~" },
      { label: "仕事", value: "会社員" },
      { label: "休み", value: "家でまったり" },
    ],
    rightColumn: [
      { label: "習慣", value: "" },
      { label: "出身", value: "栃木" },
      { label: "きっかけ", value: "Instagram" },
      { label: "趣味", value: "映画" },
      { label: "習い事", value: "なし" },
    ],
  };

  return (
    <header className="relative self-stretch w-full h-[142px]">
      <div className="relative top-7 left-[63px] w-[722px] h-[97px]">
        <div className="inline-flex flex-col items-start justify-center absolute top-[7px] left-28">
          <h1 className="relative flex items-center justify-center w-fit mt-[-1.55px] text-black text-[23.3px] tracking-[1.16px] leading-[45.0px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] font-medium">
            {patientInfo.name}
          </h1>
        </div>

        <div className="absolute top-[58px] left-28 w-[184px] h-[34px] flex items-center justify-center text-[#999999] text-sm tracking-[0.70px] leading-[33.2px] [font-family:'Noto_Sans_JP',Helvetica] font-medium">
          {patientInfo.gender}・{patientInfo.age}（{patientInfo.birthdate}）
        </div>

        <img
          className="absolute top-0.5 left-0 w-[87px] h-[88px]"
          alt={`${patientInfo.name}のプロフィール画像`}
          src={patientInfo.profileImage}
        />

        <div className="absolute top-0 left-[302px] w-[238px] h-[97px] flex gap-2">
          <dl className="flex items-center justify-center mt-[5.7px] w-[81px] h-[86px] text-black text-[9.6px] tracking-[0.48px] leading-[17.1px] [font-family:'Noto_Sans_JP',Helvetica] font-medium">
            {patientInfo.leftColumn.map((item, index) => (
              <dt key={index}>
                {item.label}
                {index < patientInfo.leftColumn.length - 1 && <br />}
              </dt>
            ))}
          </dl>

          <dl className="flex items-center justify-center mt-[5.7px] w-[149px] h-[86px] text-black text-[9.6px] tracking-[0.48px] leading-[17.1px] [font-family:'Noto_Sans_JP',Helvetica] font-medium">
            {patientInfo.leftColumn.map((item, index) => (
              <dd key={index}>
                ：　{item.value}
                {index < patientInfo.leftColumn.length - 1 && <br />}
              </dd>
            ))}
          </dl>
        </div>

        <div className="absolute top-0 left-[563px] w-40 h-[97px] flex gap-[49px]">
          <dl className="flex items-center justify-center mt-[5.7px] w-10 h-[86px] ml-0 text-black text-[9.6px] tracking-[0.48px] leading-[17.1px] [font-family:'Noto_Sans_JP',Helvetica] font-medium">
            {patientInfo.rightColumn.map((item, index) => (
              <dt key={index}>
                {item.label}
                {index < patientInfo.rightColumn.length - 1 && <br />}
              </dt>
            ))}
          </dl>

          <dl className="flex items-center justify-center mt-[5.7px] w-[71px] h-[86px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[9.6px] tracking-[0.48px] leading-[17.1px]">
            {patientInfo.rightColumn.map((item, index) => (
              <dd key={index}>
                ：{item.value && `　${item.value}`}
                {index < patientInfo.rightColumn.length - 1 && <br />}
              </dd>
            ))}
          </dl>
        </div>
      </div>
    </header>
  );
};
