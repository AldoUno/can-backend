import { IsNumber, IsString, Length } from "class-validator";

export class RegistroDto{
    @IsString()    
    nombre: string;
    @IsString() 
    apellido: string;
    @IsNumber()
    ci: number;
    @IsNumber() 
    correo: string;
    @IsString()   
    password: string;
    @IsNumber()
    telefono: number;
    @IsString() 
    direccion: string;
}