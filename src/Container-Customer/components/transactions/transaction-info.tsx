import { IinitialState } from "../../types";
import { Entrie,Got,Give } from "./style";

function TransactionInfo({obj}:{obj:IinitialState})  {
    const transactions=obj.transactions.map((element) => {
        let got, give;
        if (element.type === "got") {
          got = element.amount;
          give = "-";
        } else {
          give = element.amount;
          got = "-";
        }
        return (   
            <Entrie>
            <b>{element.date}</b> <Got>{got}</Got> <Give>{give}</Give>
            </Entrie>

        );
        })
    
    return (   
        <>
             {transactions}
             </>     
            )


  };

  export default TransactionInfo