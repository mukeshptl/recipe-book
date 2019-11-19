import { Directive, HostBinding, ElementRef, Renderer2,  OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  
  @HostBinding('style.backgroundColor') bgColor: string;
  constructor(private elRef: ElementRef, private renderer:Renderer2) { }
  
  ngOnInit() {
    
  }
  
  @HostListener('mouseenter') mouseenter (eventData: Event) {
    this.bgColor = 'green';
  }
  
  @HostListener('mouseleave') mouseleave (eventData: Event) {
    this.bgColor = 'transparent';
  }
  
  
}
