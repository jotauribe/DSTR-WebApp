import {Component, OnInit, HostBinding, Input, Output, HostListener, EventEmitter} from '@angular/core';
import {Client} from "./client.model";

@Component({
  selector: 'app-client-element',
  templateUrl: './client-element.component.html',
  styleUrls: ['./client-element.component.css']
})
export class ClientElementComponent implements OnInit {


  @HostBinding('attr.class') cssClass = 'item';
  @Input() client : Client;
  @Output() onClientSelected = new EventEmitter<Client>();
  @Output() onNewOrderButtonClicked = new EventEmitter<Client>();

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('click', ["$event"]) onClick(event: any): void {
    console.log("Evento CLICK en CLIEN-ELEMENT!");
    event.stopPropagation();
    this.onClientSelected.emit(this.client);
  }

  onButtonClicked(event: any){
    console.log("Boton clickeado");
    this.onNewOrderButtonClicked.emit(this.client);
  }

}
