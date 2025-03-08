import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    providers: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
    title = 'tictoe-web';
}
