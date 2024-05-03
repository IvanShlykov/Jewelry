export type User={
    name:string;
    email:string;
    phone: string;
    password:string;
}

export type UserClient = User['name'] & {id:'number'}
export type RegistrationUser = User & {cpassword:'string'}



export type State = {
    user: null | UserClient;
    error:string| undefined
}
export type AuthForm =  Pick<User, "email" | "password" >