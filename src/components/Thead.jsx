import React from 'react';

const style = {
    thead: {
        display: "block",
        width: "100%"
    }
}
const Thead = ({children})=>{
    return (
        <thead style={style.thead} children={children}/>
    )
}

export default Thead;