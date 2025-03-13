import {inject, Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FriendsList} from '../models/friends-list.model';
import {BACKEND_URL} from '../../../share/consts';
import {Friend} from '../models/friends-list-element.model';
import {Conversation} from '../models/conversation.model';
import {PlayerInfo} from '../../../share/models/player-info.model';
import {PageableResponse} from '../../../share/models/pageable-response.model';
import {Invite} from '../models/invite.model';

@Injectable({
    providedIn: "root"
})
export class PlayersService {

    private readonly http = inject(HttpClient);

    public readonly openChatWindow = new Subject<Friend>();
    public readonly closeChatWindow = new Subject<string>();

    public getFriendsList(userId: string): Observable<PageableResponse<Friend>> {
        return this.http.get<PageableResponse<Friend>>(`${BACKEND_URL}/player/${userId}/friends-list`);
    }

    public getPlayerInfo(playerId: string): Observable<PlayerInfo> {
        return this.http.get<PlayerInfo>(`${BACKEND_URL}/player/${playerId}/info`)
    }

    public getConversation(playerId: string, friendId: string): Observable<Conversation> {
        return of()
    }

    public sendPlayerInvite(senderId: string, receiverId: string): Observable<any> {
        return this.http.post(`${BACKEND_URL}/invite/player`, {senderId: senderId, receiverId: receiverId});
    }

    public getPlayerInvites(playerId: string): Observable<PageableResponse<Invite>> {
        return this.http.get<PageableResponse<Invite>>(`${BACKEND_URL}/player/${playerId}/invites`);
    }

    public logoutPlayer(playerId: string): Observable<void> {
        return this.http.put<void>(`${BACKEND_URL}/player/logout`, {playerId});
    }

    public acceptPlayerInvite(playerId: string, inviteId: string): Observable<any> {
        return this.http.post(`${BACKEND_URL}/invite/accept`, {inviteId: inviteId, playerId: playerId});
    }

    public declinePlayerInvite(playerId: string, inviteId: string): Observable<void> {
        return this.http.post<void>(`${BACKEND_URL}/invite/decline`, {playerId, inviteId});
    }

}
