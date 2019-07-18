import React ,{Component} from 'react';


class Appform_2 extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {

        }
    }

    render()
    {
        const divStyle ={
            margin : "0px auto",
            width:"auto",
            padding:"50px",
            backgroundColor:"lightblue"
        }

        return(
            <div style={divStyle}>
                <label>Name : </label> <b> {this.props.nameProps}  </b><br />
                <label>Email : </label> <b> {this.props.emailProps} </b><br />
                <label>Name : </label> <b> {this.props.genderProps} </b> <br />
            </div>
        )
    }
}

export default Appform_2;