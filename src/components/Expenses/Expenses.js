import { useState } from "react";
import ExpensesContainer from "../ExpensesContainer/ExpensesContainer";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

import "./Expenses.css"

function Expenses(props){

    const [yearToFilter, setYearToFilter] = useState("2021")

    function yearChangeHandler(selectedYear){
        setYearToFilter(selectedYear);
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return (
            expense.date.getUTCFullYear() == yearToFilter
        )
    })
    
    return(
        <div>
            <ExpensesContainer className="expenses">
                <ExpensesFilter defaultYear={yearToFilter} onYearChange={yearChangeHandler} />

                <ExpensesList filteredExpenses={filteredExpenses} />
                
            </ExpensesContainer>
        </div>
    )
}

export default Expenses;