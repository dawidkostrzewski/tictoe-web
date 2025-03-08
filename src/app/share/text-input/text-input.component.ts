import {Component, input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'text-input',
    imports: [],
    templateUrl: './text-input.component.html',
    styleUrl: './text-input.component.sass',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: TextInputComponent
        }
    ]
})
export class TextInputComponent implements ControlValueAccessor {

    label = input<string>('');
    showLabel = input<boolean>(true);
    type = input<string>('text');
    placeholder = input<string>('');
    disabled: boolean = false;
    value: string | null = null;
    onChange: any;
    touched = false;


    onTouched: any = () => {};

    private markAsTouched(): void{
        if(!this.touched){
            this.touched = true;
            this.onTouched();
        }
    }

    valueChanged(event: any) {
        const inputElement = event.target as HTMLInputElement;
        this.value = inputElement.value;
        this.onChange(this.value);

        this.markAsTouched();
    }
    writeValue(value: string): void {
        this.value = value
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
