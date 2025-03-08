import {Component, inject, input} from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-player-avatar',
    imports: [
        UpperCasePipe,
    ],
  templateUrl: './player-avatar.component.html',
  styleUrl: './player-avatar.component.sass'
})
export class PlayerAvatarComponent {

    playerAvatarImage = input<string | null>();
    username = input.required<string>();

    private readonly sanitizer = inject(DomSanitizer);

    get avatarImage() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(<string> this.playerAvatarImage())
    }
}
