import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Client} from "../client-element/client.model";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  @Input() client: Client;
  //@HostBinding('attr.class') cssClass = 'ui container';

  constructor() { }

  ngOnInit() {
  }

}
