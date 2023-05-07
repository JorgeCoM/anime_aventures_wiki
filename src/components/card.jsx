export default function Card({
  firstDivClass,
  secondDivClass,
  img,
  alt,
  imgClass,
  parClass,
  unitName,
}) {
  return ( 
      <div className={firstDivClass}>
        <div>
          <img src={img} alt={alt} className={imgClass} />
        </div>
        <div className={secondDivClass}>
          <p className={parClass}>{unitName}</p>
        </div>
      </div> 
  );
}
