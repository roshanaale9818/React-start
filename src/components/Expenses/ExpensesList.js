import './ExpensesList.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) => {
    // let expensesContent = <p>No expenses found.</p>;
    // { props.items.length === 0 && <p>No expenses found</p> }
    if (props.items.length === 0) {
       return (<h2 className='expenses-list__fallback'>Found no expenses</h2>)
    }
    return (<ul className='expenses-list'>
        { props.items.map(x =>
            <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date} />)}
    </ul>);
}

export default ExpensesList;