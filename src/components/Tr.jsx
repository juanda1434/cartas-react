import React from "react";

const style = {
    tr:{
        display: "grid",
    gridTemplateColumns: "1fr 4fr 1fr",
    gridTemplateRows: "minmax(1f,auto)"
    }
}

const  Tr = ({children})=>{
    return (
        <tr style={style.tr}>{children}</tr>
    )
}

export default Tr;