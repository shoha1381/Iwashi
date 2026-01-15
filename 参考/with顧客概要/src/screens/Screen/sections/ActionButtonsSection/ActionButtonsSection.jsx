export const ActionButtonsSection = () => {
  const actionButtons = [
    {
      icon: "/img/vector-10.svg",
      iconWidth: "66.67%",
      iconHeight: "66.67%",
      iconTop: "13.25%",
      iconLeft: "13.24%",
      blur: "/img/blur.svg",
    },
    {
      icon: "/img/vector-11.svg",
      icon2: "/img/vector-12.svg",
      iconWidth: "62.94%",
      iconHeight: "62.93%",
      iconTop: "15.95%",
      iconLeft: "21.11%",
      icon2Width: "53.02%",
      icon2Height: "53.02%",
      icon2Top: "25.86%",
      icon2Left: "21.11%",
      blur: "/img/blur-1.svg",
    },
    {
      icon: "/img/vector-13.svg",
      icon2: "/img/vector-14.svg",
      iconWidth: "76.01%",
      iconHeight: "100%",
      iconTop: "0",
      iconLeft: "12.00%",
      icon2Width: "66.12%",
      icon2Height: "64.43%",
      icon2Top: "35.31%",
      icon2Left: "16.88%",
      blur: "/img/blur-2.svg",
    },
    {
      icon: "/img/vector-15.svg",
      iconWidth: "100%",
      iconHeight: "100%",
      iconTop: "calc(50.00%_-_11px)",
      iconLeft: "0",
      blur: "/img/blur-3.svg",
      hasBackground: true,
    },
    {
      icon: "/img/vector-17.svg",
      iconWidth: "87.50%",
      iconHeight: "87.50%",
      iconTop: "6.25%",
      iconLeft: "6.25%",
      blur: "/img/blur-4.svg",
      hasSpecialBackground: true,
    },
  ];

  const todoItems = [
    "頻度のグラフを使った説明",
    "ビフォー写真撮影",
    "効果イメージを使った説明",
    "施術料金支払い",
  ];

  const adviceItems = [
    "初回から5回分まとめてスタートさせる流れを徹底しましょう。",
    "5回目の来院時に次の5回分を必ず提案・決済してください。",
    "施術前に前払いと次回予約確定を行い、来院間隔を空けないようにしましょう。",
    "短い間隔で通っていただくと、定着が良くなることを伝えましょう。",
  ];

  const tableHeaders = [
    { label: "項目", width: "w-[61px]" },
    ...Array.from({ length: 15 }, (_, i) => ({
      label: String(i + 2),
      width:
        i === 0
          ? "w-[27px]"
          : i === 2 || i === 13
            ? "w-7"
            : i === 4
              ? "w-[26px]"
              : i === 9 || i === 14
                ? "w-[29px]"
                : "w-7",
    })),
    { label: "①\n頻度", width: "w-10" },
    { label: "①\n効果", width: "w-[39px]" },
    { label: "③\n継続", width: "w-10" },
    { label: "④\n代金", width: "w-[39px]" },
    { label: "⑤\n予約", width: "w-10" },
    { label: "⑤\n支払い", width: "w-[39px]" },
    { label: "⑤\n５回分", width: "w-[39px]" },
    { label: "⑤\nメニュー", width: "w-[39px]" },
    { label: "⑧\n写真", width: "w-10" },
  ];

  const achievementData = [3, 4, 3, 4, 4, 3, 4, 4, 3, 4, 3, 4, 4, 4];

  const tabButtons = [
    { label: "施術", active: true },
    { label: "LINE登録", active: true },
    { label: "問診票入力", active: true },
  ];

  return (
    <section className="inline-flex items-start fixed left-[calc(50.00%_-_444px)] bottom-[27px] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_-2px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
      <div className="relative w-[834px] h-[72px] ml-[-381.00px] bg-white overflow-hidden rotate-[-90.00deg]">
        <button
          className="absolute top-[calc(50.00%_-_22px)] left-[759px] w-[42px] h-[42px]"
          aria-label="Close"
        >
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
            <img
              className="w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] absolute -top-3.5 left-[-23px] object-cover"
              alt=""
              src="/img/blur.svg"
            />
            <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />
            <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
          </div>
          <div className="top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] absolute aspect-[1]">
            <img
              className="absolute w-[66.67%] h-[66.67%] top-[13.25%] left-[13.24%]"
              alt="Close icon"
              src="/img/vector-10.svg"
            />
          </div>
        </button>

        <nav className="flex flex-col w-[42px] items-start gap-5 absolute top-[-79px] left-[604px] rotate-[90.00deg]">
          {actionButtons.map((button, index) => (
            <button
              key={index}
              className="relative self-stretch w-full h-[42px] rotate-[-90.00deg]"
              aria-label={`Action button ${index + 1}`}
            >
              <div className="absolute w-[100.00%] h-[100.00%] top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
                <img
                  className="w-[calc(100%_+_45px)] h-[calc(100%_+_45px)] absolute -top-3.5 left-[-23px] object-cover"
                  alt=""
                  src={button.blur}
                />
                <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />
                <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
              </div>
              <div
                className={`absolute ${index === 0 ? "top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px]" : index === 1 || index === 2 ? "top-[calc(50.00%_-_15px)] left-[calc(50.00%_-_15px)] w-[30px] h-[30px]" : index === 3 ? "top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_10px)] w-[22px] h-[22px]" : "top-2 left-2 w-7 h-7 overflow-hidden"} aspect-[1]`}
              >
                {button.hasBackground && (
                  <div className="absolute top-[3px] left-[5px] w-3 h-[15px] bg-[#ff83004c]" />
                )}
                {button.hasSpecialBackground && (
                  <>
                    <img
                      className="absolute w-[25.00%] h-[50.39%] top-[-49537.50%] left-[-59442.86%]"
                      alt=""
                      src="/img/vector.svg"
                    />
                    <div className="absolute w-[62.96%] h-[62.96%] top-[18.52%] left-[18.52%] bg-[#00a63e4c] rounded-[8.81px]" />
                  </>
                )}
                <img
                  className={`absolute w-[${button.iconWidth}] h-[${button.iconHeight}] top-[${button.iconTop}] left-[${button.iconLeft}]`}
                  alt=""
                  src={button.icon}
                />
                {button.icon2 && (
                  <img
                    className={`absolute w-[${button.icon2Width}] h-[${button.icon2Height}] top-[${button.icon2Top}] left-[${button.icon2Left}]`}
                    alt=""
                    src={button.icon2}
                  />
                )}
              </div>
            </button>
          ))}
        </nav>

        <img
          className="absolute top-[21px] left-11 w-[33px] h-[33px] aspect-[1] object-cover"
          alt="Profile"
          src="/img/1.png"
        />
      </div>

      <img
        className="relative w-[834px] h-px ml-[-345.00px] rotate-[-90.00deg]"
        alt=""
        src="/img/vector-6-2.svg"
      />

      <div className="relative w-[834px] h-[157px] ml-[-266.50px] bg-white overflow-hidden rotate-[-90.00deg]">
        <div className="relative top-[-306px] left-[373px] w-[111px] h-[766px] rotate-[90.00deg]">
          <img
            className="absolute top-[654px] left-0 w-[111px] h-28 rotate-[-90.00deg] aspect-[0.99]"
            alt="Profile"
            src="/img/image-2.png"
          />

          <div className="absolute -top-0.5 left-[61px] w-[50px] h-[337px]">
            <img
              className="absolute top-[166px] left-[25px] w-px h-[37px] rotate-[-90.00deg]"
              alt=""
              src="/img/vector-8-1.svg"
            />
            <img
              className="absolute top-[134px] left-[-89px] w-[231px] h-px rotate-[-90.00deg]"
              alt=""
              src="/img/vector-7-1.svg"
            />
            <div className="absolute top-[200px] -left-1 w-[58px] h-[42px] flex items-center justify-center rotate-[-90.00deg] opacity-50 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px]">
              注意事項
              <br />
              注意ワード
            </div>
            <p className="absolute top-16 left-[-60px] w-[170px] h-[42px] flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px]">
              顎・フェイスライン整形あり
              <br />
              太った/痩せた、肌の色、整形跡
            </p>
            <div className="inline-flex items-center justify-center gap-2 px-[18px] py-[11px] absolute top-[275px] left-[-5px] border border-solid border-[#0000001a] rotate-[-90.00deg]">
              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs tracking-[0.60px] leading-[27.6px] whitespace-nowrap">
                注意
              </span>
            </div>
          </div>

          <div className="absolute top-3 left-px w-[50px] h-[323px] flex flex-col gap-[124.5px]">
            <p className="flex items-center justify-center ml-[-93.0px] w-[235.97px] h-[38.06px] mt-[99.0px] rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21px]">
              1月の結婚式に向けて、右のエラはりを改善する
            </p>
            <div className="inline-flex ml-[-5.5px] w-[61px] h-[50px] relative items-center justify-center gap-2 px-[18px] py-[11px] border border-solid border-[#0000001a] rotate-[-90.00deg]">
              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs tracking-[0.60px] leading-[27.6px] whitespace-nowrap">
                目標
              </span>
            </div>
          </div>

          <div className="absolute top-[352px] left-[61px] w-[50px] h-[272px]">
            <h2 className="absolute top-[195px] left-[-72px] h-8 flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[16.5px] tracking-[0.82px] leading-[31.9px] whitespace-nowrap">
              三浦 梨花
            </h2>
            <p className="absolute top-[83px] left-[-98px] w-[130px] h-7 flex items-center justify-center rotate-[-90.00deg] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[11.6px] tracking-[0.58px] leading-[27.6px]">
              ミウラリカ・女・25歳
            </p>
            <img
              className="top-[92px] left-[-67px] w-[185px] absolute h-px rotate-[-90.00deg]"
              alt=""
              src="/img/vector-6-1.svg"
            />
            <img
              className="absolute top-[101px] left-6 w-px h-[37px] rotate-[-90.00deg]"
              alt=""
              src="/img/vector-8-1.svg"
            />
            <div className="absolute top-[129px] left-[-11px] h-[42px] flex items-center justify-center rotate-[-90.00deg] opacity-50 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11px] tracking-[0.55px] leading-[21.0px]">
              コース内容
              <br />
              前回来店
            </div>
            <div className="inline-flex items-center gap-[7px] absolute top-[205px] left-px">
              <div className="inline-flex items-center justify-center gap-2 px-5 py-[11px] relative flex-[0_0_auto] ml-[-7.50px] mr-[-7.50px] border border-solid border-[#0000001a] rotate-[-90.00deg]">
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs tracking-[0.60px] leading-[27.6px] whitespace-nowrap">
                  施術
                </span>
              </div>
            </div>
            <p className="top-[46px] -left-10 h-[21px] rotate-[-90.00deg] text-black tracking-[0.55px] leading-[21.0px] whitespace-nowrap absolute flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[11px]">
              SP・１回目（初回）
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-[563px] h-[834px]">
        <div className="flex flex-col w-[804px] items-start gap-[15px] relative top-[154px] left-[calc(50.00%_-_405px)] rotate-[-90.00deg]">
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <article className="flex flex-col w-[289px] items-start relative bg-[#ffffff26] rounded-[9.52px] overflow-hidden border-[0.76px] border-solid border-[#ffffff1a] shadow-[0px_0px_4.48px_#00000026]">
              <header className="relative self-stretch w-full h-[50px]">
                <div className="relative top-[13px] left-[23px] w-[66px] h-[23px] flex gap-[14.8px]">
                  <div className="mt-0 w-[23.22px] h-[23.22px] ml-[0.3px] aspect-[1]">
                    <div className="relative w-[66.67%] h-[83.33%] top-[8.33%] left-[16.66%] bg-[url(/img/vector-18.svg)] bg-[100%_100%]" />
                  </div>
                  <h3 className="flex items-center justify-center mt-[1.6px] w-[37px] h-[21px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm tracking-[0.70px] leading-[normal]">
                    ToDo
                  </h3>
                </div>
              </header>

              <div className="relative self-stretch w-full h-[156px]">
                <div className="inline-flex items-center gap-[18px] relative top-4 left-[39px]">
                  <div className="relative w-[17.93px] h-[118.31px]">
                    {todoItems.map((_, index) => (
                      <img
                        key={index}
                        className={`absolute left-0 w-[18px] h-[18px]`}
                        style={{ top: `${index * 33}px` }}
                        alt={index === 0 ? "Checked" : "Unchecked"}
                        src={
                          index === 0 ? "/img/check.svg" : "/img/check-3.svg"
                        }
                      />
                    ))}
                  </div>

                  <div className="flex flex-col w-[178.36px] items-start gap-[8.34px] relative">
                    {todoItems.map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        className="relative self-stretch w-full h-[25.1px] rounded-[4.48px] border-[0.9px] border-solid border-[#00000033]"
                        aria-label={`Todo item ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <ul className="absolute top-[62px] left-[87px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11.4px] tracking-[0.57px] leading-[33.2px]">
                {todoItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <img
                className="absolute top-[50px] left-0 w-[289px] h-px"
                alt=""
                src="/img/vector-80.svg"
              />
            </article>

            <article className="flex flex-col w-[502.01px] items-start relative bg-[#ffffff26] rounded-[9.51px] overflow-hidden border-[0.76px] border-solid border-[#ffffff1a] shadow-[0px_0px_4.61px_#00000026]">
              <header className="relative self-stretch w-full h-[50px]">
                <div className="relative top-3 left-[21px] w-[92px] h-[25px]">
                  <div className="absolute w-[26.67%] top-px left-0 h-[25px] aspect-[1]">
                    <img
                      className="absolute w-[83.33%] h-[83.33%] top-[8.34%] left-[8.33%]"
                      alt=""
                      src="/img/vector-19.svg"
                    />
                  </div>
                  <h3 className="absolute top-1 left-[34px] h-[21px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm tracking-[0.70px] leading-[normal]">
                    アドバイス
                  </h3>
                </div>
              </header>

              <img
                className="relative w-[502.01px] h-[1.18px]"
                alt=""
                src="/img/vector-80-1.svg"
              />

              <div className="relative self-stretch w-full h-[156px]">
                <ul className="absolute top-[22px] left-4 w-[472px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] tracking-[0.65px] leading-[24.3px]">
                  {adviceItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          <article className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffff26] rounded-[10.63px] overflow-hidden border-[0.85px] border-solid border-[#ffffff1a] shadow-[0px_0px_5.15px_#00000026]">
            <div className="flex flex-col w-[804px] h-[178px] items-start gap-2 relative">
              <header className="relative self-stretch w-full h-[50px]">
                <div className="relative top-[17px] left-[26px] w-[60px] h-5">
                  <h3 className="absolute top-0 left-[35px] h-[21px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm tracking-[0.70px] leading-[normal]">
                    備考
                  </h3>
                  <img
                    className="w-[36.67%] top-0 left-[-5.00%] h-[22px] absolute aspect-[1]"
                    alt=""
                    src="/img/icon-park-solid-notes.svg"
                  />
                </div>
              </header>

              <img
                className="absolute top-[49px] left-0 w-[803px] h-px"
                alt=""
                src="/img/vector-79.svg"
              />

              <textarea
                className="absolute top-[50px] left-0 w-[804px] h-32"
                aria-label="Notes"
              />
            </div>
          </article>

          <div className="relative w-28 h-[800.91px] mb-[-344.45px] rounded-[10.9px] overflow-hidden border-[1.06px] border-solid border-[#ffffff1a] rotate-[90.00deg] shadow-[0px_0px_5.14px_#00000026]">
            <div className="absolute top-[360px] left-[-360px] w-[801px] h-[81px] flex rotate-[-90.00deg]">
              <div className="w-[801.28px] h-[35.98px] relative bg-gray-50 border-b-[1.08px] [border-bottom-style:solid] border">
                <div className="absolute -top-px left-0 w-[61px] h-9 flex border-r-[1.08px] [border-right-style:solid] border">
                  <div className="flex items-center justify-center mt-[2.2px] w-[62.93px] h-8 ml-[17.3px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#4a5565] text-[12.9px] tracking-[0.90px] leading-[31.5px]">
                    項目
                  </div>
                </div>

                {tableHeaders.slice(1).map((header, index) => (
                  <div
                    key={index}
                    className={`absolute ${index === 0 ? "top-px" : index === 1 ? "top-px" : index === 2 ? "top-0" : index === 3 ? "top-0" : index === 4 ? "top-0" : index === 5 ? "top-0" : index === 6 ? "top-0" : index === 7 ? "top-px" : index === 8 ? "top-0" : index === 9 ? "-top-px" : index === 10 ? "-top-px" : index === 11 ? "-top-px" : index === 12 ? "-top-px" : index === 13 ? "-top-px" : index === 14 ? "-top-px" : index === 15 ? "top-0" : index === 16 ? "top-0" : index === 17 ? "top-0" : index === 18 ? "top-0" : index === 19 ? "top-0" : index === 20 ? "top-0" : index === 21 ? "top-0" : index === 22 ? "top-0" : "-top-px"} ${header.width} h-9 flex ${index >= 15 ? "justify-center" : ""} border-r-[1.08px] [border-right-style:solid] border`}
                    style={{
                      left: `${61 + (index < 14 ? (index === 0 ? 0 : index === 1 ? 27 : index === 2 ? 54 : index === 3 ? 81 : index === 4 ? 108 : index === 5 ? 134 : index === 6 ? 161 : index === 7 ? 188 : index === 8 ? 216 : index === 9 ? 244 : index === 10 ? 271 : index === 11 ? 299 : index === 12 ? 326 : 355) : index === 14 ? 388 : index === 15 ? 416 : index === 16 ? 444 : index === 17 ? 485 : index === 18 ? 524 : index === 19 ? 565 : index === 20 ? 604 : index === 21 ? 644 : index === 22 ? 684 : index === 23 ? 724 : 763)}px`,
                    }}
                  >
                    <div
                      className={`${index >= 15 ? "mt-[2.0px] w-[35.96px] h-8" : `mt-[9.6px] ${index === 9 || index === 10 || index === 11 || index === 12 || index === 13 || index === 14 ? "w-[11px]" : index === 10 ? "w-[9px]" : "w-1.5"} h-[18px]`} ${index >= 15 ? "ml-[0.1px]" : index === 5 ? "ml-[10.4px]" : index === 9 || index === 11 || index === 12 || index === 13 || index === 14 ? "ml-[7.6px]" : index === 10 ? "ml-[9.0px]" : "ml-[10.3px]"} [font-family:'Inter',Helvetica] font-bold text-[#697282] ${index >= 15 ? "text-[7.9px]" : "text-[9px]"} ${index >= 15 ? "text-center" : "whitespace-nowrap text-center"} tracking-[0] leading-[${index >= 15 ? "15.8px" : "17.2px"}]`}
                    >
                      {index >= 15
                        ? header.label.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              {i === 0 && <br />}
                            </span>
                          ))
                        : header.label}
                    </div>
                  </div>
                ))}
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
                  {achievementData.map((value, index) => (
                    <div
                      key={index}
                      className={`${index === 0 ? "top-0" : index === 1 ? "top-0" : index === 2 ? "top-0" : index === 3 ? "top-0" : index === 4 ? "top-0" : index === 5 ? "top-px" : index === 6 ? "top-px" : index === 7 ? "top-px" : index === 8 ? "top-px" : index === 9 ? "top-px" : index === 10 ? "top-px" : index === 11 ? "top-px" : index === 12 ? "top-px" : "top-px"} ${index === 5 ? "w-[26px]" : index === 12 ? "w-[29px]" : "w-[27px]"} h-[39px] bg-white border-r-[1.08px] [border-right-style:solid] border absolute flex`}
                      style={{
                        left: `${index * 27 + (index > 5 ? index - 5 : 0)}px`,
                      }}
                    >
                      <div
                        className={`flex ${index === 5 || index === 6 || index === 7 || index === 8 || index === 9 || index === 10 || index === 11 || index === 12 || index === 13 ? "mt-[13.5px]" : "mt-[13.9px]"} ${value === 3 ? "w-[8.1px]" : "w-[8.32px]"} h-[15.08px] ${index === 5 ? "ml-[7.6px]" : index === 6 ? "ml-[9.2px]" : index === 7 || index === 8 ? "ml-[9.5px]" : index === 9 ? "ml-[8.8px]" : index === 10 || index === 11 || index === 12 || index === 13 ? "ml-[9.3px]" : "ml-[7.2px]"} relative items-start`}
                      >
                        <div
                          className={`relative w-fit mt-[-1.08px] mb-[-1.85px] ${value === 3 ? "mr-[-0.90px]" : "mr-[-0.68px]"} [font-family:'Inter',Helvetica] font-normal text-white text-[12.9px] leading-[17.2px] whitespace-nowrap text-center tracking-[0]`}
                        >
                          {value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-[35.98px] ml-0 w-[801.28px] relative bg-white border-b-[1.08px] [border-bottom-style:solid] border">
                <div className="top-0 left-0 w-[61px] h-[34px] border-r-[1.08px] [border-right-style:solid] border absolute flex">
                  <div className="flex items-center justify-center mt-[2.0px] w-[62.93px] h-8 ml-[17.3px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#4a5565] text-[12.9px] tracking-[0.90px] leading-[31.5px]">
                    効果
                  </div>
                </div>

                <div className="top-px left-[61px] w-[741px] h-9 absolute flex">
                  <p className="mt-[9.2px] w-[628.96px] h-[18px] ml-[18.3px] [font-family:'Inter',Helvetica] font-normal text-[#354152] text-[13.5px] tracking-[0] leading-[18.0px]">
                    初回の施術です。
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
        </div>
      </div>

      <nav className="relative w-24 h-[834px]">
        <div className="relative top-[30px] left-[15px] w-[45px] h-[489px] flex flex-col items-center">
          {tabButtons.map((tab, index) => (
            <div
              key={index}
              className={`ml-0 h-[45px] w-[155px] ${index === 0 ? "mt-[55.0px]" : "mt-[122.0px]"} flex gap-[41px] bg-[#ffffff1a] rounded-[22.22px] overflow-hidden rotate-[-90.00deg] shadow-[inset_0px_0px_7.78px_#00000021,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)]`}
            >
              <button className="mt-[3.0px] w-[147px] h-[39px] relative ml-[4.0px] bg-[#0088ffb2] rounded-[22.22px] overflow-hidden backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)]">
                <span className="absolute h-[100.41%] top-0 left-[calc(50.00%_-_45px)] w-[90px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[14.1px] text-center tracking-[0.99px] leading-[38.5px] whitespace-nowrap">
                  {tab.label}
                </span>
              </button>

              <div className="mt-[3.3px] w-[96.67px] h-[38.89px] relative rounded-[22.22px] overflow-hidden">
                <span className="absolute h-[100.29%] top-0 left-[calc(50.00%_-_7px)] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#999999] text-[14.1px] text-center tracking-[0.99px] leading-[38.5px] whitespace-nowrap">
                  週
                </span>
              </div>
            </div>
          ))}
        </div>
      </nav>

      <img
        className="absolute top-[417px] left-[-186px] w-[834px] h-px rotate-[-90.00deg]"
        alt=""
        src="/img/vector-6-2.svg"
      />

      <img
        className="top-[417px] left-[377px] w-[834px] absolute h-px rotate-[-90.00deg]"
        alt=""
        src="/img/vector-6-2.svg"
      />
    </section>
  );
};
