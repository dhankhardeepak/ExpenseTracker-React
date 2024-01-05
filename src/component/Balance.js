import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    
  const {transactions} = useContext(GlobalContext)
  const amount = transactions.map((amount) => amount.amount)
  const balance = amount.reduce((acc, inc) => acc+inc, 0);
    return(
        <div className="balance">
            <p>Your Balance</p>
            <p className="remBalance">${balance}</p>
        </div>
    )
}

export default Balance;