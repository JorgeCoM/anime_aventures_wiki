import { NavLink } from "react-router-dom";
import "../../assets/NavMain.css";

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
              position: 'relative',
              display: 'inline-block',
            }}
          >
            <div style={{
              position: 'absolute',
              display: 'block',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: `linear-gradient(${item.gradient.grade}, ${item.gradient.color1}, ${item.gradient.color2}, ${item.gradient.color1})`,
              mixBlendMode: 'multiply'
            }}></div>
            <img
              className="w-8 py-1"
              src={img}
              alt={text}
            />
          </div>

          <p className="text-white">{text}</p>
        </div>
      </div>
    </NavLink>
  );
};
