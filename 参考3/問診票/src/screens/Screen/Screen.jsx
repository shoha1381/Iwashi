export const Screen = () => {
  const tableData = [
    {
      id: 1,
      question:
        "顔の整形手術（鼻・まぶた［切開または埋没法・アゴ・頬など］）を行ったことがある。",
      answer: "ある",
      answerColor: "text-[#ff0000]",
    },
    {
      id: 2,
      question: "リフトアップ整形手術を行ったことがある。",
      answer: "ない",
      answerColor: "text-[#999999]",
    },
    {
      id: 3,
      question: "行ったことがある顔の美容治療・美容施術",
      answer: "エラボトックス、ヒアルロン酸注入（フェイスライン補正）",
      answerColor: "text-[#ff0000]",
    },
    {
      id: 4,
      question: "行ったことがある顔の美容治療・美容施術",
      answer: "",
      answerColor: "text-[#999999]",
    },
    {
      id: 5,
      question:
        "上記以外で顔の美容治療・美容施術を行っている方は、具体的な内容と時期を教えてください。",
      answer: "",
      answerColor: "text-[#999999]",
    },
    {
      id: 6,
      question:
        "近日中に顔の手術や美容治療を予定している方は、具体的な内容を教えてください。",
      answer: "",
      answerColor: "text-[#999999]",
    },
    {
      id: 7,
      question: "ご本人の結婚式等のイベントを控えている。",
      answer: "いいえ",
      answerColor: "text-[#999999]",
    },
    {
      id: 8,
      question: "皮膚（頭皮）が弱い／赤くなりやすい。",
      answer: "いいえ",
      answerColor: "text-[#999999]",
    },
    {
      id: 9,
      question: "お顔の日焼けで赤み、炎症がある。",
      answer: "いいえ",
      answerColor: "text-[#999999]",
    },
    {
      id: 10,
      question:
        "NOV（ノブ）オリゴマリンローションSで肌荒れ・かぶれを起こしたことがある。",
      answer: "いいえ",
      answerColor: "text-[#999999]",
    },
    {
      id: 11,
      question: "妊娠中の方は、妊娠何ヶ月か教えてください。",
      answer: "",
      answerColor: "text-[#999999]",
    },
    {
      id: 12,
      question: "熱がある／風邪を引いている。",
      answer: "いいえ",
      answerColor: "text-[#999999]",
    },
    {
      id: 13,
      question: "現在、お酒を飲んでいる。",
      answer: "いいえ",
      answerColor: "text-[#999999]",
    },
    {
      id: 14,
      question: "頭部疾患や頭部手術経験がある。",
      answer: "いいえ",
      answerColor: "text-[#999999]",
    },
    {
      id: 15,
      question: "現在服用している薬",
      answer: "",
      answerColor: "text-[#999999]",
    },
    {
      id: 16,
      question: "お顔やお体で現在治療中もしくは過去に患った病気や先天性の疾患",
      answer: "",
      answerColor: "text-[#999999]",
    },
  ];

  const navigationItems = [
    {
      icon: "/img/vector-2.svg",
      label: "概要",
      active: false,
    },
    {
      icon: "/img/vector-3.svg",
      label: "お悩み",
      active: false,
    },
    {
      icon: "/img/icon-park-solid-check-one.svg",
      label: "問診票",
      active: true,
    },
  ];

  return (
    <div
      className="flex flex-col h-[1194px] items-start relative bg-white overflow-hidden"
      data-model-id="1:10535"
    >
      <header className="relative w-[101px] h-[834px] mt-[-366.50px] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
        <button
          className="absolute top-[calc(50.00%_-_374px)] left-[34px] w-[42px] h-[42px] rotate-[-90.00deg]"
          aria-label="閉じる"
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
              alt="閉じる"
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
      </header>

      <main className="relative w-[834px] h-[924px]">
        <div className="relative top-[30px] left-[calc(50.00%_-_366px)] w-[732px] h-[894px]">
          {tableData.map((row, index) => (
            <div
              key={row.id}
              className="absolute left-[60px] w-[672px] h-7 bg-[#e5e5e54c]"
              style={{ top: `${12 + index * 55}px` }}
            />
          ))}

          <div className="absolute top-[13px] left-5 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] text-center tracking-[0.91px] leading-[55px]">
            {tableData.map((row) => (
              <div key={row.id}>{row.id}</div>
            ))}
          </div>

          <div className="absolute top-0 left-[89px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[13px] tracking-[0.91px] leading-[55px]">
            {tableData.map((row) => (
              <div key={row.id}>{row.question}</div>
            ))}
          </div>

          <p className="absolute top-[26px] left-[89px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-transparent text-[13px] tracking-[0.91px] leading-[55px]">
            {tableData.map((row) => (
              <span
                key={row.id}
                className={`${row.answerColor} tracking-[0.12px]`}
              >
                {row.answer}
                <br />
              </span>
            ))}
          </p>

          <img
            className="absolute top-3 left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-6.svg"
          />

          <img
            className="absolute top-10 left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[67px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[95px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[123px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-3 left-[calc(50.00%_-_366px)] w-px h-[882px]"
            alt=""
            src="/img/vector-42.svg"
          />

          <img
            className="absolute top-3 left-[calc(50.00%_-_306px)] w-px h-[882px]"
            alt=""
            src="/img/vector-42.svg"
          />

          <img
            className="absolute top-3 left-[calc(50.00%_+_366px)] w-px h-[882px]"
            alt=""
            src="/img/vector-42.svg"
          />

          <img
            className="absolute top-3 left-[calc(50.00%_-_311px)] w-px h-[882px]"
            alt=""
            src="/img/vector-42.svg"
          />

          <img
            className="absolute top-[150px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[177px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[205px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[232px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[260px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-72 left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[316px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[343px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[371px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-19.svg"
          />

          <img
            className="absolute top-[399px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[426px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[453px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[480px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[507px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[535px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[563px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[590px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[618px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[646px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[673px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[701px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[729px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[756px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[783px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[811px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[839px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />

          <img
            className="absolute top-[866px] left-[calc(50.00%_-_306px)] w-[672px] h-px"
            alt=""
            src="/img/vector-37.svg"
          />

          <img
            className="absolute top-[894px] left-[calc(50.00%_-_366px)] w-[732px] h-px"
            alt=""
            src="/img/vector-38.svg"
          />
        </div>
      </main>

      <nav className="relative w-[834px] h-[172px]">
        <div className="relative top-[31px] left-[260px] w-[492px] h-[90px]">
          <button
            className="absolute top-0 left-[372px] w-[120px] h-[90px] flex items-center justify-center bg-[#ffffff1a] rounded-[45px] overflow-hidden shadow-[0px_10px_30px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)]"
            aria-label="機能"
          >
            <div className="h-20 w-[108px] flex flex-col items-center gap-[3.1px] rounded-[43px] overflow-hidden">
              <div className="ml-[-0.1px] h-[43.93px] w-[43.93px] relative mt-2.5 aspect-[1]">
                <img
                  className="absolute w-[62.50%] h-[12.50%] top-[43.75%] left-[18.75%]"
                  alt=""
                  src="/img/vector-1.svg"
                />
              </div>

              <div className="flex items-center justify-center -ml-px h-[13px] w-[25px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
                機能
              </div>
            </div>
          </button>

          <div className="absolute top-0 left-[calc(50.00%_-_246px)] w-[315px] h-[90px] flex bg-[#ffffff1a] rounded-[45.29px] overflow-hidden shadow-[0px_11.32px_33.97px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.16),inset_-1px_0_1px_rgba(0,0,0,0.13)] backdrop-blur-[2.5px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100.0%)_saturate(100.0%)]">
            <div className="inline-flex mt-[5px] w-[302.68px] h-[80.39px] ml-1.5 relative items-center">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className={`relative w-[107.56px] h-[80.39px] ${index > 0 ? "-ml-2.5" : ""} ${item.active ? "bg-[#4aa9fc]" : ""} rounded-[45.29px] overflow-hidden`}
                  aria-label={item.label}
                  aria-current={item.active ? "page" : undefined}
                >
                  {index === 0 && (
                    <>
                      <div className="absolute top-[calc(50.00%_-_27px)] left-[calc(50.00%_-_19px)] w-[37px] h-[37px] aspect-[1]">
                        <img
                          className="absolute w-[66.67%] h-[83.33%] top-[8.33%] left-[16.67%]"
                          alt=""
                          src={item.icon}
                        />
                      </div>
                      <div className="absolute top-[55px] left-[calc(50.00%_-_13px)] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
                        {item.label}
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="absolute top-[9px] left-[calc(50.00%_-_20px)] w-10 h-10 aspect-[1]">
                        <div className="relative w-[72.10%] h-[89.72%] top-[7.69%] left-[13.46%]">
                          <img
                            className="absolute w-[4.83%] h-[3.11%] top-[-40972.13%] left-[-82577.84%]"
                            alt=""
                            src="/img/image.svg"
                          />
                          <img
                            className="absolute w-full h-[92.88%] top-[7.12%] left-0"
                            alt=""
                            src={item.icon}
                          />
                        </div>
                      </div>
                      <div className="absolute top-[57px] left-[calc(50.00%_-_19px)] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
                        {item.label}
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="absolute top-[57px] left-[calc(50.00%_-_19px)] h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-xs text-center tracking-[0.84px] leading-[12.9px] whitespace-nowrap">
                        {item.label}
                      </div>
                      <img
                        className="absolute top-[11px] left-[calc(50.00%_-_21px)] w-[41px] h-[41px] aspect-[1]"
                        alt=""
                        src={item.icon}
                      />
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="absolute top-32 left-[51px] w-[732px] h-[894px]" />
    </div>
  );
};
