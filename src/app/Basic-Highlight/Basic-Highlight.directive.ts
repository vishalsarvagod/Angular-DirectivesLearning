import { Directive, ElementRef, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';
    @HostListener('mouseover') mouseOver(eventData: Event){
        this.backgroundColor = 'yellow';
    }
    @HostListener('mouseleave') mouseLeave(eventData: Event){
        this.backgroundColor = 'transparent';
    }
    constructor(private elementRef : ElementRef){
        elementRef.nativeElement
    }
    ngOnInit(){
        // this.elementRef.nativeElement.style.backgroundColor = 'brown';
    }
}