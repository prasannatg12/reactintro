import React,{Component} from 'react'
import logo from '../images/Amazon logo.PNG'
import srch from  '../images/Search_1231231.png'
// import {Button} from 'reactstrap'

export default class AmazonHeader extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            searchElement : "",
        }
    }

    searchProducts = (e) => 
    {
        
        this.setState({
            searchElement : e.target.value
        })
        console.log("IN HEADER"); 

        //console.log(;
        this.props.getValue(e.target.value);
    }
    render(){
        const headerDiv={
            position:"absolute",
            width:"100%",
            backgroundColor : "rgb(20,20,50)",
            top:"0",
            position:"fixed",
        }
        const logoHeader = {
            
            position:"absolute",
            height:"50px",
            
        }

        
        const divSearchContent = {
            marginLeft :"125px",
            float:"left",
            top:"0",  
            width:"80%",
            height:"50px",

        }
        const txtSearchProducts = {
            //position:"absolute",
            marginTop:"10px",
            padding:"8px",
            borderRadius:"3px",
            fontSize:"15px",
            fontWeight:"bold",
            border:"0px",
            width:"60%"
        }

        const btnSearchProducts= {
            backgroundColor:"transparent",
            borderRadius:"150px",
            position:"absolute",
            float:"right",
            border:"0px",
            height:"50px"
            
        }
        const btnLogoSearchProducts = {
            
             //position:"absolute",
             borderRadius:"120px",
             //height:"25px",
             width:"25px",
            border:"2px solid gray",
            marginTop:"5px",
             
        }

        const btnSignin = {
            position:"fixed",
            float:"right",
            fontSize:"18px",
            backgroundColor :"transparent",
            color:"white",
            border:"0px",
            padding:"14px",
            
        }


        return(
            <div style={headerDiv}>
                <img src={logo} style={logoHeader} alt="logo" />
                <div style={divSearchContent}>
                <input type="text" style={txtSearchProducts} onChange={this.searchProducts.bind(this)}/>               
                {/* <Button style={btnSearchProducts}>
                    <img src={srch} alt="logo"  style={btnLogoSearchProducts}/>  
                </Button>                 */}
                </div>
                {/* <Button value="Sign in" style={btnSignin}> Sign in</Button> */}

             </div>
        )
    }
}