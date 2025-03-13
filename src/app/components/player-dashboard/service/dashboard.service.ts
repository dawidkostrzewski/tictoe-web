import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlayerStats} from '../models/player-stats.model';

@Injectable({
    providedIn: "root"
})
export class DashboardService {

    private readonly http = inject(HttpClient);
    private readonly BACKEND_URL = '/tictoe-backend';

    public getPlayerStats(userId: string): Observable<PlayerStats> {
        return this.http.get<PlayerStats>(`${this.BACKEND_URL}/player/stats?playerId=${userId}`);
    }

    public logoutPlayer(userId: string): Observable<boolean> {
        return this.http.put<boolean>(`${this.BACKEND_URL}/player/${userId}/logout`, null)
    }
}
