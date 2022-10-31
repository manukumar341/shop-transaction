import { Iprop } from "../../types";
import { Div, Amount } from "./style";

interface ICustomersInfo {
  arr: Array<Iprop>;
  handleOnclickCustomer(id: string): void;
}

interface IstyleProp {
  total: number | string;
}
function CustomersInfo(props: ICustomersInfo) {
  const { arr, handleOnclickCustomer } = props;
  return (
    <>
      {arr.map((element, index) => (
        <Div
          key={index}
          id={element.name}
          onClick={() => handleOnclickCustomer(element.name)}
        >
          <b>{element.name}</b>
          <Amount total={element.total}> {element.total} </Amount>
        </Div>
      ))}
    </>
  );
}

export default CustomersInfo;
