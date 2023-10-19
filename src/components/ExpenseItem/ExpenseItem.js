import { useState } from 'react'

// COMPONENT
import ExpensesContainer from '../../components/ExpensesContainer/ExpensesContainer'
import ExpenseDate from '../../components/ExpenseDate/ExpenseDate'

import "./ExpenseItem.css"


function ExpenseItem(props){

    // OBJECT DESTRUCTURING
    const { title, amount, date } = props.expense

    const [newTitle, setNewTitle] = useState(title);

    function clickHandler(){
        setNewTitle("Updated title")
    }


    
    return(
        <ExpensesContainer className="expense-item">
            <div>
                <ExpenseDate date={date}/>
            </div>
            <div className="expense-item__description">
                <h2>{newTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}> Change Title! </button>
        </ExpensesContainer>
    )
}

export default ExpenseItem;