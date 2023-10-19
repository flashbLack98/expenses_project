import ExpenseItem from "../../components/ExpenseItem/ExpenseItem"
import ExpensesContainer from "../ExpensesContainer/ExpensesContainer";

import "./Expenses.css"

function Expenses(props){
    return(
        <ExpensesContainer className="expenses">
            <ExpenseItem expense={props.expenses[0]}/>
            <ExpenseItem expense={props.expenses[1]}/>
            <ExpenseItem expense={props.expenses[2]}/>
            <ExpenseItem expense={props.expenses[3]}/>
        </ExpensesContainer>
    )
}

export default Expenses;