import styled from "styled-components";

export const AddBtn = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: blue;
  &:hover {
    background-color: lightblue;
  }
  position: sticky;
  width: 50%;
  bottom: 30px;
  margin-left: 25%;
`;

export const TotalDiv = styled.div`
  border-top: solid 1px black;
  border-bottom: solid 1px black;
  padding: 15px;
  margin: 0% 0%;
`;

export const TotalGot = styled.b`
  margin-left: 140px;
  padding-left: 100px;
  border-left: 1px solid gray;
`;

export const TitleDiv = styled.div`
  border: solid 2px black;
  margin: 1px;
  padding: 10px 10px;
  border-radius: 15px;
  color: black;
  background-color: lightgray;
`;

export const Container = styled.div`
  width: 600px;
  height: 650px;
  margin: 10px 100px;
  position: absolute;
`;

interface IstyleProp {
  total: number | string;
}

export const Amount = styled.b<IstyleProp>`
  float: right;
  color: ${(props) =>
    props.total > 0 ? "green" : props.total < 0 ? "red" : "black"};
`;

export const Div = styled.div`
  background-color: white;
  border: none;
  margin: 1px;
  padding: 20px 10px;
  &:hover {
    margin: 3px;
    background-color: lightgray;
  }
`;

export const Name = styled.h2`
  float: left;
  text-aline: left;
`;
