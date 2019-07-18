//const r = require("react")
import React, {Component} from 'react';

export default class AmazonSideBar extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            filterUSB : ["1 port", "2 port", "3 port", "4 port"],
            varUSB : "",
            filterScreenSize : ["20\"","32\"","42\"","55\"","65\"","85\""],
            varScreenSize :"",

        }
    }

    fnPorts = (e) => {
        this.setState({
            varUSB : e.target.value
        })
    }
    fnScreenSize = (e) =>
    {
        this.setState({
            varScreenSize : e.target.value
        })

    }
    render()
    {
        const styleSideDiv = {
            border:"1px solid #ccc",
            margin:"0px",   
            marginTop : "-10px",
            width : "20%",
            height: "700px",
            float:"left",
        }
        const filterstyle = { 
            backgroundColor:"#eee",
            width:"100%"
        }
        const partstyle={
            padding:"10px",
        }
        const const_FilterUSB = this.state.filterUSB.map(usb =>{
            return(
                <div>
                    <input type="radio" value={usb} name="usb" onClick={this.fnPorts.bind(this)}/> {usb}
                </div>
            )
        })

        const const_FilterScreenSize = this.state.filterScreenSize.map(size => {
            return(
                <div>
                   <input type="radio" id="size" value={size} name="size" onClick={this.fnScreenSize.bind(this)}/> {size} 
                </div>
            )
        })


        return(

            <div style={styleSideDiv}>
                <div style={filterstyle}>Filter </div>
                <div style={partstyle}>
                    <b> Ports : </b> {this.state.varUSB}
                    {const_FilterUSB}
                </div>
                <div style={partstyle}>
                    <b> Screensize : </b> {this.state.varScreenSize}
                    {const_FilterScreenSize}
                </div>
            </div>
        )
    }
}

