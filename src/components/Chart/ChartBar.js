import "./ChartBar.css"

function ChartBar(props){

    const {label, value} = props.expenseMonth;

    const chartBarHeight = Math.round(value / props.maxValue * 100) + "%"
    
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: chartBarHeight }} ></div>
            </div>
            <div className="chart-bar__label">{label}</div>  
        </div>
    )
}

export default ChartBar;