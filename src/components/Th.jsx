import React from 'react';

const style = {
    th: {
        padding: "15px",
        border: "1px solid #ddd",
        textAlign: "left"
    }
}
const Th = ({children})=>{
    return (
        <th style={style.th} children={children}/>
    )
}

export default Th;