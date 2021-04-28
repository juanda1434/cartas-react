import React from 'react';

const style = {
    grupo:{
        margin: "auto",
    width: "90%"
    }
}

const Grupo = ({children})=>{
    return (
        <div style={style.grupo} children={children}/>
    );
}

export default Grupo;