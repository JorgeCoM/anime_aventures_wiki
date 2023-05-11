import Input from "../components/input";
import Card from "../components/card";
import { Units } from "../data/Units";
export const UnitsPage = () => {
  const unitText =
    "Units are the primary way to defend against oncoming enemies. These are very vital to the Player's gameplay as they help progress further into the game. Most Units are offensive ones, either placed on the ground, on the hill, or they can be both, however, some can provide support in its own way, such as buffing other towers, debuffing enemies and spawning units. Each have their own special ability and can be extremely powerful when paired with other Units. Units can also go through Evolution, which further strengthen the Unit's base stats and even give them new abilities! If the Unit you are searching for isn't listed here, please contact one of the staff members in Wiki Staff.";
  const unitColors = ["pink", "red", "pink", "amber", "purple", "blue"];
  const unitsName = [
    "New Units",
    "Secret Units",
    "Mythic Units",
    "Legendary Units",
    "Epic Units",
    "Rare Units",
  ];
  const unitCategory = unitsName.map((item, index) => (
    <Input
      type="button"
      value={item}
      styleClass={`cursor-pointer text-xs rounded-xl border-2 border-${unitColors[index]}-600 col-span-1 hover:bg-${unitColors[index]}-800 py-2 mx-0.5 my-2 px-0.5`}
      key={index}
    />
  ));
  const unitList = Units.map((item, index) => (
    <Card
      alt={"Imagen de la Unit"}
      firstDivClass={
        "col-span-1 m-1 text-center border-2 border-purple-800 bg-gray-900 rounded-md"
      }
      secondDivClass={"m-2"}
      parClass={"mt-2 mx-2 text-xs pt-2"}
      key={index}
      unitName={item.name}
      img={item.image}
      imgClass={
        "m-auto mt-2  w-34 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 rounded-sm"
      }
    />
  )); 
  return (
    <div className="text-white m-5 overflow-y-hidden h-full">
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
          {unitList}
        </div>
      </div>
    </div>
  );
};
