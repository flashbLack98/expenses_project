import ChartBar from "./ChartBar"
import "./Chart.css"

function Chart(props){
    return(
        <div className="chart">
            {
                props.monthsChart.map((singleData)=>{
                    return(
                        <ChartBar key={singleData.label} expenseMonth={singleData} maxValue={props.maxValue} />
                    )
                })
            }

        </div>
    )
}

export default Chart;