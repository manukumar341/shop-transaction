import styled from "styled-components";

interface IstyleProp {
  btn: "got" | "give";
}

export const GotGiveBtn = styled.button<IstyleProp>`
  hight: 20px;
  padding: 10px;
  border-radius: 8px;
  text: bold;
  border: none;
  background-color: ${(props) =>
    props.btn === "got" ? "lightgreen" : "#FFCCCB"};

  &:hover {
    background-color: ${(props) => (props.btn === "got" ? "green" : "red")};
  }
  position: sticky;
  width: 50%;
  bottom: 20px;
`;

export const NotSel = styled.b`
  justify-content: center;
  align-text: center;
  text-align: center;
`;
export const TitleDiv = styled.div`
  border: solid 2px black;
  margin: 1px;
  padding: 10px 10px;
  border-radius: 15px;
  color: black;
  background-color: lightgray;
`;

export const Entrie = styled.div`
  padding: 15px 1px;
  margin: 5px;
`;

export const AmountTitle = styled.b`
  float: right;
  padding: 0px 15px;
`;

export const Div = styled.div`
  width: 600px;
  height: 650px;
  justify-content: center;
  align-item: center;
  margin: 10px 150px;
  float: right;
`;

export const Got = styled.b`
  color: green;
  float: right;
  padding: 0px 35px;
`;

export const Give = styled.b`
  color: red;
  float: right;
  padding: 0px 35px;
`;
