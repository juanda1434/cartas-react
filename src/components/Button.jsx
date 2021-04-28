import React from 'react';

const style = {
    button:{
        padding: "8px",
    marginTop: "4%",
    marginBottom:"4%"
    }
}
const Button= ({children,accion})=>{
    return (
        <button onClick={accion} style={style.button} children={children} />
    );
}

export default Button;