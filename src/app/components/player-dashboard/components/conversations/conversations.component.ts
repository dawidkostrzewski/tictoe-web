import {Component, inject, input} from '@angular/core';
import {Friend} from '../../models/friends-list-element.model';
import {FriendsService} from '../../service/friends.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ConversationComponent} from './conversation/conversation.component';

@Component({
  selector: 'app-conversations',
    imports: [
        ConversationComponent
    ],
  templateUrl: './conversations.component.html',
  styleUrl: './conversations.component.sass'
})
export class ConversationsComponent {

    playerId = input.required<string | undefined>()

    private readonly service = inject(FriendsService);

    conversations: Friend[] = [];

    constructor() {
        this.service.openChatWindow.pipe(takeUntilDestroyed()).subscribe({
            next: friend => {
                if (!this.conversations.includes(friend)) this.conversations.push(friend);
            }
        })
    }

    closeConversation(playerId: string): void {
        this.conversations = this.conversations.filter(friend => !(friend.playerId === playerId));
    }
}
