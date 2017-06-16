import { Component, OnInit } from '@angular/core';
import {Order} from "./order-element/order.model";
import {Client} from "../../itinerary/client-element/client.model";
import {Item} from "./order-element/order-item/item.model";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor() {
    this.orders = [
      new Order(new Client("Tienda Donde Gabriela", "Nadie sabe donde queda"), [new Item("Coca-cola 1 Lt", 24)]),
      new Order(new Client("La gran estacion", "Al lado de tu casa"), [new Item("Doritos 200 Gr", 24)]),
      new Order(new Client("La gran parada", "Caracoles, por donde Joaco"), [new Item("Doritos 200 Gr", 76)])
      ];
  }

  ngOnInit() {
  }

}
