import React from 'react';

function Intro() {
    return (
        <div id="IntroMain">
            <div id="IntroHeader"> Intro to React JS !!! </div>
            <div id="IntroContent">
                <dd>React JS is a javascript library, maintained by Facebook. </dd>
                <br />
                <dd>
                    React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.
                </dd>
                <br />
                <dd>
                    ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition −
                <br />
                    React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.
                </dd>
            </div>
        </div>
    );
}

export default Intro;