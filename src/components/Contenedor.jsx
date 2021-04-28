import {React,Fragment} from 'react';
import ContenedorCartas from "./ContenedorCartas";
import useLocalStorage from "./useLocalStorage";
import Header from './Header';
import Informacion from './Informacion';
const style = {
    container:{        
        width:"95%",
        margin:"auto",
        marginBottom:"10%"
    }
    
}

const Contenedor = ()=>{
    const [cartas,setCartas]=useLocalStorage("cartas1","https://carlosreneas.github.io/endpoints/cartas.json");

    return (
        <Fragment>
        <Header/>
        <div className="containerGrid" style={{...style.container}}>
        <ContenedorCartas cartas={cartas} pulsarCarta={setCartas} />
        <Informacion setCartas={setCartas} cartas={cartas}/>
        </div></Fragment>
    );
}

export default Contenedor;