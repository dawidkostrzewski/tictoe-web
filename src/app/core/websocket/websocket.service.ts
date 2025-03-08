import {Injectable} from '@angular/core';
import {Client} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

@Injectable({
    providedIn: "root"
})
export class WebSocketService {
    private stompClient: Client;
    private serverUrl = 'http://localhost:8081/tictoe-backend/ws';

    constructor() {
        this.stompClient = new Client({
            webSocketFactory: () => new SockJS(this.serverUrl),
            debug: (str) => console.log(str),
            reconnectDelay: 5000, // Automatyczne ponowne połączenie
        });

        this.stompClient.activate();
    }

    // Wysyłanie wiadomości
    sendMessage(message: string) {
        this.stompClient.publish({ destination: '/app/chat', body: message });
    }

    // Odbiór wiadomości
    subscribeToMessages(callback: (message: string) => void) {
        this.stompClient.onConnect = () => {
            this.stompClient.subscribe('/topic/messages', (msg) => {
                callback(msg.body);
            });
        };
    }
}
