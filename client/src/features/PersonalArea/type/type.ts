import type { OrderItem } from "../../JewelrysPage/type";

export type UserChange={
    name:string;
    email:string;
    phone: string;
}
export type State = {
    error: string | undefined;
    orderItems: Order[]
  }
  export type User = UserChange 

  export type Order ={
    id:number;
    userID:number;
    status:string;
    OrderItems:OrderItem[]
  }