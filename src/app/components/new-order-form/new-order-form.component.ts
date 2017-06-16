import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../itinerary/client-element/client.model";

@Component({
  selector: 'app-new-order-form',
  templateUrl: './new-order-form.component.html',
  styleUrls: ['./new-order-form.component.css']
})
export class NewOrderFormComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit() {
  }

}
