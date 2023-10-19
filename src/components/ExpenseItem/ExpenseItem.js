// COMPONENT
import ExpenseDate from '../../components/ExpenseDate/ExpenseDate'

import "./ExpenseItem.css"


function ExpenseItem(props){

    // OBJECT DESTRUCTURING
    const { title, amount, date } = props.expense
    
    return(
        <div className="expense-item">
            <div>
                <ExpenseDate date={date}/>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;