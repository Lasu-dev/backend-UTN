import React, { createContext, useState, useContext } from "react"
import { buscarProductoPorId } from "../data/productos"

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
    const [carrito, setCarrito] = useState([])

    const buscarProductoEnCarritoPorId = (id) => {
        return carrito.find(item => item.id == id)
    }
    const agregarProductoAlCarrito = (producto) => {
        if(buscarProductoEnCarritoPorId(producto.id)){

            setCarrito(prevCarrito => {
                const newCarrito = prevCarrito.map(item => { 
                    if(item.id == producto.id){
                    item.cantidad = item.cantidad + 1
                    }
                    return item
                })
                return newCarrito
            })
        }
        else{
            setCarrito((prevCarrito)=>[...prevCarrito, {...producto, cantidad: 1}])
        }
    }
    return(
        <GlobalContext.Provider value={
            {
                carrito : carrito,
                agregarProductoAlCarrito: agregarProductoAlCarrito
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
    
}

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalContextProvider
