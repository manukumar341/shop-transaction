import { useContext } from "react";
import styled from "styled-components";
import { context } from "../customer-container";
import { IhandlerFunc, Iprop } from "../types";

interface ICustomersInfo {
  arr: Array<Iprop>;
  handleOnclickCustomer(id: string): void;
}

interface IstyleProp {
  total: number | string;
}
// const { handleOnclickCustomer } = useContext(context) as IhandlerFunc;
function CustomersInfo(props: ICustomersInfo) {
  //   console.log(handleOnclickCustomer);
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
          <Amount total={element.total}>{element.total}</Amount>
        </Div>
      ))}
    </>
  );
}

export default CustomersInfo;

const Div = styled.div`
  background-color: white;
  border: none;
  margin: 1px;
  padding: 20px 10px;
  &:hover {
    margin: 3px;
    background-color: lightgray;
  }
`;

const Amount = styled.b<IstyleProp>`
  float: right;
  color: ${(props) =>
    props.total > 0 ? "green" : props.total < 0 ? "red" : "gray"};
`;
const Name = styled.h2`
  float: left;
  text-aline: left;
`;
