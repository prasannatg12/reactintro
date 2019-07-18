import React from 'react'; 

const fntechnologies = (props) => {
    return(
        <div id="divTech">
            <p id="techtitle">{props.title}</p>
            <p id="techcontent">{props.content}</p>
        </div>
    )
}

export default fntechnologies;