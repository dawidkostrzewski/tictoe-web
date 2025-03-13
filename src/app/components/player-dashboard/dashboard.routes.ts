import {Routes} from '@angular/router';
import {MainDashboardComponent} from './components/main-dashboard/main-dashboard.component';
import {LeaderboardComponent} from './components/leaderboard/leaderboard.component';
import {PlayerDashboardComponent} from './player-dashboard.component';
import {FriendsPageComponent} from './components/friends-page/friends-page.component';
import {GamesHistoryPageComponent} from './components/game-history/games-history-page/games-history-page.component';
import {VisitPlayerProfileComponent} from './components/visit-player-profile/visit-player-profile.component';

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
                component: LeaderboardComponent
            },
            {
                path: "friends",
                component: FriendsPageComponent
            },
            {
                path: "games-history",
                component: GamesHistoryPageComponent
            },
            {
                path: "player/:id",
                component: VisitPlayerProfileComponent
            }
        ]
    }
]
