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
import { giveIcon, gotIcon } from "./icon";

export interface ICustomers {
  // arrCustomOverview: Array<Iprop>;
  handleNewCustomer(): void;
  handleOnclickCustomer(id: string): void;
}

const Customers = (props: ICustomers) => {
  const { handleOnclickCustomer, handleNewCustomer } = props;
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
const gotImg:JSX.Element=gotIcon();
const giveImg:JSX.Element=giveIcon();
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
            {giveImg}
           {" "}
          </b>
          <AddBtn onClick={handleNewCustomer}>
            <b> + Add Customer</b>
          </AddBtn>
          <TotalGot>
            You'll Get: ₹ {got}
           {gotImg}
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
      </Container>
    </>
  );
};
export default React.memo(Customers);
