export default function Input({onHover,onNotHover,onFunction,type, value, style,styleClass}) {
  return (
    <input
    onMouseEnter={onHover}
    onMouseLeave={onNotHover}
    onClick={onFunction}
      type={type}
      value={value}
      style={style}
      className={styleClass}
    />
  );
}
