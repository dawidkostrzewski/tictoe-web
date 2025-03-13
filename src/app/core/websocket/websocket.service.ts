import {inject, Injectable} from '@angular/core';
import {Client} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import {DirectMessage} from './models/direct-message.model';
import {UserContextService} from '../authorization/user-context.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: "root"
})
export class WebSocketService {
    private stompClient: Client | undefined;
    private serverUrl = 'https://192.168.100.237/tictoe-backend/ws';
    private readonly userContextService = inject(UserContextService);
    userId: string | undefined;
    constructor() {
        this.userContextService.userContextLoaded.pipe(takeUntilDestroyed()).subscribe(() => {
            this.userId = this.userContextService.userContext?.id;

            this.stompClient = new Client({
                webSocketFactory: () => new SockJS(this.serverUrl),
                debug: (str) => console.log(str),
                reconnectDelay: 5000, // Automatyczne ponowne połączenie
            });

            this.stompClient.activate();
        });

    }

    // Wysyłanie wiadomości
    sendMessage(message: string) {
        this.stompClient?.publish({ destination: '/app/chat', body: message });
    }

    sendDirectMessage(message: string, playerId: string) {
        this.stompClient?.publish({destination: '/app/direct-message'})
    }

    // Odbiór wiadomości
    subscribeToMessages(callback: (message: string) => void) {
        // @ts-ignore
        this.stompClient.onConnect = () => {
            this.stompClient?.subscribe('/topic/messages', (msg) => {
                callback(msg.body);
            });
        };
    }

    // 📨 Wysyłanie wiadomości do konkretnego użytkownika
    sendMessageToUser(recipientId: string, message: string) {
        const payload = {
            senderId: this.userId,
            recipientId: recipientId,
            message: message,
            conversationId: null
        };

        this.stompClient?.publish({
            destination: `/app/direct-message/${recipientId}`,
            body: JSON.stringify(payload),
        });
    }

    // Subskrypcja na wiadomości dla konkretnego użytkownika
    subscribeToUserMessages(callback: (message: DirectMessage) => void) {
        // @ts-ignore
        this.stompClient.onConnect = () => {
            this.stompClient?.subscribe(`/user/${this.userId}/message/direct`, (msg) => {
                const receivedMessage: DirectMessage = JSON.parse(msg.body);
                callback(receivedMessage);
            });
        }
    }
}
//ZAPISYWANIE SIĘ NA EVENT Z KOLEJKI PRZY ODEBRANIU POTWIERDZENIA DODANIA DO KOLEKI OCZEKUJĄCYCH
