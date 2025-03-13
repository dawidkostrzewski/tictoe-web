import {PlayerInfo} from '../../../share/models/player-info.model';

export type PlayerInfoWithStatistics = PlayerInfo & {
    wins: number;
    losses: number;
    draws: number;
    points: number;
}

