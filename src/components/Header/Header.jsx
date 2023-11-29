import React from 'react';

function Header(props){

    return(
        <main>
            
            <h1>{props.title}</h1>
            <div> Check out my list ofs {props.items}</div>
        </main>
    )

}
export default Header;