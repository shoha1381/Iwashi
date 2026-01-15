export const AchievementMetricsSection = () => {
  const salesData = {
    target: 75,
    forecast: 50,
    percentage: 67,
    suggestion: "10日後までに初回5件スタートすると100,000円上昇",
  };

  const metricsData = [
    { label: "5回払い", value: 68, unit: "%", change: -2.1, isPositive: false },
    { label: "継続率", value: 84.3, unit: "%", change: 3.8, isPositive: true },
    {
      label: "頻度達成率",
      value: 68,
      unit: "%",
      change: -2.1,
      isPositive: false,
    },
    {
      label: "10回までの来店ペース",
      value: 9.2,
      unit: "日",
      change: 0.7,
      isPositive: false,
      changeUnit: "日",
    },
    {
      label: "平均単価",
      value: 8500,
      unit: "円",
      change: 6.3,
      isPositive: true,
      fullWidth: true,
    },
  ];

  const basicAchievementData = [
    [
      {
        label: "5回払い",
        value: 68,
        unit: "%",
        change: -2.1,
        isPositive: false,
      },
      {
        label: "カリキュラム作成費",
        value: 98.7,
        unit: "%",
        change: 2.1,
        isPositive: true,
      },
      {
        label: "施術前の予約",
        value: 50.3,
        unit: "%",
        change: -2.1,
        isPositive: false,
      },
      {
        label: "変更4日後以降",
        value: 79.3,
        unit: "%",
        change: 3.8,
        isPositive: true,
      },
    ],
    [
      {
        label: "① 頻度のグラフ",
        value: 72.5,
        unit: "%",
        change: 5.2,
        isPositive: true,
      },
      {
        label: "① 効果のイメージ",
        value: 68,
        unit: "%",
        change: -2.1,
        isPositive: false,
      },
      {
        label: "③ 継続の確認",
        value: 84.3,
        unit: "%",
        change: 3.8,
        isPositive: true,
      },
      {
        label: "④ 次回支払いの確認",
        value: 84.3,
        unit: "%",
        change: 3.8,
        isPositive: true,
      },
    ],
    [
      {
        label: "⑤ 継続の確認・予約",
        value: 72.5,
        unit: "%",
        change: 5.2,
        isPositive: true,
      },
      {
        label: "⑤ 次回以降の支払い",
        value: 68,
        unit: "%",
        change: -2.1,
        isPositive: false,
      },
      {
        label: "⑤ ５回分の支払い",
        value: 84.3,
        unit: "%",
        change: 3.8,
        isPositive: true,
      },
      {
        label: "⑧  After写真撮影",
        value: 72.5,
        unit: "%",
        change: 5.2,
        isPositive: true,
      },
    ],
  ];

  const aiSuggestions = [
    {
      icon: "summary",
      title: "総括",
      content:
        "継続率が着実に向上しており、顧客満足度も高い水準で推移しています。特に、施術前の予約取得がスムーズになり、来店ペースが理想に近づいているお客様ほど効果実感が高い傾向が見られます。",
    },
    {
      icon: "effect",
      title: "施術効果",
      content:
        "フェイスラインの引き締まりや左右バランスの改善、小顔効果が顕著に表れています。特に、咬筋・側頭筋・首周りへのアプローチが安定しており、施術後の変化量が大きく、効果の持続力も高まっています。",
    },
    {
      icon: "todo",
      title: "To Do",
      content:
        "10回目までのお客様には、来店ペースが結果に直結することを毎回リマインドする。\n施術前の予約を徹底する。\n5回目にまとめて支払いを徹底する。",
    },
  ];

  const renderMetricCard = (metric, index) => {
    const isFullWidth = metric.fullWidth;
    const width = isFullWidth
      ? "w-[282px] mr-[-0.53px]"
      : index % 2 === 0
        ? "w-[137px]"
        : "w-[136px] mr-[-1.13px]";

    return (
      <div
        key={index}
        className={`relative ${width} h-[57px] rounded-[12.15px] border-[0.8px] border-solid border-[#bddaff80]`}
      >
        <div className="absolute top-2 left-4 w-[86px] h-3 flex">
          <div className="mt-[0.8px] h-[13px] ml-0 [font-family:'Inter',Helvetica] font-normal text-[#495565] text-[10.4px] tracking-[0] leading-[12.2px] whitespace-nowrap">
            {metric.label}
          </div>
        </div>

        <div
          className={`absolute ${isFullWidth ? "top-[25px]" : "top-6"} left-[19px] w-[86px] h-7 flex`}
        >
          <div
            className={`flex mt-0 h-[27.35px] relative ml-0 items-start ${metric.value >= 1000 ? "w-[60.93px]" : metric.value >= 100 ? "w-[46.94px]" : metric.value >= 10 ? "w-[45.02px]" : "w-[28.33px]"}`}
          >
            <div className="relative w-fit mt-[-0.76px] [font-family:'Inter',Helvetica] font-normal text-[#101727] text-[22.8px] tracking-[0.30px] leading-[27.3px] whitespace-nowrap">
              {metric.value >= 1000
                ? metric.value.toLocaleString()
                : metric.value}
            </div>
          </div>

          <div
            className={`mt-[6.5px] h-[21.27px] ${metric.value >= 1000 ? "ml-[6.1px]" : "ml-[6.1px]"} flex`}
          >
            <div className="mt-0 h-[22px] ml-0 [font-family:'Inter',Helvetica] font-normal text-[#495565] text-[13.7px] tracking-[-0.33px] leading-[21.3px] whitespace-nowrap">
              {metric.unit}
            </div>
          </div>

          {!isFullWidth && (
            <div
              className={`flex ${metric.isPositive ? "w-[86.22px] h-[15.19px]" : "mt-[-0.3px] w-[86.22px] h-[15.19px]"} relative ${metric.value >= 1000 ? "ml-[25.1px]" : "ml-[37.5px]"} items-center gap-[4.56px]`}
            >
              <div className="relative w-[12.15px] h-[12.15px]">
                <img
                  className={`absolute w-[25.00%] h-[25.00%] ${metric.isPositive ? "top-[25.00%]" : "top-[41.68%]"} left-[62.50%]`}
                  alt="Vector"
                  src={
                    metric.isPositive
                      ? "/img/vector-43.svg"
                      : "/img/vector-39.svg"
                  }
                />
                <img
                  className="absolute w-[83.33%] h-[41.67%] top-[25.00%] left-[4.18%]"
                  alt="Vector"
                  src={
                    metric.isPositive
                      ? "/img/vector-44.svg"
                      : "/img/vector-40.svg"
                  }
                />
              </div>
            </div>
          )}
        </div>

        <div
          className={`absolute ${isFullWidth ? "top-[38px] left-[242px] w-[38px]" : index % 2 === 0 ? "top-[37px] left-[103px] w-[70px]" : "top-9 left-[98px] w-[70px]"} h-[15px] flex`}
        >
          <div
            className="mt-[0.4px] h-4 ml-0 [font-family:'Inter',Helvetica] font-normal text-[10.6px] tracking-[-0.11px] leading-[15.2px]"
            style={{ color: metric.isPositive ? "#00a63e" : "#e7000b" }}
          >
            {metric.isPositive ? "+" : ""}
            {metric.change}
            {metric.changeUnit || "%"}
          </div>
        </div>

        {isFullWidth && (
          <div className="flex w-[86px] h-[15px] items-center gap-[4.56px] absolute top-[25px] left-[242px]">
            <div className="relative w-[12.15px] h-[12.15px]">
              <img
                className="absolute w-[25.00%] h-[25.00%] top-[25.00%] left-[62.50%]"
                alt="Vector"
                src="/img/vector-43.svg"
              />
              <img
                className="absolute w-[83.33%] h-[41.67%] top-[25.00%] left-[4.15%]"
                alt="Vector"
                src="/img/vector-44.svg"
              />
            </div>
            <div className="relative w-[27.35px] h-[12.15px]" />
          </div>
        )}
      </div>
    );
  };

  const renderBasicAchievementCard = (metric, rowIndex, colIndex) => {
    const width = colIndex === 0 ? "w-[137px]" : "w-[136px]";

    return (
      <div
        key={`${rowIndex}-${colIndex}`}
        className={`relative ${width} h-[57px] rounded-[12.15px] border-[0.8px] border-solid border-[#bddaff80]`}
      >
        <div
          className={`absolute ${rowIndex === 2 && colIndex === 0 ? "top-4" : "top-2"} left-4 w-[86px] h-3 flex`}
        >
          <div
            className={`${rowIndex === 2 && colIndex === 0 ? "mt-[-7.2px]" : "mt-[0.8px]"} h-[13px] ml-0 [font-family:'Inter',Helvetica] font-normal text-[#495565] text-[10.4px] tracking-[0] leading-[12.2px] whitespace-nowrap`}
          >
            {metric.label}
          </div>
        </div>

        <div
          className={`absolute ${rowIndex === 0 && colIndex === 1 ? "top-[26px]" : "top-[25px]"} left-[19px] w-[86px] h-7 flex ${colIndex === 0 || (rowIndex === 1 && colIndex === 1) || (rowIndex === 2 && colIndex === 1) ? "gap-[6.1px]" : ""}`}
        >
          <div
            className={`flex mt-0 h-[27.35px] relative ml-0 items-start ${metric.value >= 100 ? "w-[46.94px]" : metric.value >= 70 ? "w-[45.02px]" : "w-[28.33px]"}`}
          >
            <div
              className={`relative w-fit mt-[-0.76px] ${metric.value >= 100 ? "mr-[-2.06px]" : metric.value >= 70 ? "mr-[-2.98px]" : "mr-[-0.67px]"} [font-family:'Inter',Helvetica] font-normal text-[#101727] text-[22.8px] tracking-[0.30px] leading-[27.3px] whitespace-nowrap`}
            >
              {metric.value}
            </div>
          </div>

          <div
            className={`mt-[6.5px] w-[12.25px] h-[21.27px] ${colIndex !== 0 && !(rowIndex === 1 && colIndex === 1) && !(rowIndex === 2 && colIndex === 1) ? "ml-[6.1px]" : ""} flex`}
          >
            <div className="mt-0 w-3 h-[22px] ml-0 [font-family:'Inter',Helvetica] font-normal text-[#495565] text-[13.7px] tracking-[-0.33px] leading-[21.3px] whitespace-nowrap">
              {metric.unit}
            </div>
          </div>

          {(colIndex === 0 ||
            (rowIndex === 1 && colIndex === 1) ||
            (rowIndex === 2 && colIndex === 1)) && (
            <div
              className={`flex ${metric.isPositive ? "w-[86.22px] h-[15.19px]" : rowIndex === 1 && colIndex === 1 ? "w-[86.22px] h-[15.19px]" : "mt-[-0.3px] w-[86.22px] h-[15.19px]"} relative ml-[37.5px] items-center gap-[4.56px]`}
            >
              <div className="relative w-[12.15px] h-[12.15px]">
                <img
                  className={`absolute w-[25.00%] h-[25.00%] ${metric.isPositive ? "top-[25.00%]" : "top-[41.68%]"} left-[62.50%]`}
                  alt="Vector"
                  src={
                    metric.isPositive
                      ? "/img/vector-43.svg"
                      : "/img/vector-39.svg"
                  }
                />
                <img
                  className={`absolute w-[83.33%] h-[41.67%] ${metric.isPositive ? "top-[25.00%]" : rowIndex === 1 && colIndex === 1 ? "top-[24.99%]" : "top-[25.00%]"} left-[4.18%]`}
                  alt="Vector"
                  src={
                    metric.isPositive
                      ? "/img/vector-44.svg"
                      : "/img/vector-40.svg"
                  }
                />
              </div>
            </div>
          )}
        </div>

        {colIndex !== 0 &&
          !(rowIndex === 1 && colIndex === 1) &&
          !(rowIndex === 2 && colIndex === 1) && (
            <div
              className={`flex w-[86px] h-[15px] items-center gap-[4.56px] absolute ${rowIndex === 0 && colIndex === 1 ? "top-[26px]" : "top-[25px]"} left-[97px]`}
            >
              <div className="relative w-[12.15px] h-[12.15px]">
                <img
                  className={`absolute w-[25.00%] h-[25.00%] ${metric.isPositive ? "top-[25.00%]" : "top-[41.68%]"} left-[62.50%]`}
                  alt="Vector"
                  src={
                    metric.isPositive
                      ? "/img/vector-43.svg"
                      : "/img/vector-39.svg"
                  }
                />
                <img
                  className="absolute w-[83.33%] h-[41.67%] top-[25.00%] left-[4.15%]"
                  alt="Vector"
                  src={
                    metric.isPositive
                      ? "/img/vector-44.svg"
                      : "/img/vector-40.svg"
                  }
                />
              </div>
            </div>
          )}

        <div
          className={`absolute ${rowIndex === 0 && colIndex === 1 ? "top-[39px]" : rowIndex === 2 && colIndex === 0 ? "top-[38px]" : "top-[37px]"} left-[${colIndex === 0 ? "103" : "98"}px] w-[70px] h-[15px] flex`}
        >
          <div
            className="mt-[0.4px] h-4 ml-0 [font-family:'Inter',Helvetica] font-normal text-[10.6px] tracking-[-0.11px] leading-[15.2px]"
            style={{ color: metric.isPositive ? "#00a63e" : "#e7000b" }}
          >
            {metric.isPositive ? "+" : ""}
            {metric.change}%
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="flex z-[1] mt-[139px] w-[759.29px] h-[900.54px] ml-[-0.7px] relative flex-col items-start gap-5">
      <div className="flex items-center gap-[17.02px] relative self-stretch w-full flex-[0_0_auto]">
        <article className="relative w-[422px] h-[274px] bg-white rounded-[20.95px] shadow-[0px_0px_5px_#00000026]">
          <h2 className="absolute top-[11px] left-16 w-[78px] h-[34px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[15.5px] tracking-[1.08px] leading-[33.2px]">
            売上
          </h2>

          <div
            className="absolute top-[19px] left-[30px] w-5 h-5"
            aria-hidden="true"
          >
            <img
              className="absolute w-[25.00%] h-[25.00%] top-[24.99%] left-[62.51%]"
              alt=""
              src="/img/vector.svg"
            />
            <img
              className="absolute w-[83.33%] h-[41.67%] top-[25.63%] left-[4.80%]"
              alt=""
              src="/img/vector-1.svg"
            />
          </div>

          <div className="flex flex-col w-[266px] items-start gap-2.5 absolute top-[62px] left-[126px]">
            <div className="relative self-stretch w-full h-[47px] rounded-[12.15px] border-[0.8px] border-solid border-[#bddaff80]">
              <div className="absolute top-[7px] left-6 w-[75px] h-[23px] flex gap-[9.4px]">
                <div
                  className="mt-[5.8px] w-[13.28px] h-[13.28px] relative ml-0"
                  aria-hidden="true"
                >
                  <img
                    className="absolute w-[25.00%] h-[25.00%] top-[25.01%] left-[62.51%]"
                    alt=""
                    src="/img/vector-2.svg"
                  />
                  <img
                    className="absolute w-[83.33%] h-[41.67%] top-[25.01%] left-[4.20%]"
                    alt=""
                    src="/img/vector-3.svg"
                  />
                </div>
                <div className="flex items-center justify-center mt-0 w-[51.86px] h-[23px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#4a5565] text-[10.4px] tracking-[0.73px] leading-[22.1px]">
                  売上目標
                </div>
              </div>

              <p className="absolute top-2 left-[121px] w-[124px] h-7 flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-transparent text-[30.3px] tracking-[2.12px] leading-[27.6px]">
                <span className="text-[#34c759] tracking-[0.64px]">
                  {salesData.target}
                </span>
                <span className="text-[#34c759] text-[32.2px] tracking-[0.72px]">
                  &nbsp;
                </span>
                <span className="text-black text-[16.9px] tracking-[0.20px]">
                  万円
                </span>
              </p>
            </div>

            <div className="relative self-stretch w-full h-[47px] rounded-[12.15px] border-[0.8px] border-solid border-[#bddaff80]">
              <p className="absolute top-[9px] left-[121px] w-[124px] h-7 flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-transparent text-[30.3px] tracking-[2.12px] leading-[27.6px]">
                <span className="text-[#0088ff] tracking-[0.64px]">
                  {salesData.forecast}
                </span>
                <span className="text-[#0088ff] text-[32.2px] tracking-[0.72px]">
                  &nbsp;
                </span>
                <span className="text-black text-[16.9px] tracking-[0.20px]">
                  万円
                </span>
              </p>

              <div className="absolute top-[7px] left-6 w-[75px] h-[23px] flex gap-[9.4px]">
                <div
                  className="mt-[4.8px] w-[13.28px] h-[13.28px] relative ml-0"
                  aria-hidden="true"
                >
                  <img
                    className="absolute w-[25.00%] h-[25.00%] top-[24.99%] left-[62.51%]"
                    alt=""
                    src="/img/vector-4.svg"
                  />
                  <img
                    className="absolute w-[83.33%] h-[41.67%] top-[24.99%] left-[4.19%]"
                    alt=""
                    src="/img/vector-5.svg"
                  />
                </div>
                <div className="flex items-center justify-center mt-0 w-[51.86px] h-[23px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#4a5565] text-[10.4px] tracking-[0.73px] leading-[22.1px]">
                  売上予測
                </div>
              </div>
            </div>

            <div className="relative self-stretch w-full h-[78px] rounded-[12.15px] border-[0.8px] border-solid border-[#bddaff80]">
              <div className="absolute top-[30px] left-[calc(50.00%_-_103px)] w-[205px] h-[39px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11.3px] tracking-[0.79px] leading-[19.3px]">
                {salesData.suggestion}
              </div>

              <div className="absolute top-[7px] left-6 w-[75px] h-[23px] flex gap-[9.1px]">
                <div
                  className="mt-[4.5px] w-[13.62px] h-[13.62px] relative ml-0"
                  aria-hidden="true"
                >
                  <img
                    className="absolute w-[50.00%] h-[50.00%] top-[4.16%] left-[20.84%]"
                    alt=""
                    src="/img/vector-6.svg"
                  />
                  <img
                    className="absolute w-[25.00%] h-0 top-[70.83%] left-[33.34%]"
                    alt=""
                    src="/img/vector-7.svg"
                  />
                  <img
                    className="absolute w-[16.67%] h-0 top-[87.51%] left-[37.52%]"
                    alt=""
                    src="/img/vector-8.svg"
                  />
                </div>
                <div className="flex items-center justify-center mt-0 w-[51.86px] h-[23px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#4a5565] text-[10.4px] tracking-[0.73px] leading-[22.1px]">
                  施策
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[63px] left-[31px] w-20 h-[189px]">
            <div className="absolute top-[166px] left-4 h-[23px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11.9px] text-center tracking-[0.83px] leading-[22.9px] whitespace-nowrap">
              0%
            </div>

            <div className="absolute top-0 left-0 h-[23px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[11.9px] text-center tracking-[0.83px] leading-[22.9px] whitespace-nowrap">
              100%
            </div>

            <p className="absolute top-[57px] left-[7px] h-[23px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-transparent text-[11.9px] text-center tracking-[0.83px] leading-[22.9px] whitespace-nowrap">
              <span className="font-bold text-[#0088ff] tracking-[0.10px]">
                {salesData.percentage}
              </span>
              <span className="font-medium text-black tracking-[0.10px]">
                %
              </span>
            </p>

            <div className="absolute top-[68px] left-[calc(50.00%_-_70px)] w-[166px] h-[54px] rotate-[-90.00deg]">
              <div className="absolute w-[100.00%] top-[calc(50.00%_-_2px)] left-0 h-1.5 bg-[#78787833] rounded-[3.2px]" />
              <div className="absolute w-[73.79%] top-[calc(50.00%_-_3px)] left-0 h-1.5 bg-[#0088ff] rounded-[3.2px]" />
            </div>
          </div>
        </article>

        <article className="relative w-[319px] h-[274px] bg-white rounded-[20.95px] shadow-[0px_0px_5px_#00000026]">
          <h2 className="absolute top-[11px] left-16 w-[78px] h-[34px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[15.5px] tracking-[1.08px] leading-[33.2px]">
            指標
          </h2>

          <div className="flex flex-col w-[281px] items-start gap-2.5 absolute top-[62px] left-[calc(50.00%_-_141px)]">
            <div className="flex items-center gap-[9.59px] relative self-stretch w-full flex-[0_0_auto]">
              {metricsData
                .slice(0, 2)
                .map((metric, index) => renderMetricCard(metric, index))}
            </div>

            <div className="flex items-center gap-[9.59px] relative self-stretch w-full flex-[0_0_auto]">
              {metricsData
                .slice(2, 4)
                .map((metric, index) => renderMetricCard(metric, index + 2))}
            </div>

            <div className="flex h-[57px] items-center gap-[9.59px] relative self-stretch w-full">
              {metricsData
                .slice(4, 5)
                .map((metric, index) => renderMetricCard(metric, index + 4))}
            </div>
          </div>

          <div
            className="absolute top-[19px] left-[29px] w-5 h-5"
            aria-hidden="true"
          >
            <img
              className="absolute w-[90.38%] h-[90.38%] top-[4.45%] left-[7.50%]"
              alt=""
              src="/img/percent.svg"
            />
          </div>

          <div className="absolute top-[18px] left-[121px] h-7 flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[10px] tracking-[0.70px] leading-[27.2px] whitespace-nowrap">
            ※先月比
          </div>
        </article>
      </div>

      <article className="relative self-stretch w-full h-[284px] bg-white rounded-[22.28px] shadow-[0px_0px_5px_-0.93px_#00000026]">
        <div className="absolute top-[17px] left-[30px] w-[508px] h-[21px]">
          <div
            className="absolute w-[3.32%] h-[79.44%] top-[18.27%] left-0"
            aria-hidden="true"
          >
            <img
              className="absolute w-[83.33%] h-[83.33%] top-[4.16%] left-[4.18%]"
              alt=""
              src="/img/vector-19.svg"
            />
            <img
              className="absolute w-[54.17%] h-[41.67%] top-[12.52%] left-[33.33%]"
              alt=""
              src="/img/vector-20.svg"
            />
          </div>

          <h2 className="absolute -top-0.5 left-[33px] h-7 flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[15.5px] tracking-[1.08px] leading-[27.2px] whitespace-nowrap">
            基本の達成度
          </h2>

          <div className="absolute top-0 left-[151px] h-7 flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-black text-[10px] tracking-[0.70px] leading-[27.2px] whitespace-nowrap">
            ※先月比
          </div>
        </div>

        <div className="flex flex-col w-[590px] items-start gap-2.5 absolute top-[60px] left-[calc(50.00%_-_295px)]">
          {basicAchievementData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`${rowIndex === 2 ? "inline-flex" : "flex"} ${rowIndex === 2 ? "h-[57px]" : rowIndex === 0 ? "inline-flex" : "flex h-[57px]"} items-center gap-[15px] relative ${rowIndex === 2 ? "" : "self-stretch w-full"} ${rowIndex === 0 ? "flex-[0_0_auto]" : ""}`}
            >
              {row.map((metric, colIndex) =>
                renderBasicAchievementCard(metric, rowIndex, colIndex),
              )}
            </div>
          ))}

          <img
            className="relative w-[590px] h-px"
            alt=""
            src="/img/vector-77.svg"
          />
        </div>
      </article>

      <article className="relative w-[759.29px] h-[302.54px] rounded-[23.25px] border-[0.97px] border-solid border-[#f2e7fe99] bg-[linear-gradient(117deg,rgba(250,245,255,1)_0%,rgba(239,246,255,1)_100%)]">
        <div className="absolute top-[25px] left-[30px] w-[508px] h-[21px] flex gap-[15.2px]">
          <div
            className="mt-[1.5px] w-[18.18px] h-[18.18px] relative ml-0"
            aria-hidden="true"
          >
            <img
              className="absolute w-[83.35%] h-[83.35%] top-[4.15%] left-[4.15%]"
              alt=""
              src="/img/vector-45.svg"
            />
            <img
              className="absolute w-0 h-[16.67%] top-[4.16%] left-[79.17%]"
              alt=""
              src="/img/vector-46.svg"
            />
            <img
              className="absolute w-[16.67%] h-0 top-[12.49%] left-[70.83%]"
              alt=""
              src="/img/vector-47.svg"
            />
            <img
              className="absolute w-[16.67%] h-[16.67%] top-[70.83%] left-[4.16%]"
              alt=""
              src="/img/vector-48.svg"
            />
          </div>

          <h2 className="flex items-center justify-center mt-[-2.5px] w-[99px] h-7 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#59168b] text-[15.5px] tracking-[1.08px] leading-[27.2px] whitespace-nowrap">
            AIからの提案
          </h2>
        </div>

        <div className="inline-flex items-center gap-[14.75px] absolute top-[65px] left-[calc(50.00%_-_361px)]">
          {aiSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`flex flex-col ${index === 0 ? "w-[231.91px]" : index === 1 ? "w-[229.55px]" : "w-[230.73px]"} h-[213.07px] items-start gap-[17.02px] pt-[23.25px] pb-0 px-[23.25px] relative bg-[#ffffffcc] rounded-[15.5px]`}
            >
              <div className="flex h-[19.37px] items-center gap-[13.56px] relative self-stretch w-full">
                <div
                  className="relative w-[19.37px] h-[19.37px]"
                  aria-hidden="true"
                >
                  {suggestion.icon === "summary" && (
                    <>
                      <img
                        className="absolute w-[25.00%] h-[25.00%] top-[25.00%] left-[62.50%]"
                        alt=""
                        src="/img/vector-49.svg"
                      />
                      <img
                        className="absolute w-[83.33%] h-[41.67%] top-[25.00%] left-[4.15%]"
                        alt=""
                        src="/img/vector-50.svg"
                      />
                    </>
                  )}
                  {suggestion.icon === "effect" && (
                    <>
                      <img
                        className="absolute w-[83.35%] h-[83.35%] top-[4.15%] left-[4.15%]"
                        alt=""
                        src="/img/vector-51.svg"
                      />
                      <img
                        className="absolute w-0 h-[16.67%] top-[4.16%] left-[79.16%]"
                        alt=""
                        src="/img/vector-52.svg"
                      />
                      <img
                        className="absolute w-[16.67%] h-0 top-[12.50%] left-[70.83%]"
                        alt=""
                        src="/img/vector-53.svg"
                      />
                      <img
                        className="absolute w-[16.67%] h-[16.67%] top-[70.83%] left-[4.16%]"
                        alt=""
                        src="/img/vector-54.svg"
                      />
                    </>
                  )}
                  {suggestion.icon === "todo" && (
                    <>
                      <img
                        className="absolute w-[75.00%] h-[75.00%] top-[8.33%] left-[8.33%]"
                        alt=""
                        src="/img/vector-55.svg"
                      />
                      <img
                        className="absolute w-[54.17%] h-[41.67%] top-[12.50%] left-[33.33%]"
                        alt=""
                        src="/img/vector-56.svg"
                      />
                    </>
                  )}
                </div>

                <h3 className="relative flex items-center justify-center w-fit mt-[-8.78px] mb-[-6.85px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#59168b] text-[14.5px] tracking-[1.02px] leading-[34.8px] whitespace-nowrap">
                  {suggestion.title}
                </h3>
              </div>

              <p
                className={`relative flex items-center justify-center ${index === 0 ? "w-[185px]" : index === 1 ? "w-[182.73px]" : "w-[179.32px]"} [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[10.7px] tracking-[0.75px] leading-[22.3px]`}
              >
                {suggestion.content}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
