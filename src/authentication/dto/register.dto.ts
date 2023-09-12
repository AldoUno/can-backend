import { IsNumber, IsString, Length } from "class-validator";

export class RegisterDto{
    @IsString()    
    nombre: string;
    @IsString() 
    apellido: string;
    @IsNumber()
    ci: number;
    @IsNumber()
    rolId: number;
    @IsString()
    @Length(5,50) 
    correo: string;
    @IsString()
    @Length(6,12) 
    password: string;
    @IsNumber()
    telefono: number;
    @IsString() 
    direccion: string;
}