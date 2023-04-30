import { NavLink } from "react-router-dom";
import "../assets/NavMain.css";

export const NavItems = ({ item }) => {
  let { text, path, gradient, img } = item;
  return (
    <NavLink to={path} className="box-container rounded-md">
      <div
        style={{
          background: `-webkit-linear-gradient(${gradient.grade}, ${gradient.color1}, ${gradient.color2}, ${gradient.color3}`,
        }}
        className={`p-1 rounded-md box-container-shadow`}
      >
        <div className="box-content rounded-md flex justify-between items-center px-2">
          <div
            style={{       
              background: `-webkit-linear-gradient(${gradient.grade}, ${gradient.color3}, ${gradient.color2}, ${gradient.color1}`,
              maskImage: `url(${img})`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              backgroundClip: "padding-box",
              maxHeight: '90%'
            }}
          >
            <img
              className="max-h-full py-1"
              src={img}
              alt={text}
              style={{
                WebkitMaskImage: `url(${img})`,
                maskImage: `url(${img})`,
                opacity: 0,
              }}
            />
          </div>

          <p className="text-white">{text}</p>
        </div>
      </div>
    </NavLink>
  );
};
  