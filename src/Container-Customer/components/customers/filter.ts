import { Itransaction, IinitialState, Iprop } from "../../types";

const total = (arr: Array<Itransaction>) => {
  let got = 0,
    give = 0;
  arr.map((element) => {
    element.type === "got" ? (got += element.amount) : (give += element.amount);
  });
  return got - give;
};

export interface Iprops {
  arr: Array<IinitialState>;
  value: string;
  filter: string;
  sort: string;
}

export const customOverview = (props: Iprops): Array<Iprop> => {
  const { arr, value, filter, sort } = props;
  let res: Array<Iprop> = [];
  let a: IinitialState[] = [];
  let isFilterApplyed = false;

  const arrCustomOverview = arr.map((element) => {
    const amount = total(element.transactions);
    return {
      name: element.name,
      total: amount,
    };
  });

  // if(!isFilterApplyed){
  if (filter === "All" && sort === "By Name" && !value) {
  } else {
    isFilterApplyed = true;
    a.length !== 0 ? (a = [...arr]) : null;
  }
  // }

  return res;
};

const searchCustomer = (array: Array<Iprop>, value: string) => {
  if (value) {
    const res: Array<Iprop> = [];
    array.map((val) => {
      if (val.name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())) {
        res.push(val);
      }
    });
    return res;
  }
};

const filterCustomer = (array: Array<Iprop>, value: string) => {
  if (value) {
    const res: Array<Iprop> = [];
    array.map((val) => {});
  }
};
