export default function Input({onFunction,type, value, style,styleClass}) {
  return (
    <input
    onClick={onFunction}
      type={type}
      value={value}
      style={style}
      className={styleClass}
    />
  );
}
