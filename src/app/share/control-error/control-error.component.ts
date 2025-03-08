import {Component, input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'control-error',
    imports: [],
  templateUrl: './control-error.component.html',
  styleUrl: './control-error.component.sass'
})
export class ControlErrorComponent {

    control = input.required<FormControl>();
}
