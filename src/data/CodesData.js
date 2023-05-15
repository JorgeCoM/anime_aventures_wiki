export const CodeData = [
    {
        title: 'Codes',
        description: `are redeemable gifts in-game which grants the Player rewards and boosts. Codes can be redeemed from the Codes area in the Lobby. If one of the codes aren't working, please leave a comment below.`,
        table: [
            {
                name: 'ENTERTAINMENT',
                date: new Date().toLocaleTimeString(),
                status: false,
                rewards: [
                    {
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
                        icon: './Currencies/Gems.webp',
                        prize: 250,
                        currencieType: 'Gems',
                    },
                    {
                        icon: './Currencies/Gems.webp',
                        prize: 1000,
                        currencieType: 'Gems',
                    }
                ]
            }
        ]
    }
]