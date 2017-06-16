import {Directive, ElementRef} from '@angular/core';

declare var $: any;

@Directive({
  selector: '.ui.modal'
})
export class ModalDirective {

  constructor(private elementRef: ElementRef) {
    $(this.elementRef.nativeElement).modal('setting', 'transition', 'vertical flip');
  }

}
