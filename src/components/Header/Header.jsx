import React from 'react';

function Header(props){

    return(
        <main style= {{textAlign: "center"}}>
            
            <h1>{props.title}</h1>
            <div> Check out my list ofs {props.items}</div>
        </main>
    )

}
export default Header;