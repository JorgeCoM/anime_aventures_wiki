export default function Input({type, value, style,styleClass}) {
  return (
    <input
      type={type}
      value={value}
      style={style}
      className={styleClass}
    />
  );
}
