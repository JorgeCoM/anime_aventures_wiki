export const CodeData = [
    {
        title: 'Codes',
        description: `are redeemable gifts in-game which grants the Player rewards and boosts. Codes can be redeemed from the Codes area in the Lobby. If one of the codes aren't working, please leave a comment below.`,
        table: [
            {
                name: 'ENTERTAINMENT',
                date: new Date().toLocaleTimeString(),
                status: true,
                rewards: [
                    {
                        id: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(2, 10),
                        icon: './Currencies/Gems.webp',
                        prize: 500,
                        currencieType: 'Gems',
                    }
                ]
            },
            {
                name: 'HAPPYEASTER',
                date: new Date().toLocaleTimeString(),
                status: true,
                rewards: [
                    {
                        id: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(2, 10),
                        icon: './Currencies/Gems.webp',
                        prize: 500,
                        currencieType: 'Gems',
                    },
                ]
            },
            {
                name: 'HALLOWEEN',
                date: new Date().toLocaleTimeString(),
                status: false,
                rewards: [
                    {
                        id: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(2, 10),
                        icon: './Currencies/Gems.webp',
                        prize: 250,
                        currencieType: 'Gems',
                    },
                    {
                        id: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(2, 10),
                        icon: './Currencies/Candies.webp',
                        prize: 500,
                        currencieType: 'Candies',
                    },
                ]
            },
            {
                name: 'SubToKelvingts',
                date: new Date().toLocaleTimeString(),
                status: false,
                rewards: [
                    {
                        id: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(2, 10),
                        icon: './Currencies/Gems.webp',
                        prize: 250,
                        currencieType: 'Gems',
                    },
                    {
                        id: Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substring(2, 10),
                        icon: './itemsImages/Summon_Ticket.webp',
                        prize: '1x',
                        currencieType: 'Summon Ticket',
                    },
                ]
            }
        ]
    }
]