
export type Location = {
    city: string;
    adress: string;
    phone: string;
    time: string;
    img: string;
    id: number
}

export type State = {
    location: Location[];
    error: string | undefined;
  }