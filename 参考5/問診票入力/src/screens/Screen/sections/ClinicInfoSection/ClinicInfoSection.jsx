import { useState } from 'react';

export const ClinicInfoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    age: '',
    prefecture: '',
    address: '',
    nearestStation: '',
    phone: '',
    occupation: '',
    occupationOther: '',
    visitReason: '',
    visitReasonOther: '',
    preferredDays: [],
    preferredTime: '',
    orthodonticExperience: '',
    birthExperience: '',
    birthTiming: '',
    pregnancyPossibility: '',
    exerciseHabit: '',
    sportsExperience: '',
    sportsName: '',
    majorInjury: '',
    injuryDetails: '',
    sittingTime: '',
    dieting: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => {
      const currentValues = prev[field] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      return { ...prev, [field]: newValues };
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      furigana: '',
      birthYear: '',
      birthMonth: '',
      birthDay: '',
      age: '',
      prefecture: '',
      address: '',
      nearestStation: '',
      phone: '',
      occupation: '',
      occupationOther: '',
      visitReason: '',
      visitReasonOther: '',
      preferredDays: [],
      preferredTime: '',
      orthodonticExperience: '',
      birthExperience: '',
      birthTiming: '',
      pregnancyPossibility: '',
      exerciseHabit: '',
      sportsExperience: '',
      sportsName: '',
      majorInjury: '',
      injuryDetails: '',
      sittingTime: '',
      dieting: ''
    });
  };

  const textInputFields = [
    { label: 'お名前', field: 'name', required: true },
    { label: 'フリガナ', field: 'furigana', required: true },
    { label: '年齢', field: 'age', required: false },
    { label: '住所', field: 'address', required: false },
    { label: 'ご自宅の最寄り駅', field: 'nearestStation', required: false },
    { label: '電話番号', field: 'phone', required: false }
  ];

  const selectFields = [
    { label: '生年月日（年）', field: 'birthYear' },
    { label: '生年月日（月）', field: 'birthMonth' },
    { label: '生年月日（日）', field: 'birthDay' },
    { label: '住所（都道府県）', field: 'prefecture' },
    { label: '通われる場合の来店しやすい時間帯', field: 'preferredTime' }
  ];

  const occupationOptions = [
    '会社員',
    'パート',
    'アルバイト',
    '主婦',
    '学生'
  ];

  const visitReasonOptions = [
    'ご紹介',
    '当店の公式ホームページ',
    'SNS'
  ];

  const weekDays = ['月', '火', '水', '木', '金', '土', '日'];

  const yesNoQuestions = [
    { label: '今までに矯正経験はありますか？', field: 'orthodonticExperience', options: ['経験なし', '経験あり'] },
    { label: '出産経験はありますか？', field: 'birthExperience', options: ['いいえ', 'はい'] },
    { label: '現在、妊娠されている可能性はありますか？\n（※妊娠中の場合には、ご予約時の注意事項に記載がありました通り、施術をお\n受けいただくことができません）', field: 'pregnancyPossibility', options: ['いいえ', 'はい'] },
    { label: '現在運動の習慣はありますか？', field: 'exerciseHabit', options: ['いいえ', 'はい'] },
    { label: '過去にスポーツ経験はありますか？', field: 'sportsExperience', options: ['いいえ', 'はい'] },
    { label: '過去に大きな怪我はありますか？', field: 'majorInjury', options: ['いいえ', 'はい'] },
    { label: '1日の中で座っていることは多いですか？', field: 'sittingTime', options: ['いいえ', 'はい'] },
    { label: 'ダイエット中ですか？', field: 'dieting', options: ['いいえ', 'はい'] }
  ];

  const followUpQuestions = [
    { label: '「はい」と答えた方は時期を教えて下さい。\n（例）2年6ヶ月前', field: 'birthTiming' },
    { label: '「はい」と答えた方は競技名を教えて下さい。', field: 'sportsName' },
    { label: '「はい」と答えた方は怪我の内容を教えて下さい。', field: 'injuryDetails' }
  ];

  return (
    <section className="z-[1] mt-[156px] w-[697.33px] h-[860px] ml-[-0.7px] relative overflow-y-scroll" aria-label="クリニック情報フォーム">
<div className="flex flex-col w-[697px] h-[175px] items-center pt-[12.06px] pb-0 px-[642.41px] absolute top-0 left-0">
<img
          className="relative max-w-[1739.22px] w-[645.42px] max-h-[436.31px] h-[162.86px] ml-[-616.45px] mr-[-616.45px]"
          alt=""
          src="/img/image-border.png"
        />
</div>
<div className="flex flex-col w-[697px] h-[5068px] items-center justify-center px-[643.41px] py-0 absolute top-[175px] left-px">
<div className="flex flex-col max-w-[1737.21px] w-[643.41px] items-start gap-[16.09px] pt-[12.06px] pb-[24.13px] px-0 relative flex-[0_0_auto] mt-[-13.93px] mb-[-13.93px] ml-[-616.45px] mr-[-616.45px]">
<div className="flex flex-col items-start gap-[12.06px] relative self-stretch w-full flex-[0_0_auto]">
<header className="flex flex-col items-start gap-[36.19px] pt-[23.12px] pb-[17.09px] px-[25.13px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[8.04px] border-[1.01px] border-solid border-[#dadce0]">
<div className="flex flex-wrap items-center gap-[0px_0px] relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col max-w-[593.14px] items-start relative flex-[0_0_auto]">
<h1 className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Inter',Helvetica] font-normal text-[#202124] text-[29.7px] tracking-[0] leading-[40.2px] whitespace-nowrap">
美.design 上野店
                  </h1>
</div>
</div>
<div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
<p className="relative flex items-center justify-center self-stretch mt-[-1.01px] [font-family:'Roboto',Helvetica] font-normal text-[#d93025] text-[14.1px] tracking-[0.20px] leading-[20.1px]">
* 必須の質問です
                </p>
</div>
<div className="absolute top-0 left-0 w-[643px] h-2.5 bg-[#c0c5e0] rounded-[8.04px_8.04px_0px_0px]" aria-hidden="true" />
<hr className="absolute top-[87px] left-px w-[641px] h-px border-t-[1.01px] [border-top-style:solid] border-[#dadce0]" />
</header>
<form className="gap-[12.06px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
{textInputFields.map(({ label, field, required }) => (
                <div key={field} className="flex-col gap-[16.09px] p-[25.13px] bg-white rounded-[8.04px] border-[1.01px] border-solid border-[#dadce0] flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col max-w-[593.14px] items-start relative flex-[0_0_auto] self-stretch">
<div className="flex self-stretch w-full items-start relative flex-[0_0_auto]">
<label className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[16.1px] tracking-[0] leading-[24.1px] whitespace-nowrap">
{label}
                          </span>
</label>
{required && (
                          <div className="inline-flex flex-col items-start pl-[4.02px] pr-0 py-0 relative self-stretch flex-[0_0_auto] ml-[-7.14e-15px]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Roboto',Helvetica] font-normal text-[#d93025] text-[16.1px] tracking-[0.20px] leading-[24.1px] whitespace-nowrap" aria-label="必須">
*
                            </span>
</div>
)}
                      </div>
</div>
</div>
<div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="flex w-[296.57px] items-start justify-center pt-[14.07px] pb-[10.05px] px-0 relative flex-[0_0_auto]">
<div className="flex w-[296.57px] items-start justify-center relative">
<div className="flex items-start justify-center relative flex-1 self-stretch grow">
<input
                            type="text"
                            value={formData[field]}
                            onChange={(e) => handleInputChange(field, e.target.value)}
                            placeholder="回答を入力"
                            required={required}
                            className="h-[24.13px] relative flex-1 grow [font-family:'Roboto',Helvetica] font-normal text-[#70757a] text-[14.1px] tracking-[0.20px] leading-[20.1px]"
                            aria-label={label}
                          />
</div>
<div className="absolute w-full left-0 -bottom-0.5 h-px bg-[#0000001f]" aria-hidden="true" />
</div>
</div>
</div>
</div>
))}

              {selectFields.map(({ label, field }) => (
                <div key={field} className="flex-col gap-[16.09px] p-[25.13px] bg-white rounded-[8.04px] border-[1.01px] border-solid border-[#dadce0] flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col max-w-[593.14px] items-start relative flex-[0_0_auto] self-stretch">
<div className="flex self-stretch w-full items-start relative flex-[0_0_auto]">
<label className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[16.1px] tracking-[0] leading-[24.1px] whitespace-nowrap">
{label}
                          </span>
</label>
</div>
</div>
</div>
<div className="flex flex-col items-start pt-[8.04px] pb-[3.02px] px-0 relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex max-w-[595.16px] items-start p-[1.01px] relative flex-[0_0_auto] rounded-[4.02px] border-[1.01px] border-solid border-[#dadce0]">
<div className="absolute top-[23px] right-[21px] w-2.5 h-[5px] border-t-[5.03px] [border-top-style:solid] border-r-[5.03px] [border-right-style:solid] border-l-[5.03px] [border-left-style:solid] border-transparent [border-image:linear-gradient(to_bottom_right,rgba(95,99,104,1)_0%,rgba(0,0,0,0)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(95,99,104,1)_0%,rgba(0,0,0,0)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(95,99,104,1)_0%,rgba(0,0,0,0)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(95,99,104,1)_0%,rgba(0,0,0,0)_50%)_top_right_/_50%_50%_no-repeat_1]" aria-hidden="true" />
<div className="inline-flex flex-col min-w-[176.94px] items-start pl-[16.09px] pr-[48.26px] py-[8.04px] relative flex-[0_0_auto] rounded-[4.02px] overflow-hidden">
<div className="inline-flex items-start pl-0 pr-[84.04px] py-0 relative flex-[0_0_auto]">
<select
                            value={formData[field]}
                            onChange={(e) => handleInputChange(field, e.target.value)}
                            className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Roboto',Helvetica] font-normal text-[#0000008a] text-[14.1px] tracking-[0.20px] leading-[32.2px] whitespace-nowrap"
                            aria-label={label}
                          >
<option value="">選択</option>
</select>
</div>
</div>
</div>
</div>
</div>
))}

              <fieldset className="flex-col gap-[16.09px] p-[25.13px] bg-white rounded-[8.04px] border-[1.01px] border-solid border-[#dadce0] flex items-start relative self-stretch w-full flex-[0_0_auto]">
<legend className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col max-w-[593.14px] items-start relative flex-[0_0_auto] self-stretch">
<div className="flex self-stretch w-full items-start relative flex-[0_0_auto]">
<div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[16.1px] tracking-[0] leading-[24.1px] whitespace-nowrap">
職業
                        </span>
</div>
</div>
</div>
</legend>
<div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
{occupationOptions.map((option) => (
                    <div key={option} className="flex h-[40.21px] items-start justify-center pl-0 pr-[8.04px] py-[8.04px] relative self-stretch w-full">
<div className="flex flex-1 grow items-start relative self-stretch">
<label className="inline-flex items-center relative self-stretch flex-[0_0_auto] cursor-pointer">
<div className="relative w-[20.11px] h-[20.11px] z-[1]">
<div className="flex flex-col w-5 h-5 items-start justify-center relative rounded-[3.02px]">
<div className="absolute top-0 left-0 w-5 h-5 bg-[#dadce033] rounded-[20.11px] opacity-0" aria-hidden="true" />
<input
                                type="radio"
                                name="occupation"
                                value={option}
                                checked={formData.occupation === option}
                                onChange={(e) => handleInputChange('occupation', e.target.value)}
                                className="relative flex-1 self-stretch w-full grow rounded-[10.05px] border-[2.02px] border-solid border-[#5f6368]"
                              />
</div>
</div>
<div className="inline-flex flex-col items-start pl-[12.06px] pr-0 py-0 relative flex-[0_0_auto] z-0">
<div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
<div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col min-w-[1.01px] items-start relative flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[14.8px] tracking-[0] leading-[22.1px] whitespace-nowrap">
{option}
                                  </span>
</div>
</div>
</div>
</div>
</label>
</div>
</div>
))}

                  <div className="flex h-[42.22px] items-start gap-[2.86e-14px] pl-0 pr-[8.04px] py-[8.04px] relative self-stretch w-full">
<div className="inline-flex pl-0 pr-[20.11px] py-0 flex-[0_0_auto] items-start relative self-stretch">
<label className="inline-flex items-center relative self-stretch flex-[0_0_auto] cursor-pointer">
<div className="relative w-[20.11px] h-[20.11px] z-[1]">
<div className="flex flex-col w-5 h-5 items-start justify-center relative top-px rounded-[3.02px]">
<div className="absolute top-0 left-0 w-5 h-5 bg-[#dadce033] rounded-[20.11px] opacity-0" aria-hidden="true" />
<input
                              type="radio"
                              name="occupation"
                              value="その他"
                              checked={formData.occupation === 'その他'}
                              onChange={(e) => handleInputChange('occupation', e.target.value)}
                              className="relative flex-1 self-stretch w-full grow rounded-[10.05px] border-[2.02px] border-solid border-[#5f6368]"
                            />
</div>
</div>
<div className="inline-flex flex-col items-start pl-[12.06px] pr-0 py-0 relative flex-[0_0_auto] z-0">
<div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
<div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col min-w-[1.01px] items-start relative flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[14.8px] tracking-[0] leading-[22.1px] whitespace-nowrap">
その他:
                                </span>
</div>
</div>
</div>
</div>
</label>
</div>
<div className="flex flex-col min-w-[201.07px] items-start relative flex-1 self-stretch grow">
<div className="flex flex-col items-start pt-0 pb-[2.01px] px-0 relative self-stretch w-full flex-[0_0_auto]">
<div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
<input
                            type="text"
                            value={formData.occupationOther}
                            onChange={(e) => handleInputChange('occupationOther', e.target.value)}
                            disabled={formData.occupation !== 'その他'}
                            className="self-stretch relative flex-1 grow"
                            aria-label="職業（その他）"
                          />
</div>
<div className="relative self-stretch w-full h-[1.01px] bg-[#0000001f]" aria-hidden="true" />
</div>
</div>
</div>
</div>
</fieldset>
<fieldset className="flex-col gap-[16.09px] p-[25.13px] bg-white rounded-[8.04px] border-[1.01px] border-solid border-[#dadce0] flex items-start relative self-stretch w-full flex-[0_0_auto]">
<legend className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col max-w-[593.14px] items-start relative flex-[0_0_auto] self-stretch">
<div className="flex self-stretch w-full items-start relative flex-[0_0_auto]">
<div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[16.1px] tracking-[0] leading-[24.1px] whitespace-nowrap">
ご来店のきっかけ
                        </span>
</div>
</div>
</div>
</legend>
<div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
{visitReasonOptions.map((option) => (
                    <div key={option} className="flex h-[40.21px] items-start justify-center pl-0 pr-[8.04px] py-[8.04px] relative self-stretch w-full">
<div className="flex flex-1 grow items-start relative self-stretch">
<label className="inline-flex items-center relative self-stretch flex-[0_0_auto] cursor-pointer">
<div className="relative w-[20.11px] h-[20.11px] z-[1]">
<div className="flex flex-col w-5 h-5 items-start justify-center relative top-px rounded-[3.02px]">
<div className="absolute top-0 left-0 w-5 h-5 bg-[#dadce033] rounded-[20.11px] opacity-0" aria-hidden="true" />
<input
                                type="radio"
                                name="visitReason"
                                value={option}
                                checked={formData.visitReason === option}
                                onChange={(e) => handleInputChange('visitReason', e.target.value)}
                                className="relative flex-1 self-stretch w-full grow rounded-[10.05px] border-[2.02px] border-solid border-[#5f6368]"
                              />
</div>
</div>
<div className="inline-flex flex-col items-start pl-[12.06px] pr-0 py-0 relative flex-[0_0_auto] z-0">
<div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
<div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col min-w-[1.01px] items-start relative flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[14.8px] tracking-[0] leading-[22.1px] whitespace-nowrap">
{option}
                                  </span>
</div>
</div>
</div>
</div>
</label>
</div>
</div>
))}

                  <div className="flex h-[42.22px] items-start gap-[2.86e-14px] pl-0 pr-[8.04px] py-[8.04px] relative self-stretch w-full">
<div className="inline-flex pl-0 pr-[20.11px] py-0 flex-[0_0_auto] items-start relative self-stretch">
<label className="inline-flex items-center relative self-stretch flex-[0_0_auto] cursor-pointer">
<div className="relative w-[20.11px] h-[20.11px] z-[1]">
<div className="flex flex-col w-5 h-5 items-start justify-center relative rounded-[3.02px]">
<div className="absolute top-0 left-0 w-5 h-5 bg-[#dadce033] rounded-[20.11px] opacity-0" aria-hidden="true" />
<input
                              type="radio"
                              name="visitReason"
                              value="その他"
                              checked={formData.visitReason === 'その他'}
                              onChange={(e) => handleInputChange('visitReason', e.target.value)}
                              className="relative flex-1 self-stretch w-full grow rounded-[10.05px] border-[2.02px] border-solid border-[#5f6368]"
                            />
</div>
</div>
<div className="inline-flex flex-col items-start pl-[12.06px] pr-0 py-0 relative flex-[0_0_auto] z-0">
<div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
<div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col min-w-[1.01px] items-start relative flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[14.8px] tracking-[0] leading-[22.1px] whitespace-nowrap">
その他:
                                </span>
</div>
</div>
</div>
</div>
</label>
</div>
<div className="flex flex-col min-w-[201.07px] items-start relative flex-1 self-stretch grow">
<div className="flex flex-col items-start pt-0 pb-[2.01px] px-0 relative self-stretch w-full flex-[0_0_auto]">
<div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
<input
                            type="text"
                            value={formData.visitReasonOther}
                            onChange={(e) => handleInputChange('visitReasonOther', e.target.value)}
                            disabled={formData.visitReason !== 'その他'}
                            className="self-stretch relative flex-1 grow"
                            aria-label="ご来店のきっかけ（その他）"
                          />
</div>
<div className="relative self-stretch w-full h-[1.01px] bg-[#0000001f]" aria-hidden="true" />
</div>
</div>
</div>
</div>
</fieldset>
<fieldset className="flex-col gap-[16.09px] p-[25.13px] bg-white rounded-[8.04px] border-[1.01px] border-solid border-[#dadce0] flex items-start relative self-stretch w-full flex-[0_0_auto]">
<legend className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col max-w-[593.14px] items-start relative flex-[0_0_auto] self-stretch">
<div className="flex self-stretch w-full items-start relative flex-[0_0_auto]">
<div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[16.1px] tracking-[0] leading-[24.1px] whitespace-nowrap">
通われる場合の来店しやすい曜日
                        </span>
</div>
</div>
</div>
</legend>
<div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
{weekDays.map((day) => (
                    <div key={day} className="justify-center flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="flex pl-0 pr-[8.04px] py-[8.04px] flex-1 grow items-start relative self-stretch">
<label className="inline-flex items-center relative self-stretch flex-[0_0_auto] cursor-pointer">
<div className="relative w-[20.11px] h-[20.11px] z-[1] rounded-[3.02px] border-[10.05px] border-solid border-[#5f6368]">
<input
                              type="checkbox"
                              checked=
                              onChange={() => handleCheckboxChange('preferredDays', day)}
                              className="relative top-0.5 left-0.5 w-4 h-4 border-[8.04px] border-solid border-white"
                            />
</div>
<div className="inline-flex flex-col items-start pl-[12.06px] pr-0 py-0 relative flex-[0_0_auto] mt-[-0.44px] mb-[-0.44px] z-0">
<div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
<div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[14.8px] tracking-[0] leading-[22.1px] whitespace-nowrap">
{day}
                                  </span>
</div>
</div>
</div>
</div>
</label>
</div>
</div>
))}
                </div>
</fieldset>
{yesNoQuestions.map(({ label, field, options }) => (
                <fieldset key={field} className="flex-col gap-[16.09px] p-[25.13px] bg-white rounded-[8.04px] border-[1.01px] border-solid border-[#dadce0] flex items-start relative self-stretch w-full flex-[0_0_auto]">
<legend className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col max-w-[593.14px] items-start relative flex-[0_0_auto] self-stretch">
<div className="flex self-stretch w-full items-start relative flex-[0_0_auto]">
<div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[16.1px] tracking-[0] leading-[24.1px] whitespace-pre-wrap">
{label}
                          </span>
</div>
</div>
</div>
</legend>
<div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
{options.map((option) => (
                      <div key={option} className="flex h-[40.21px] items-start justify-center pl-0 pr-[8.04px] py-[8.04px] relative self-stretch w-full">
<div className="flex flex-1 grow items-start relative self-stretch">
<label className="inline-flex items-center relative self-stretch flex-[0_0_auto] cursor-pointer">
<div className="relative w-[20.11px] h-[20.11px] z-[1]">
<div className="flex flex-col w-5 h-5 items-start justify-center relative top-px rounded-[3.02px]">
<div className="absolute top-0 left-0 w-5 h-5 bg-[#dadce033] rounded-[20.11px] opacity-0" aria-hidden="true" />
<input
                                  type="radio"
                                  name={field}
                                  value={option}
                                  checked={formData[field] === option}
                                  onChange={(e) => handleInputChange(field, e.target.value)}
                                  className="relative flex-1 self-stretch w-full grow rounded-[10.05px] border-[2.02px] border-solid border-[#5f6368]"
                                />
</div>
</div>
<div className="inline-flex flex-col items-start pl-[12.06px] pr-0 py-0 relative flex-[0_0_auto] z-0">
<div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
<div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col min-w-[1.01px] items-start relative flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[14.8px] tracking-[0] leading-[22.1px] whitespace-nowrap">
{option}
                                    </span>
</div>
</div>
</div>
</div>
</label>
</div>
</div>
))}
                  </div>
</fieldset>
))}

              {followUpQuestions.map(({ label, field }) => (
                <div key={field} className="flex-col gap-[16.09px] p-[25.13px] bg-white rounded-[8.04px] border-[1.01px] border-solid border-[#dadce0] flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex flex-col max-w-[593.14px] items-start relative flex-[0_0_auto] self-stretch">
<div className="flex self-stretch w-full items-start relative flex-[0_0_auto]">
<label className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Helvetica-Regular',Helvetica] font-normal text-[#202124] text-[16.1px] tracking-[0] leading-[24.1px] whitespace-pre-wrap">
{label}
                          </span>
</label>
</div>
</div>
</div>
<div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
<div className="flex w-[296.57px] items-start justify-center pt-[14.07px] pb-[10.05px] px-0 relative flex-[0_0_auto]">
<div className="flex w-[296.57px] items-start justify-center relative">
<div className="flex items-start justify-center relative flex-1 self-stretch grow">
<input
                            type="text"
                            value={formData[field]}
                            onChange={(e) => handleInputChange(field, e.target.value)}
                            placeholder="回答を入力"
                            className="h-[24.13px] relative flex-1 grow [font-family:'Roboto',Helvetica] font-normal text-[#70757a] text-[14.1px] tracking-[0.20px] leading-[20.1px]"
                            aria-label={label}
                          />
</div>
<div className="absolute w-full left-0 -bottom-0.5 h-px bg-[#0000001f]" aria-hidden="true" />
</div>
</div>
</div>
</div>
))}
            </form>
<div className="flex flex-col items-start gap-[8.04px] relative self-stretch w-full flex-[0_0_auto]">
<div className="flex flex-wrap items-start justify-between gap-[0px_0px] relative self-stretch w-full flex-[0_0_auto]">
<div className="flex items-start pt-0 pb-[10.05px] px-0 relative flex-1 self-stretch grow">
<button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex flex-col h-[36.19px] items-start relative flex-[0_0_auto] bg-white rounded-[4.02px] overflow-hidden shadow-[0px_1.01px_3.02px_#0000001f,0px_1.01px_1.01px_#00000024,0px_2.01px_1.01px_-1.01px_#00000033] cursor-pointer hover:bg-[#6a75a2] hover:bg-opacity-10 transition-colors"
                    aria-label="次へ"
                  >
<div className="inline-flex items-center px-[24.13px] py-0 relative flex-[0_0_auto]">
<div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Roboto',Helvetica] font-medium text-[#6a75a2] text-[14.1px] text-center tracking-[0.25px] leading-[36.2px] whitespace-nowrap">
次へ
                        </span>
</div>
</div>
</button>
</div>
<div className="flex items-start justify-end pt-0 pb-[10.05px] px-0 relative flex-1 self-stretch grow">
<button
                    type="button"
                    onClick={handleClear}
                    className="inline-flex flex-col h-[36.19px] items-start relative flex-[0_0_auto] rounded-[4.02px] overflow-hidden cursor-pointer hover:bg-[#4285f4] hover:bg-opacity-10 transition-colors"
                    aria-label="フォームをクリア"
                  >
<div className="inline-flex items-center px-[8.04px] py-0 relative flex-[0_0_auto]">
<div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Roboto',Helvetica] font-medium text-[#6a75a2] text-[14.1px] text-center tracking-[0.25px] leading-[36.2px] whitespace-nowrap">
フォームをクリア
                        </span>
</div>
</div>
</button>
</div>
</div>
<div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
<p className="items-center justify-center self-stretch mt-[-1.01px] [font-family:'Roboto',Helvetica] font-normal text-[#000000a8] text-[12.1px] tracking-[0.30px] leading-[16.1px] relative flex">
Google フォームでパスワードを送信しないでください。
                </p>
</div>
</div>
</div>
<footer className="flex flex-col items-start gap-[21.11px] relative self-stretch w-full flex-[0_0_auto]">
<div className="flex flex-col items-center gap-[14.07px] pt-[1.01px] pb-0 px-[16.09px] relative self-stretch w-full flex-[0_0_auto]">
<p className="items-center justify-center w-fit mt-[-1.01px] [font-family:'Roboto',Helvetica] font-normal text-[#000000a8] text-[12.1px] text-center tracking-[0] leading-[normal] whitespace-nowrap relative flex">
<span className="[font-family:'Roboto',Helvetica] font-normal text-[#000000a8] text-[12.1px] tracking-[0]">
このコンテンツは Google
                  が作成または承認したものではありません。 -{" "}
                </span>
<a href="#" className="underline">利用規約</a>
<span className="[font-family:'Roboto',Helvetica] font-normal text-[#000000a8] text-[12.1px] tracking-[0]">
{" "}
                  -{" "}
                </span>
<a href="#" className="underline">プライバシー ポリシー</a>
</p>
<div className="flex flex-col items-center pt-[1.01px] pb-[2.01px] px-0 relative self-stretch w-full flex-[0_0_auto]">
<p className="relative flex items-center justify-center self-stretch mt-[-1.01px] [font-family:'Roboto',Helvetica] font-normal text-[#000000a8] text-[12.1px] text-center tracking-[0] leading-[normal]">
<span className="[font-family:'Roboto',Helvetica] font-normal text-[#000000a8] text-[12.1px] tracking-[0]">
このフォームが不審だと思われる場合{" "}
                  </span>
<a href="#" className="underline">報告</a>
</p>
</div>
</div>
<div className="flex flex-col items-center pt-0 pb-[4.02px] px-0 relative self-stretch w-full flex-[0_0_auto]">
<div className="inline-flex items-end justify-center gap-[3.99px] pt-0 pb-[4.02px] px-0 relative flex-[0_0_auto] opacity-55">
<div className="w-[74.39px] h-[24.13px] items-start relative flex">
<div className="flex flex-col w-[74.39px] h-[24.13px] items-center justify-center relative">
<div className="relative w-[74.39px] h-[24.13px]">
<img
                        className="absolute w-[98.78%] h-[95.79%] top-0 left-0"
                        alt="Google"
                        src="/img/vector.svg"
                      />
</div>
</div>
</div>
<span className="relative flex items-center justify-center w-fit mt-[-1.01px] [font-family:'Arial-Regular',Helvetica] font-normal text-black text-[22.2px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
フォーム
                </span>
</div>
</div>
</footer>
</div>
</div>
</section>
);
};