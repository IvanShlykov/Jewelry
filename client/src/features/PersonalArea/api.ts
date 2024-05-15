import type { OrderItem } from "../JewelrysPage/type";
import type { User } from "./type/type";

  
  export const initBasketFetchUser = async (): Promise<OrderItem[]> => {
    const res = await fetch('/api/admin/basket');
    const data = await res.json();
    console.log(data.basket);
    
    return data.basket;
  };
  
  export default initBasketFetchUser