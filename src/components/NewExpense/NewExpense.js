import "./NewExpense.css"

import ExpenseForm from "./ExpenseForm"

function NewExpense(props){

    function addExpenseHandler(newExpense){
        props.onAddNewExpense(newExpense) // emit -> the data has passed from child to parent
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={addExpenseHandler} />
        </div>
    )
}

export default NewExpense;