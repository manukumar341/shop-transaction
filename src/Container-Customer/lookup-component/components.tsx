import Search from "./search";
import Filterby from "./filter-by";
import Sortby from "./sort-by";
import styled from "styled-components";

function Components() {
  return (
    <Div>
      <Search />
      <Filterby />
      <Sortby />
    </Div>
  );
}

export default Components;
const Div = styled.div`
  display: inline-flex;
  background-color: lightblue;
  align-items: center;
  justify-content: center;
  margin-left: 70px;
`;
