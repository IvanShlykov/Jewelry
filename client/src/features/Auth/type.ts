export type User={
    email:string;
    password:string;
    name:string;
}

export type UserClient = User['name'] & {id:'number'}
export type RegistrationUser = User & [cpassword:'string']



export type State = {
    user: null | UserClient;
    error:string| undefined
}