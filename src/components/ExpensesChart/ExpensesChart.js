import Chart from "../Chart/Chart"

function ExpensesChart(props){

    const filteredExpenses = props.filteredExpenses

    const expensesChart = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0},
    ]

    filteredExpenses.forEach(el => {
        const indexMonth = el.date.getMonth()

        // sommo il costo delle spese fatte nello stesso mese e lo assegno come value nell'array expensesChart
        expensesChart[indexMonth].value += el.amount
    });
    

    return <Chart monthsChart={expensesChart} />
}

export default ExpensesChart;