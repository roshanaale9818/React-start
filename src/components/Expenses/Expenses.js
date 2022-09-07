import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React,{useState} from "react";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    // const expenses = [
    //     { id: "el1", title: 'Car Insurance', amount: 298.9, date: new Date(2022, 2, 28) },
    //     { id: "el2", title: 'Toilet paper', amount: 298.9, date: new Date(2022, 2, 28) },
    //     { id: "el3", title: 'Car tyres', amount: 298.9, date: new Date(2022, 2, 28) },
    //     { id: "el4", title: 'Out Dinner Insurance', amount: 298.9, date: new Date(2021, 2, 28) }
    // ]
    const [filteredYear,setFilteredYear]= useState('2020')
    const expenses = props.data;
    const filterChangeHandler = (data)=>{
        console.log("SELECTED LAYER",data);
        setFilteredYear(data)
    }
    // console.log("aayo ha")
    return (
        // <div className='expenses'>
        //     <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        //     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        //     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        //     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
        // </div>
        <div>
          

            <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
            </Card>
        </div>
    )
}
export default Expenses;