import {Component, inject, input, OnInit, output} from '@angular/core';
import {Friend} from '../../../models/friends-list-element.model';
import {PlayersService} from '../../../service/players.service';
import {Conversation} from '../../../models/conversation.model';
import {LoaderComponent} from '../../../../../share/loader/loader.component';
import {IconsComponent} from '../../../../../share/icons/icons.component';
import {TextInputComponent} from '../../../../../share/text-input/text-input.component';
import {WebSocketService} from '../../../../../core/websocket/websocket.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-conversation',
    imports: [
        LoaderComponent,
        IconsComponent,
        TextInputComponent,
        FormsModule
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
    newMessageText: string = '';
    conversation: Conversation = {messages: []};

    private readonly service = inject(PlayersService);
    private readonly webSocketService = inject(WebSocketService);

    ngOnInit(): void {
        this.webSocketService.subscribeToUserMessages((message) => {
            this.conversation.messages.push({userId: message.senderId, content: message.text});
        });

        this.loadingConversation = true;
        this.service.getConversation(<string> this.playerId(), this.friend().playerId).subscribe({
            next: conversation => {
                this.conversation.messages.push(...conversation.messages);
                this.loadingConversation = false;
            },
            complete: () => {
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

    sendMessage(): void {
        console.log(this.newMessageText)
        if (!this.newMessageText || !this.newMessageText.length) return;
        this.webSocketService.sendMessageToUser(this.friend().playerId, this.newMessageText);
        this.newMessageText = '';
    }


}
