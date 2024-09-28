/* const saludar = (nombre: string) => {
*/











/* Indico explicitamente que la variable nombre es de tipo STRING */
/*let nombre: string = 'pepe'

nombre = '1'*/


let nombre: string | null = null


if(nombre){
    console.log(nombre)
}
else{
    console.log('No hay nombre aun')
}

const saludar = (nombre: string) : void => {
    console.log('Hola' + nombre)
}
saludar('pepe')