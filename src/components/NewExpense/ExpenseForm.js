import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props){

    /* ------------- INIZIO FORM ---------------- */

    //! Metodo sconsigliato
    /* const [inputTitle, setInputTitle] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");

    function titleChangeHandler(event){
        setInputAmount(event.target.value);
    }

    function amountChangeHandler(event){
        console.log("amount");
        setInputTitle(event.target.value);
    }

    function dateChangeHandler(event){
        console.log("date");
        setInputDate(event.target.value);
    } */


    //* Metodo consigliato
    const [userInput, setUserInput] = useState({
        inputTitle: "",
        inputAmount: "",
        inputDate: ""
    })

    function titleChangeHandler(event){
       setUserInput((prevState)=>{ 
        return({
            ...prevState,
            inputTitle : event.target.value 
        })
       });
    }

    function amountChangeHandler(event){
       setUserInput((prevState)=>{
        return({
            ...prevState,
            inputAmount : event.target.value 
        })
       });
    }

    function dateChangeHandler(event){
       setUserInput((prevState)=>{
        return({
            ...prevState,
            inputDate : event.target.value 
        })
       });
    }

    function submitHandler(event){
        event.preventDefault();

        const newExpenseData = {
            title : userInput.inputTitle,
            amount : userInput.inputAmount,
            date : new Date(userInput.inputDate)
        }

        props.onAddExpense(newExpenseData) // emit -> the data has passed from child to parent
        
        setUserInput({
            inputTitle: '',
            inputAmount: '',
            inputDate: ''
        })

        hideFormHandler()
    }

    /* ------------- FINE FORM ---------------- */

    const [ showForm, setShowForm ] = useState(false)

    function showFormHandler(){
        setShowForm(true)
    }
    function hideFormHandler(){
        setShowForm(false)
    }
    

    if(!showForm){
        return <button onClick={showFormHandler} >Add expense</button>
    }


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={userInput.inputTitle} type="text" onChange={titleChangeHandler} />
                </div>   
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={userInput.inputAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>   
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={userInput.inputDate} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>   
            </div>   

            <div className="new-expense__actions">
                <button onClick={hideFormHandler} >Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;