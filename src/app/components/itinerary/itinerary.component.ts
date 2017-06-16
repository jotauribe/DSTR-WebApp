import {Component, HostBinding, OnInit} from '@angular/core';
import {Client} from "./client-element/client.model";

declare var $: any;

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'ui container';
  clients: Client[];
  selectedClient: Client;
  selectedClientForNewOrder: Client;

  constructor() {
    this.clients = [
      new Client("La chasita de Jose","Universidad de Cartagena"),
      new Client("Tienda La terrasa dorada","Vista Hermosa Carrera 60D #34"),
      new Client("Tienda La Quinta avenida","El campestre Manzana 60 Lote 45")
    ];
  }

  ngOnInit() {
    var content = [
      { title: 'Coca-cola' },
      { title: 'Boliqueso' },
      { title: 'Mandarina' },
      { title: 'Cafe sello rojo' },
      { title: 'Leche alpina' },
      { title: 'Otra coca-cola' },
      { title: 'Queso mozarella' },
      { title: 'Mani' },
      { title: 'Producto' }
    ];
    $('.ui.search').search({source : content});
  }

  showClientDetail(client: Client){
    console.log("SHOW CLIENT DETAIL: " + client.name)
    this.selectedClient = client;
  }

  showNewOrderForm(client: Client){
    console.log("SHOW ORDER FORM: " + client.name);
    this.selectedClientForNewOrder = client;
    $('.ui.modal').modal('setting', 'transition', 'fade');
    $('.ui.modal').modal('show');
  }

}
