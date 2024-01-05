import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function History(){
    const { transactions } = useContext(GlobalContext)
    console.log(transactions)
    return(
        <div className="historyMain">
        <h2 className="f500 underline">History</h2>
        <ul id="historyList">
            {transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}></Transaction>)}
        </ul>
        </div>
    )
}

export default History;