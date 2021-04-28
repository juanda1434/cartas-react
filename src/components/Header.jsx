import React from 'react';

const style= {
    header:{
        
    },
    h1:{
        padding:"50px",
        textAlign:"left"            
    }
}

const Header = ()=>{
    return (
        <header>
            <h1 style={style.h1} children={"SHOWDOWN"}/>
        </header>
    )
}

export default Header;
