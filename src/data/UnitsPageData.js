import {
    Units
} from "../data/Units"
export const UnitsPageContent = {
    unitText: "Units are the primary way to defend against oncoming enemies. These are very vital to the Player's gameplay as they help progress further into the game. Most Units are offensive ones, either placed on the ground, on the hill, or they can be both, however, some can provide support in its own way, such as buffing other towers, debuffing enemies and spawning units. Each have their own special ability and can be extremely powerful when paired with other Units. Units can also go through Evolution, which further strengthen the Unit's base stats and even give them new abilities! If the Unit you are searching for isn't listed here, please contact one of the staff members in Wiki Staff.",
    unitsCategory: [{
            id: 1,
            name: "New Units",
            color: "db2777",
            hover: "9d174d",
            unitsItem: Units.filter((item) => item.categoryId == 1)
        },
        {
            id: 2,
            name: "Secret Units",
            color: "dc2626",
            hover: "991b1b",

            unitsItem: Units.filter((item) => item.categoryId == 2)
        },
        {
            id: 3,
            name: "Mythic Units",
            color: "db2777",
            hover: "9d174d",
            unitsItem: Units.filter((item) => item.categoryId == 3)
        },
        {
            id: 4,
            name: "Legendary Units",
            color: "d97706",
            hover: "92400e",
            unitsItem: Units.filter((item) => item.categoryId == 4)
        },
        {
            id: 5,
            name: "Epic Units",
            color: "9333ea",
            hover: "6b21a8",
            unitsItem: Units.filter((item) => item.categoryId == 5)
        },
        {
            id: 6,
            name: "Rare Units",
            color: "2563eb",
            hover: "1e40af",
            unitsItem: Units.filter((item) => item.categoryId == 6)
        },
    ]
}