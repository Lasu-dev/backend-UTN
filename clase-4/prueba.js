
let producto = {
    nombre: 'Tv Samsung',
    precio: 2000,
    id: 1, 
    categoria: 'TECNOLOGIA'
}    
let producto_2 = {
    nombre: 'Tv LG',
    precio: 2000,
    id: 1, 
    categoria: 'TECNOLOGIA'
}
/*
const venderProducto = (producto ) => {
    console.log('Has vendido a ' + producto.nombre + ' y ahora me quedan ' + producto.stock)
    
} */

/* const sumar = (a, b) => a + b */

/* producto.stock = 10

console.log(venderProducto(producto_2))

console.log(sumar(1, 2)) */

//LA CLASE SE USA PARA CREAR OBJETOS y es de buena practica declaralas en mayusculas
class Producto {
    /*El constructor es una funcion que se va a ejecutar cuando se cree el producto */
    constructor(nombre, precio){
        console.log('Creando un objeto con clase, yeah 😎😋')
        /* En este contexto This es una autorreferencia al objeto que retornará la clase, ademas this es un objeto */ 

        this.x_valor = 'hola'
        this.precio = precio
        this.nombre = nombre
    }

    //ESTO ES LA DECLARACION DE UN METODO, NO RETORNA NADA, ESTA DENTRO DE LA CLASE OJO!! POR ESO ES UN METODO Y NO UNA FUNCION
    presentarProducto(cliente){//asi se declara el metodo
        console.log('Hola ' + cliente + ' este producto se llama: '+ this.nombre)//asi le indicamos al metodo que va a hacer
    }
    //esto es muy mala practica, esto no es un metodo, con esto creamos otra propiedad a la clase
    venderProducto =() => {//estamos creando la propiedad venderProducto que guarda una funcion, hay mucha diferencia 
        console.log('Vendí el producto: '+ this.nombre + '' + ' y ahora me quedan ' + this.stock)//de rendimiento entre la funcion y el metodo
    }
        comprar(cantidad){
            console.log('comprar a ' + this.nombre + ' '  + cantidad + ' veces costará $: ' + (cantidad * this.precio))
    }
}

//Instanciar la clase Producto, esto retorna un objeto, las clases retornan objetos
let resultado = new Producto('tv LG' , 800)// new Producto('tv samsung') es la forma de instanciar la clase, acá es donde se ejecuta
const samsung = new Producto('s20', 1200) 

new Producto('tv samsung')
new Producto('tv samsung')

resultado.presentarProducto('pepe')//aca se ejecuta el metodo
resultado.comprar(10)
samsung.comprar(10)
// new Producto('tv LG')

// console.log(resultado)
// console.log(typeof(resultado))

/* Comprar es un metodo que recibira una cantidad a comprar y me dira, 'Compra a {nombre} {x} veces costará ${total}*/


//Funcion constructora de ES5 (YA NO SE USA) forma antigua de hacer las clases, se llamaba funcion constructora, ahora es una clase
function Item () {
    this.nombre = 'x item'
    Item.prototype.presentar = function(){
        console.log('Este producto se llama ' + this.nombre) 
    }
}

let item_1 = new Item()

console.log(item_1)

item_1.presentar()

// resulta mas claro el metodo moderno de crear objetos, conla clase, el constructor y sus metodos, es mas legible