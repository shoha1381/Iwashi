import { Link } from "react-router-dom";
import "./style.css";

export const Screen15 = () => {
  return (
    <div className="screen-15">
      <div className="frame-152">
        <div className="view-34">
          <div className="liquid-glass-regular-14">
            <img className="blur-12" alt="Blur" src="/img/blur-133.svg" />

            <div className="fill-12" />

            <div className="glass-effect-13" />
          </div>

          <div className="icon-park-outline-10">
            <img className="vector-67" alt="Vector" src="/img/vector-701.svg" />
          </div>
        </div>

        <div className="text-wrapper-116">お会計</div>

        <div className="view-35">
          <div className="liquid-glass-regular-14">
            <img className="blur-12" alt="Blur" src="/img/blur-134.svg" />

            <div className="fill-12" />

            <div className="glass-effect-13" />
          </div>

          <div className="chevron-left-5">
            <img className="icon-9" alt="Icon" src="/img/icon-44.svg" />
          </div>
        </div>
      </div>

      <div className="frame-153">
        <div className="frame-154">
          <div className="frame-155">
            <div className="frame-156">
              <div className="text-wrapper-117">
                小顔矯正 / 美顔マッサージ＋首肩矯正（初回）
              </div>
            </div>

            <div className="frame-157">
              <div className="text-wrapper-118">3,300円</div>
            </div>
          </div>

          <div className="text-wrapper-119">施術料金</div>

          <img className="vector-68" alt="Vector" src="/img/vector-70-11.svg" />
        </div>

        <div className="frame-154">
          <div className="frame-158">
            <Link className="knob-wrapper" to="/ipad-pro-11u34-371">
              <div className="knob-4" />
            </Link>

            <div className="frame-159">
              <div className="text-wrapper-120">アンケートに回答</div>
            </div>

            <div className="frame-160">
              <div className="text-wrapper-121">-300円</div>
            </div>
          </div>

          <div className="text-wrapper-119">オプション</div>

          <img className="vector-68" alt="Vector" src="/img/vector-70-11.svg" />
        </div>

        <div className="frame-154">
          <div className="text-wrapper-122">3,000円</div>

          <div className="text-wrapper-119">総額</div>

          <img className="vector-68" alt="Vector" src="/img/vector-70-11.svg" />
        </div>
      </div>

      <Link className="view-36" to="/ipad-pro-11u34-373">
        <div className="frame-161">
          <div className="text-wrapper-123">3,000円お支払いへ</div>
        </div>
      </Link>
    </div>
  );
};
