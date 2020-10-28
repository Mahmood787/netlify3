import { type } from 'os';
import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
//Initial State
const initialState:IState = {
    transactions:[
        
    ]
}
//Create context
export const GlobalContext = createContext <IState | any>(initialState)
//provider component
export const GlobalProvider =({children}:any)=>{
    const [state, dispatch] = useReducer(AppReducer,initialState)
    function deleteTransaction(id:number){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }
    //Add Transaction
    function addTransaction(transaction:IState){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={
            {transactions:state.transactions,
            deleteTransaction ,
            addTransaction  
            }}>
                {children}
        </GlobalContext.Provider>
    )
}
