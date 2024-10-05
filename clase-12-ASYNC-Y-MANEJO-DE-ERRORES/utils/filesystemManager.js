

import filesystem from 'fs'

//crear archivo
/*filesystem.promises.writeFile(file_name, data, {encoding: 'utf-8'})

//leer archivo
filesystem.promises.readFile(file_name, {encoding: 'utf-8'})*/

//crear la sig fx:
/*
const crearJson = async (file_name, content) => {
    const archivoNombre = file_name + '.json'
    await filesystem.promises.writeFile(archivoNombre, JSON.stringify(content),{encoding:'utf-8'})
    console.log('El archivo:' + archivoNombre + 'se ha creado correctamente')
}
const leerJson = async (file_name) => {
    const nameJSON = file_name + '.json'
    const content = await filesystem.promises.readFile(nameJSON, {encoding: 'utf-8'} )
    console.log(JSON.parse(content))
} 
//Ejemplo de uso:
//crearJson('data', [])//debe crear un archivo de nombre data.json con el contenido:[]



crearJson('Persona', {nombre:'Susana', edad:'48', estudios:'si'} )
leerJson('Persona')                        


export {crearJson, leerJson}*/

//VAMOS A AGREGAR EL MANEJADOR DE ERRORES AL CÓDIGO (try y catch) LUEGO VAMOS A AGREGAR LAS VALIDACIONES (if, throw, else)

const crearJson = async (file_name, content) => {
    const archivoNombre = file_name + '.json'
    
    try {
        if (!file_name) {
            throw { code: 'ERR_INVALID_ARG_TYPE', detail: 'Falta fileName en crearJson, se esperaba un dato verdadero pero recibio ' + file_name }
        }
        if (!content && typeof(content) == 'object') {
            throw { code: 'ERR_INVALID_ARG_TYPE', detail: 'Falta data en crearJson, se esperaba un dato verdadero pero recibio ' + content }
        } 
        await filesystem.promises.writeFile(archivoNombre, JSON.stringify(content), { encoding: 'utf-8' })
        console.log('El archivo: ' + archivoNombre + ' se ha creado correctamente')
    }  catch(error){
        if(error.code == 'ERR_INVALID_ARG_TYPE' ){
            console.error(error.detail)
        }
        else{
            
            throw error
        }
        console.error('Ocurrió un error')
        console.error('Ocurrió un fucking error')
        console.log('Accion que quiero que se ejecute a pesar de que haya un error')

    }
}

const leerJson = async (file_name) => {
    const nameJSON = file_name + '.json'
    try{
        if(!file_name ){
            throw { code: 'ERR_INVALID_ARG_TYPE', detail: 'Falta fileName en leerJson, se esperaba un dato verdadero pero recibio ' + file_name }
        }
        const content = await filesystem.promises.readFile(nameJSON, {encoding: 'utf-8'} )
        console.log(JSON.parse(content))
    } catch(error){
        if(error.code == 'ERR_INVALID_ARG_TYPE' ){
            console.error(error.detail)
        }
        else{
            throw error 
        }
    }
}    
/*
crearJson('Persona', { nombre: 'Susana', edad: '48', estudios: 'si' })
leerJson('Persona')*/


export { crearJson, leerJson }


/* _____________________________________________________________TAREA_____________________________________________________________________
Agregar try catch a las funciones crearJson y leerJson
Deben tener sus propias validaciones de parametros (es decir que los parametros sean valores correctos)
Ejemplo:
crearJson(fileName, data)
fileName = string con almenos un caracter
data = data debe ser de tipo objeto y debe ser verdadero
Ojito con el null!!
data = null
typeof (data) => 'object'

Tambien los errores genericos los mostraran por consola de error

Condiciones:
Su codigo NO debe crashear

Recomendaciones: 
Para probar que su codigo no crashee usen la siguiente funcion
const test = async ( ) => {
    try{
        const result = await crearJson('data')

        console.log('accion super importante')

    }
    catch(error){
        console.error(error)
    }
}
test()

Si su codigo esta bien, deberia mostar por consola SIEMPRE 'accion super importante'

*/
