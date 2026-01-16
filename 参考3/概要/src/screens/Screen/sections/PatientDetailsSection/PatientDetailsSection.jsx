import { useState } from "react";

export const PatientDetailsSection = () => {
  const todoItems = [
    { id: 1, text: "頻度のグラフを使った説明", checked: true },
    { id: 2, text: "ビフォー写真撮影", checked: false },
    { id: 3, text: "効果イメージを使った説明", checked: false },
    { id: 4, text: "施術料金支払い", checked: false },
  ];

  const adviceItems = [
    "初回から5回分まとめてスタートさせる流れを徹底しましょう。",
    "5回目の来院時に次の5回分を必ず提案・決済してください。",
    "施術前に前払いと次回予約確定を行い、来院間隔を空けないようにしましょう。",
    "今の時期は短い間隔で通っていただくと、定着が良くなることを伝えましょう。",
  ];

  const [todos, setTodos] = useState(todoItems);
  const [session3, setSession3] = useState("選択");
  const [session4, setSession4] = useState("選択");

  const handleTodoToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <section
      className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]"
      aria-label="患者詳細セクション"
    >
      <aside className="relative w-[104px] h-[664px]" aria-label="予約情報">
        <p className="absolute top-[calc(50.00%_-_98px)] left-[22px] h-[117px] flex items-center justify-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-transparent text-[17px] text-center tracking-[0.85px] leading-[38.7px]">
          <span className="text-black tracking-[0.14px]">SP </span>
          <span className="text-[#999999] text-sm tracking-[0.10px]">
            1回目
            <br />
          </span>
          <span className="text-black tracking-[0.14px]">10/6 </span>
          <span className="text-[#999999] text-sm tracking-[0.10px]">
            月<br />
          </span>
          <span className="text-black tracking-[0.14px]">13:00〜</span>
        </p>
        <img
          className="absolute top-0 left-[104px] w-px h-[664px]"
          alt=""
          src="/img/vector-88.svg"
          role="presentation"
        />
      </aside>

      <div className="relative w-[730px] h-[664px]">
        <div className="relative top-[29px] left-[31px] w-[670px] h-[606px]">
          <article className="absolute top-0 left-0 w-[322px] h-[230px] bg-[#ffffff26] rounded-[10.63px] overflow-hidden border-[0.85px] border-solid border-[#ffffff1a] shadow-[0px_0px_5px_#00000026]">
            <header className="absolute top-4 left-[25px] w-[74px] h-[26px] flex gap-[15.1px]">
              <div
                className="mt-0 w-[25.91px] h-[25.91px] ml-0 aspect-[1]"
                aria-hidden="true"
              >
                <div className="relative w-[66.67%] h-[83.33%] top-[8.33%] left-[16.66%] bg-[url(/img/vector-1.svg)] bg-[100%_100%]" />
              </div>
              <h2 className="flex items-center justify-center mt-[3.3px] w-[37px] h-[21px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-black text-[14.1px] tracking-[0.71px] leading-[normal]">
                ToDo
              </h2>
            </header>

            <img
              className="absolute top-14 left-0 w-[322px] h-px"
              alt=""
              src="/img/vector-80-1.svg"
              role="presentation"
            />

            <ul
              className="flex flex-col w-[199px] items-start gap-[9.3px] absolute top-[74px] left-[84px]"
              role="list"
            >
              {todos.map((todo, index) => (
                <li
                  key={todo.id}
                  className="relative self-stretch w-full h-7 rounded-[5px] border border-solid border-[#00000033]"
                >
                  <label className="flex items-center h-full cursor-pointer">
                    <input
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => handleTodoToggle(todo.id)}
                      className="sr-only"
                      aria-label={todo.text}
                    />
                    <img
                      className="absolute left-[-40px] w-5 h-5"
                      alt={todo.checked ? "完了" : "未完了"}
                      src={todo.checked ? "/img/check.svg" : "/img/check-3.svg"}
                      aria-hidden="true"
                    />
                  </label>
                </li>
              ))}
            </ul>

            <div
              className="absolute top-[70px] left-[97px] text-black text-[12.7px] tracking-[0.63px] leading-[37px] [font-family:'Noto_Sans_JP',Helvetica] font-medium"
              aria-hidden="true"
            >
              頻度のグラフを使った説明
              <br />
              ビフォー写真撮影
              <br />
              効果イメージを使った説明
              <br />
              施術料金支払い
            </div>
          </article>

          <article className="absolute top-[138px] left-[347px] w-[323px] h-[403px] bg-[#ffffff26] rounded-[10.63px] overflow-hidden border-[0.85px] border-solid border-[#ffffff1a] shadow-[0px_0px_5px_#00000026]">
            <header className="absolute top-[19px] left-[27px] w-[63px] h-[21px]">
              <img
                className="w-[32.98%] top-0 left-0 h-[21px] absolute aspect-[1]"
                alt=""
                src="/img/icon-park-solid-notes.svg"
                aria-hidden="true"
              />
              <h2 className="absolute top-px left-[34px] h-[21px] flex items-center justify-center text-black text-[14.1px] tracking-[0.71px] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] font-medium">
                前回メモ
              </h2>
            </header>

            <img
              className="absolute top-14 left-0 w-[322px] h-px"
              alt=""
              src="/img/vector-80-1.svg"
              role="presentation"
            />

            <img
              className="absolute top-[126px] left-0 w-[322px] h-px"
              alt=""
              src="/img/vector-80-1.svg"
              role="presentation"
            />

            <img
              className="absolute top-14 left-[74px] w-px h-[347px]"
              alt=""
              src="/img/vector-78-2.svg"
              role="presentation"
            />

            <div className="flex flex-col w-[74px] h-[71px] items-center justify-center gap-[7.25px] px-[23.55px] py-[127.71px] absolute top-14 left-0">
              <div className="relative w-[57.97px] mt-[-102.61px] mb-[-100.80px] ml-[-15.53px] mr-[-15.53px] text-[#999999] text-[13px] text-center tracking-[0.91px] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] font-medium">
                施術部位
              </div>
            </div>

            <div className="flex flex-col w-[74px] h-[281px] items-center justify-center gap-2 px-[23px] py-32 absolute top-[127px] left-px">
              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13px] text-center tracking-[0.91px] leading-[normal]">
                備考
              </div>
            </div>
          </article>

          <article className="absolute top-0 left-[347px] w-[323px] h-[118px] bg-[#ffffff26] rounded-[10.63px] overflow-hidden border-[0.85px] border-solid border-[#ffffff1a] shadow-[0px_0px_5px_#00000026]">
            <header className="absolute top-[19px] left-[27px] w-[63px] h-[21px]">
              <img
                className="w-[32.98%] top-0 left-0 h-[21px] absolute aspect-[1]"
                alt=""
                src="/img/icon-park-solid-notes-1.svg"
                aria-hidden="true"
              />
              <h2 className="absolute top-px left-[34px] h-[21px] flex items-center justify-center text-black text-[14.1px] tracking-[0.71px] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] font-medium">
                継続の確認
              </h2>
            </header>

            <img
              className="absolute top-[-13793px] left-[-20809px] w-px h-[405px]"
              alt=""
              src="/img/vector-78.svg"
              role="presentation"
            />

            <div className="flex flex-col w-[74px] h-[281px] items-center justify-center gap-2 px-[23px] py-32 absolute top-[127px] left-px">
              <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#999999] text-[13px] text-center tracking-[0.91px] leading-[normal]">
                備考
              </div>
            </div>

            <img
              className="absolute top-14 left-0 w-[322px] h-px"
              alt=""
              src="/img/vector-80-1.svg"
              role="presentation"
            />

            <img
              className="absolute top-[-13801px] left-[-20884px] w-[322px] h-px"
              alt=""
              src="/img/vector-84.svg"
              role="presentation"
            />

            <div className="absolute top-[74px] left-6 h-[26px] flex items-center justify-center text-black text-[13px] tracking-[0.91px] leading-[26.0px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] font-medium">
              3回目
            </div>

            <div className="h-[24.31px] left-[69px] flex w-[73px] items-center gap-[4.86px] pl-[9.72px] pr-[7.29px] py-[7.29px] absolute top-[74px] bg-neutral-100 rounded-[11.05px]">
              <label className="relative flex-1 mt-[-0.44px] [font-family:'Inter',Helvetica] font-normal text-[#1e1e1e] text-[9.7px] tracking-[0] leading-[9.7px]">
                <select
                  value={session3}
                  onChange={(e) => setSession3(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  aria-label="3回目の選択"
                >
                  <option value="選択">選択</option>
                </select>
                {session3}
              </label>
              <img
                className="relative w-[9.72px] h-[9.72px]"
                alt=""
                src="/img/chevron-down-1.svg"
                aria-hidden="true"
              />
            </div>

            <div className="absolute top-[74px] left-[184px] h-[26px] flex items-center justify-center text-black text-[13px] tracking-[0.91px] leading-[26.0px] whitespace-nowrap [font-family:'Noto_Sans_JP',Helvetica] font-medium">
              4回目
            </div>

            <div className="h-6 left-[229px] flex w-[73px] items-center gap-[4.86px] pl-[9.72px] pr-[7.29px] py-[7.29px] absolute top-[74px] bg-neutral-100 rounded-[11.05px]">
              <label className="relative flex-1 mt-[-0.44px] [font-family:'Inter',Helvetica] font-normal text-[#1e1e1e] text-[9.7px] tracking-[0] leading-[9.7px]">
                <select
                  value={session4}
                  onChange={(e) => setSession4(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  aria-label="4回目の選択"
                >
                  <option value="選択">選択</option>
                </select>
                {session4}
              </label>
              <img
                className="relative w-[9.72px] h-[9.72px]"
                alt=""
                src="/img/chevron-down-1.svg"
                aria-hidden="true"
              />
            </div>

            <img
              className="absolute top-14 left-[calc(50.00%_-_1px)] w-px h-[62px]"
              alt=""
              src="/img/vector-85.svg"
              role="presentation"
            />
          </article>

          <article className="absolute top-[250px] left-0 w-[322px] h-[356px] flex flex-col bg-[#ffffff26] rounded-[10.63px] overflow-hidden border-[0.85px] border-solid border-[#ffffff1a] shadow-[0px_0px_5px_#00000026]">
            <header className="ml-[24.5px] w-[108.69px] h-[28.98px] relative mt-[12.2px]">
              <div
                className="absolute w-[26.67%] top-px left-0 h-[29px] aspect-[1]"
                aria-hidden="true"
              >
                <img
                  className="absolute w-[83.33%] h-[83.33%] top-[8.34%] left-[8.34%]"
                  alt=""
                  src="/img/vector-2.svg"
                />
              </div>
              <h2 className="absolute top-1.5 left-10 h-[21px] flex items-center justify-center text-black text-[14.1px] tracking-[0.71px] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] font-medium">
                アドバイス
              </h2>
            </header>

            <img
              className="w-[322.44px] h-[1.31px] mt-[14.5px]"
              alt=""
              src="/img/vector-80-1.svg"
              role="presentation"
            />

            <ul className="ml-[22px] w-[277px] h-[218px] mt-[33.4px] text-black text-[13px] tracking-[0.65px] leading-[27.2px] [font-family:'Noto_Sans_JP',Helvetica] font-medium list-none">
              {adviceItems.map((item, index) => (
                <li key={index}>
                  {item}
                  {index < adviceItems.length - 1 && <br />}
                </li>
              ))}
            </ul>
          </article>

          <button
            className="absolute top-[561px] left-[347px] w-[322px] h-[45px] flex gap-[15.7px] bg-[#4aa9fc] rounded-[10.63px] overflow-hidden border-[0.85px] border-solid border-[#ffffff1a] shadow-[0px_0px_5.15px_#0000001a] cursor-pointer hover:bg-[#3a99ec] transition-colors"
            aria-label="今日のメモを追加"
          >
            <div
              className="mt-[11.8px] w-[21.74px] h-[21.74px] relative ml-[23.5px] aspect-[1]"
              aria-hidden="true"
            >
              <img
                className="absolute w-[75.00%] h-[75.00%] top-[16.66%] left-[29.17%]"
                alt=""
                src="/img/vector-3.svg"
              />
            </div>
            <span className="flex items-center justify-center mt-[12.7px] w-[118px] h-[21px] text-white text-[14.1px] tracking-[0.71px] leading-[normal] [font-family:'Noto_Sans_JP',Helvetica] font-medium">
              今日のメモを追加
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
