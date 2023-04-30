import { createBrowserRouter } from 'react-router-dom';
import { LayoutHome, LayoutAdmin } from '../layouts';
import {
    HomePage,
    NotFoundPage,
    UnitsPage,
    ItemsPage,
    TraitsPage,
    CodesPage,
    EffectsPage,
    RelicsPage,
    PowerupsPage,
    EvolutionPage,
    CosmeticsPage,
    TierListPage,
    BattlerPassPage,
    ItemAdmin,
    UnitsAdmin,
    TraitsAdmin,
    CodeAdmin,
    EffectsAdmin,
    RelicsAdmin,
    PowerupsAdmin,
    EvolutionAdmin,
    CosmeticsAdmin,
    TierListAdmin,
    BattlePassAdmin
} from '../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutHome />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'units',
                element: <UnitsPage />
            },
            {
                path: 'items',
                element: <ItemsPage />
            },
            {
                path: 'traits',
                element: <TraitsPage />
            },
            {
                path: 'codes',
                element: <CodesPage />
            },
            {
                path: 'effects',
                element: <EffectsPage />
            },
            {
                path: 'relics',
                element: <RelicsPage />
            },
            {
                path: 'powerups',
                element: <PowerupsPage />
            },
            {
                path: 'evolution',
                element: <EvolutionPage />
            },
            {
                path: 'cosmetics',
                element: <CosmeticsPage />
            },
            {
                path: 'tier_list',
                element: <TierListPage />
            },
            {
                path: 'battle_pass',
                element: <BattlerPassPage />
            },
        ]
    },
    {
        path: '/config',
        element: <LayoutAdmin />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                path: '/config/units',
                element: <UnitsAdmin/>
            },
            {
                path: '/config/items',
                element: <ItemAdmin/>
            },
            {
                path: '/config/traits',
                element: <TraitsAdmin/>
            },
            {
                path: '/config/code',
                element: <CodeAdmin/>
            },
            {
                path: '/config/effects',
                element: <EffectsAdmin/>
            },
            {
                path: '/config/relics',
                element: <RelicsAdmin/>
            },
            {
                path: '/config/powerup',
                element: <PowerupsAdmin/>
            },
            {
                path: '/config/evolution',
                element: <EvolutionAdmin/>
            },
            {
                path: '/config/cosmetics',
                element: <CosmeticsAdmin/>
            },
            {
                path: '/config/tier_list',
                element: <TierListAdmin/>
            },
            {
                path: '/config/battle_pass',
                element: <BattlePassAdmin/>
            }
        ]
    }
])