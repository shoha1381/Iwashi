import { Link } from "react-router-dom";
import "./style.css";

export const Screen17 = () => {
  return (
    <div className="screen-17">
      <div className="frame-164">
        <div className="view-40">
          <div className="liquid-glass-regular-16">
            <img className="blur-14" alt="Blur" src="/img/blur-138.svg" />

            <div className="fill-14" />

            <div className="glass-effect-15" />
          </div>

          <div className="icon-park-outline-12">
            <img className="vector-70" alt="Vector" src="/img/vector-701.svg" />
          </div>
        </div>

        <div className="text-wrapper-127">写真撮影</div>
      </div>

      <Link className="frame-165" to="/ipad-pro-11u34-368">
        <div className="frame-166">
          <div className="frame-167">
            <div className="text-wrapper-128">初回・ビフォー写真</div>
          </div>

          <img
            className="gemini-generated-5"
            alt="Gemini generated"
            src="/img/gemini-generated-image-2-2.png"
          />

          <Link className="view-41" to="/ipad-pro-11u34-368">
            <div className="liquid-glass-regular-16">
              <img className="blur-14" alt="Blur" src="/img/blur-137.svg" />

              <div className="fill-14" />

              <div className="glass-effect-15" />
            </div>

            <div className="maximize">
              <img className="icon-11" alt="Icon" src="/img/icon-50.svg" />
            </div>
          </Link>
        </div>
      </Link>

      <div className="frame-168">
        <Link className="view-42" to="/ipad-pro-11u34-366">
          <div className="frame-169">
            <div className="text-wrapper-129">撮り直す</div>
          </div>
        </Link>

        <div className="view-43">
          <div className="frame-170">
            <div className="text-wrapper-130">完了</div>
          </div>
        </div>
      </div>
    </div>
  );
};
