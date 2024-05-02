import type { User, UserClient } from "./type"

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

  export const checkedFetch = async ():Promise<UserClient>=>{
const res = await fetch('/api/auth/checked')
if(res.ok){
  const data = await res.json()
  return data
}
  const data = await res.json()
    throw data.message
  }