import React, { useCallback, useMemo, useState } from "react";
import { customOverview, Iprops } from "./filter-required-data/filter";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Iprop } from "../../types";
import CustomersInfo from "./customers-info";
import Components from "../lookup-component/components";
import {
  AddBtn,
  TitleDiv,
  Amount,
  Container,
} from "./style";
import { totalAmount } from "./filter-required-data/total-amount";
import AddNewEntry from "../transactions/add-new-entry";
import NewCustomer from "./new-customer/new-customer";
import { showAddCustomerComp } from "../../store/flyout-slices";

export interface ICustomers {
  // arrCustomOverview: Array<Iprop>;
  // handleNewCustomer(): void;
  handleOnclickCustomer(id: string): void;
}

const Customers = (props: ICustomers) => {
  const { handleOnclickCustomer } = props;
  const dispatch = useAppDispatch()
  const store = useAppSelector((state) => state);
  const { searchValue, filterValue, sortValue } = store.lookups;
  const { data, error, loading } = store.customer;
  const { addCustomer } = store.flyout;
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
  const netBalance = totalAmount(arrCustomOverview)
  useCallback(() => {
    setCustomArr([...arrCustomOverview]);
  }, [searchValue]);


  const handleNewCustomer = () => {
    dispatch(showAddCustomerComp())
  };

  return (
    <>
      <Container>
        {netBalance}
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
        <AddBtn onClick={handleNewCustomer}>
          <b> + Add Customer</b>
        </AddBtn>
      </Container>
    </>
  );
};
export default React.memo(Customers);
// function dispatch(arg0: any) {
//   throw new Error("Function not implemented.");
// }

// function showAddCustomerComp(): any {
//   throw new Error("Function not implemented.");
// }

