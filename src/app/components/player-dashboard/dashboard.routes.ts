import {Routes} from '@angular/router';
import {MainDashboardComponent} from './components/main-dashboard/main-dashboard.component';
import {RankingComponent} from './components/ranking/ranking.component';
import {PlayerDashboardComponent} from './player-dashboard.component';
import {FriendsPageComponent} from './components/friends-page/friends-page.component';
import {GamesHistoryPageComponent} from './components/game-history/games-history-page/games-history-page.component';

export const DashboardRoutes: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        component: PlayerDashboardComponent,
        children: [
            { path: '', pathMatch: "full", redirectTo: 'start' },
            {
                path: "start",
                component: MainDashboardComponent
            },
            {
                path: "ranking",
                component: RankingComponent
            },
            {
                path: "friends",
                component: FriendsPageComponent
            },
            {
                path: "games-history",
                component: GamesHistoryPageComponent
            }
        ]
    }
]
