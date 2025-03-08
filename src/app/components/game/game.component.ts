import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-game',
    imports: [
        NgForOf
    ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.sass'
})
export class GameComponent {
    board: string[] = Array(9).fill(null);
    currentPlayer: string = 'X';
    winner: string | null = null;

    makeMove(index: number): void {
        if (!this.board[index] && !this.winner) {
            this.board[index] = this.currentPlayer;
            this.winner = this.checkWinner();
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    checkWinner(): string | null {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return this.board[a];
            }
        }
        // @ts-ignore
        return this.board.includes(null) ? null : 'Remis';
    }

    resetGame(): void {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winner = null;
    }
}
