import {Client} from "../../../itinerary/client-element/client.model";
import {Item} from "./order-item/item.model";
/**
 * Created by Guess on 15/6/2017.
 */

export class Order{
  public client: Client;
  public items: Item[];

  constructor(client: Client, items: Item[]) {
    this.client = client;
    this.items = items;
  }

  addItem(productName: string, quantity: number){
    this.items.push(
      new Item(productName, quantity)
    );
  }

}
