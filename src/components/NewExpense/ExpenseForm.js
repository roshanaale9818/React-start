import React,{useState} from "react";
// import './NewExpense.css';
import './ExpenseForm.css'
const ExpenseForm = (props)=>{
   const [enteredTitle,setEnteredTitle]= useState('');
    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const titleChangeHandler = (event) =>{
        console.log("handling changes",event.target.value);
        setEnteredTitle(event.target.value)
        // setUserInput(
        //    {
        //     ...userInput,
        //     enteredTitle:event.target.value
        //    }
        // )
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle : event.target.value}
        // })
    }
    const [enteredAmount,setEnteredAmount]= useState('');
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput(
        //     {
        //      ...userInput,
        //      enteredAmount:event.target.value
        //     }
        //  )
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredAmount : event.target.value}
        // })
    }
    const [enteredDate,setEnteredDate]= useState('');
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
        // setUserInput(
        //     {
        //      ...userInput,
        //      enteredDate:event.target.value
        //     }
        //  )
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredDate : event.target.value}
        // })
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        console.log("SUbmit");
        const expenseData = {
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        }
        console.log("Expense Data",expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredDate("");
        setEnteredAmount("");
    }
    const onCancelHandler = ()=>{
        props.onCancelSubmit(false);
    }
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} onChange={amountChangeHandler}  min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-29" max="2022-12-31" />
            </div>
        </div>
        {/* <div className="new-expense__actions">
           
        </div> */}
        <div className="new-expense__actions">
            {/* cancel button for canceling  */}
        <button type="button" onClick={onCancelHandler}> Cancel</button>
            <button type="submit"> Add Expense</button>
        </div>
    </form>)
}
export default ExpenseForm;