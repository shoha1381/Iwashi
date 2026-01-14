import { Link } from "react-router-dom";
import "./style.css";

export const Screen13 = () => {
  return (
    <div className="screen-13">
      <div className="frame-133">
        <div className="view-29">
          <div className="liquid-glass-regular-12">
            <img className="blur-10" alt="Blur" src="/img/blur-130.svg" />

            <div className="fill-10" />

            <div className="glass-effect-11" />
          </div>

          <div className="icon-park-outline-8">
            <img className="vector-63" alt="Vector" src="/img/vector-701.svg" />
          </div>
        </div>

        <div className="text-wrapper-104">お会計</div>
      </div>

      <div className="frame-134">
        <div className="frame-135">
          <div className="frame-136">
            <div className="frame-137">
              <div className="text-wrapper-105">
                小顔矯正 / 美顔マッサージ＋首肩矯正（初回）
              </div>
            </div>

            <div className="frame-138">
              <div className="text-wrapper-106">3,300円</div>
            </div>
          </div>

          <div className="text-wrapper-107">施術料金</div>

          <img className="vector-64" alt="Vector" src="/img/vector-70-11.svg" />
        </div>

        <div className="frame-135">
          <div className="frame-139">
            <Link className="toggle-switch" to="/ipad-pro-11u34-372">
              <div className="knob-3" />
            </Link>

            <div className="frame-140">
              <div className="text-wrapper-108">アンケートに回答</div>
            </div>

            <div className="frame-141">
              <div className="text-wrapper-109">-300円</div>
            </div>
          </div>

          <div className="text-wrapper-107">オプション</div>

          <img className="vector-64" alt="Vector" src="/img/vector-70-11.svg" />
        </div>

        <div className="frame-135">
          <div className="text-wrapper-110">3,300円</div>

          <div className="text-wrapper-107">総額</div>

          <img className="vector-64" alt="Vector" src="/img/vector-70-11.svg" />
        </div>
      </div>

      <div className="view-30">
        <div className="frame-142">
          <div className="text-wrapper-111">3,300円お支払いへ</div>
        </div>
      </div>
    </div>
  );
};
