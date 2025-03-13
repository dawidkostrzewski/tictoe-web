import {Component, inject, input, OnInit} from '@angular/core';
import {FriendsList} from '../../models/friends-list.model';
import {PlayersService} from '../../service/players.service';
import {FriendsListElementComponent} from './friends-list-element/friends-list-element.component';
import {TextInputComponent} from '../../../../share/text-input/text-input.component';
import {Friend} from '../../models/friends-list-element.model';
import {catchError, combineLatestWith, map, mergeWith, switchMap} from 'rxjs';
import {merge} from 'rxjs/internal/operators/merge';
import {Invite} from '../../models/invite.model';
import {LoaderComponent} from '../../../../share/loader/loader.component';
import {InviteListElementComponent} from './invite-list-element/invite-list-element.component';

@Component({
  selector: 'friends-list',
    imports: [
        FriendsListElementComponent,
        TextInputComponent,
        LoaderComponent,
        InviteListElementComponent
    ],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.sass'
})
export class FriendsListComponent implements OnInit {

    playerId = input.required<string | undefined>();

    friendsList: Friend[] = [];
    invites: Invite[] = [];
    loading = false;

    private readonly service = inject(PlayersService);

    ngOnInit(): void {
        this.loadData();
    }

    loadData():void {
        this.loading = true;
        this.service.getPlayerInvites(<string>this.playerId()).pipe(
            combineLatestWith(this.service.getFriendsList(<string>this.playerId())),
            map(value =>
                {
                    return {invites: value[0].content, friends: value[1].content};
                }
            )
        ).subscribe({
            next: response => {
                this.invites = response.invites;
                this.friendsList = response.friends;
            },
            complete: () => {
                this.loading = false;
            }
        });
    }

    openChat(friend: Friend): void {
        this.service.openChatWindow.next(friend);
    }

    acceptInviteEventHandler(inviteId: string): void {
        this.service.acceptPlayerInvite(<string> this.playerId(), inviteId).subscribe({
            next: () => {
                this.loadData();
            }
        })
    }

    declineInviteEventHandler(inviteId: string): void {
        this.service.declinePlayerInvite(<string> this.playerId(), inviteId).subscribe({
            next: () => {
                this.loadData();
            }
        })
    }
}
