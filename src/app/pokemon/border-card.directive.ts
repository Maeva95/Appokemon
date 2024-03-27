import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]',
  standalone: true
})
export class BorderCardDirective {

    //initialState
    private initialColor = '#f5f5f5'
    private defaultColor = '#009688'
    private defaultHeight = 180

    constructor(private element: ElementRef) {
        this.setHeight(this.defaultHeight)
        this.setBorder(this.initialColor)
    }

    @Input('pokemonBorderCard') borderColor!: string; 

    //eventlisteners
    @HostListener('mouseenter') onMouseEnter () { 
        this.setBorder(this.borderColor || this.defaultColor)
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor)
    }

    setHeight(height: number) {
        this.element.nativeElement.style.height = height + 'px'
    }

    setBorder(color: string) {
        let border = 'solid 3px' + color
        this.element.nativeElement.style.border = border
    }
}
