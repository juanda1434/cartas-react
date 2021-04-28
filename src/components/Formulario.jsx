import React from 'react';


const style = {
    form: {
        display: "block",
        border: "1px solid black",
    }
}

const Formulario = ({ children }) => {
    return (
        <form style={style.form} children={children} />
    );

}

export default Formulario;