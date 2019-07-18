import React from 'react';

const Nav = (props) => {
    return(
<div id="HeaderNav">     
          <div id="NavMenu" className="IntrotoJS" onClick={props.navclick} > Intro to React JS </div>
          <div id="NavMenu" className="CreateJSEnviriomnent" onClick={props.navclick}> Create React JS Environment </div>
          <div id="NavMenu" className="ConceptsinJS" onClick={props.navclick}> Important Concepts in React JS </div>
          <div id="NavMenu" className="StartQuiz" onClick={props.navclick}> Start Quiz !!! </div>  
      </div>
    )      
};
export default Nav;

/*class Nav extends React.Component{
  

  Navigate(){
      alert('working');   
  } 
   

  render(){
    return (    
      
    );
  }
}
*/

