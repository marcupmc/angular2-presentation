import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {
    private el: HTMLElement;
    private _color = 'yellow';
    
    constructor(el: ElementRef) { 
        this.el = el.nativeElement; 
    }

    @Input() set color(colorName: string){
        this._color = colorName || this._color;
    }
    
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this._color || 'yellow');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }

}
