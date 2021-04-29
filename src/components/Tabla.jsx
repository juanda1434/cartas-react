import React from 'react';
import Th from './Th';
import Td from './Td';
import Tbody from "./Tbody";
import Thead from "./Thead";
import Tr from "./Tr";
const style = {
    tabla: {
        display: "block",
        borderCollapse: "collapse",
        border: "black",
    }
    
}
//Genera componentes Tr dependiendo de las cartas que se le pasen y ordena las cartas
const getTr = (cartas) => {
    return cartas.slice().sort((c1,c2)=>c1.valor>c2.valor?-1:1).map(c => 
        <Tr key={c.numero}><Td children={c.numero}/><Td children={c.carta}/><Td children={c.valor}/></Tr>
    );
}
 const Tabla = ({ cartas }) => {
    return (
        <table style={style.tabla}>
            <Thead>
                <Tr><Th>#</Th><Th>Carta</Th><Th>Cant</Th></Tr>
            </Thead>
            <Tbody>
                {getTr(cartas)}
            </Tbody>
        </table>

    )
}


export default Tabla;