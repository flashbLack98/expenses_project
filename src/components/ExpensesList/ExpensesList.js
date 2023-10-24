import ExpenseItem from "../../components/ExpenseItem/ExpenseItem"
import "./ExpensesList.css"

function ExpensesList(props){
    const filteredExpenses = props.filteredExpenses
    
    if(filteredExpenses.length === 0){
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }

    return(
        filteredExpenses.map((expense)=>{
            return(
                <ExpenseItem expense={expense} key={expense.id} /> 
            )
        })  
    )
}

export default ExpensesList;