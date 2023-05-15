import "../assets/homePage.css";
import { Units } from "../data/Units";
import Card from "../components/card";
export const HomePage = () => {
  const arr = [
    "Hero City has been overrun by Shigaruko and his crew of villains, along with an army of Nomo! But hope still remains, as some heroes have gained powerful upgrades, and new heroes have emerged! Reunite the remaining heroes and rally together to put an end to their tyranny!",
    "New World: Hero City!",
    "Brand new unique units to collect, upgrade, and evolve!",
    "New Leaderboard rewards!",
    "New Infinity Castle season and season rewards!",
  ];
  const pageList = Units.map((item, index) => (
    <Card
      firstDivClass={
        "col-span-1 m-1 text-center border-2 border-purple-800 bg-gray-900 rounded-md"
      }
      secondDivClass={"m-2"}
      parClass={"text-xs"}
      key={index}
      unitName={item.name}
      img={item.image}
      imgClass={
        "m-auto mt-2 w-34 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 rounded-sm"
      }
      alt={"item of popular pages list"}
    />
  ));
  return (
    <div className="home">
      <div className="m-5">
        <div className="float-right pr-10 pt-6">
          <img className="w-80" src="./Logo.webp" alt="logo" />
        </div>
        <div>
          <h2 className="text-3xl w-56">
            <span className="text-purple-400">Anime Adventures</span> is a tower
            defense game made by Gomu.
          </h2>
          <p className="text-justify mt-2 text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quam,
            obcaecati qui debitis molestiae numquam tempore non nihil adipisci
            nostrum beatae iste sed expedita laboriosam explicabo eos itaque
            rerum quisquam.
          </p>
        </div>
      </div>
      <div className="m-5">
        <div>
          <h2 className="text-3xl text-purple-400">Popular Pages</h2>
        </div>
        <div className="grid grid-cols-5">{pageList}</div>
      </div>
      <div className="m-5">
        <div>
          <h2 className="text-3xl text-purple-400"> Last updates</h2>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
