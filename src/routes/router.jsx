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
    BattlePassAdmin,
    HomeAdmin,
    UsersAdmin
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
        path: '/dashboard',
        element: <LayoutAdmin />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <HomeAdmin/>
            },
            {
                path: '/dashboard/units',
                element: <UnitsAdmin/>
            },
            {
                path: '/dashboard/items',
                element: <ItemAdmin/>
            },
            {
                path: '/dashboard/traits',
                element: <TraitsAdmin/>
            },
            {
                path: '/dashboard/code',
                element: <CodeAdmin/>
            },
            {
                path: '/dashboard/effects',
                element: <EffectsAdmin/>
            },
            {
                path: '/dashboard/relics',
                element: <RelicsAdmin/>
            },
            {
                path: '/dashboard/powerup',
                element: <PowerupsAdmin/>
            },
            {
                path: '/dashboard/evolution',
                element: <EvolutionAdmin/>
            },
            {
                path: '/dashboard/cosmetics',
                element: <CosmeticsAdmin/>
            },
            {
                path: '/dashboard/tier_list',
                element: <TierListAdmin/>
            },
            {
                path: '/dashboard/battle_pass',
                element: <BattlePassAdmin/>
            },
            {
                path: '/dashboard/user',
                element: <UsersAdmin/>
            }
        ]
    }
])