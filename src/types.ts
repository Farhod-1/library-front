

export interface UserData {
  accessToken: string;
  id: number;
  username: string;
}
export interface Book {
  name: string;
  author: string;
  numberOfBooks: number;
  status: string;
}
export interface Customer {
  username: string;
  password: string;
  phoneNumber: string;
}

export interface Student {
  id: number;
  name: string;
  username: string;
}
export interface AttachingBook {
  customerId: string;
  bookId: string;
  status: boolean;
  number: number;   
  startting_date: string;
  ending_date: string;
}
