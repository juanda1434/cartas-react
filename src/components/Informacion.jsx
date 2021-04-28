import React, { useState } from 'react';
import Tabla from './Tabla';
import Formulario from "./Formulario";
import Button from "./Button";
import Input from "./Input";
import Grupo from "./Grupo";
import Label from "./Label";
const style = {
    contenedor: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "5%"
    }
}

const guardar = (numero,carta,setCartas)=>{
    if(numero.length==0){
        alert("Debe ingresar numero");
        return;
    }

    if(carta.length==0){
        alert("Debe ingresar carta");
        return; 
    }
    
    if(parseInt(numero)<1 || parseInt(numero)>13){
        alert("Numero debe ser mayor que 0 y menor que 14");
        return;
    }
    setCartas({numero:numero,carta:carta,valor:0});
    
}

const Informacion = ({cartas,setCartas}) => {
    const [numero,setNumero] = useState("");
    const [carta,setCarta] = useState("");

    
    return (
        <div style={style.contenedor}>
            <Tabla cartas={cartas}/>
            <Formulario>
                <h4 style={{margin:"3%"}}>Registro Cartas</h4>
            <Grupo>
                <Label>Numero</Label>
                    <Input type="number" onChange={setNumero} value={numero} />
                </Grupo>
                <Grupo>
                    <Label>Carta</Label>
                <Input onChange={setCarta} value={carta}/>
                </Grupo>
                <Grupo>
                    <Button accion={(e)=>{e.preventDefault();guardar(numero,carta,setCartas)}}>Guardar</Button>                    
                </Grupo>
            </Formulario>
        </div>
    );
}

export default Informacion;