import "./ExpensesContainer.css"

function ExpensesContainer(props){

    // oltre alla classe card(impostata da noi) vengono inserite anche le classi passati come props dal componente padre
    const classes = "expensesContainer " + props.className;
    
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default ExpensesContainer;