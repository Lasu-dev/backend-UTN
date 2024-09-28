/*# Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript

En este ejercicio, vamos a crear un sistema básico de historial utilizando Programación Orientada a Objetos (POO) en JavaScript. Imagina que tienes una lista de acciones que un usuario realiza en una aplicación, y quieres guardar esas acciones en un historial para poder verlas más tarde, eliminarlas individualmente o limpiar todo el historial.

## Objetivo

- **Crear una clase de historial** donde se puedan agregar, eliminar por ID y eliminar todas las acciones.
- **Usar métodos avanzados de arrays** como `filter`, `find`, y `findIndex` para gestionar el historial.
- **Aplicar conceptos de POO** como clases, objetos, métodos.

## Tareas

1. **Definir una clase `Historial`**:
    - Esta clase tendrá una propiedad interna para almacenar las acciones en un array.
    - Incluirá métodos para agregar una nueva acción, eliminar una acción por ID, eliminar todas las acciones y mostrar el historial.

2. **Crear una clase `Accion`**:
    - Cada acción será representada por una instancia de la clase `Accion`.
    - Esta clase tendrá propiedades para `id`, `descripcion` y `fecha`.

3. **Crear métodos en la clase `Historial`**:
   - **`agregarAccion(accion)`**: Método para agregar una nueva acción al historial.
   - **`eliminarAccionPorID(id)`**: Método para eliminar una acción específica del historial usando su ID.
   - **`eliminarTodo()`**: Método para eliminar todas las acciones del historial.
   - **`mostrarHistorial()`**: Método para mostrar en la consola todas las acciones en el historial.*/

enum AccionPermitida {
    IniciarSesion = "Iniciar sesión",
    ComprarProductos = "Comprar productos",
    CerrarSesion = "Cerrar sesión",
    AgregarProductos = "Agregar productos"
}

class Accion {
    id_accion: number
    descripcion: AccionPermitida // Usamos el enum para la descripción, esto está mal, la descripcion debe ir aparte, mejorarlo
    fecha: Date

    constructor(id_accion: number, descripcion: AccionPermitida, fecha?: Date) {
        this.id_accion = id_accion
        this.descripcion = descripcion 
        this.fecha =  new Date()
    }
}


class Historial {
    acciones: Accion[]
    contador_id: number

    constructor(){
        this.acciones = []
        this.contador_id = 0
    }

    agregarAccion(descripcion: AccionPermitida): void {
        const nuevaAccion = new Accion(this.contador_id, descripcion) 
        this.acciones.push(nuevaAccion) 
        this.contador_id++ 
    }

    eliminarAccionPorID(id: number): void {
        this.acciones = this.acciones.filter((accion: Accion) => accion.id_accion !== id)
    }

    eliminarTodo(): void {
        this.acciones = [] 
    }

    mostrarHistorial(): void {
        console.log(this.acciones)
    }

}

const historial = new Historial()

historial.agregarAccion(AccionPermitida.IniciarSesion)
historial.agregarAccion(AccionPermitida.AgregarProductos)
historial.agregarAccion(AccionPermitida.ComprarProductos)
historial.agregarAccion(AccionPermitida.CerrarSesion)

historial.mostrarHistorial()
historial.mostrarHistorial()
historial.mostrarHistorial()
historial.eliminarAccionPorID(1)
historial.eliminarTodo()


// cosas para mejorar en el código: forEach en mostrarHistorial para que por cada accion me muestre un mensaje personalizado
// class mostrarAcciones para estandarizar el formato de mostrar 

// ##Codigo copiado de la clase 6:
/*  
class Accion {
    id: number
    descripcion: string
    fecha: Date

    constructor(
        id: number,
        descripcion: string,
        fecha: Date
    ) 
    {
        this.id = id
        this.descripcion = descripcion
        this.fecha = fecha
    }
    getFechaFormateada () :string {
        return parseCustomDateFormat(this.fecha)
    }
}

const parseCustomDateFormat = (fecha: Date) => {
    const horas: string = fecha.getHours().toString()
    const minutos: string = fecha.getMinutes().toString()
    const dia: string = fecha.getDate().toString()
    const mes: string = (fecha.getMonth() + 1).toString()
    const anio: number = fecha.getFullYear()
    const fechaFormateada: string = `${horas}:${minutos} ${dia}/${mes}/${anio}`;
    return fechaFormateada
}

class CustomDate extends Date {
    constructor(fecha: Date) {
        super(fecha)
    }
    getFechaFormateada () :string {
        return parseCustomDateFormat(this)
    }
}


/* const eliminarAccionPorID(id: number) {
    const posAccion = this.acciones.findIndex(element => element.id === id) 

    this.acciones.splice(posAccion, 1)
    
} *//*

    class Accion2 {
        id: number
        descripcion: string
        constructor(id: number,descripcion: string){
            this.id = id
            this.descripcion = descripcion  
        }
    }
    class AccionEnvioMensaje extends Accion2{
        constructor(id: number) {
            super(id, 'ENVIO_MENSAJE')
        }
    }
    new AccionEnvioMensaje(1)
    new AccionEnvioMensaje(2)

 */