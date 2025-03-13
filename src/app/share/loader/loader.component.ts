import {Component, ElementRef, inject, input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.sass'
})
export class LoaderComponent implements OnInit {

    width = input<number>();
    elementRef = inject(ElementRef);
    private renderer = inject(Renderer2);

    ngOnInit(): void {
        const element = this.elementRef.nativeElement.querySelector('#loader');
        this.renderer.setStyle(element, 'width', `${this.width()}px`)
    }


}
