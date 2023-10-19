import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(){

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
       setUserInput({
        ...userInput,
        inputTitle : event.target.value 
       });
    }

    function amountChangeHandler(event){
        console.log("amount");
       setUserInput({
        ...userInput,
        inputAmount : event.target.value 
       });
    }

    function dateChangeHandler(event){
        console.log("date");
       setUserInput({
        ...userInput,
        inputDate : event.target.value 
       });
    }


    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>   
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>   
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>   
            </div>   

            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;