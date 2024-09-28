/*  
# Consiga POO Ts
Negocio:
-Somos una empresa de Software (software factory) que se dedica a crear soluciones IT variadas
-Tenemos empleados del rubro IT
    Tipos de empleados
    *Project Manager
    *Developers
    *Designers
    *Marketing
Problema:
Necesitamos crear un software que nos permita administrar el manejo de los empleados de la empresa
Clase empleado:
    *nombre
    *sueldo
    *fecha_de_contratacion
    *id_empleado
    *tipo: Project Manager, Developer, Designer, Marketing
Clase manejador empleados
    *id_manejador
    *empleados (lista de empleados)
metodos
    *agregar_empleado
    *obtener_empleado_por_id
    *obtener_empleados_por_tipo
*/

//podemos usar type cuando sabemos que esto no se va a modificar en el tiempo, sino es mejor ponerlo en un array de especialidades
type Puesto =  'Project Manager'| 'Developer' | 'Designer' | 'Marketing'

    
class Empleado {
    nombre: string;
    sueldo: number;
    fecha_contratacion: Date;
    id_empleado: number;
    tipo: string;

    constructor(nombre: string, sueldo: number, fecha_contratacion: Date, id_empleado: number, tipo: string) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_contratacion = fecha_contratacion;
        this.id_empleado = id_empleado;
        this.tipo = tipo;
    }
    presentarse( nombre : string){
        console.log('Hola' + nombre + ' soy ' + this.nombre + 'y trabajo como ' + this.tipo)
    }
}

class ManejadorDeEmpleados {
    empleados: Empleado[];
    id_manejador: number;
    tipos_permitidos: string[];
    contador_id: number;

    constructor(id_manejador: number) {
        this.empleados = [];
        this.id_manejador = id_manejador;
        this.tipos_permitidos = ["Project Manager", "Developer", "Designer", "Marketing", "HR"];
        this.contador_id = 1; 
    }
    
    agregarEmpleado(
        nombre: string, 
        sueldo: number, 
        fecha_contratacion: Date, 
        tipo: Puesto
    ) : void {// cuando una funcion no tiene retorno es de buena practica ponerle void, asi es mas facil darse cuenta que no tiene retorno
        if (!this.tipos_permitidos.includes(tipo)) {
            console.log(`Error: El tipo de empleado "${tipo}" no es válido.`);
        } else {
            const nuevo_empleado = new Empleado(nombre, sueldo, fecha_contratacion, this.contador_id++, tipo);
            this.empleados.push(nuevo_empleado);
            console.log(`Empleado ${nombre} agregado con éxito con ID ${this.contador_id}.`);
        }
    }
    obtenerEmpleadoPorId(id_empleado: number) {
        //este seria el tipado correcto
        const empleado : Empleado | undefined = this.empleados.find(//porque .find devuelve la condicion, o undefined
            (empleado: Empleado ) : boolean => empleado.id_empleado === id_empleado);//hay un operador, entonces siempre va a devolver un boolean

        if (empleado) {
            console.log(`El empleado con ID: ${empleado.id_empleado} es ${empleado.nombre}`);
        } else {
            console.log(`No se encontró ningún empleado con ID: ${id_empleado}`);
        }
    }

    obtenerEmpleadosPorTipo(tipo: string) {
        const empleados_filtrados : Empleado[] = this.empleados.filter(empleado => empleado.tipo === tipo);

        if (empleados_filtrados.length > 0) {
            console.log(`Empleados de tipo "${tipo}":`);
            empleados_filtrados.forEach(empleado => {
                console.log(`- ID: ${empleado.id_empleado}, Nombre: ${empleado.nombre}, Sueldo: ${empleado.sueldo}`);
            });
        } else {
            console.log(`No se encontraron empleados de tipo "${tipo}".`);
        }
    }
}    
/*
const manejador_de_empleados = new ManejadorDeEmpleados()
manejador_de_empleados.agregarEmpleado('Pepe', 2500, new Date(), "Developer"  )
manejador_de_empleados.agregarEmpleado('Marta', 2800, new Date(), "Developer"  )
manejador_de_empleados.agregarEmpleado('Josefina', 1900, new Date(), "Marketing"  )
manejador_de_empleados.agregarEmpleado('Filo', 2700, new Date(), "Designer"  )
manejador_de_empleados.agregarEmpleado('PEPE', 3000, new Date(), "Project Manager"  )


console.log(manejador_de_empleados)
manejador_de_empleados.obtenerEmpleadoPorId(1)
manejador_de_empleados.obtenerEmpleadoPorRol('Developer')
manejador_de_empleados.obtenerEmpleadoPorRol('Designer')
*/


//Herencia y Polimorfismo
// puede ser que tenga otro tipo de empleados como ser un pasante, es un empleado especial por que tiene otras condiciones de contratacion, 
//en vez de hacer toda una clase nueva para solo agregar una caracteristica distinta como seria el tiempo de contrato en este caso
//vamos a hacer una clase que sea Pasante, que va a extenderse de la clase empleado, creamos un nuevo prototipo pero hereda el prototipo anterior

class Pasante extends Empleado{
    tiempo_de_contrato_en_meses : number
    constructor(
        nombre : string, 
        sueldo : number, 
        fecha_contratacion: Date,
        id_empleado : number,
        tipo: Puesto, 
        tiempo_de_contrato_en_meses : number
    ){
        super(nombre, sueldo, fecha_contratacion, id_empleado, tipo  )  //es la invocacion del constructor del Empleado (herencia)
        this.tiempo_de_contrato_en_meses = tiempo_de_contrato_en_meses  //se asigna la nueva propiedad 
    }
    hacerCosasDePasante(){
        if(this.tipo === 'Developer'){
            console.log( 'hacer un while true es mi pasion')
        }

    }

    presentarse(nombre: string): void {
        console.log('Hola' + nombre + 'soy ' + this.nombre + 'y trabajo como pasante de ' + this.tipo)
    }
}

const pepe = new Empleado('pepe', 250.000, new Date(), 1, 'Developer')
const susana = new Pasante ('Susana', 200.000, new Date(), 2, 'Developer', 6)

console.log(pepe, susana)

pepe.presentarse('Juan')
susana.presentarse('Elias')

susana.hacerCosasDePasante()

const manejador_de_empleados = new ManejadorDeEmpleados(1)