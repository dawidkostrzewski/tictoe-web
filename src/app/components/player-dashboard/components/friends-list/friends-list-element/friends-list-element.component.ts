import {Component, input, output} from '@angular/core';
import {Friend} from '../../../models/friends-list-element.model';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'friends-list-element',
    imports: [
        UpperCasePipe
    ],
  templateUrl: './friends-list-element.component.html',
  styleUrl: './friends-list-element.component.sass'
})
export class FriendsListElementComponent {

    friend = input.required<Friend>();

    openChat = output<Friend>();

}
