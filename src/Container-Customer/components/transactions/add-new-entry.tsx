import React from "react";

function AddNewEntry({amount,date}:{amount:number,date:string}) {


  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    amount = parseInt(e.target.value);
  };
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    date = e.target.value;
  };
  return (
    <div>
      <input type="number" onChange={handleAmount} />
      <input type='date' onChange={handleDate}/>
    </div>
  );
}

export default AddNewEntry;
function useAppDispatch() {
  throw new Error("Function not implemented.");
}

