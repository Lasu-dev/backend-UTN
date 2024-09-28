// ACA VAMOS A TENER TODAS LAS FUNCIONALIDADES DE NUESTRO CÓDIGO, DEBEMOS IMPORTARLAS PARA PODER INVOCARLAS EN EL INDEX.JS
//LA IMPORTACIÓN NO ES COMO EN REACT, ACA ES CON MODULOS:
//Require es una funcion que nos permite importar modulos
const filesystem = require('fs')

/* filesystem.writeFileSync('prueba.txt', 'hola desde node.js', {encoding: 'utf-8'}) */
/* const resultado = filesystem.readFileSync('prueba.txt', {encoding: 'utf-8'})
 */

/* filesystem.writeFileSync('prueba.json', JSON.stringify({nombre: 'pepe'}), {encoding: 'utf-8'})
console.log(resultado)
 */


/* const objeto = JSON.parse(filesystem.readFileSync('prueba.json', {encoding: 'utf-8'}))

console.log(objeto.nombre) */


//Cuando coloco async en una funcion la funcion retornara una promesa

const createTxt = async (file_name, text) => {
    if(!file_name){
        console.error('No has escrito el nombre del archivo')
    }
    const file = file_name + '.txt'
    /* filesystem.writeFileSync(file, text, {encoding: 'utf-8'}) */
    await filesystem.promises.writeFile(file, text, {encoding: 'utf-8'})
    let textoGuardado = await filesystem.promises.readFile(file, {encoding: 'utf-8'})
    console.log('Se registro con exito: ' + textoGuardado)
    
    
}

//console
/* 
console.error('hola')//muestra en rojo
console.dir('Hola')//muestra en verde
console.warn('estas advertido')//muestra en amarillo
console.info('Esto es una informacion')
console.table({nombre: 'pepe', apellido: 'suarez'})//le paso un objeto, me lo muestra en formato tabla
console.trace() //cuando queres trazar de donde viene un error, se muestra en rojo la traza
*/

module.exports = {createTxt: createTxt, nombre: 'pepe'}

/* 
ASINCRONIA CON EVENTOS
filesystem.writeFile(file, text, {encoding: 'utf-8'}, () => {
        filesystem.readFile(file, {encoding: 'utf-8'}, (error, resultado)=> {
            console.log(resultado)
        })
        
    }) 
        */

/*const createTxt = (file_name, text) => {
    const file = file_name + '.txt'
    filesystem.writeFileSync(file, text, {encoding: 'utf-8'})
}*/
