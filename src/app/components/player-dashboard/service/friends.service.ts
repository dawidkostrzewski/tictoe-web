import {inject, Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FriendsList} from '../models/friends-list.model';
import {BACKEND_URL} from '../../../share/consts';
import {Friend} from '../models/friends-list-element.model';
import {Conversation} from '../models/conversation.model';

@Injectable({
    providedIn: "root"
})
export class FriendsService {

    private readonly http = inject(HttpClient);

    public readonly openChatWindow = new Subject<Friend>();
    public readonly closeChatWindow = new Subject<string>();

    public getFriendsList(userId: string): Observable<FriendsList> {
        return of({friends: [
                {
                    "playerId": "e413c7c3-a976-4bba-a7b0-1cf563b00e9b",
                    "username": "Horne Hardy",
                    "isOnline": false
                },
                {
                    "playerId": "3681a716-54e5-4abc-ae90-815adf8fa89e",
                    "username": "Elena Wynn",
                    "isOnline": true
                },
                {
                    "playerId": "a70f75ed-38f7-471a-bee5-2482d053ff8f",
                    "username": "Collins Hogan",
                    "isOnline": false
                },
                {
                    "playerId": "12646b27-7850-4078-ac5c-56c098930302",
                    "username": "Sharp Thornton",
                    "isOnline": true
                },
                {
                    "playerId": "1a1dca80-f01c-441e-b2eb-878c215f39be",
                    "username": "Guthrie Herman",
                    "isOnline": true
                },
                {
                    "playerId": "2da8ddaa-e461-46ae-8410-eca15f625a52",
                    "username": "Brooke Randolph",
                    "isOnline": true
                },
                {
                    "playerId": "14d6e600-062a-477a-9d3e-a2e4a1195c42",
                    "username": "Wilda Price",
                    "isOnline": true
                }
            ]});
        //return this.http.get<FriendsList>(`${BACKEND_URL}/player/${userplayerId}/friends-list`);
    }

    public getConversation(playerId: string, friendId: string): Observable<Conversation> {
        return of({messages: [
                {
                    "userId": "030d5f40-a379-4a80-b8b6-11d47ad22e9e",
                    "content": "Tempor occaecat nostrud et labore."
                },
                {
                    "userId": "3da9739c-e9b3-4efa-a736-83190947593c",
                    "content": "Ex ipsum in deserunt laboris tempor et."
                },
                {
                    "userId": "4b04e24e-3836-4d52-8c2a-f85809268c2e",
                    "content": "Ullamco enim nostrud in est qui nulla commodo incididunt cillum."
                },
                {
                    "userId": "1ae141c3-6c57-4db9-92f2-fa5481ff4b48",
                    "content": "Pariatur nisi occaecat esse eiusmod voluptate ex."
                },
                {
                    "userId": "3da9739c-e9b3-4efa-a736-83190947593c",
                    "content": "Aliquip minim nulla reprehenderit do nisi duis ad."
                },
                {
                    "userId": "3da9739c-e9b3-4efa-a736-83190947593c",
                    "content": "Fugiat amet anim magna amet nulla ullamco minim dolor eu duis enim non aliquip."
                }
            ]})
    }
}
