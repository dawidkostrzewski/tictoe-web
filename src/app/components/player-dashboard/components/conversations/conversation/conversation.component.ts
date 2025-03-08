import {Component, inject, input, OnInit, output} from '@angular/core';
import {Friend} from '../../../models/friends-list-element.model';
import {FriendsService} from '../../../service/friends.service';
import {Conversation} from '../../../models/conversation.model';
import {LoaderComponent} from '../../../../../share/loader/loader.component';
import {IconsComponent} from '../../../../../share/icons/icons.component';
import {TextInputComponent} from '../../../../../share/text-input/text-input.component';

@Component({
  selector: 'app-conversation',
    imports: [
        LoaderComponent,
        IconsComponent,
        TextInputComponent
    ],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.sass'
})
export class ConversationComponent implements OnInit {

    playerId = input.required<string | undefined>();
    friend = input.required<Friend>();

    closeConversation = output<string>();

    minimized = false;
    loadingConversation = false;
    sendingMessage = false;

    conversation: Conversation = {messages: []};

    private readonly service = inject(FriendsService);

    ngOnInit(): void {
        this.loadingConversation = true;
        this.service.getConversation(<string> this.playerId(), this.friend().playerId).subscribe({
            next: conversation => {
                this.conversation.messages.push(...conversation.messages);
                this.loadingConversation = false;
            }
        });
    }

    minimizeConversation(): void {
        this.minimized = true;
    }

    openConversation(): void {
        this.minimized = false;
    }


}
