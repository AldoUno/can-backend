import { IsString, Length } from "class-validator";

export class LoginDto{

    @IsString() 
    correo: string;

    @IsString()
    password: string;
}