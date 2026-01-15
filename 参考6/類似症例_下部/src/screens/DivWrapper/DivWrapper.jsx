import { useState } from 'react';

export const DivWrapper = () => {
  const [selectedTab, setSelectedTab] = useState('lower');
  const [selectedImprovements, setSelectedImprovements] = useState([]);

  const improvementOptions = [
    { id: 'distortion', label: '歪みを整えたい', image: '/img/cleanshot-2025-12-15-at-02-54-54-2x-2.png' },
    { id: 'waist', label: 'くびれを作りたい', image: '/img/cleanshot-2025-12-15-at-02-55-05-2x-2.png' }
  ];

  const toggleImprovement = (id) => {
    setSelectedImprovements(prev =>
prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div
      className="bg-white w-full min-w-[834px] min-h-[1194px] flex justify-center relative"
      data-model-id="1:11514"
    >
<div className="z-[1] mt-[475px] w-[591px] h-[619px] ml-px flex overflow-y-scroll">
<div className="flex mt-0 w-[591.57px] h-[799.09px] ml-[-0.6px] relative flex-col items-start gap-[23.58px]">
{improvementOptions.map((option) => (
            <article
              key={option.id}
              className="relative self-stretch w-full h-[384.28px] bg-[#ffffff1a] rounded-[12.21px] overflow-hidden border-[0.98px] border-solid border-[#ffffff26] shadow-[0px_0px_11.84px_#00000012] backdrop-blur-[4.87px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.87px)_brightness(100%)]"
            >
<div className="absolute top-5 left-[calc(50.00%_-_148px)] w-[295px] h-[45px] flex items-center justify-center bg-[#ffffff1a] rounded-[12.21px] overflow-hidden border-[0.98px] border-solid border-[#ffffff26] shadow-[0px_0px_11.84px_#0000001a] backdrop-blur-[4.87px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.87px)_brightness(100%)]">
<h3 className="flex items-center justify-center mt-[-0.3px] h-[27px] ml-[0.1px] w-[148px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[16.6px] text-center tracking-[1.16px] leading-[26.1px]">
{option.label}
                </h3>
</div>
<img
                className="absolute top-[81px] left-[calc(50.00%_-_179px)] w-[358px] h-[277px] aspect-[1.29] object-cover"
                alt={option.label}
                src={option.image}
              />
<button
                className="absolute top-[calc(50.00%_-_170px)] left-[526px] w-[42px] h-[42px]"
                onClick={() => toggleImprovement(option.id)}
                aria-label={`${option.label}を選択`}
                aria-pressed=
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
<div className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_9px)] w-[19px] h-[19px]">
<img
                    className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[12.50%]"
                    alt=""
                    src="/img/icon-1.svg"
                  />
</div>
</button>
</article>
))}
        </div>
</div>
<aside className="fixed top-[-369px] left-[366px] w-[101px] h-[834px] z-[2] bg-white overflow-hidden rotate-[90.00deg] shadow-[0px_4px_20px_#0000000d,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)]">
<div className="top-[229px] left-[calc(50.00%_-_198px)] w-[834px] h-[375px] rotate-[-90.00deg] absolute bg-white" />
<button
          className="absolute top-[calc(50.00%_-_374px)] left-[34px] w-[42px] h-[42px] rotate-[-90.00deg]"
          aria-label="閉じる"
        >
<div className="absolute w-full h-full top-0 left-0 shadow-[0px_6.12px_17.5px_#0000000d]">
<img
              className="absolute w-[calc(100%_+_46px)] h-[calc(100%_+_46px)] top-[-23px] left-[-23px] object-cover"
              alt=""
              src="/img/blur-2.svg"
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
<h2 className="absolute top-[694px] left-px rotate-[-90.00deg] [font-family:'Noto_Sans_Lao_ExtraCondensed-Light',Helvetica] font-light text-black text-[26.2px] tracking-[1.84px] leading-[normal]">
類似症例
        </h2>
</aside>
<section className="flex z-[3] flex-col w-[592px] items-start gap-[23.58px] fixed top-[249px] left-[121px]">
<div className="relative self-stretch w-full h-[203px]">
<div className="top-px left-0 w-[591px] h-[195px] rounded-[13.87px] shadow-[0px_0px_3.26px_#00000040] absolute bg-white" />
<div className="absolute top-[75px] left-[29px] w-[533px] h-[115px] flex flex-col">
{improvementOptions.map((option, index) => (
              <label
                key={option.id}
                className={`flex ml-0 mr-[-0.1px] flex-1 max-h-[57.63px] relative mt-0 w-[533.1px] h-[57.63px] items-center pt-[8.89px] pb-[9.77px] px-0 cursor-pointer ${
                  index === 0 ? 'border-b-[0.89px] [border-bottom-style:solid] border' : ''
                }`}
              >
<input
                  type="checkbox"
                  className="sr-only"
                  checked=
                  onChange={() => toggleImprovement(option.id)}
                  aria-label={option.label}
                />
<div className="relative w-[39.98px] h-[26.66px]" />
<div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
<div className="flex self-stretch w-full flex-col items-start relative flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-0.89px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#333333] text-[15px] tracking-[0.75px] leading-[21.3px] whitespace-nowrap">
{option.label}
                    </span>
</div>
</div>
</label>
))}
          </div>
<img
            className="absolute top-0 left-px w-[591px] h-16"
            alt=""
            src="/img/intersect.svg"
          />
<h2 className="absolute top-[23px] left-[42px] h-5 flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-medium text-white text-[19.6px] tracking-[0] leading-[19.6px] whitespace-nowrap">
改善したい箇所
          </h2>
</div>
</section>
<div className="fixed top-[142px] left-[calc(50.00%_-_295px)] w-[348px] h-16 z-[4] flex bg-[#00000001] rounded-[141.07px] shadow-[0px_7px_20px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.19),inset_-1px_0_1px_rgba(0,0,0,0.15)] backdrop-blur-[2.8px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.8px)_brightness(100.0%)_saturate(100.0%)]">
<div className="mt-0 w-[591px] h-[62.77px] ml-0 flex rounded-[141.07px] mix-blend-darken">
<div className="mt-[16.7px] w-[461.66px] h-[31.98px] ml-[16.7px] flex gap-[20.2px]">
<label htmlFor="search-input" className="mt-0 w-[29px] h-8 ml-[9.5px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-2xl tracking-[-0.11px] leading-[31.0px] whitespace-nowrap">
􀊫
            </label>
<input
              id="search-input"
              type="search"
              placeholder="Search"
              className="mt-0 w-[72px] h-8 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#999999] text-2xl tracking-[-0.11px] leading-[31.0px] whitespace-nowrap bg-transparent border-none outline-none"
              aria-label="検索"
            />
</div>
</div>
</div>
<div className="fixed top-[140px] left-[478px] w-[234px] h-[69px] z-[5] bg-[#ffffff1a] rounded-[34.47px] overflow-hidden shadow-[0px_7px_20px_#00000012,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-[2.2px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.2px)_brightness(100.0%)_saturate(100.0%)]">
<div role="tablist" className="flex w-full h-full">
<button
            role="tab"
            aria-selected={selectedTab === 'upper'}
            aria-controls="upper-panel"
            onClick={() => setSelectedTab('upper')}
            className="absolute top-1 left-1 w-[118px] h-[61px] rounded-[31.24px] overflow-hidden"
          >
<span className="absolute h-[62.06%] top-[18.96%] left-[calc(50.00%_-_26px)] w-[52px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#999999] text-[16.2px] text-center tracking-[1.13px] leading-[38.2px] whitespace-nowrap">
上部
            </span>
</button>
<button
            role="tab"
            aria-selected={selectedTab === 'lower'}
            aria-controls="lower-panel"
            onClick={() => setSelectedTab('lower')}
            className="absolute top-1 left-[111px] w-[118px] h-[61px] bg-[#4cabfe] rounded-[31.24px] overflow-hidden"
          >
<span className="absolute h-[62.06%] top-[18.96%] left-[calc(50.00%_-_26px)] w-[52px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[16.2px] text-center tracking-[1.13px] leading-[38.2px] whitespace-nowrap">
下部
            </span>
</button>
</div>
</div>
</div>
);
};