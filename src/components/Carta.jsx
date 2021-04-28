import React from 'react';



// Definicion del componente Carta
const Carta = ({url,onClick,clase})=>{    

    return (
        <img className={clase} onClick={onClick} src={url} />
    );


}

export default Carta;