// export interface Idata {
//   name: string;
//   id: string;
//   transactions: Array<Itransaction>;
// }
export interface Iprop {
  name: string;
  total: number;
}

export interface Itransaction {
  date: string;
  amount: number;
  type: "got" | "give";
}

export interface IinitialState {
  name: string;
  id: string;
  transactions: Itransaction[];
}

export interface Ifetch {
  loading: boolean;
  data: Array<IinitialState>;
  error: string;
}

// export interface Istate {
//   onclickCustomer: string;
//   customers: IinitialState[];
// }

// export interface Ipayload {
//   name: string;
//   id: string;
//   transaction: Itransaction[];
// }

export interface IhandlerFunc {
  handleOnclickCustomer: (id: string) => void;
}
