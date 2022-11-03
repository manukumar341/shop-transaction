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

  const arrCustomOverview: Array<Iprop> = arr.map((element) => {
    const amount = total(element.transactions);
    return {
      name: element.name,
      total: amount,
    };
  });

  // if (!filter && !sort && !value) {
  //   res = arrCustomOverview;
  // }
  res.length===0?res=arrCustomOverview:null;
  value ? (res = searchCustomer(res, value)) : null;
    filter ? (res = filterCustomer(res, filter)) : null;
    sort ? (res = sortCustomer([...res], sort)) : null;
  

  return res;
};

const searchCustomer = (array: Array<Iprop>, value: string) => {
  
  const res: Array<Iprop> = [];
  array.map((val) => {
    if (val.name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())) {
      res.push(val);
    }
  });

  return [...res];
};

const filterCustomer = (array: Array<Iprop>, filterBy: string) => {
  let res: Array<Iprop> = [];
  array.map((val) => {
    if (filterBy === "You'll Get") {
      if (val.total > 0) {
        res.push(val);
      }
    }
    if (filterBy === "You'll Give") {
      if (val.total < 0) {
        res.push(val);
      }
    }
    if (filterBy === "Settled") {
      if (val.total === 0) {
        res.push(val);
      }
    }
    if (filterBy === "All") {
      res = array;
    }
  });
  return res;
};

const sortCustomer = (arr: Array<Iprop>, sortBy: string) => {
  const res:Array<Iprop>=arr
  console.log(sortBy);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      // if (res[j].total < res[j + 1].total) {
        if(findValue(sortBy,res[j].total,res[j+1].total)){
        var temp = res[j];
        res[j] = res[j + 1];
        res[j + 1] = temp;
      }
    }
  }
  return [...res];
};

const findValue=(sortBy:string,i:number,j:number)=>{
  if(sortBy==='low-high'){
    return i>j;
  }
  if(sortBy==='high-low'){
    return i<j;
  }
  // let isTrue=false
  // sortBy==='low-high'? isTrue= i>j : sortBy==='high-low' ? isTrue= i<j:null;
  // return isTrue;
  return false;
}