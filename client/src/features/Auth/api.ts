import type { AuthForm, User, UserClient, UserUpdate } from "./type"

export const registrationFetch = async(obj:User):Promise<UserClient>=>{

    const res = await  fetch('/api/auth/registration',{
        method:'post',
        headers:{'content-type':"application/json"},
        body:JSON.stringify(obj)
    })

if(res.ok){
  const data = await res.json()
  return data.user
}
  const data = await res.json()
    throw data.message
  }

  export const authorizationFetch = async (obj:AuthForm): Promise<UserClient> => {

  
    const res = await fetch('/api/auth/authorization', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj),
     
    });
    console.log(res.ok);
    if(res.ok){
      const data = await res.json()
      return data.user
    }
      const data = await res.json()
        throw  data.message
      };
      export const fetchLogOut = async (): Promise<{ message: string }> => {
        const res = await fetch('/api/auth/logout');
        const data: { message: string } = await res.json();
        return data;
      };

  export const checkedFetch = async ():Promise<UserClient>=>{
const res = await fetch('/api/auth/checked')
if(res.ok){
  const data = await res.json()
  return data
}
  const data = await res.json()
    throw data.message
  }
  export const changeUserFetch = async (obj: UserUpdate): Promise<UserClient> => {
    const res = await fetch(`/api/user/update`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(obj),
    });
  
    if (res.ok) {
      const data = await res.json();
      console.log(data.user);
      
      return data.user;
    }
    const data = await res.json();
    throw data.message;
  };
