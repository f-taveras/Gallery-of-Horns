import React from "react";

function Footer(props){
    return(
       <footer>
        <div>
            {props.content}
        </div>
       </footer>
    );
};

export default Footer;