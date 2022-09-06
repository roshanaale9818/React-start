import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{
   
    const saveExpenseDataHandler = (data)=>{

        const newdata = {
            ...data,
            id:Math.random().toString()
        }
        console.log("IN PARENT COMPONENT", newdata);
        props.onAddExpense(data);
    }
    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>)
}
export default NewExpense;