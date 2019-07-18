import React from 'react';
import Radium from 'radium';
import '../components/CounterInput.css'
import {Input} from 'reactstrap';

const CounterInput = (props) => {
    //console.log('PROPS : ' + props.enteredValue);
    const outStyle ={
        width :"100%",
        textAlign:"center",
        margin:"50px auto",
        }
    
    const inStyle ={
        padding : "20px",
        margin:"5px",
        width:"20%",
        height:"100px",
        //overflowX:"auto",
        fontSize:"20px",
        backgroundColor:"white",
        border: "1px solid #bbb",
        borderRadius : "10px",
        boxShadow:"4px 4px 4px #bbb"
    }

    inStyle[':hover']={
        cursor : "pointer",
        backgroundColor:"#bbb",
        border:"1px solid black inset"
    };

    const txt={
        padding: "8px",
        marginLeft: "10px",
        height: "40px",
        width:"150px",
        fontSize:"20px",
        fontWeight: "bold",
        color:"#666"
    }

    const btn = {
        backgroundColor : "green",
        border: "0px",
        padding:"8px",
        color:"white",
        marginLeft : "10px",
        

    }

    const styleReset={
        fontSize:"20px",
        backgroundColor : "white",
        border:"1px solid #666",
        padding:"5px",
        marginTop:"20px",
        width:"20%",
        marginBottom:"20px",
    }

    const valueStyle = {
        color:"#555",
    }
    return (
        <div style={outStyle} >
            Enter Value 
            <input type="number" id="txtvalue" style={txt} onChange={props.submitValue}></input>
            {/* <Input type="button" value="SUBMIT" style={btn}  onClick={props.submitValue} /> */}
            <br /><br />
            Value submitted is <span style={valueStyle}> <b>{props.enteredValue}</b> </span>
            <br />
            <button type="reset" onClick={props.btnReset} id="btnReset"  style={styleReset}> RESET </button>

            <hr/>
            <br/><br/>
            <button id="btnCounter" style={inStyle} key="1" onClick={props.incrementOne}> Increment by 1 <br/><br/></button>
            <button id="btnCounter" style={inStyle} key="2" onClick={props.decrementOne}> Decrement by 1 <br/><br/> </button>
            <button id="btnCounter" style={inStyle} key="3" onClick={props.incrementValue}> Increment by value <br/>
            {props.enteredValue != "" ? props.enteredValue : "0"}
             </button>
            <button id="btnCounter" style={inStyle} key="4" onClick={props.decrementValue}> Decrement by value <br/>
            {props.enteredValue != "" ? props.enteredValue : "0"}
            </button>
        </div>
    )
}

export default Radium(CounterInput);