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
const getTr = (cartas) => {
    return cartas.map(c => 
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