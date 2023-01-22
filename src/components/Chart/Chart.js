import { React } from 'react';
import ChartBar from './ChartBar';
import './Chart.css';


const Chart = (props)=>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
return <div className='chart'>
{props.dataPoints.map(x=> <ChartBar key={x.label} value={x.value} 
maxValue={totalMaximum} label={x.label}/>)}
</div>
}
export default Chart;
