import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserContextService} from '../../../core/authorization/user-context.service';
import {PageableResponse} from '../../../share/models/pageable-response.model';
import {PlayerInfoWithStatistics} from '../models/player-info-with-statistics.model';

@Injectable({
    providedIn: "root"
})
export class LeaderboardService {

    private readonly http = inject(HttpClient);
    private readonly userContextService = inject(UserContextService);

    public getLeaderboardPlayers(page: number, pageSize: number): Observable<PageableResponse<PlayerInfoWithStatistics>> {
        const playerId = <string>this.userContextService.userContext?.id;
        const params = {playerId, page, pageSize}
        return this.http.get<PageableResponse<PlayerInfoWithStatistics>>('/tictoe-backend/players/leaderboard', {params: params});
    }

}
