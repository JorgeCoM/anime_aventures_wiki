import Input from "../components/Units/input";
import Card from "../components/Units/card";
export const UnitsPage = () => {
  const unitText = "Units are the primary way to defend against oncoming enemies. These are very vital to the Player's gameplay as they help progress further into the game. Most Units are offensive ones, either placed on the ground, on the hill, or they can be both, however, some can provide support in its own way, such as buffing other towers, debuffing enemies and spawning units. Each have their own special ability and can be extremely powerful when paired with other Units. Units can also go through Evolution, which further strengthen the Unit's base stats and even give them new abilities! If the Unit you are searching for isn't listed here, please contact one of the staff members in Wiki Staff."
  const unitColors = [
    "pink",
    "red",
    "pink",
    "amber",
    "purple",
    "blue",
  ];
  const unitsName = [
    "New Units",
    "Secret Units",
    "Mythic Units",
    "Legendary Units",
    "Epic Units",
    "Rare Units",
  ];
  const unitsItem = [
    {
      img: "https://www.pngmart.com/files/13/Female-Anime-Yuno-Gasai-PNG-Picture.png",
      name: "Assasin",
    },
    {
      img: "https://www.pnganime.com/web/images/a/anya-forger-shocked-face.png",
      name: "Anya",
    },
    {
      img: "https://www.pngmart.com/files/13/Anime-Girl-Blush-PNG-Photos.png",
      name: "girl",
    },
    {
      img: "https://www.pngmart.com/files/13/Anime-Madara-Uchiha-PNG-Free-Download.png",
      name: "Madara",
    },
    {
      img: "https://www.pngmart.com/files/13/Female-Anime-Yuno-Gasai-PNG-Picture.png",
      name: "Assasin",
    },
    {
      img: "https://www.pnganime.com/web/images/a/anya-forger-shocked-face.png",
      name: "Anya",
    },
    {
      img: "https://www.pngmart.com/files/13/Anime-Girl-Blush-PNG-Photos.png",
      name: "girl",
    },
    {
      img: "https://www.pngmart.com/files/13/Anime-Madara-Uchiha-PNG-Free-Download.png",
      name: "Madara",
    },
    {
      img: "https://www.pngmart.com/files/13/Female-Anime-Yuno-Gasai-PNG-Picture.png",
      name: "Assasin",
    },
    {
      img: "https://www.pnganime.com/web/images/a/anya-forger-shocked-face.png",
      name: "Anya",
    },
    {
      img: "https://www.pngmart.com/files/13/Anime-Girl-Blush-PNG-Photos.png",
      name: "girl",
    },
    {
      img: "https://www.pngmart.com/files/13/Anime-Madara-Uchiha-PNG-Free-Download.png",
      name: "Madara",
    },
    {
      img: "https://www.pngmart.com/files/13/Female-Anime-Yuno-Gasai-PNG-Picture.png",
      name: "Assasin",
    },
    {
      img: "https://www.pnganime.com/web/images/a/anya-forger-shocked-face.png",
      name: "Anya",
    },
    {
      img: "https://www.pngmart.com/files/13/Anime-Girl-Blush-PNG-Photos.png",
      name: "girl",
    },
    {
      img: "https://www.pngmart.com/files/13/Anime-Madara-Uchiha-PNG-Free-Download.png",
      name: "Madara",
    },
  ];
  const unitCategory = unitsName.map((item, index) => (
    <Input
      type="button"
      value={item}
      style={`cursor-pointer text-xs rounded-xl border-2 border-${unitColors[index]}-600 col-span-1 hover:bg-${unitColors[index]}-800 py-2 mx-0.5 my-2 px-0.5`}
      key={index}
    />
  ));
  const unitList = unitsItem.map((item, index) => (
    <Card
      alt={"Imagen de la Unit"}
      firstDivClass={
        "col-span-1 w-32 h-32 bg-amber-400 rounded-md p-2 flex overflow-hidden mt-2"
      }
      img={item.img}
      imgClass={"h-20 cursor-pointer"}
      parClass={
        "text-md uppercase font-bold text-center text-black border bg-white rounded-lg"
      }
      secondDivClass={"bg-white rounded-full p-3 content-center"}
      key={index}
      unitName={item.name}
    />
  ));
  return (
    <div className="text-white m-5 overflow-y-hidden h-full">
      <h1 className="text-2xl font-bold">Unit page</h1>
      <div className="text-justify mx-3 mt-3 text-xs">
        <p className="leading-relaxed">
          {unitText}
        </p>
      </div>
      <div className="mt-4">
        <div id="units__options" className="grid grid-cols-6 justify-between">
          {/* <input
            type="button"
            value="Units"
            className="text-sm rounded-2xl border-2 border-purple-600 my-2 px-8 py-2 hover:bg-purple-800"
          /> */}
          {unitCategory}
        </div>
        <div
          id="units__content"
          className="overflow-y-scroll grid grid-cols-4 h-[320px] gap-6"
        >
          {/* <div
            id="units__item"
            className="col-span-1 w-32 h-32 bg-amber-400 rounded-md p-2 flex overflow-hidden  "
          >
            <div className="bg-white rounded-full p-3 content-center">
              <img
                src="https://www.pnganime.com/web/images/a/anya-forger-shocked-face.png"
                alt=""
                className="h-30"
              />
              <p
                id="units__itemName"
                className="text-md uppercase font-bold text-center text-black border bg-white rounded-lg"
              >
                Carrot
              </p>
            </div>
          </div> */}
          {unitList}
        </div>
      </div>
    </div>
  );
};
