import Input from "../components/CardCharacter/card";
import CardTable from "../components/CardCharacter/cardTable";
import { itemsCategoryList, itemsText } from "../data/itemsData";
import { useEffect, useState } from "react";
export const ItemsPage = () => {
  const [itemsCategoryFilter, setItemsCategoryFilter] = useState([]);
  const [categoryText, setCategoryText] = useState("");
  useEffect(() => {
    itemsCategoryList[0] && filterData(itemsCategoryList[0].name);
  }, []);
  const itemsCategory = itemsCategoryList.map((item, index) => (
    <Input
      styleClass="cols-span-1 cursor-pointer text-xs rounded-xl border-2 col-span-1 py-2 mx-0.5 my-2 px-0.5 border-purple-600 hover:bg-purple-800"
      type="button"
      value={item.name}
      onFunction={() => filterData(item.name)}
      key={index}
    />
  ));
  function filterData(name) {
    const [{ content, text }] = itemsCategoryList.filter(
      (item) => item.name == name
    );
    const cardData = content.map((item, index) => (
      <CardTable
        firstClass={"col-span-1"}
        secondClass="bg-slate-800 w-40 rounded-md"
        thirdClass="bg-slate-600 w-56 p-4 -mt-5 ml-16 rounded-md"
        imgClass="w-28 m-auto p-2"
        nameClass="text-sm my-2"
        detailClass="text-sm pb-3"
        descriptionClass="text-xs"
        nameData={item.name}
        imgData={item.img}
        altData="item image description"
        detailData={item.detail}
        descriptionData={item.description}
        key={index}
      />
    ));
    setCategoryText(text);
    setItemsCategoryFilter(cardData);
  }
  return (
    <div className="text-white m-5 h-full itemsPage">
      <h1 className="text-3xl font-bold mb-4">Items page</h1>
      <div className="text-center mb-2 text-md px-3 m-auto">
        <p>{itemsText}</p>
      </div>
      <div className="grid grid-cols-6 justify-between">{itemsCategory}</div>
      <div>
        <p className="py-4 text-center text-sm px-8 m-auto">{categoryText}</p>
        <div className="grid grid-cols-2 ml-12 gap-3 content-between">
          {itemsCategoryFilter && itemsCategoryFilter}
        </div>
      </div>
    </div>
  );
};
