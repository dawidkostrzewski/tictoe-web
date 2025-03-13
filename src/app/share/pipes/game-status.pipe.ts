import {Pipe, PipeTransform} from '@angular/core';
import {GameStatus} from '../../components/player-dashboard/models/game-status.model';

@Pipe({
    name: 'gameStatus'
})
export class GameStatusPipe implements PipeTransform {

    transform(value: GameStatus, ...args: unknown[]): unknown {
        switch (value){
            case "WIN": return 'Victory';
            case "LOSS": return 'Defeat';
            case "DRAW": return 'Draw';
        }
    }

}
