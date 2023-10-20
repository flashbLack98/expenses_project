import { useState } from "react";
import ExpenseItem from "../../components/ExpenseItem/ExpenseItem"
import ExpensesContainer from "../ExpensesContainer/ExpensesContainer";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css"

function Expenses(props){

    const [yearToFilter, setYearToFilter] = useState('2019')

    function yearChangeHandler(selectedYear){
        setYearToFilter(selectedYear);
        console.log(yearToFilter);
    }
    
    return(
        <div>
            <ExpensesContainer className="expenses">
                <ExpensesFilter defaultYear={yearToFilter} onYearChange={yearChangeHandler} />
                <ExpenseItem expense={props.expenses[0]}/>
                <ExpenseItem expense={props.expenses[1]}/>
                <ExpenseItem expense={props.expenses[2]}/>
                <ExpenseItem expense={props.expenses[3]}/>
            </ExpensesContainer>
        </div>
    )
}

export default Expenses;