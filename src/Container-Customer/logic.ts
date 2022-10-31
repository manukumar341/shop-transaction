import { Itransaction, IinitialState, Iprop } from "./types";

const total = (arr: Array<Itransaction>) => {
  let got = 0,
    give = 0;
  arr.map((element) => {
    element.type === "got" ? (got += element.amount) : (give += element.amount);
  });
  return got - give;
};

export const customOverview = (
  arr: Array<IinitialState>,
  value: string
): Array<Iprop> => {
  console.log(value);

  if (value !== "") {
    const res = filterArray(arr, value);
    console.log(res);
  }

  const arrCustomOverview: Array<Iprop> = arr.map((element) => {
    console.log(value);
    const amount = total(element.transactions);
    return {
      name: element.name,
      total: amount,
    };
  });
  return arrCustomOverview;
};

const filterArray = (
  arr?: Array<IinitialState>,
  val?: string,
  sort?: string,
  filter?: string
) => {
  let filteredArr = [];
  const r = arr?.map((element) => {
    if (element.name === val) {
      return element;
    }
  });
  return r;
};
