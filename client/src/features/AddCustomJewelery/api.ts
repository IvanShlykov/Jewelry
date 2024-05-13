import type { Application } from './type';

export const addCollectionFetch = async (formData: FormData): Promise<Application> => {
    const res = await fetch('/api/application', {
      method: 'post',
      body:formData
    });
    console.log(formData);
    
if (res.ok) {
    const data = await res.json();
    return data.application;
  }
  const data = await res.json();
  throw data.message;
};
  export default addCollectionFetch
