import React from 'react';

const style={
    label:{
        display: "block",
        marginTop: "10px",
        fontSize: "17px"
      }
}

const Label= ({forHtml,children})=>{
    return (
        <label style={style.label}  htmlFor={forHtml}>{children}</label>
    );
}


export default Label;