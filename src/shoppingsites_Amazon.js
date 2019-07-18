import React,{Component} from 'react';
import { MDBContainer, MDBIframe } from "mdbreact";

export default class shoppingsites_Amazon extends Component
{
    constructor(props)
    {
        super(props)
        
    }


    render()
    {

        
        return(
            <div>

                <MDBContainer>
                     <MDBIframe src="https://amazon.co.in" />
                     {/* <MDBIframe src="https://www.youtube.com/embed/v64KOxKVLVg"/> */}
                </MDBContainer>   


                <object type="text/html" data="https://www.amazon.in" width="100%" height="500px" style={{overflow:"auto",border:"5px ridge blue"}}>
                </object>

                {/* <object type="text/html" data="https://www.w3schools.com/tags/att_iframe_srcdoc.asp" width="100%" height="500px" style={{overflow:"auto",border:"5px ridge blue"}}></object> */}
                <object type="text/html" data="http://validator.w3.org/" width="100%" height="500px" style={{overflow:"auto",border:"5px ridge blue"}}>
                </object>
                
                {/* <iframe  src="https://www.w3schools.com"></iframe> */}
{/* <iframe id="amazon" src="https://www.w3schools.com" allowtransparency="true" frameborder="1" scrolling="yes" width="100%" height="900px"></iframe> */}



{/* <iframe name="Framename" src="http://www.amazon.in" width="400" height="200" frameborder="0" scrolling="auto" class="frame-area">
</iframe> */}

{/* <blockquote class="embedly-card"><h4><a href="http://www.amazon.in/">Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in</a></h4><p>Amazon.in: Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free Shipping & Cash on Delivery Available.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script> */}


                    
                 
                
            </div> /*width="100%" height="100%"/>*/
            // <div>
                
            //     {/* <a href="http://www.amazon.in"> Amazon </a> */}
            // </div>
        )
    }
}