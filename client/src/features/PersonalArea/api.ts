import type { User } from "./type/type";
  
export const initUserFetch = async (): Promise<User> => {
    const res = await fetch('/api/user');
    const data = await res.json();
    return data.user;
  };
  export default initUserFetch

  export const changeMetallFetch = async (obj: User): Promise<User> => {
    const res = await fetch(`/api/admin/metall/${obj.id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(obj),
    });
  
    if (res.ok) {
      const data = await res.json();
      return data.user;
    }
    const data = await res.json();
    throw data.message;
  };