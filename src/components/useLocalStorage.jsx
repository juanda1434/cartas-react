import { React,useState,useEffect } from "react";

const inicializar = ({key})=>{
    return [];
}
// permite cargar el arreglo de cartas de un json externo.
// fetch para obtener y procesar el json de cartas externo.
//la funcion reduce es para cambiar el tipo de dato del atributo valor de cada carta. de string a int
const getCartas = ({key,setItem,url})=>{
    fetch(url)
    .then(res => res.json())
    .then(cartas => {
        // console.log(cartas);
        const auxiliar = cartas["data"].reduce((acc,carta)=>[           
            ...acc, {...carta,valor:parseInt(carta.valor)},] ,[]);
        // console.log(auxiliar,cartas.data)
        setItem(auxiliar);        
    localStorage.setItem(key,JSON.stringify(auxiliar));       
    })
    .catch(e => console.log(e));
}

// permite sumar 1 al valor de la carta guardada en el arreglo de cartas
const cambiarValor= (carta,cartas)=>{
    const cartasNuevas=[...cartas];
    const index = cartasNuevas.findIndex(c=>carta.numero == c.numero);
    cartasNuevas[index] = Object.assign(carta,{valor:carta.valor+1});
    return cartasNuevas;
}

///Definicion del hook/// recibe key del localstorage /// url del recurso para cargar cartas externas
const useCartaStorage=(key,url)=>{
    // actualizar me valida cuando se requiera o no descargar el recurso externo
    const [actualizar,setActualizar] = useState(localStorage.getItem(key)==null);
    // me guarda el estado del array de cartas
    const [item,setItem] = useState(()=>actualizar ?inicializar({key:key}): JSON.parse(localStorage.getItem(key)));
      

    //me permite actualizar el array actual , en caso de existir la carta en el arreglo suma 1 valor en caso de no existir crea una carta nueva
    const setValue=({numero, carta="",valor})=>{
         const cartas = [...item];
         const cartaFiltrada = cartas.find(c=> c.numero==numero);
         const cambio= cartaFiltrada!=undefined ? cambiarValor(Object.assign(cartaFiltrada,{carta:carta!=""?carta:cartaFiltrada.carta}),cartas): [...cartas,{numero:numero,carta:carta,valor:valor}] ;
         localStorage.setItem(key,JSON.stringify(cambio));
         setItem(cambio);

    }
     /// Cuando el componente se inicia me carga o no las cartas externas
    useEffect(()=>{
        return actualizar ?  getCartas({key:key,setItem:setItem,url:url}) : null;
    },[]);  

    return [item,setValue];

}

export default useCartaStorage;