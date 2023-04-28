import {createBrowserRouter} from 'react-router-dom';
import { LayoutHome } from '../layouts';
import { HomePage, NotFoundPage, UnitsPage, ItemsPage, TraitsPage, CodesPage, EffectsPage, RelicsPage, PowerupsPage, EvolutionPage, CosmeticsPage, TierListPage, BattlerPassPage, } from '../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutHome/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'units',
                element: <UnitsPage/>
            },
            {
                path: 'items',
                element: <ItemsPage/>
            },
            {
                path: 'traits',
                element: <TraitsPage/>
            },
            {
                path: 'codes',
                element: <CodesPage/>
            },
            {
                path: 'effects',
                element: <EffectsPage/>
            },
            {
                path: 'relics',
                element: <RelicsPage/>
            },
            {
                path: 'powerups',
                element: <PowerupsPage/>
            },
            {
                path: 'evolution',
                element: <EvolutionPage/>
            },
            {
                path: 'cosmetics',
                element: <CosmeticsPage/>
            },
            {
                path: 'tier_list',
                element: <TierListPage/>
            },
            {
                path: 'battle_pass',
                element: <BattlerPassPage/>
            },
        ]
    }
])