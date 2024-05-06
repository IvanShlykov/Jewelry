export type Application ={
    id:number;
    description: string;
    photo: string;
    userID:number
  }
  
  export type ApplicationWithOutID =Omit<Application,'id'>

  export type State = {
    jewelrys: Application[];
    error: string | undefined;
  }