import type { Application, ApplicationWithOutID } from './type';

export const addCollectionFetch = async (obj:ApplicationWithOutID): Promise<Application> => {
    const res = await fetch('/api/application', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(obj)
    });
  
    const data = await res.json()
    return data
  }
  export default addCollectionFetch