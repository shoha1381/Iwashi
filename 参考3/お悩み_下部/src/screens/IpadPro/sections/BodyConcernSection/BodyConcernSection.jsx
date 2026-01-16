export const BodyConcernSection = () => {
  const concernCategories = [
    {
      title: "骨盤",
      concerns: [
        { text: "下半身を細くしたい", highlighted: false },
        { text: "歪みを整えたい", highlighted: true },
        { text: "産後の骨盤を矯正したい", highlighted: false },
        { text: "反り腰を治したい", highlighted: false },
      ],
    },
    {
      title: "お尻",
      concerns: [
        { text: "ヒップUPしたい", highlighted: false },
        { text: "小尻にしたい", highlighted: false },
      ],
    },
    {
      title: "お腹",
      concerns: [
        { text: "くびれを作りたい", highlighted: true },
        { text: "お腹を凹ませたい", highlighted: false },
        { text: "便秘を解消したい", highlighted: false },
      ],
    },
    {
      title: "上半身",
      concerns: [
        { text: "上半身を細くしたい", highlighted: false },
        { text: "姿勢をきれいにしたい", highlighted: false },
      ],
    },
    {
      title: "全体",
      concerns: [
        { text: "スタイルUPしたい", highlighted: false },
        { text: "歩行姿勢をきれいにしたい", highlighted: false },
        { text: "自分の状態を知りたい", highlighted: false },
      ],
    },
    {
      title: "美脚",
      concerns: [
        { text: "O脚を治したい", highlighted: false },
        { text: "美脚にしたい", highlighted: false },
        { text: "太ももを細くしたい", highlighted: false },
        { text: "むくみを取りたい", highlighted: false },
        { text: "ふくらはぎを細くしたい", highlighted: false },
        { text: "足首を細くしたい", highlighted: false },
      ],
    },
    {
      title: "その他",
      concerns: [{ text: "特になし", highlighted: false }],
    },
  ];

  return (
    <section className="flex z-[1] flex-col w-[834px] items-start fixed top-[-3px] left-0">
      <header className="relative w-[101px] h-[834px] mt-[-366.50px] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
        <button
          className="absolute top-[calc(50.00%_-_374px)] left-[34px] w-[42px] h-[42px] rotate-[-90.00deg]"
          aria-label="戻る"
        >
          <div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
            <img
              className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
              alt=""
              src="/img/blur.svg"
            />

            <div className="absolute w-full h-full top-0 left-0 rounded-[259px] bg-blend-color-dodge bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%),linear-gradient(0deg,rgba(51,51,51,1)_0%,rgba(51,51,51,1)_100%)]" />

            <div className="absolute w-full h-full top-0 left-0 bg-[#00000001] rounded-[259px] backdrop-blur-[2.6px] backdrop-brightness-[100.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(100.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.17),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
          </div>

          <div className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px] aspect-[1]">
            <img
              className="absolute w-[66.67%] h-[66.67%] top-[13.25%] left-[13.24%]"
              alt=""
              src="/img/vector.svg"
            />
          </div>
        </button>

        <p className="absolute top-[609px] left-[-83px] rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-transparent text-[26.2px] tracking-[1.84px] leading-[normal]">
          <span className="text-black tracking-[0.48px]">
            三浦梨花&nbsp;&nbsp;{" "}
          </span>

          <span className="text-[#999999] text-[20.8px] tracking-[0.30px]">
            ミウラリカ&nbsp;&nbsp;{" "}
          </span>

          <span className="text-black text-[20.8px] tracking-[0.30px]">様</span>
        </p>

        <div className="absolute top-[158px] left-[-3px] w-[117px] h-[42px] bg-[#ffffff1a] rounded-[20.49px] overflow-hidden rotate-[-90.00deg] shadow-[0px_6px_17px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.14),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
          <div className="absolute top-[3px] left-[calc(50.00%_-_48px)] w-[85px] h-9 rounded-[20.49px] overflow-hidden">
            <time className="absolute h-[100.41%] top-0 left-[calc(50.00%_-_42px)] w-[82px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#5e6367] text-[13px] text-center tracking-[0.91px] leading-[35.5px] whitespace-nowrap">
              10/6
            </time>
          </div>

          <img
            className="absolute top-[18px] left-[101px] w-1 h-[5px]"
            alt=""
            src="/img/polygon-10.svg"
          />
        </div>
      </header>

      <div className="relative self-stretch w-full h-[330px]">
        <div className="relative top-[51px] left-[63px] w-[728px] h-[228px] flex">
          <div className="w-[285px] h-[227.23px] relative">
            <div className="absolute top-[15px] left-0 w-16 h-[202px]">
              <img
                className="absolute w-0 h-[33.62%] top-[66.38%] left-[42.07%]"
                alt=""
                src="/img/vector-73.svg"
              />

              <img
                className="absolute w-0 h-[33.62%] top-0 left-[42.05%]"
                alt=""
                src="/img/vector-72.svg"
              />

              <p className="absolute top-[94px] left-0 h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#46a7fd] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
                面長の改善
              </p>
            </div>

            <div className="absolute top-[132px] left-[171px] w-[114px] h-[59px]">
              <div className="w-[35.67%] h-[68.92%] top-0 left-0 rounded-[20.28px] absolute bg-[#0088ff80]" />

              <p className="absolute top-[46px] left-6 h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#46a7fd] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
                エラ張りの解消
              </p>
            </div>

            <div className="absolute top-0 left-8 w-[209px] h-[227px]">
              <img
                className="absolute w-[74.12%] h-[90.32%] top-[5.58%] left-[16.68%]"
                alt="顔の前後比較図"
                src="/img/group.png"
              />

              <div
                className="absolute top-0 left-[25px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[12.9px] tracking-[0.90px] leading-[26.1px] whitespace-nowrap"
                aria-label="右"
              >
                R
              </div>

              <div
                className="absolute top-0 left-[190px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[12.9px] tracking-[0.90px] leading-[26.1px] whitespace-nowrap"
                aria-label="右"
              >
                R
              </div>
            </div>
          </div>

          <div className="mt-[3.1px] w-[293.59px] h-[224.84px] relative ml-[69px]">
            <div className="absolute top-0 left-0 w-[102px] h-[223px]">
              <img
                className="absolute w-[100.00%] h-[86.55%] top-[13.45%] left-0"
                alt="体の前面図"
                src="/img/group-1.png"
              />

              <div className="absolute top-0 left-11 h-[19px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13.1px] tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
                前
              </div>

              <div className="w-[15.62%] h-[7.19%] top-[50.99%] left-[25.38%] rounded-lg absolute bg-[#0088ff80]" />

              <div className="w-[15.62%] h-[7.19%] top-[50.99%] left-[58.56%] rounded-lg absolute bg-[#0088ff80]" />

              <img
                className="absolute top-[121px] left-[68px] w-[52px] h-[51px]"
                alt=""
                src="/img/vector-107.svg"
              />
            </div>

            <div className="absolute top-0.5 left-[191px] w-[103px] h-[223px]">
              <img
                className="absolute w-[100.00%] h-[84.98%] top-[15.02%] left-0"
                alt="体の背面図"
                src="/img/group-2.png"
              />

              <div className="absolute top-0 left-11 h-[19px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13.1px] tracking-[0.91px] leading-[18.8px] whitespace-nowrap">
                後
              </div>

              <div className="w-[15.60%] h-[7.17%] top-[50.16%] left-[25.34%] rounded-lg absolute bg-[#0088ff80]" />

              <div className="w-[15.60%] h-[7.17%] top-[50.16%] left-[58.49%] rounded-lg absolute bg-[#0088ff80]" />

              <img
                className="absolute top-[120px] -left-4 w-[50px] h-[50px]"
                alt=""
                src="/img/vector-108.svg"
              />
            </div>

            <p className="absolute top-[179px] left-[98px] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#46a7fd] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
              くびれを作りたい
            </p>

            <p className="absolute top-[30px] left-[104px] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#46a7fd] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
              歪みを整えたい
            </p>
          </div>

          <button
            className="mt-[10.7px] w-[42px] h-[42px] relative ml-[38.4px]"
            aria-label="確認"
          >
            <div className="absolute w-[100.01%] h-[100.01%] top-0 left-0 flex rounded-[875.1px] shadow-[0px_0.88px_7px_#0000001f,0px_0px_1.75px_#0000001a] bg-[linear-gradient(0deg,rgba(0,145,255,1)_0%,rgba(0,145,255,1)_100%),linear-gradient(0deg,rgba(153,153,153,1)_0%,rgba(153,153,153,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%)]">
              <div className="mr-0 flex-1 mb-0 w-[42px] bg-[#00000001] rounded-[259.03px] backdrop-blur-[2.6px] backdrop-brightness-[96.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(96.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_1px_0_0_rgba(255,255,255,0.28),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
            </div>

            <img
              className="absolute w-[64.75%] h-[64.75%] top-[16.67%] left-[16.67%]"
              alt=""
              src="/img/check.svg"
            />
          </button>
        </div>
      </div>

      <div className="relative self-stretch w-full h-[588px]">
        <div className="inline-flex items-start gap-2.5 absolute top-0 left-[calc(50.00%_-_340px)]">
          <div className="flex flex-col w-[162px] items-start gap-2.5 relative">
            <article className="relative self-stretch w-full h-[220px] bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_5px_#00000026] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
              <ul className="absolute top-[77px] left-[calc(50.00%_-_72px)] w-36 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-transparent text-xs text-center tracking-[0.84px] leading-[17.2px]">
                <li className="text-black tracking-[0.10px]">
                  下半身を細くしたい
                </li>
                <li className="text-[#0000004c] tracking-[0.10px] mt-[34.4px]">
                  産後の骨盤を矯正したい
                </li>
                <li className="text-black tracking-[0.10px] mt-[17.2px]">
                  反り腰を治したい
                </li>
              </ul>

              <h3 className="absolute top-[17px] left-[calc(50.00%_-_66px)] w-[132px] h-[38px] flex items-center justify-center bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_10px_#0000001a] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
                <span className="flex items-center justify-center h-[22px] w-[88px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm text-center tracking-[0.98px] leading-[22px]">
                  骨盤
                </span>
              </h3>

              <div className="flex w-[162px] h-7 items-center justify-center gap-[7.63px] px-[29.57px] py-[3.82px] absolute top-[105px] left-[calc(50.00%_-_81px)] bg-[#ff00001a] rounded-[9.54px] overflow-hidden">
                <span className="relative flex items-center justify-center w-fit mt-[-1.27px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#da0000] text-xs text-center tracking-[0.84px] leading-[21.0px] whitespace-nowrap">
                  歪みを整えたい
                </span>
              </div>
            </article>

            <article className="relative self-stretch w-full h-[292px] bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_5px_#00000026] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
              <ul className="absolute top-[77px] left-[calc(50.00%_-_72px)] w-[143px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-transparent text-xs text-center tracking-[0.84px] leading-[17.2px]">
                <li className="text-[#0000004c] tracking-[0.10px]">
                  O脚を治したい
                </li>
                <li className="text-black tracking-[0.10px] mt-[17.2px]">
                  美脚にしたい
                </li>
                <li className="text-black tracking-[0.10px] mt-[17.2px]">
                  太ももを細くしたい
                </li>
                <li className="text-[#0000004c] tracking-[0.10px] mt-[17.2px]">
                  むくみを取りたい
                </li>
                <li className="text-[#0000004c] tracking-[0.10px] mt-[17.2px]">
                  ふくらはぎを細くしたい
                </li>
                <li className="text-black tracking-[0.10px] mt-[17.2px]">
                  足首を細くしたい
                </li>
              </ul>

              <h3 className="absolute top-[17px] left-[calc(50.00%_-_66px)] w-[132px] h-[38px] flex items-center justify-center bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_10px_#0000001a] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
                <span className="flex items-center justify-center h-[22px] w-[88px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm text-center tracking-[0.98px] leading-[22px]">
                  美脚
                </span>
              </h3>
            </article>
          </div>

          <div className="flex flex-col w-[162px] h-[626px] items-start gap-2.5 pt-0 pb-[11px] px-0 relative">
            <article className="relative self-stretch w-full h-[148px] bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_5px_#00000026] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
              <ul className="absolute top-[77px] left-[calc(50.00%_-_68px)] w-[136px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-transparent text-xs text-center tracking-[0.84px] leading-[17.2px]">
                <li className="text-black tracking-[0.10px]">ヒップUPしたい</li>
                <li className="text-[#0000004c] tracking-[0.10px] mt-[17.2px]">
                  小尻にしたい
                </li>
              </ul>

              <h3 className="absolute top-[17px] left-[calc(50.00%_-_66px)] w-[132px] h-[38px] flex items-center justify-center bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_10px_#0000001a] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
                <span className="flex items-center justify-center h-[22px] w-[88px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm text-center tracking-[0.98px] leading-[22px]">
                  お尻
                </span>
              </h3>
            </article>

            <article className="relative w-[163px] h-[184px] mr-[-1.00px] bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_5px_#00000026] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
              <ul className="absolute top-[77px] left-[calc(50.00%_-_68px)] w-[136px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-transparent text-xs text-center tracking-[0.84px] leading-[17.2px]">
                <li className="text-black tracking-[0.10px] mt-[17.2px]">
                  お腹を凹ませたい
                </li>
                <li className="text-[#0000004c] tracking-[0.10px] mt-[17.2px]">
                  便秘を解消したい
                </li>
              </ul>

              <h3 className="absolute top-[17px] left-[calc(50.00%_-_66px)] w-[132px] h-[38px] flex items-center justify-center bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_10px_#0000001a] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
                <span className="flex items-center justify-center h-[22px] w-[88px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm text-center tracking-[0.98px] leading-[22px]">
                  お腹
                </span>
              </h3>

              <div className="flex w-[162px] h-7 items-center justify-center gap-[7.63px] px-[29.57px] py-[3.82px] absolute top-[71px] left-[calc(50.00%_-_80px)] bg-[#ff00001a] rounded-[9.54px] overflow-hidden">
                <span className="relative flex items-center justify-center w-fit mt-[-1.27px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#da0000] text-xs text-center tracking-[0.84px] leading-[21.0px] whitespace-nowrap">
                  くびれを作りたい
                </span>
              </div>
            </article>
          </div>

          <div className="flex flex-col w-[163px] items-start gap-2.5 relative">
            <article className="relative self-stretch w-full h-[148px] bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_5px_#00000026] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
              <ul className="absolute top-[77px] left-[calc(50.00%_-_68px)] w-[136px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs text-center tracking-[0.84px] leading-[17.2px]">
                <li>上半身を細くしたい</li>
                <li className="mt-[17.2px]">姿勢をきれいにしたい</li>
              </ul>

              <h3 className="absolute top-[17px] left-[calc(50.00%_-_66px)] w-[132px] h-[38px] flex items-center justify-center bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_10px_#0000001a] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
                <span className="flex items-center justify-center h-[22px] w-[88px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm text-center tracking-[0.98px] leading-[22px]">
                  上半身
                </span>
              </h3>
            </article>

            <article className="relative self-stretch w-full h-[202px] bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_5px_#00000026] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
              <ul className="absolute top-[77px] left-[calc(50.00%_-_68px)] w-[136px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs text-center tracking-[0.84px] leading-[17.2px]">
                <li>スタイルUPしたい</li>
                <li className="mt-[17.2px]">歩行姿勢をきれいにしたい</li>
                <li className="mt-[17.2px]">自分の状態を知りたい</li>
              </ul>

              <h3 className="absolute top-[17px] left-[calc(50.00%_-_66px)] w-[132px] h-[38px] flex items-center justify-center bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_10px_#0000001a] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
                <span className="flex items-center justify-center h-[22px] w-[88px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm text-center tracking-[0.98px] leading-[22px]">
                  全体
                </span>
              </h3>
            </article>
          </div>

          <div className="flex flex-col w-[163px] h-[127px] items-start gap-[11px] relative">
            <article className="relative self-stretch w-full h-28 bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_5px_#00000026] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
              <p className="absolute top-[77px] left-[calc(50.00%_-_68px)] w-[136px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-xs text-center tracking-[0.84px] leading-[18px]">
                特になし
              </p>

              <h3 className="absolute top-[17px] left-[calc(50.00%_-_66px)] w-[132px] h-[38px] flex items-center justify-center bg-[#ffffff1a] rounded-[10.31px] overflow-hidden border-[0.83px] border-solid border-[#ffffff26] shadow-[0px_0px_10px_#0000001a] backdrop-blur-[4.11px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.11px)_brightness(100%)]">
                <span className="flex items-center justify-center h-[22px] w-[88px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-sm text-center tracking-[0.98px] leading-[22px]">
                  その他
                </span>
              </h3>
            </article>
          </div>
        </div>

        <div
          className="absolute top-[524px] left-[584px] w-[217px] h-16 bg-[#ffffff1a] rounded-[32px] overflow-hidden shadow-[0px_10px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.14),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]"
          role="tablist"
        >
          <button
            className="absolute top-1 left-1 w-[110px] h-[57px] rounded-[29px] overflow-hidden"
            role="tab"
            aria-selected="false"
          >
            <span className="absolute h-[62.06%] top-[18.97%] left-[calc(50.00%_-_24px)] w-12 flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#999999] text-[15px] text-center tracking-[1.05px] leading-[35.5px] whitespace-nowrap">
              上部
            </span>
          </button>

          <button
            className="absolute top-1 left-[103px] w-[110px] h-[57px] bg-[#4dacff] rounded-[29px] overflow-hidden"
            role="tab"
            aria-selected="true"
          >
            <span className="absolute h-[62.06%] top-[18.97%] left-[calc(50.00%_-_24px)] w-12 flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[15px] text-center tracking-[1.05px] leading-[35.5px] whitespace-nowrap">
              下部
            </span>
          </button>
        </div>
      </div>

      <div className="absolute top-[1019px] left-px w-[834px] h-[178px]" />
    </section>
  );
};
