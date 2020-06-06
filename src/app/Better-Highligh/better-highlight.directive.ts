import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  constructor(private eleRef: ElementRef,private renderer: Renderer2) { }
  ngOnInit(){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color','blue');
  }
  @HostListener('mouseenter') mouseOver(eventData : Event){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color','blue');
  }
  @HostListener('mouseleave') mouseLeave(eventData : Event){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color','transparent');
  }
}
