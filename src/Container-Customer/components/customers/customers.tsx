import { useCallback, useMemo, useState } from "react";
import { customOverview, Iprops } from "./filter";
import { useAppSelector } from "../../store/hook";
import { Iprop } from "../../types";
import CustomersInfo from "./customers-info";
import Components from "../lookup-component/components";
import {
  AddBtn,
  TitleDiv,
  Amount,
  Container,
  TotalGot,
  TotalDiv,
} from "./style";
import React from "react";

export interface ICustomers {
  // arrCustomOverview: Array<Iprop>;
  handleOnclickCustomer(id: string): void;
}

const Customers = (props: ICustomers) => {
  const { handleOnclickCustomer } = props;
  const store = useAppSelector((state) => state);
  const { searchValue, filterValue, sortValue } = store.lookups;
  const { data, error, loading } = store.customer;
  const [customArr, setCustomArr] = useState<Array<Iprop>>([]);
  const args: Iprops = {
    arr: data,
    value: searchValue,
    filter: filterValue,
    sort: sortValue,
  };

  const arrCustomOverview: Iprop[] = useMemo(
    () => customOverview(args),
    [args.arr, args.value, args.filter, args.sort]
  );

  const childProp = customArr.length > 0 ? customArr : arrCustomOverview;

  useCallback(() => {
    setCustomArr([...arrCustomOverview]);
  }, [searchValue]);

  let give = 0,
    got = 0;
  arrCustomOverview.map((element) => {
    const total = element.total;
    if (total > 0) {
      got += total;
    } else {
      give += total;
    }
  });

  return (
    <>
      <Container>
        <TotalDiv>
          <b>
            You'll Give: ₹ {Math.abs(give)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              color="green"
              fill="currentColor"
              className="bi bi-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
              />
            </svg>{" "}
          </b>
          <TotalGot>
            You'll Get: ₹ {got}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              color="red"
              fill="currentColor"
              className="bi bi-arrow-down-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z"
              />
            </svg>
          </TotalGot>
        </TotalDiv>
        <Components />
        <TitleDiv>
          <b>Name</b>
          <Amount total={""}>Total</Amount>
        </TitleDiv>
        {loading && <b>Loading...</b>}
        {!loading && error && <b>Error...</b>}
        {!loading && data.length && (
          <CustomersInfo
            arr={childProp}
            handleOnclickCustomer={handleOnclickCustomer}
          />
        )}
        <AddBtn>
          <b> + Add Customer</b>
        </AddBtn>
      </Container>
    </>
  );
};
export default React.memo(Customers);
