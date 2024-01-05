import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionList(){
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const {transactions, addTransaction} = useContext(GlobalContext)
    const id = transactions.length === 0 ? 0 : transactions[transactions.length - 1].id + 1;
    return(
        <>
        <div>
            <h2 className="f500 underline">Add New Transaction</h2>
        </div>
        <form>
            <div className="form-group">
                <label htmlFor="textInput">Text</label>
                <input type="text" placeholder="Enter Text..." value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="amountInput">Amount</label>
                <input type="number" placeholder="Enter Amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div> 
            <button className="addTransaction" onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                addTransaction({id:id, text:text, amount:parseInt(amount)});
                setText('')
                setAmount(0)
            }}>Add Transaction</button> 
        </form>
        </>
    )
}