import styled from "styled-components";
interface IstyleProp {
  btn: "got" | "give";
}
// export const Div = styled.div`
//   width: 600px;
//   height: 650px;
//   justify-content: center;
//   align-item: center;
//   margin: 0px 0px;
//   float: right;
// `;

export const Div = styled.div`
height:100px;
width:100px;
background:#fff;
position: absolute;
right:0;
background-color:white;
z-index:10;
animation:flyout 1s;
@keyframes flyout {
    0% {
      opacity: 0%;
      transform: translateX(400px);
    }

    100% {
      opacity: 100%;
      transform: translate(0);
    }
  
 }
 `
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
