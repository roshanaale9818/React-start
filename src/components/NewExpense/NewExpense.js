import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{
    //state for showing forms and init value is false
    const [isEditing,setEditing] = useState(false);
   
    const saveExpenseDataHandler = (data)=>{

        const newdata = {
            ...data,
            id:Math.floor(Math.random() * (100 - 1 + 1)) + 1
            // id:Math.random().toString()
        }
        console.log("IN PARENT COMPONENT", newdata);
        props.onAddExpense(data);
    }
    const startEditingHandler = ()=>{
        setEditing(true);
    }
    const onCancelHandler = ()=>{
        setEditing(false);
    }
    return (<div className="new-expense">
        {!isEditing &&<button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelSubmit={onCancelHandler}></ExpenseForm>}
    </div>)
}
export default NewExpense;