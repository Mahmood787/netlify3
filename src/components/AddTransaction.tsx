import React,{useState,useContext, ChangeEvent} from 'react'
import {GlobalContext} from '../context/GlobalContext'


export const AddTransaction = () => {

    const [text,setText]=useState('');
    const [amount, setAmount]=useState("0");
    const {addTransaction}= useContext(GlobalContext)
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      const newTransaction ={
        id: Math.floor(Math.random()*10000),
        text,
        amount:+amount
      }
      addTransaction(newTransaction)
    }
    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} 
            onChange={(e)=>setText(e.target.value)} 
            
            placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="text" value={amount} onChange={(e:ChangeEvent<HTMLInputElement>)=>
              setAmount( e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
        </>
    )
}
