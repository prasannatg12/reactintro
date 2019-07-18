import React ,{Component} from 'react';
import Projectitems from './projectitems'

class Projectmain extends Component
{
    
    constructor(props){
        super(props)
        {
            this.State = {
                arrfromJSON : [{title : "text"}],

            }
        }
    }

    deleteProject = (id) =>
    {
        this.props.onDelete(id);
    }

    showDetails = (id) => {
        this.props.onShowDetails(id);
    }

    getchangeData = (id) => {
        
    }
    componentWillMount(){
        // console.log(this.props.todosprop);
        // console.log("calling in componentwillmount in projectmain.js");
        // this.setState({
        //     arrfromJSON : this.props.todosprop
        // })
        //  console.log(this.state.arrfromJSON);
        //  console.log("called in componentwillmount in projectmain.js");
         
         
    }
    render(){

        let projectItemsList;
        // console.log(this.state);
        // console.log(this.props.todosprop)
        // console.log(this.props.todosprop[10],'test')

 
        projectItemsList = this.props.arrProjects.map(prj => {
            return(
                <Projectitems onDeleteItem={this.deleteProject.bind(this)} key={prj.title} prj = {prj}
                onShowDetails={this.showDetails.bind(this)}
                onchange = {this.getchangeData.bind(this)} valShowid = {this.props.showid}/>
            )
        })
        return(
            <div>
                {projectItemsList}
            </div>
        );
    }
}

export default Projectmain;