import {Component, OnInit, output} from '@angular/core';

@Component({
    selector: 'search-game-loader',
    imports: [],
    templateUrl: './search-game-loader.component.html',
    styleUrl: './search-game-loader.component.sass'
})
export class SearchGameLoaderComponent implements OnInit {
    board: (string | null)[] = Array(9).fill(null);
    symbols = ['X', 'O'];
    availableFields = [...Array(9).keys()];
    winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    winIndices: number[] = [];
    nextSymbol = 'O';

    cancelSearching = output<void>();

    ngOnInit(): void {
        this.fillRandomField();
    }

    fillRandomField(): void {
        if (this.availableFields.length === 0 && !this.checkWin()) {
            setTimeout(() => this.resetGame(), 500);
            return;
        }

        if (this.availableFields.length === 0 || this.checkWin()) {
            return;
        }

        const randomIndex = Math.floor(Math.random() * this.availableFields.length);
        const fieldIndex = this.availableFields[randomIndex];

        this.board[fieldIndex] = this.nextSymbol;
        this.availableFields.splice(randomIndex, 1);

        this.nextSymbol = this.nextSymbol === 'O' ? 'X' : 'O';
        setTimeout(() => this.fillRandomField(), 500);
    }

    checkWin(): boolean {
        for (let combo of this.winningCombinations) {
            const [a, b, c] = combo;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.winIndices = combo;
                setTimeout(() => this.resetGame(), 500);
                return true;
            }
        }
        return false;
    }

    resetGame(): void {
        this.nextSymbol = 'O';
        this.board.fill(null);
        this.availableFields = [...Array(9).keys()];
        this.winIndices = [];
        setTimeout(() => this.fillRandomField(), 500);
    }
}
