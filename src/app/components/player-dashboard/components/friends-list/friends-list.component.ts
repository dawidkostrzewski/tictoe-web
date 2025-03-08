import {Component, inject, input, OnInit} from '@angular/core';
import {FriendsList} from '../../models/friends-list.model';
import {FriendsService} from '../../service/friends.service';
import {FriendsListElementComponent} from './friends-list-element/friends-list-element.component';
import {TextInputComponent} from '../../../../share/text-input/text-input.component';
import {Friend} from '../../models/friends-list-element.model';

@Component({
  selector: 'friends-list',
    imports: [
        FriendsListElementComponent,
        TextInputComponent
    ],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.sass'
})
export class FriendsListComponent implements OnInit {

    playerId = input.required<string | undefined>();

    friendsList: FriendsList | undefined;
    loading = false;

    private readonly service = inject(FriendsService);

    ngOnInit(): void {
        this.loading = true;
        this.service.getFriendsList(<string>this.playerId()).subscribe({
            next: response => {
                this.friendsList = response;
                this.loading = false;
            }
        });
    }

    openChat(friend: Friend): void {
        this.service.openChatWindow.next(friend);
    }
}
