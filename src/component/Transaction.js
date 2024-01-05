import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const itemBorder = transaction.amount < 0 ? "minus" : "add";
    const sign = transaction.amount < 0 ? "-" : "+"
    return (
            <li className={"list-item " + itemBorder}>
                <span className="item-desc">{transaction.text}</span>
                <span className="amount">{sign}${Math.abs(transaction.amount)}</span>
                <span className="deleteItem" onClick={() => deleteTransaction(transaction.id)}>x</span>
            </li>
    ) 
}

export default Transaction