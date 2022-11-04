import { Iprop } from "../../types";

export interface ICustomersInfo {
    arr: Array<Iprop>;
    handleOnclickCustomer(id: string): void;
  }
  
  export interface IstyleProp {
    total: number | string;
  }