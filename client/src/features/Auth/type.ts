export type User={
    id: number;
    name:string;
    email:string;
    phone: string;
    password:string;
}


export type UserClient = {
    id:number
    name:string;
    email:string;
    phone: string;
    isAdmin: boolean
}
export type UserUpdate = {
    name:string;
    email:string;
    phone: string;
}

export type RegistrationUser = {
    name: string;
    email: string;
    phone:string;
    password:string;
}

export type State = {
    user:  null | UserClient;
    error:string| undefined
}
export type AuthForm =  Pick<User, "email" | "password" >