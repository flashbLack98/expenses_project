import "./ChartBar.css"

function ChartBar(props){

    const {label, value} = props.expenseMonth;

    const chartBarHeight = props.maxValue > 0 ? Math.round(value / props.maxValue * 100) + "%" : "0%"
    
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