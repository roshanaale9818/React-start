import './Card.css';
import React from "react";

const Card = (props)=> {
    console.log("THIS IS PROPS IN CARD",props)
    const classes = "card "+props.className;
    //children for building wrapper class
    return (<div className={classes}>{props.children}</div>)
}
export default Card;