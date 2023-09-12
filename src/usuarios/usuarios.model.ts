import { Prisma } from "@prisma/client";

export class Usuarios implements Prisma.UsuarioCreateInput{
    nombre: string;
    apellido: string;
    ci: number;
    correo: string;
    password: string;
    telefono: number;
    direccion: string;
    Rol?: Prisma.RolCreateNestedOneWithoutUsuarioInput;
    
}