export const UserInfoSection = () => {
  const faceAnnotations = [
    { id: 1, label: "面長の改善", top: "94px", left: "0" },
  ];

  const jawAnnotations = [
    { id: 1, label: "エラ張りの解消", top: "46px", left: "24px" },
  ];

  const bodyFrontMarkers = [
    { id: 1, top: "50.99%", left: "25.38%" },
    { id: 2, top: "50.99%", left: "58.56%" },
  ];

  const bodyBackMarkers = [
    { id: 1, top: "50.16%", left: "25.34%" },
    { id: 2, top: "50.16%", left: "58.49%" },
  ];

  const bodyAnnotations = [
    { id: 1, label: "くびれを作りたい", top: "179px", left: "98px" },
    { id: 2, label: "歪みを整えたい", top: "30px", left: "104px" },
  ];

  return (
    <section
      className="relative w-[834px] h-[330px]"
      aria-label="ユーザー情報セクション"
    >
      <div className="relative top-[51px] left-[63px] w-[728px] h-[228px] flex">
        <div className="w-[728px] h-[227.96px] flex">
          <div className="w-[285px] h-[227.23px] relative">
            <div className="absolute top-[15px] left-0 w-16 h-[202px]">
              <img
                className="absolute w-0 h-[33.62%] top-[66.38%] left-[42.07%]"
                alt=""
                src="/img/vector-73.svg"
                role="presentation"
              />

              <img
                className="absolute w-0 h-[33.62%] top-0 left-[42.05%]"
                alt=""
                src="/img/vector-72.svg"
                role="presentation"
              />

              {faceAnnotations.map((annotation) => (
                <div
                  key={annotation.id}
                  className="absolute h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#46a7fd] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap"
                  style={{ top: annotation.top, left: annotation.left }}
                >
                  {annotation.label}
                </div>
              ))}
            </div>

            <div className="absolute top-[132px] left-[171px] w-[114px] h-[59px]">
              <div className="w-[35.67%] h-[68.92%] top-0 left-0 rounded-[20.28px] absolute bg-[#0088ff80]" />

              {jawAnnotations.map((annotation) => (
                <div
                  key={annotation.id}
                  className="absolute h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#46a7fd] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap"
                  style={{ top: annotation.top, left: annotation.left }}
                >
                  {annotation.label}
                </div>
              ))}
            </div>

            <div className="absolute top-0 left-8 w-[209px] h-[227px]">
              <img
                className="absolute w-[74.12%] h-[90.32%] top-[5.58%] left-[16.68%]"
                alt="顔の図"
                src="/img/group.png"
              />

              <div className="left-[25px] absolute top-0 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[12.9px] tracking-[0.90px] leading-[26.1px] whitespace-nowrap">
                R
              </div>

              <div className="left-[190px] absolute top-0 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[12.9px] tracking-[0.90px] leading-[26.1px] whitespace-nowrap">
                L
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

              {bodyFrontMarkers.map((marker) => (
                <div
                  key={marker.id}
                  className="w-[15.62%] h-[7.19%] rounded-lg absolute bg-[#0088ff80]"
                  style={{ top: marker.top, left: marker.left }}
                />
              ))}

              <img
                className="absolute top-[121px] left-[68px] w-[52px] h-[51px]"
                alt=""
                src="/img/vector-107.svg"
                role="presentation"
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

              {bodyBackMarkers.map((marker) => (
                <div
                  key={marker.id}
                  className="w-[15.60%] h-[7.17%] rounded-lg absolute bg-[#0088ff80]"
                  style={{ top: marker.top, left: marker.left }}
                />
              ))}

              <img
                className="absolute top-[120px] -left-4 w-[50px] h-[50px]"
                alt=""
                src="/img/vector-108.svg"
                role="presentation"
              />
            </div>

            {bodyAnnotations.map((annotation) => (
              <div
                key={annotation.id}
                className="absolute h-[13px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#46a7fd] text-xs tracking-[0.84px] leading-[12.9px] whitespace-nowrap"
                style={{ top: annotation.top, left: annotation.left }}
              >
                {annotation.label}
              </div>
            ))}
          </div>

          <div className="mt-[10.7px] w-[42px] h-[42px] relative ml-[38.4px]">
            <div className="absolute w-[100.01%] h-[100.01%] top-0 left-0 flex rounded-[875.1px] shadow-[0px_0.88px_7px_#0000001f,0px_0px_1.75px_#0000001a] bg-[linear-gradient(0deg,rgba(0,145,255,1)_0%,rgba(0,145,255,1)_100%),linear-gradient(0deg,rgba(153,153,153,1)_0%,rgba(153,153,153,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.5)_100%)]">
              <div className="mr-0 flex-1 mb-0 w-[42px] bg-[#00000001] rounded-[259.03px] backdrop-blur-[2.6px] backdrop-brightness-[96.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(2.6px)_brightness(96.0%)_saturate(95.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_1px_0_0_rgba(255,255,255,0.28),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.14)]" />
            </div>

            <img
              className="absolute w-[64.75%] h-[64.75%] top-[16.67%] left-[16.67%]"
              alt="確認済み"
              src="/img/check.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
