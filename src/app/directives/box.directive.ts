import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective implements AfterViewInit {

  constructor(private elem: ElementRef) { }

  ngAfterViewInit(): void {
    this.elem.nativeElement.style.border = '1px solid black';
    this.elem.nativeElement.style.borderRadius = '5px';
    this.elem.nativeElement.style.padding = '5px';
    this.elem.nativeElement.style.margin = '5px';
  }

}
