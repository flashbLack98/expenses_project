import ChartBar from "./ChartBar"
import "./Chart.css"

function Chart(props){

    const expensesValue = props.monthsChart.map((el) => el.value)
    
    const maxValue = Math.max(...expensesValue)    
    
    return(
        <div className="chart">
            {
                props.monthsChart.map((singleData)=>{
                    return(
                        <ChartBar key={singleData.label} expenseMonth={singleData} maxValue={maxValue} />
                    )
                })
            }

        </div>
    )
}

export default Chart;