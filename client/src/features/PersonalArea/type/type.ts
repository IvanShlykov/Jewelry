import type { OrderItem } from "../../JewelrysPage/type";

export type UserChange={
    name:string;
    email:string;
    phone: string;
}
export type State = {
    error: string | undefined;
    orderItems: OrderItem[]
  }
  export type User = UserChange 