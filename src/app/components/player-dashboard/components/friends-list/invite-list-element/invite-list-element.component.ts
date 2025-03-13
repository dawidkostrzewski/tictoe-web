import {Component, input, output} from '@angular/core';
import {Invite} from '../../../models/invite.model';
import {IconsComponent} from '../../../../../share/icons/icons.component';

@Component({
    selector: 'invite-list-element',
    imports: [
        IconsComponent
    ],
    templateUrl: './invite-list-element.component.html',
    styleUrl: './invite-list-element.component.sass'
})
export class InviteListElementComponent {

    invite = input.required<Invite>();

    acceptInviteEvent = output<string>();
    declineInviteEvent = output<string>();
}
