import {Component, input} from '@angular/core';
import {HistoricalGameEntry} from '../../../models/historical-game-entry.model';
import {PlayerAvatarComponent} from '../../../../../share/player-avatar/player-avatar.component';
import {GameStatusPipe} from '../../../../../share/pipes/game-status.pipe';
import {FormatDatePipe} from '../../../../../share/pipes/format-date.pipe';

@Component({
  selector: 'app-game-history-element',
    imports: [
        PlayerAvatarComponent,
        GameStatusPipe,
        FormatDatePipe
    ],
  templateUrl: './game-history-element.component.html',
  styleUrl: './game-history-element.component.sass'
})
export class GameHistoryElementComponent {

    game = input.required<HistoricalGameEntry>();

}
