import Search from "./search";
import { ComponentsDiv } from "./style";
import Sortby from "./sort-by";
import Filterby from "./filter-by";

function Components() {
  return (
    <ComponentsDiv>
      <Search />
      <Filterby />
      <Sortby />
    </ComponentsDiv>
  );
}

export default Components;
