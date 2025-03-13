import {Component, input, OnDestroy, OnInit} from '@angular/core';
import {IconsComponent} from '../../../../share/icons/icons.component';
import {SearchGameLoaderComponent} from './search-game-loader/search-game-loader.component';
import {CreateGameFormComponent} from './create-game-form/create-game-form.component';

@Component({
    selector: 'game-widget',
    imports: [
        IconsComponent,
        SearchGameLoaderComponent,
        CreateGameFormComponent
    ],
    templateUrl: './game-widget.component.html',
    styleUrl: './game-widget.component.sass'
})
export class GameWidgetComponent implements OnDestroy{

    ngOnDestroy(): void {
        this.clearStorage();
    }

    playerId = input.required<string | undefined>();
    searchingGame = {search: false, ranking: false};
    creatingNewGame = false;

    searchRankingGame(): void  {
        this.startSearchGame(true);
    }

    searchNormalGame(): void  {
        this.startSearchGame(false)
    }

    createNewGame(): void  {
        this.creatingNewGame = true;
    }

    startSearchGame(rankingGame: boolean): void  {
        this.searchingGame = {search: true, ranking: rankingGame}
        localStorage.setItem('searchingGame', JSON.stringify(this.searchingGame));
    }

    handleCancelSearching(): void  {
        this.searchingGame = {search: false, ranking: false}
        this.clearStorage();
    }

    handleCancelCreation(): void {
        this.creatingNewGame = false;
    }

    handleStartCreatingGame(opponentId: string): void {

    }

    clearStorage() {
        localStorage.removeItem('searchingGame');
    }
}
