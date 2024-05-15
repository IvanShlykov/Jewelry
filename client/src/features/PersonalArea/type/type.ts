import type { OrderItem } from "../../JewelrysPage/type";

export type UserChange={
    name:string;
    email:string;
    phone: string;
}
export type State = {
    name:string;
    email:string;
    phone: string;
    error: string | undefined;
    orderItems: OrderItem[]
  }
  export type User = UserChange 