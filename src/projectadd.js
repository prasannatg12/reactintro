import React, {Component} from 'react';
import uuid from 'uuid';

class Projectadd extends Component 
{
    constructor(props){
        super(props);
        this.state = {
            projectNew : {}
        }
    }

    static defaultProps ={ Categories: ['10', '12', 'BE', 'ME', 'Ph.D', 'Arts & Science']}

    componentWillMount(){
        console.log(">projectadd : > "+ this.props.valShowid)
    }
    handleChange = (e) => {
        console.log("in handlechange1")
        
    }
    handleSubmit = (e) => {

        if(this.refs.prjTitle.value === ''){
            alert('title is required')
        }
        else{
            this.setState({
                projectNew : {
                    id: uuid.v4(),
                    title : this.refs.prjTitle.value,
                    category : this.refs.prjCategory.value,
                    location : this.refs.prjLocation.value,
                }
            }, function(){
                this.props.projectadd(this.state.projectNew);
                //console.log(this.state);
            });
            
        }
        e.preventDefault();
    }
     
    
    render(){
        const styleheader={
            backgroundColor:"#111",
            color:"white",
            margin:"-10px",
            padding:"20px 50px",
            lineHeight:"30px",            
            
            marginBottom:"20px",

            
        }
        const btnSubmit={
            backgroundColor:"white",
            border:"1px solid #1111",
            padding:"5px",
            margin:"10px auto",
            
        }
        let CategoryItem = this.props.Categories.map(c =>{
            return <option key={c} value={c}>{c}</option>
        })
        return(
            <div style={styleheader}>
                <h3>Add Candidate  </h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    Enter Candidate Name{' '} {' '}
                    <input type="text" ref="prjTitle" id="txtprjTitle" onChange={this.handleChange.bind(this)}/>
                    {'   '}{'   '}{'   '}<br/>
                    Choose Qualification {' '} 
                    <select ref="prjCategory" id="selCategory">
                        {CategoryItem}
                    </select> {' '}
                    <br/>
                    Location <input type="text" ref="prjLocation" id="txtprjLocation" /> <br/>
                    <input type="submit" value="SUBMIT" style={btnSubmit}/> <br/> 
                </form>
            </div>
        )
    }
}

export default Projectadd;