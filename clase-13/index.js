import express from "express";
import filesystem from 'fs'

const app = express()//se crea una instancia de servidor HTTP y lo guardamos en nuestra variable app 
const PORT = 4000

//Cuando alguien consulte al endpoint 'obtener-usuarios' con metodo get ejecuto la callback
//La callback recibe 2 parámetros : request y response 
//Request: es un objeto con todos los datos de la consulta (Por ej. el IP de la consulta)
//Response es un objeto que usamos para emitir la respuesta
app.get('/obtener-usuarios',async (request, response) => {
    console.log('Recibido')
    //response.send('Recibida la consulta')//Nos permite emitir: json, HTML, texto plano.
    //response.json({mensaje: 'Hola', code: 101 })//Nos permite emitir json
    //response.status()nos permite setear el estatus HTTP de respuesta
    const resultado = await filesystem.promises.readFile('./public/usuarios.json', {encoding:'utf-8'})
    const usuarios = JSON.parse(resultado)
    response.status(200).json({mensaje: 'Hola', code: 101, data: usuarios })//200 es el status de: todo OK predeterminado, pero si queremos 
                                                                            //podemos modificarlo

    
})

//listen espera recibir 2 valores, 1ro es el puerto y el 2do es la callback, el puerto lo guardamos en una variable, y la callback fx va a
// ejecutar código una vez que mi servidor se  esté escuchando correctamente en el puerto, si por algun motivo la app no se llegara a escuchar
// en el puerto, no solo no se va a ejecutar el código de la callback, sino que además va a crashear la aplicación
app.listen( PORT, () => { // Esta callback se ejecuta cuando se este escuchando mi app en el puerto que yo le indiqué
    console.log(`El servidor se está escuchando en el puerto ${PORT}`)
} )

//http://localhost:4000

/* EJERCICIO:
Llamar a /public/usuarios.json y obtener la lista de usuarios. Una vez la obtenemos, responderemos con la lista de usuarios 
*/

/* TAREA DE LA CLASE:  1) Crear un archivo llamado productos.json dentro de /public que tenga una lista de productos con id, titulo, precio, stock
Crear un endpoint llamado /obtener-productos que al consultarnos nos responda:
{
    mensaje: 'Productos obtenidos',
    status: 200,
    ok: true,
    data: [
        {producto}
    ]
}
El array de productos debe venir del contenido del productos.json  */

app.get('/obtener-productos',async (request, response) => {
    console.log('Recibido')
    try{
    const resultado = await filesystem.promises.readFile('./public/productos.json', {encoding:'utf-8'})
    const productos = JSON.parse(resultado)
    response.status(200).json({
            mensaje: 'Productos obtenidos',
            ok: true,
            data: productos 
        })
    }
    catch(error){
        console.error('Error al obtener productos:', error)
        response.status(500).json({
            mensaje: 'SERVER ERROR: Productos no obtenidos', 
            status: 500, 
            ok: false, 
            data: null
        })    
    }
})    

/*  2) Agregar manejo de errores:   siiiiii funcionó!!!!😎✨

Si no se puede obtener la lista de productos deberan responder:
    {
        mensaje: 'SERVER ERROR: Productos no obtenidos', 
        status: 500,
        ok: false, 
        data: null
    }
*/

