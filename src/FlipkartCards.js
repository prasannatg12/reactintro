import React,{Component} from 'react';
import {Row, Col, Card, Button, CardColumns, CardDeck, CardGroup} from 'react-bootstrap';
import { whileStatement } from '@babel/types';
import { isAbsolute } from 'path';
import '../styles/newstyle_001.css';

export default class flipkartcards extends Component{
    constructor(props){
        super(props)
        this.state = {
            cards :[],
        }

    }

    clickCards = (e) => {
        //alert("clicked on cards" + e);
        console.log(e.target);

    }
    componentWillMount(){
        this.setState({
            cards : [
                {
                    Image : require('../images/Download-Online-Shopping-PNG-Clipart.png'),
                    Title : "Products ", 
                    Description : "Flipkart brings to you an exclusive range of quality products at jaw-dropping prices . Take a look at Flipkart SmartBuy products", 
                },
                {
                    Image : require('../images/step-three-monitor-optimize-services-images-png-600_600.png'),
                    Title : "Service ", 
                    Description : "Our ever-growing logistics network ensures faster delivery of your products across India. Your customers get great service and you get better ratings.", 
                },
                {
                    Image : require('../images/Support-PNG-Transparent-Picture.png'),
                    Title : "Customer Support ", 
                    Description : "Visit Flipkart Help Center for all your Queries and Issues with Orders, Tracking, Returns, Payment, Cancellation etc. Get hassle free solutions to all your asks", 
                },
                {
                    Image : require('../images/about_icon_png_12645.png'),
                    Title : "About ", 
                    Description : "Flipkart Pvt Ltd. is an e-commerce company based in Bengaluru, India. Founded by Sachin Bansal and Binny Bansal in 2007", 
                },
                {
                    Image : require('../images/about_icon_png_12645.png'),
                    Title : "In Future ", 
                    Description : "Flipkart Pvt Ltd. is an e-commerce company based in Bengaluru, India. Founded by Sachin Bansal and Binny Bansal in 2007", 
                },
                {
                    Image : require('../images/about_icon_png_12645.png'),
                    Title : "In Future ", 
                    Description : "Flipkart Pvt Ltd. is an e-commerce company based in Bengaluru, India. Founded by Sachin Bansal and Binny Bansal in 2007", 
                },
                {
                    Image : require('../images/about_icon_png_12645.png'),
                    Title : "In Future ", 
                    Description : "Flipkart Pvt Ltd. is an e-commerce company based in Bengaluru, India. Founded by Sachin Bansal and Binny Bansal in 2007", 
                },
                {
                    Image : require('../images/about_icon_png_12645.png'),
                    Title : "In Future ", 
                    Description : "Flipkart Pvt Ltd. is an e-commerce company based in Bengaluru, India. Founded by Sachin Bansal and Binny Bansal in 2007", 
                },
                {
                    Image : require('../images/about_icon_png_12645.png'),
                    Title : "In Future ", 
                    Description : "Flipkart Pvt Ltd. is an e-commerce company based in Bengaluru, India. Founded by Sachin Bansal and Binny Bansal in 2007", 
                },
                
            ]
        })
    }
    render(){
 

        const cardDivStyle = {
             display:"flex",
             color:"royalblue", 
            width:"101%",
            overflowX:"auto",
            
             //marginTop:"80px",
             //maxWidth : "100%",
            // backgroundColor: "black",
            // color:"gray",
        }

        const cardcolStyle = {
            margin : "10px", 
            //width:"100%",
              
            
        }

        const cardStyle = {
            marginTop :"20px",
            marginBottom :"20px",
            boxShadow : "0px 0px 20px 1px royalblue",
            
            width:"150rem", //////
            // maxWidth:"240.5px",
            backgroundColor:"white", 
            border:"1px solid royalblue",
            borderRadius:"10px",
        }

        const cardImageStyle ={
            width :"50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop : "25px",
            marginBottom : "25px",
            height:"120px",

            
        }

        const styleTitle = {
            fontWeight:"bold",
            fontFamily :"calibri"
        }

        const styleGo = {
            fontFamily :"agency fb",
            backgroundColor :"royalblue",
            color:"white",
            fontWeight:"bold",
            padding:"10px",
            width:"50px",
            height:"50px",            
            borderRadius:"25px",
            fontSize:"20px", 
            margin:"10px",            
            // /paddingRight:"20px",
            textAlign:"center",
            float:"right",
            
            bottom:"50",
            right:"0",
            //position:"absolute",
            
        }
        const card = this.state.cards.map(c => {
            return(
                
                        <Card style={cardStyle} id="cardstyle" >
                            <Card.Img src={c.Image} style={cardImageStyle} />
                            <Card.Body>
                                
                                <Card.Title style={styleTitle}>{c.Title}</Card.Title>
                                <Card.Text>{c.Description}</Card.Text>
                            </Card.Body> 
                            <div style={styleGo} onClick={this.clickCards.bind(this)}> > </div>
                        </Card>     

            )
        })

        return(
                <div style={cardDivStyle}>
                    <CardDeck style={cardcolStyle} id="carddeck">
                        {card}                
                    </CardDeck>            
                </div>
            )
        }
    }

        