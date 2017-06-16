import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Order} from "./order.model";

@Component({
  selector: '[app-order-element]',
  templateUrl: './order-element.component.html',
  styleUrls: ['./order-element.component.css']
})
export class OrderElementComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'item';
  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

}
