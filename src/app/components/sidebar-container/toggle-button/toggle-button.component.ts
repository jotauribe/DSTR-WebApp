import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private toggleSidebar() {
    $('.ui.sidebar').sidebar('toggle');
  }

}
