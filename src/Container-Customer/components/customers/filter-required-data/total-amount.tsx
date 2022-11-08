import { Iprop } from "../../../types";
import { TotalDiv, TotalGot } from "../style";
import { giveIcon, gotIcon } from "./icon";



export const totalAmount = (arr: Iprop[]) => {
    const gotImg: JSX.Element = gotIcon();
    const giveImg: JSX.Element = giveIcon();
    let give = 0,
        got = 0;
    arr.map((element) => {
        const total = element.total;
        if (total > 0) {
            got += total;
        } else {
            give += total;
        }
    })

    return (
        <TotalDiv>
            <b>
                You'll Give: ₹ {Math.abs(give)}
                {giveImg}
                {" "}
            </b>

            <TotalGot>
                You'll Get: ₹ {got}
                {gotImg}
            </TotalGot>
        </TotalDiv>)
}