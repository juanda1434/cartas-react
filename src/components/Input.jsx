import React from "react";
import Carta from "./Carta";

const style = {
    input: {
        width: "100%",
        height: "25px"
    }
}

const Input = ({onChange,value,type}) => {
    return (
        <input type={type} onChange={(e)=>{ onChange(e.target.value)}} style={style.input} value={value}/>
    );
}

export default Input;