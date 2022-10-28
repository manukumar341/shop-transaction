import { Itransaction,Ipayload, IinitialState, Iprop } from "./types";

 const total = (arr: Array<Itransaction>) => {
    let got = 0, give = 0;
    arr.map((element) => {
      element.type === 'got' ? got += element.amount : give += element.amount;
    })
    return got - give
  }



  export const customOverview =(arr:Array<IinitialState>):Array<Iprop>=>{ 
    const arrCustomOverview:Array<Iprop>=arr.map((element) => {
    const amount = total(element.transactions)
    return (
      {
        name: element.name,
        total: amount
      }
    )
  });
  return arrCustomOverview;
};