import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
import Card from '../UI/Card';
import React,{useState} from "react";

const  ExpenseItem=(props)=> {
    // const expenseDate = new Date(2022,2,28);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.67;
    // use state returns firstValue and a function to change the state 
    // call only inside the component function  only


    console.log("props here",props);
    const [title,setTitle]= useState(props.title); // it is a react hook
    // returns first value and function to change value;


    console.log("PROPS", props);
    // let title = props.title;
    const onChangeTitle = ()=>{
        console.log("On Chnage clicked",props.title);
    
        setTitle("ROSHAN");
    }
    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={onChangeTitle}>Change Title</button> */}
        </Card>
        </li>);
}
// const onChangeTitle = (name)=>{
//     console.log("button is clicked", name);
// }
export default ExpenseItem;