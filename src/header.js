import React from 'react';
import logo from '../logo.svg';
import Radium from 'radium';

function Header(props)
{
  const style={
    color:'indigo',
    float: 'right',
    margin:'30px 20px',
    padding:'5px',
    fontSize: '15px',
    borderRadius: '5px',
     border: '2px solid #ccc',
    //boxShadow: '1px 1px 5px 2px  white',
    backgroundColor: 'white',
    userSelect: 'none',
  }

  style[':hover'] ={
    textDecoration : 'underline',
    cursor : 'pointer',

  };
  return (
    
    <div id="Header">      
    <img id="imglogo"  src={logo}  className="App-logo"></img>
    
     {props.title}

    <div id="LoginButton" style={style} > Login </div>
    <div id='choosetheme'> Change Theme </div>
    </div>
  );
}
export default Radium(Header);
