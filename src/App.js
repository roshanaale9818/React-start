// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import React from "react";
const App=()=> {
    // const expenses = [
    //     { id: "el1", title: 'Car Insurance', amount: 298.9, date: new Date(2022, 2, 28) },
    //     { id: "el2", title: 'Toilet paper', amount: 298.9, date: new Date(2022, 2, 28) },
    //     { id: "el3", title: 'Car tyres', amount: 298.9, date: new Date(2022, 2, 28) },
    //     { id: "el4", title: 'Out Dinner Insurance', amount: 298.9, date: new Date(2021, 2, 28) }
    // ]

    return (<div>
        <h2> Let 's get started!</h2><p> This is also visibile </p>
        {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem> */}
        <Expenses></Expenses>
    </div>


    );
}

export default App;