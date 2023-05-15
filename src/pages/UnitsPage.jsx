import Input from "../components/input";
import Card from "../components/card";
import { UnitsPageContent } from "../data/UnitsPageData";
import { useEffect, useState } from "react";
export const UnitsPage = () => {
  const [unitCategory, setUnitCategory] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const [unitText, setUnitText] = useState(null);
  useEffect(() => {
    filterCategoryData();
    unitList.length <= 0 && filterItemData(0);
  }, []);
  function filterCategoryData() {
    setUnitText(UnitsPageContent.unitText);
    const unitCategoryData = UnitsPageContent.unitsCategory.map(
      (item, index) => (
        <Input
          type="button"
          onFunction={() => filterItemData(index)}
          value={item.name}
          style={{ borderColor: "#" + item.color }}
          styleClass={`cursor-pointer text-xs rounded-xl border-2 col-span-1 py-2 mx-0.5 my-2 px-0.5`}
          key={index}
        />
      )
    );
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
    <div className=" text-white m-5 overflow-y-hidden h-full">
      <h1 className="text-2xl font-bold">Unit page</h1>
      <div className="text-justify mx-3 mt-3 text-xs">
        <p className="leading-relaxed">{unitText}</p>
      </div>
      <div className="mt-4">
        <div id="units__options" className="grid grid-cols-6 justify-between">
          {unitCategory}
        </div>
        <div
          id="units__content"
          className="grid grid-cols-5"
        >
        <div id="units__content" className="grid grid-cols-5">
          {unitList}
        </div>
      </div>
    </div>
  );
};
