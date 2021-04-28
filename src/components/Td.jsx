import React from 'react';

const style = {
    td: {
        padding: "15px",
        border: "1px solid #ddd",
        textAlign: "left"
    }
}
const Td = ({children})=>{
    return (
        <td style={style.td} children={children}/>
    )
}
export default Td;