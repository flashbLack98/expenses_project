import { useState } from "react";
import ExpenseItem from "../../components/ExpenseItem/ExpenseItem"
import ExpensesContainer from "../ExpensesContainer/ExpensesContainer";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

import "./Expenses.css"

function Expenses(props){

    const [yearToFilter, setYearToFilter] = useState("2021")

    function yearChangeHandler(selectedYear){
        setYearToFilter(selectedYear);
    }

    const filterdExpenses = props.expenses.filter((expense) => {
        return (
            expense.date.getUTCFullYear() == yearToFilter
        )
    })
    
    return(
        <div>
            <ExpensesContainer className="expenses">
                <ExpensesFilter defaultYear={yearToFilter} onYearChange={yearChangeHandler} />

                 {/* print dynamically the expenseItem */}
                {
                    filterdExpenses.map((expense)=>{
                        return(
                            <ExpenseItem expense={expense} key={expense.id} /> 
                        )
                    })
                }
                
            </ExpensesContainer>
        </div>
    )
}

export default Expenses;