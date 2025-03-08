import {Component, input} from '@angular/core';

@Component({
  selector: 'invites-widget',
  imports: [],
  templateUrl: './invites-widget.component.html',
  styleUrl: './invites-widget.component.sass'
})
export class InvitesWidgetComponent {
    playerId = input.required<string | undefined>();
}
