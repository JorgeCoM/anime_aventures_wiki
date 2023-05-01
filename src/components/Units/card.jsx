export default function Card(
 { firstDivClass,
  secondDivClass,
  img,
  alt,
  imgClass,
  parClass,
  unitName
}) {
  return (
    <div className={firstDivClass}>
      <div className={secondDivClass}>
        <img src={img} alt={alt} className={imgClass} />
        <p className={parClass}>{unitName}</p>
      </div>
    </div>
  );
}
