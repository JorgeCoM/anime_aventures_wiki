import Input from "../components/input";
export const ItemsPage = () => {
  const itemsText =
    "Items are used in various ways to help boost the player and their units. They're obtainable from every game mode.";

  const itemsName = [
    "XP items",
    "Portals",
    "Materials",
    "Keys",
    "Misc. Items",
    "Boosts",
  ];
  const itemsCategoryList = [
    {
      text: "XP Items are used to be fed to units, which will give them XP if they aren't already at the max unit level. You're able to hold a maximum of 1000 of each XP Food.",
      item: {
        title: "",
        subtitle: "",
        img: "",
      },
      information: {
        detail: "",
        description: "",
      },
    },
  ];
  const itemsCategory = itemsName.map((item, index) => (
    <Input
      styleClass="cols-span-1 cursor-pointer text-xs rounded-xl border-2 col-span-1 py-2 mx-0.5 my-2 px-0.5 border-purple-600 hover:bg-purple-800"
      type="button"
      value={item}
      key={index}
    />
  ));
  return (
    <div className="text-white m-5 overflow-y-hidden h-full">
      <h1 className="text-2x1 font-bold">Items page</h1>
      <div className="text-justify mx-3 text-xs">
        <p className="leading-relaxed">{itemsText}</p>
      </div>
      <div className="grid grid-cols-6">{itemsCategory}</div>
      <div></div>
    </div>
  );
};
