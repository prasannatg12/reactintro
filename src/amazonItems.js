
import React,{Component} from 'react';
import AmazonHeader from '../components/amazonHeader'
import appleX from '../images/appleX.jpg'
import { whileStatement } from '@babel/types';

export default class AmazonItems extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            TotalProducts :{},
            MobileProduct : [],
            TVProduct : []
        }

    }
    componentWillMount()
    {
        this.setState({
            MobileProduct : [
                {
                    Image : require('../images/appleX.jpg'),
                    Name : "Apple X ", 
                    Category : "Mobile Phone", 
                    Price : "89500", 
                    Specification :" Apple Specification"
                },
                {
                    Image : require('../images/samsungs9.jpg'),
                    Name : "Samsung S9", 
                    Category : "Mobile Phone",
                    Price : "67000",
                    Specification : "Samsung Specification"
                },
                {
                    Image : require('../images/41flNfpUo1L._AC_SY200_.jpg'),
                    Name : "SanDisk Memory Card", 
                    Category : "Accessories",
                    Price : "860",
                    Specification : "64GB"
                },
            ],
            TVProduct : [
                {                    
                    Name : "Philips P565RGR36",
                    Category : "Television",
                    Price : "48350",
                    Specification : "65\""
                },
                {
                    Name : "Sony SN45GR211",
                    Category : "Television",
                    Price : "86890",
                    Specification : "45\"",
                }
            ]
        })
    }

    render(){
        const imgStyle={height:"120px", padding:"10px"}
        const styleCards  = { border:"1px solid #ccc",height :"325px",  verticalAlign:"bottom", width : "15%", float:"left", margin:"5px", borderRadius:"5px"}
        const styleheader = { textAlign:"center", fontWeight :"bold", fontSize :"20px", padding:"5px"}
        const styleCategory = { textAlign:"Center", fontFamily:"arial", fontSize:"12px"}
        const stylePrice = {textAlign:"center", fontFamily:"arial", fontSize : "15px", color:"orange", fontWeight:"bold"}
        const styleBuy = {backgroundColor:"darkgreen", border:"0px", color:"white", padding:"8px", textAlign:"center", width:"30%"}
        const mobileLists = this.state.MobileProduct.map(t => {
            return (
                <div style={styleCards}> 
                
                    <center> <img style={imgStyle} src={t.Image} /> </center>
                    <div style={styleheader}> {t.Name} </div>
                    <div style={styleCategory}> {t.Category} </div>
                    <div style={stylePrice}> Price :  {' '} {t.Price} </div>
                    <div style={styleCategory}> {t.Specification} </div>
                    <br/>
                    <center> <button style={styleBuy} value="BUY">BUY</button> </center>
                </div>
              
            )      
          })
        const tvList =  this.state.TVProduct.map(t => {
            return (
                <div style={styleCards}>
                    <div style={styleheader}> {t.Name} </div>
                    <div style={styleCategory}> {t.Category} </div>
                    <div style={stylePrice}> Price :  {' '} {t.Price} </div>
                </div>
              
            )      
          })
        return(
            <div>
                <br/>
                {mobileLists}
                {tvList}  
            </div>
        )
    }
}


