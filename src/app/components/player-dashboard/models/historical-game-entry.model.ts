import {GameStatus} from './game-status.model';

export type HistoricalGameEntry = {
    gameId: string;
    opponentUsername: string;
    gameStatus: GameStatus;
    gainedPoints: number;
    isRankingGame: boolean;
    avatarImage: string | null;
    creationTime: number;
}
