import { React } from 'react';
import './ChartBar.css';
const ChartBar = props =>{
    let barFillHeight = '0%';
    // console.log("Props in chartBar", props)
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue)* 100)+'%';
    }
 return ( <div className='chart-bar'>
 <div className='chart-bar__inner'>
    {/* style here receives a object   */}
 <div className='chart-bar__fill' style={{
    height:barFillHeight
 }}>
    {/* we can use backgroundColor such camelCase for the style property in style object  */}

 </div>
 </div>
 <div className='chart-bar__label'>{props.label}</div>
</div>);
}
export default ChartBar;