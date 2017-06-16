import {Directive, ElementRef, OnInit} from '@angular/core';

declare var $ : any;

@Directive({
  selector: '.toggle'
})
export class SidebarDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    $(this.elementRef.nativeElement).sidebar('toggle');
  }



}
