
import type { Order } from "./type/type";


  
  export const initOrderFetchUser = async (): Promise<Order[]> => {
    
    const res = await fetch('/api/user/orders');
    const data = await res.json();;
    
    return data.orderUser;
  };
  
  
  export default initOrderFetchUser