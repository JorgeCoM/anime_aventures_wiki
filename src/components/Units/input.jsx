export default function Input({type, value, style}) {
  return (
    <input
      type={type}
      value={value}
      className={style}
    />
  );
}
