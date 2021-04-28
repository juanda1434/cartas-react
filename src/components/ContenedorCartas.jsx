import {React,useState,useEffect} from 'react';
import Carta from "./Carta";


const ContenedorCartas=({cartas,pulsarCarta})=>{    
    
    const generarCartas=()=>{
        //  console.log(cartas);
       const cartasJSX= cartas.map(({numero})=>
             <Carta clase="carta" onClick={()=>{pulsarCarta({numero:numero})}} key={numero} id={numero} url={`img/${numero}.png`}/>
        );                
        return cartasJSX.length==0 ? "No se han registrado cartas": cartasJSX;
    }
  
    return (
        <div  className="cartasGrid">
    {generarCartas()}
        </div>
    );

}

export default ContenedorCartas;