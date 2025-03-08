import {Component, inject, OnInit} from '@angular/core';
import {StatisticsComponent} from '../statistics/statistics.component';
import {UserContext} from '../../../../share/models/user-context.model';
import {UserContextService} from '../../../../core/authorization/user-context.service';
import {ShortGameHistoryComponent} from '../game-history/short-game-history/short-game-history.component';
import {GameWidgetComponent} from '../game-widget/game-widget.component';
import {WebSocketService} from '../../../../core/websocket/websocket.service';

@Component({
  selector: 'app-main-dashboard',
    imports: [
        StatisticsComponent,
        ShortGameHistoryComponent,
        GameWidgetComponent,
    ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.sass'
})
export class MainDashboardComponent implements OnInit{

    public userContext: UserContext | undefined;

    private readonly userContextService = inject(UserContextService);
    private readonly webSocketService = inject(WebSocketService);
    messages: string[] = [];
    ngOnInit(): void {
        this.userContext = <UserContext>this.userContextService.userContext;
        this.webSocketService.subscribeToMessages((message) => {
            this.messages.push(message)
        })
    }

    sendMessage() {
        this.webSocketService.sendMessage("DUPA");
    }

}
