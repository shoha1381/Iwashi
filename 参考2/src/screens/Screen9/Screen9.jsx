import { Link } from "react-router-dom";
import "./style.css";

export const Screen9 = () => {
  return (
    <div className="screen-9">
      <div className="rectangle-8" />

      <div className="rectangle-9" />

      <div className="text-wrapper-71">現在</div>

      <div className="text-wrapper-72">施術を受けた場合</div>

      <img className="element-11" alt="Element" src="/img/4-3.png" />

      <img className="element-12" alt="Element" src="/img/4-3.png" />

      <div className="frame-109">
        <div className="view-13">
          <div className="liquid-glass-regular-8">
            <img className="blur-6" alt="Blur" src="/img/blur-124.svg" />

            <div className="fill-6" />

            <div className="glass-effect-7" />
          </div>

          <div className="icon-park-outline-4">
            <img className="vector-44" alt="Vector" src="/img/vector-701.svg" />
          </div>
        </div>

        <div className="text-wrapper-73">写真AI生成</div>

        <Link className="view-14" to="/ipad-pro-11u34-369">
          <div className="frame-110">
            <div className="text-wrapper-74">横並べ</div>
          </div>

          <div className="frame-111">
            <div className="text-wrapper-75">スライドバー</div>
          </div>
        </Link>

        <div className="view-15">
          <div className="liquid-glass-regular-8">
            <img className="blur-6" alt="Blur" src="/img/blur-125.svg" />

            <div className="fill-6" />

            <div className="glass-effect-7" />
          </div>

          <div className="chevron-left-2">
            <img className="icon-6" alt="Icon" src="/img/icon-44.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
