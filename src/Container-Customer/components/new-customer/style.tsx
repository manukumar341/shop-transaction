import styled from "styled-components";
interface IstyleProp {
  btn: "got" | "give";
}
export const Div = styled.div`
  width: 600px;
  height: 650px;
  justify-content: center;
  align-item: center;
  margin: 10px 150px;
  float: right;
`;
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
  width: 50%;
  bottom: 20px;
`;
