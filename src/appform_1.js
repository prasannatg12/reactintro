import React ,{Component} from 'react';
import {Button} from 'reactstrap';

class Appform_1 extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            getData_Name : "",
            getData_Email : "",
            getData_Gender : "",
        }
    }

    componentWillMount()
    {
        console.log("Props loading");
        console.log(this.props.appArrayProp);
    }
    handleData_Name = (e) => {
        debugger
        let name = /^[A-Za-z]+$/;
        if(e.currentTarget.value.match(name))
        {
            this.setState({
                getData_Name : e.currentTarget.value
            
            })
        }
        else 
        {
            
            e.currentTarget.value = e.currentTarget.value.substring(0, e.currentTarget.value.length - 1);
            //alert('only characters allowed !!!')
            e.preventDefault();
        }

        
        console.log(e.currentTarget.value)
    }

    handleData_Email = (e) => {
        this.setState({
            getData_Email :  e.currentTarget.value
        })
        
        console.log(e.currentTarget.value)
    }

    handleData_Gender =(e)=>
    {
        debugger
        this.setState({
            getData_Gender : e.target.value
        })
        console.log(this.state.getData_Email + "<<<<<<<<<<<<<<<<<<GENDER")
        console.log(e.target.value)
    }
    render()
    {
        const frmStyle = {
            backgroundColor : "indigo",
            padding:"10px",
            color:"white",
            paddingBottom:"50px",
            paddingLeft:"100px",
        }

        const eleStyle = {
            padding:"2px"
        }
        const txtStyle = { 
        }
        const radStyle= {
            
        }

        

        return(
            <div>
                <form style={frmStyle} >
                <label> <b> Fill the Form </b></label> <br/><br/>

                <div class="ele" style={eleStyle}>
                <span style={eleStyle}> Name </span>
                    <input id="txtName" type = "text" ref="name" style={txtStyle} onChange={this.handleData_Name.bind(this)}/>
                </div>

                <div class="ele" style={eleStyle}>
                    <span style={eleStyle}> Email </span>
                    <input id="txtEmail" type = "email" ref="name" style={txtStyle} onChange={this.handleData_Email.bind(this)}/>
                </div>

                <div class="ele" style={eleStyle}>
                    <span style={eleStyle}> Gender </span>
                    <span style={radStyle} >
                    <label for="radGenderMale">
                    <input type = "radio" id="radGenderMale" value="Male" name="Gender" onChange={this.handleData_Gender.bind(this)}/> 
                     Male </label>
                    <label for="radGenderFemale">
                    <input type = "radio" id="radGenderFemale"  value="Female" name="Gender" onChange={this.handleData_Gender.bind(this)}/> 
                    Female</label>
                    </span>
                </div>

                <br/>
                
                <input type="submit" onClick={this.props.submitform.bind(this)} />

                </form>

            </div>
        )
    }
}

export default Appform_1;