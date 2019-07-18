import React,{Component} from 'react'
import AmazonItems from '../components/amazonItems'
import AmazonHeader from '../components/amazonHeader'
import Amazon from '../containers/amazon'
const aHeader = require('../components/amazonHeader')
export default class AmazonProducts extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            arrProducts :[],
            SearchedProduct : "",
        }
    }

    handleAddMobile = () => 
    {
        console.log("mobile device Showing")
    }

    componentWillUpdate(){
        console.log(this.props.searchedElement)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SEARCHED ELEMENT")
        console.log(this.props.searchedElement)
    }
    componentWillMount()
    {
        console.log(this.props.getNewProduct)
        console.log(">>>>>>>>>>>> from amazon product")
        console.log(this.props.MobileProduct)
        this.setState({
            arrProducts :  this.state.arrProducts.push('test')
        })
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< array new product")
        console.log(this.state.arrProducts)
    }
    render()
    {
        console.log("aHeader")
        console.log(this.props.searchedElement)
        const ProductStyle = {
            margin:"15px",
            marginTop :"60px",
            
            lineHeight : "20px",
        }

        const styleavail =
        { fontWeight:"bold", }
        return(
            <div style={ProductStyle}>
                <div> Product you are searching... {this.state.arrProducts}
                   <dd>  </dd> 
                </div>
                <br/>
                <div style={styleavail}> Available Products </div>
                <AmazonItems />
                
            </div>
        )
    }
}