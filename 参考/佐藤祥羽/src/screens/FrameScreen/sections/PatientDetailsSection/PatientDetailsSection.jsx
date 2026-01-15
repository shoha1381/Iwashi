export const PatientDetailsSection = () => {
  const tableColumns = [
    { id: "item", label: "項目" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
    { id: "4", label: "4" },
    { id: "5", label: "5" },
    { id: "6", label: "6" },
    { id: "7", label: "7" },
    { id: "8", label: "8" },
    { id: "9", label: "9" },
    { id: "10", label: "10" },
    { id: "11", label: "11" },
    { id: "12", label: "12" },
    { id: "13", label: "13" },
    { id: "14", label: "14" },
    { id: "15", label: "15" },
    { id: "frequency", label: "①\n頻度" },
    { id: "effect", label: "①\n効果" },
    { id: "continue", label: "③\n継続" },
    { id: "price", label: "④\n代金" },
    { id: "reservation", label: "⑤\n予約" },
    { id: "payment", label: "⑤\n支払い" },
    { id: "five-times", label: "⑤\n５回分" },
    { id: "menu", label: "⑤\nメニュー" },
    { id: "photo", label: "⑧\n写真" },
  ];

  const achievementData = [
    { value: "3" },
    { value: "4" },
    { value: "3" },
    { value: "4" },
    { value: "4" },
    { value: "3" },
    { value: "4" },
    { value: "4" },
    { value: "3" },
    { value: "4" },
    { value: "3" },
    { value: "4" },
    { value: "4" },
    { value: "4" },
  ];

  return (
    <section className="flex flex-col w-[804px] items-start gap-[15px] absolute top-[154px] left-[calc(50.00%_-_309px)] rotate-[-90.00deg]">
      <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
        <article className="relative w-[289px] h-[206.2px] bg-[#ffffff26] rounded-[9.52px] overflow-hidden border-[0.76px] border-solid border-[#ffffff1a] shadow-[0px_0px_4.48px_#00000026]">
          <div className="absolute top-[62px] left-[87px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11.4px] tracking-[0.57px] leading-[33.2px] whitespace-nowrap">
            施術料金支払い
          </div>

          <div className="flex flex-col w-[178px] items-start gap-[8.34px] absolute top-[66px] left-[75px]">
            <input
              type="text"
              className="relative self-stretch w-full h-[25.1px] rounded-[4.48px] border-[0.9px] border-solid border-[#00000033]"
              aria-label="施術料金支払い"
            />
          </div>

          <img
            className="absolute top-[50px] left-0 w-[289px] h-px"
            alt=""
            src="/img/vector-80.svg"
          />

          <header className="absolute top-3.5 left-[23px] w-[66px] h-[23px] flex gap-[14.8px]">
            <div
              className="mt-0 w-[23.22px] h-[23.22px] ml-[0.3px] aspect-[1]"
              aria-hidden="true"
            >
              <div className="relative w-[66.67%] h-[83.33%] top-[8.33%] left-[16.66%] bg-[url(/img/vector.svg)] bg-[100%_100%]" />
            </div>

            <h3 className="flex items-center justify-center mt-[1.6px] w-[37px] h-[21px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm tracking-[0.70px] leading-[normal]">
              ToDo
            </h3>
          </header>

          <img
            className="absolute top-[70px] left-[39px] w-[18px] h-[18px]"
            alt="チェック"
            src="/img/check.svg"
          />
        </article>

        <article className="relative w-[502.01px] h-[205.82px] bg-[#ffffff26] rounded-[9.51px] overflow-hidden border-[0.76px] border-solid border-[#ffffff1a] shadow-[0px_0px_4.61px_#00000026]">
          <p className="absolute top-[72px] left-4 w-[472px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] tracking-[0.65px] leading-[24.3px]">
            初回から5回分まとめてスタートさせる流れを徹底しましょう。
            <br />
            5回目の来院時に次の5回分を必ず提案・決済してください。
            <br />
            施術前に前払いと次回予約確定
            を行い、来院間隔を空けないようにしましょう。
          </p>

          <header className="absolute top-3 left-[21px] w-[92px] h-[25px]">
            <div
              className="absolute w-[26.67%] top-px left-0 h-[25px] aspect-[1]"
              aria-hidden="true"
            >
              <img
                className="absolute w-[83.33%] h-[83.33%] top-[8.34%] left-[8.33%]"
                alt=""
                src="/img/vector-1.svg"
              />
            </div>

            <h3 className="absolute top-1 left-[34px] h-[21px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm tracking-[0.70px] leading-[normal]">
              アドバイス
            </h3>
          </header>

          <img
            className="absolute top-[50px] left-0 w-[502px] h-px"
            alt=""
            src="/img/vector-80-1.svg"
          />
        </article>
      </div>

      <article className="relative self-stretch w-full h-[178px] bg-[#ffffff26] rounded-[10.63px] overflow-hidden border-[0.85px] border-solid border-[#ffffff1a] shadow-[0px_0px_5.15px_#00000026]">
        <header className="absolute top-[17px] left-[26px] w-[60px] h-5">
          <h3 className="absolute top-0 left-[35px] h-[21px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm tracking-[0.70px] leading-[normal]">
            備考
          </h3>

          <img
            className="w-[36.67%] top-0 left-[-5.00%] h-[22px] absolute aspect-[1]"
            alt=""
            src="/img/icon-park-solid-notes.svg"
          />
        </header>

        <img
          className="absolute top-[49px] left-0 w-[803px] h-px"
          alt=""
          src="/img/vector-79.svg"
        />

        <p className="absolute top-[73px] left-[calc(50.00%_-_363px)] w-[725px] h-[73px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11.6px] tracking-[0.58px] leading-[24.3px]">
          施術中、首まわりと肩の緊張が強く、特に右側に左右差が見られたため、次回以降はデコルテ〜肩甲骨まわりの可動域改善を優先すると効果が出やすいと感じた。また、顎まわりのむくみが出やすい体質のため、写真撮影の前に軽いリンパ流しを入れるとBefore/Afterの変化がより明確になりそう。
        </p>
      </article>

      <div className="relative w-28 h-[800.91px] mb-[-344.45px] rounded-[10.9px] overflow-hidden rotate-[90.00deg] shadow-[0px_0px_5.14px_#00000026]">
        <div className="absolute top-[360px] left-[-360px] w-[801px] h-[81px] flex rotate-[-90.00deg]">
          <div className="w-[801.28px] h-[35.98px] relative bg-gray-50 border-b-[1.08px] [border-bottom-style:solid] border">
            <div className="absolute -top-px left-0 w-[61px] h-9 flex border-r-[1.08px] [border-right-style:solid] border">
              <div className="flex items-center justify-center mt-[2.2px] w-[62.93px] h-8 ml-[17.3px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#4a5565] text-[12.9px] tracking-[0.90px] leading-[31.5px]">
                項目
              </div>
            </div>

            {tableColumns.slice(1, 16).map((col, index) => {
              const positions = [
                61, 86, 114, 142, 169, 196, 221, 249, 276, 304, 331, 359, 388,
                416,
              ];
              const widths = [
                27, 28, 28, 27, 27, 26, 28, 28, 28, 28, 28, 29, 28, 28,
              ];

              return (
                <div
                  key={col.id}
                  className={`${index === 0 ? "top-px" : index === 1 ? "top-px" : index === 2 ? "top-0" : index === 3 ? "top-0" : index === 4 ? "top-0" : index === 5 ? "top-0" : index === 6 ? "top-px" : index === 7 ? "top-0" : index === 8 ? "-top-px" : index === 9 ? "-top-px" : index === 10 ? "-top-px" : index === 11 ? "-top-px" : index === 12 ? "-top-px" : "-top-px"} absolute h-9 flex border-r-[1.08px] [border-right-style:solid] border`}
                  style={{
                    left: `${positions[index]}px`,
                    width: `${widths[index]}px`,
                  }}
                >
                  <div
                    className={`mt-[9.6px] h-[18px] ${col.label.length > 1 ? "w-[11px] ml-[7.6px]" : "w-1.5 ml-[10.3px]"} [font-family:'Inter',Helvetica] font-bold text-[#697282] text-[9px] text-center tracking-[0] leading-[17.2px] whitespace-nowrap`}
                  >
                    {col.label}
                  </div>
                </div>
              );
            })}

            {tableColumns.slice(16).map((col, index) => {
              const positions = [444, 485, 524, 565, 604, 644, 684, 724, 763];
              const widths = [41, 39, 41, 39, 41, 39, 39, 39, 41];
              const topClasses = [
                "top-0",
                "top-0",
                "top-0",
                "top-0",
                "top-0",
                "top-0",
                "top-0",
                "top-0",
                "-top-px",
              ];

              return (
                <div
                  key={col.id}
                  className={`${topClasses[index]} absolute h-9 flex justify-center border-r-[1.08px] [border-right-style:solid] border`}
                  style={{
                    left: `${positions[index]}px`,
                    width: `${widths[index]}px`,
                  }}
                >
                  <div className="mt-[2.0px] w-[35.96px] h-8 [font-family:'Inter',Helvetica] font-bold text-[#697282] text-[7.9px] text-center tracking-[0] leading-[15.8px] whitespace-pre-line">
                    {col.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute top-[364px] left-[-327px] w-[801px] h-[73px] flex flex-col gap-[1.1px] rotate-[-90.00deg]">
          <div className="h-[40.34px] mt-[-1.1px] ml-0 w-[801.28px] relative bg-white border-b-[1.08px] [border-bottom-style:solid] border">
            <div className="absolute -top-px left-0 w-[61px] h-[76px] flex border-r-[1.08px] [border-right-style:solid] border">
              <div className="flex mt-[5.7px] w-[75.3px] h-[59.56px] ml-[16.2px] relative flex-col items-start">
                <div className="relative flex items-center justify-center w-[62.93px] mt-[-1.08px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#4a5565] text-[12.9px] tracking-[0.90px] leading-[31.5px]">
                  達成
                </div>
              </div>
            </div>

            <div className="absolute top-0 left-[61px] w-[383px] h-[39px]">
              {achievementData.map((item, index) => {
                const positions = [
                  0, 27, 54, 81, 108, 134, 161, 188, 216, 244, 271, 299, 326,
                  355,
                ];
                const widths = [
                  27, 27, 27, 27, 27, 26, 28, 28, 28, 28, 28, 28, 29, 28,
                ];
                const topClasses = [
                  "top-0",
                  "top-0",
                  "top-0",
                  "top-0",
                  "top-0",
                  "top-px",
                  "top-px",
                  "top-px",
                  "top-px",
                  "top-px",
                  "top-px",
                  "top-px",
                  "top-px",
                  "top-px",
                ];
                const marginLefts = [
                  7.2, 7.2, 7.5, 7.5, 7.3, 7.6, 9.2, 9.5, 9.5, 8.8, 9.3, 9.3,
                  9.3, 9.3,
                ];
                const marginTops = [
                  13.9, 13.9, 13.9, 13.9, 13.9, 13.5, 13.5, 13.5, 13.5, 13.5,
                  13.5, 13.5, 13.5, 13.5,
                ];

                return (
                  <div
                    key={index}
                    className={`${topClasses[index]} h-[39px] bg-green-100 border-r-[1.08px] [border-right-style:solid] border absolute flex`}
                    style={{
                      left: `${positions[index]}px`,
                      width: `${widths[index]}px`,
                    }}
                  >
                    <div
                      className="flex relative items-start"
                      style={{
                        marginTop: `${marginTops[index]}px`,
                        width: "8.32px",
                        height: "15.08px",
                        marginLeft: `${marginLefts[index]}px`,
                      }}
                    >
                      <div className="relative w-fit mt-[-1.08px] mb-[-1.85px] font-normal text-[#354152] text-[12.9px] [font-family:'Inter',Helvetica] text-center tracking-[0] leading-[17.2px] whitespace-nowrap">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-[35.98px] ml-0 w-[801.28px] relative bg-white border-b-[1.08px] [border-bottom-style:solid] border">
            <div className="top-0 left-0 w-[61px] h-[34px] border-r-[1.08px] [border-right-style:solid] border absolute flex">
              <div className="flex items-center justify-center mt-[2.0px] w-[62.93px] h-8 ml-[17.3px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#4a5565] text-[12.9px] tracking-[0.90px] leading-[31.5px]">
                効果
              </div>
            </div>

            <div className="top-px left-[61px] w-[741px] h-9 absolute flex">
              <p className="mt-[10.2px] w-[628.96px] h-[18px] ml-[18.3px] [font-family:'Inter',Helvetica] font-normal text-[#354152] text-[13.5px] tracking-[0] leading-[18.0px]">
                理想的です。施術効果が顕著に表れています。
              </p>
            </div>
          </div>
        </div>

        <img
          className="absolute top-[158px] left-[-122px] w-[356px] h-[41px] rotate-[-90.00deg]"
          alt=""
          src="/img/frame-480.svg"
        />
      </div>
    </section>
  );
};
