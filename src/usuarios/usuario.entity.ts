// Define una clase llamada 'Usuario'
export class Usuario {
    // Declaración de propiedades de la clase 'Usuario'

    // Propiedad 'id' de tipo string, que generalmente se utiliza para identificar de manera única a un usuario
    id: string

    // Propiedad 'nombre' de tipo string, que almacena el nombre del usuario
    nombre: string

    // Propiedad 'ci' de tipo number, que podría representar un número de identificación como un documento de identidad
    ci: number

    // Propiedad 'apellido' de tipo string, que almacena el apellido del usuario
    apellido: string

    // Propiedad 'correo' de tipo string, que almacena la dirección de correo electrónico del usuario
    correo: string

    // Propiedad 'telefono' de tipo string, que almacena el número de teléfono del usuario
    telefono: number

    // Propiedad 'direccion' de tipo string, que almacena la dirección del usuario
    direccion: string

    // Propiedad 'contraseña' de tipo string, que almacena la contraseña del usuario (se debe considerar la seguridad de almacenar contraseñas)
    password: string

    // Propiedad 'rol' de tipo string, que podría representar el rol o nivel de acceso del usuario en un sistema
    rolId: number
}

/** 
 * En resumen, esta clase Usuario define la estructura de datos de un usuario en tu aplicación.
 * Cada propiedad representa un atributo del usuario, como su nombre, apellido, correo electrónico, etc. 
 * Esta clase se utiliza típicamente como una entidad en un sistema, y se puede utilizar para crear, 
 * leer, actualizar y eliminar registros de usuarios en una base de datos u otras operaciones relacionadas 
 * con los usuarios en la aplicación. 
*/