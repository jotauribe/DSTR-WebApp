/**
 * Created by Jota on 15/6/2017.
 */

export class Item{
  public productName: string;
  public quantity: number;

  constructor(productName: string, quantity: number) {
    this.productName = productName;
    this.quantity = quantity;
  }
}
