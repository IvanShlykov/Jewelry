import type { Location } from "./type/type";

  
export const initLocationFetch = async (): Promise<Location[]> => {
    const res = await fetch('/api/location');
    const data = await res.json();
    console.log(data.location);
    
    return data.location;
  };
  export default initLocationFetch