import {Component, output} from '@angular/core';
import {TextInputComponent} from "../../../../../share/text-input/text-input.component";

@Component({
  selector: 'create-game-form',
	imports: [
		TextInputComponent
	],
  templateUrl: './create-game-form.component.html',
  styleUrl: './create-game-form.component.sass'
})
export class CreateGameFormComponent {

    selectedOption: 'Normal' | 'Ranked' = 'Normal';

    cancelCreation = output<void>();
    startCreateGame = output<string>();

    createGame() {
        this.startCreateGame.emit('');
    }

    cancel() {
        this.cancelCreation.emit();
    }
}
