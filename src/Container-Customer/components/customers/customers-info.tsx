import { Div, Amount } from "./style";
import { ICustomersInfo } from "./type";

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
