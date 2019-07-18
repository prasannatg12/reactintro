import React,{Component} from 'react';
import {Footer} from 'react-materialize';

export default class flipkartfoooter extends Component{
    constructor(props)
    {
        super(props)
        this.state = {

        }
    }

    render()
    {
        const styleFooter = {
            
            backgroundColor:"royalblue",
            padding:"10px",             
            color:"white",
            marginTop:"25px",
            marginBottom:"-125px",
            width:"101%",
            bottom:"0",
            position:"relative",    
            
            // //marginBottom:"0px" ,
            fontWeight:"bold",
            
            textAlign:"center",            
            // top:"0",
            // position:"relative",
            
 
        }
        return(
            <div style={styleFooter}>                        
                © Flipkart India, 2019                            
            </div>
        )
    }
}