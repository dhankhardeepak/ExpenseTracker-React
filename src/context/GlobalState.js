import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer'

//initial State
let initialState = {
    transactions : localStorage.getItem("transactions") !== null ? JSON.parse(localStorage.getItem("transactions")) : []
}

//Create Context
export const GlobalContext = createContext(initialState)

//Provider
export const GlobalProvider = ({ children }) => {
    // eslint-disable-next-line
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(state.transactions))
    })

    //actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return (<GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>)
}

