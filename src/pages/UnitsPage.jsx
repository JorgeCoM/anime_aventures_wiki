import Input from "../components/CardCharacter/input";
import Card from "../components/CardCharacter/card";
import { UnitsPageContent } from "../data/UnitsPageData";
import React, { useEffect, useState } from "react";
export const UnitsPage = () => {
  const [unitCategory, setUnitCategory] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const [unitText, setUnitText] = useState(null);
  const [theHover, setTheHover] = useState(() => {
    const newArray = UnitsPageContent.unitsCategory.map(() => false);
    return newArray;
  });
  const onMouseIn = (index) => {
    setTheHover((oldData) => {
      const newData = [...oldData];
      newData[index] = true;
      return newData;
    });
  };
  const onMouseOut = (index) => {
    setTheHover((oldData) => {
      const newData = [...oldData];
      newData[index] = false;
      return newData;
    });
  };
  useEffect(() => {
    filterCategoryData();
    unitList.length <= 0 && filterItemData(0);
  }, []);
  useEffect(() => {
    setUnitCategory((oldData) => {
      const newData = oldData.map((item, index) => {
        const itemStyle = {
          ...item.props.style,
          backgroundColor: theHover[index] ? "#" + UnitsPageContent.unitsCategory[index].hover : null,
        };
        return React.cloneElement(item, { style: itemStyle });
      });
      return newData;
    });
  }, [theHover]);
  function filterCategoryData() {
    setUnitText(UnitsPageContent.unitText);
    const unitCategoryData =  
    UnitsPageContent.unitsCategory.map((item, index) => {
      return (
        <Input
          type="button"
          onFunction={() => filterItemData(index)}
          onHover={() => onMouseIn(index)}
          onNotHover={() => onMouseOut(index)}
          value={item.name}
          style={{borderColor: "#" + item.color}}
          styleClass={`cursor-pointer text-xs rounded-xl border-2 col-span-1 py-2 mx-0.5 my-2 px-0.5`}
          key={index}
        />
      );
    })
    setUnitCategory(unitCategoryData);
  }
  function filterItemData(indexId) {
    const unitListData = UnitsPageContent.unitsCategory[indexId].unitsItem.map(
      (itemList, indexList) => (
        <Card
          alt={"Imagen de la Unit"}
          firstDivClass={
            "col-span-1 m-1 text-center border-2 border-purple-800 bg-gray-900 rounded-md"
          }
          secondDivClass={"m-2"}
          parClass={"mt-2 mx-2 text-xs pt-2"}
          key={indexList}
          unitName={itemList.name}
          img={itemList.image}
          imgClass={
            "m-auto mt-2  w-34 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 rounded-sm"
          }
        />
      )
    );
    setUnitList(unitListData);
  }
  return (
    <div className="UnitsPage text-white m-5 h-full">
      <h1 className="text-3xl font-bold mb-4">Unit page</h1>
      <div className="text-center mb-2 text-md px-3 m-auto">
        <p className="leading-relaxed">{unitText}</p>
      </div>
      <div id="units__options" className="grid grid-cols-6 justify-between">
        {unitCategory}
      </div>
      <div id="units__content" className="grid grid-cols-5 content-between">
        {unitList}
      </div>
    </div>
  );
};
