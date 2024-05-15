import type { OrderItem } from "../JewelrysPage/type";


  
  export const initOrderFetchUser = async (): Promise<OrderItem[]> => {
    const res = await fetch('/api/user/orders');
    const data = await res.json();;
    
    return data.orderUser;
  };
  
  export default initOrderFetchUser