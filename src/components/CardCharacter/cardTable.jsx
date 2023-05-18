export default function CardTable({
    firstClass,
    secondClass,
    thirdClass,
    nameClass,
    imgClass,
    detailClass,
    descriptionClass,
    nameData,
    imgData,
    altData,
    detailData,
    descriptionData
}) {
  return (
    <div className={firstClass}>
      <p className={nameClass}>{nameData}</p>
      <div className={secondClass}>
        <img
          className={imgClass}
          src={imgData}
          alt={altData}
        />
      </div>
      <div className={thirdClass}>
        <p className={detailClass}>{detailData}</p>
        <p className={descriptionClass}>{descriptionData}</p>
      </div>
    </div>
  );
}
