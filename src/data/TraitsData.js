export const TraitsData = [
    {
        sectionId: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(2, 10),
        sectionTitle: 'Traits',
        sectionContent: 'are modifiers that affect the unit’s performance in a fight; like more DMG to bosses, more range, etc. When you get a unit through summon, it might come with a trait, but you can reroll traits through the use of',
        sectionImg: './Logo.webp',
        sectionIcons: [{
            name: 'Star Remnants',
            img: './Traits/Reroll_Token.webp'
        },
        {
            name: 'Robux Reroll Tokens',
            img: './Traits/Star_Remnant.webp'
        }]
    },
    {
        sectionId: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(2, 10),
        sectionTitle2: 'How to Reroll Traits',
        sectionContents: {
            text1: 'To reroll traits, interact with Wis, who is outside the Evolve area in the spawn map. Currently, there are three ways to reroll a trait: using',
            text2: 'can be obtained from the Travelling Merchant Shop or rarely as a bonus from summons.',
            text3: 'If the player is using Star Remnants to reroll a trait, the amount required depends on the unit the trait is being rerolled on. All units that are Mythic or Secret rarity require 5 Star Remnants per reroll, while units that are Legendary and below only require 1 per reroll.',
            text4: 'Tips: Therefore, when evolving unit form Legendary to Mythical, rerolling before evolved can reduce the cost of Star Remnant.pngStar Remnants. (For example, Noruto (Beast Cloak), Erein, Akoku, Gone, Cel (Semi-Perfect) etc.)',
            text5: 'Rerolling traits with Robux can be done for either 129 R$ for 1 reroll or 999 R$ for 10',
            text6: 'each Reroll Token can be used once to reroll a trait. Reroll Tokens can also be obtained from events such as the Cake Hunt',
        },
    },
    // {
    //     sectionId: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(2, 10),
    //     title: 'List of Traits',
    //     tableTitles: ['Traits', 'Description'],
    //     content: [{
    //         idContent: 'Traits',
    //         trait: 'Superior',
    //         traitProbality: '29.97%',
    //         traitsContent: [{
    //             idContent: 'Description',
    //             traitsDescription: 'Units with this Trait do increased damage to enemies.',
    //             traitsLvls: [{
    //                 lvl1: 'l',
    //                 dmgIncrement: '10%'
    //             },
    //             {
    //                 lvl2: 'll',
    //                 dmgIncrement: '12%'
    //             },
    //             {
    //                 lvl3: 'lll',
    //                 dmgIncrement: '15%'
    //             }]
    //         }],
    //         tableDescription: 'Superior I/II/III increases average DPS for units by 10/12.5/15% respectively.'
    //     }]
    // }
]
