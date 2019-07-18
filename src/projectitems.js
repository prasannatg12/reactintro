import React ,{Component} from 'react';
import reducer from '../store/reducer';


class Projectitems extends Component
{
    
    constructor(props){
        super(props)
        {

        }
    }

    deleteProject = (id) => {
//        console.log(' delete project')
            this.props.onDeleteItem(id);
    }

    ShowDetails = (id) => 
    {
        this.props.onShowDetails(id);
    }
    render(){
        
        const stylecard = {
          backgroundColor : "#111",
          borderRadius:"5px",
          width:"15%", 
          height:"60px",
          color:"white",
          textAlign:"Center",
          lineHeight:"50px",
          float:"left", 
          padding:"15px",
          margin:"10px",
          boxShadow:"2px 2px 10px #111",
        }
        const stylespan ={
            
          display: "inline-block", 
          lineHeight:"normal",
          verticalAlign:"middle",   
        }
        const styleclose={
             textDecoration:"none",
             color:"red",
             backgroundColor:"orange",
             fontWeight:"bold",
             fontSize:"20px",
             marginTop:"-30px",
             marginRight:"-30px",
             height:"45px",
             width:"45px",
             float:"right",
             borderRadius:"45px",
        }

        
        return(  
            <div style={stylecard} onClick={this.ShowDetails.bind(this, this.props.prj.id)}>
                <a href="#" style={styleclose} onClick={this.deleteProject.bind(this, this.props.prj.id)}>X</a>
                <span style = {stylespan}>                    
               <strong> {this.props.prj.title} </strong> <br/> {this.props.prj.category} 
               <br/>
               {this.props.prj.location}
               </span>
            </div>
            
        );
    }
}

export default Projectitems;