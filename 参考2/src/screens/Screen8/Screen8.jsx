import { Link } from "react-router-dom";
import "./style.css";

export const Screen8 = () => {
  return (
    <div className="screen-8">
      <div className="frame-104">
        <div className="view-10">
          <div className="liquid-glass-regular-7">
            <img className="blur-5" alt="Blur" src="/img/blur-122.svg" />

            <div className="fill-5" />

            <div className="glass-effect-6" />
          </div>

          <div className="icon-park-outline-3">
            <img className="vector-43" alt="Vector" src="/img/vector-701.svg" />
          </div>
        </div>

        <div className="text-wrapper-66">写真AI生成</div>

        <Link className="view-11" to="/ipad-pro-11u34-423">
          <div className="frame-105">
            <div className="text-wrapper-67">横並べ</div>
          </div>

          <div className="frame-106">
            <div className="text-wrapper-68">スライドバー</div>
          </div>
        </Link>

        <div className="view-12">
          <div className="liquid-glass-regular-7">
            <img className="blur-5" alt="Blur" src="/img/blur-123.svg" />

            <div className="fill-5" />

            <div className="glass-effect-6" />
          </div>

          <div className="chevron-left">
            <img className="icon-5" alt="Icon" src="/img/icon-44.svg" />
          </div>
        </div>
      </div>

      <div className="frame-107">
        <img className="element-10" alt="Element" src="/img/4-2.png" />

        <img
          className="gemini-generated"
          alt="Gemini generated"
          src="/img/gemini-generated-image-4-1.png"
        />

        <div className="rectangle-6" />

        <div className="rectangle-7" />

        <div className="text-wrapper-69">現在</div>

        <div className="text-wrapper-70">施術を受けた場合</div>
      </div>

      <div className="sliders">
        <div className="separator" />

        <div className="frame-108">
          <div className="stack">
            <div className="track" />

            <div className="ticks-and-knob">
              <div className="knob">
                <div className="knob-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
