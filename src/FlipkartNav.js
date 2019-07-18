import {Container, Row, Col} from 'react-bootstrap';
import LOGO  from '../images/dqOEkud.png';
import React,{Component} from 'react';
import BackgroundImage from '../images/33464.jpg'


export default class flipkartnav extends Component
{
    constructor(props){
        super(props)
        this.clickMenu = this.clickMenu.bind(this)
    }

    clickMenu(){
        alert("clicked");
        console.log("click menu button");
    }
    render(){
        const rowStyle = {
            display : "flex",
            maxWidth : "auto",
            backgroundColor:"royalblue",
            padding : "10px",
        }
        const logoStyle = {
            backgroundColor:"royalblue",
            display:"inline",
            float:"left",
            height:"40%",
        }
        const centerStyle = { 
                backgroundColor:"royalblue",
                textAlign:"center",
                margin:"0px auto",
                color:"white",
                fontSize:"20px",
                fontWeight:"bold",
                fontFamily:"Calibri",
               // lineHeight:"50px",
                

        }
        const sideStyle = { 
            backgroundColor:"royalblue",
            display:"inline",
            textAlign:"right",
            float:"right",
            color:"gold",
            fontWeight:"bold",
            fontFamily :"calibri",
            fontSize:"20px",
            //width:"34%",
            //lineHeight:"50px",
        }

        const styleBG = {
             width:"100%",
             height:"100%",
            backgroundAttachment : "fixed",
            zIndex:"-5",            
            top : "0",
            position:"fixed",
        }

        const imgStyle={
            height : "30%",            
            width : "30%",            
            // verticalAlign:"middle",

            //height: "20px",
        //lineHeight: "20px",
        //padding: "15px",
        //border:"1px solid #666",
        }
        return(
            <div>
            
                <Row>
                    <Col>
                        <img src={BackgroundImage} style={styleBG}/>
                    </Col>
                </Row>
                



                <Row style={rowStyle}>
                    <Col style={logoStyle}> <img src={LOGO} style={imgStyle} />  </Col>
                    <Col style={centerStyle}> Amazing Offers </Col>
                    <Col style={sideStyle}  onClick={this.clickMenu}> MENU ≡ </Col>
                </Row>
            </div>
        )
    }

}