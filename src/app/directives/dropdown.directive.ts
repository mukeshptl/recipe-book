import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  
  constructor(private elRef: ElementRef) { }
  
  @HostListener('click') click(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
