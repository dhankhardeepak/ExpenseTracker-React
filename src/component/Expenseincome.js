import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const Expenseincome = () => {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map((amount) => amount.amount)
    const income = amount.filter((income) => income > 0).reduce((inc,acc) => inc+acc, 0)
    const expense = amount.filter((expense) => expense < 0).reduce((inc, acc) => inc+acc, 0)
    return(
        <div className="summaryPartition">
            <div className="group text-center">
                <p className="f500">INCOME</p>
                <p className="f300 income" id="incomeTxt">${income}</p>
            </div>
            <span className="partition"></span>
            <div className="group text-center">
                <p className="f500">EXPENSE</p>
                <p className="f300 expense" id="expenseTxt">${Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default Expenseincome;