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
var Empleado = /** @class */ (function () {
    function Empleado(nombre, sueldo, fecha_de_contratacion, id_empleado, rol) {
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.fecha_de_contratacion = fecha_de_contratacion;
        this.id_empleado = id_empleado;
        this.rol = rol;
    }
    return Empleado;
}());
var ManejadorDeEmpleados = /** @class */ (function () {
    function ManejadorDeEmpleados() {
        this.empleados = [];
        this.id_counter = 0;
    }
    ManejadorDeEmpleados.prototype.agregarEmpleado = function (nombre, sueldo, fecha_de_contratacion, rol) {
        var nuevo_empleado = new Empleado(nombre, sueldo, fecha_de_contratacion, this.id_counter, rol);
        this.empleados.push(nuevo_empleado);
        this.id_counter++;
    };
    ManejadorDeEmpleados.prototype.obtenerEmpleadoPorId = function (id) {
        var empleado_por_id = this.empleados.find(function (empleado) { return empleado.id_empleado === id; });
        console.log(empleado_por_id);
    };
    ManejadorDeEmpleados.prototype.obtenerEmpleadoPorRol = function (rol) {
        var empleado_por_id = this.empleados.filter(function (empleado) { return empleado.rol == rol; });
        console.log(empleado_por_id);
    };
    return ManejadorDeEmpleados;
}());
var manejador_de_empleados = new ManejadorDeEmpleados();
manejador_de_empleados.agregarEmpleado('Pepe', 2500, new Date, "Developer");
manejador_de_empleados.agregarEmpleado('Marta', 2800, new Date, "Developer");
manejador_de_empleados.agregarEmpleado('Josefina', 1900, new Date, "Marketing");
manejador_de_empleados.agregarEmpleado('Filo', 2700, new Date, "Designer");
manejador_de_empleados.agregarEmpleado('PEPE', 3000, new Date, "Project Manager");
console.log(manejador_de_empleados);
manejador_de_empleados.obtenerEmpleadoPorId(1);
manejador_de_empleados.obtenerEmpleadoPorRol('Developer');
manejador_de_empleados.obtenerEmpleadoPorRol('Designer');
