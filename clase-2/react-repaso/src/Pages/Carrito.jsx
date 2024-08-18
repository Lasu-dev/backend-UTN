import React from 'react'
import { Navbar } from '../Components'
import { useGlobalContext } from '../Context/GlobalContext'

const Carrito = () => {
  const { carrito } = useGlobalContext()

  return (
    <div>
      <Navbar />
      <h1>Carrito</h1>
      {carrito.map(item => {
        return (
          <div>
            <h2>{item.npmbre}</h2>
            <span>${item.precio}</span>
            <p>Cantidad en carrito: {item.cantidad}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Carrito