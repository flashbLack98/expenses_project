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

                 {/* print dynamically the expenseItem */}
                {
                    props.expenses.map((expense)=>{
                        return(
                            <ExpenseItem expense={expense}/> 
                        )
                    })
                }
                
            </ExpensesContainer>
        </div>
    )
}

export default Expenses;