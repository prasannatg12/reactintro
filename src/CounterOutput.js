import React,{Component} from 'react';


class CntOUT extends Component
{

    constructor(props)
    {
        super(props);
    }
     
     
        render(){
            const style={
                backgroundColor : '#444',
                padding: 50,
                fontWeight : 'bold',
                color:'white',
                fontSize : 55,
                textAlign: 'center',
                position:'sticky',
                top:'0',
                
            }
            console.log("============> in counter output >>>> " + this.props.ctr)
        return(
            <div id="ctrOut" style={style}>
                COUNTER : {this.props.ctr}
            </div>
        )
    }
}

export default CntOUT;