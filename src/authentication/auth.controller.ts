import { Controller, Post, Req, Res, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Response, Request } from "express";
import { LoginDto } from "./dto/login.dto";
import { RegistroDto } from "./dto/register.dto";

@Controller('/auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post('/login')
    async login(@Req() request: Request, @Res() response: Response, @Body() loginDto: LoginDto):Promise<any>{
        try{
            const result = await this.authService.login(loginDto);
            return response.status(200).json({
                status: 'Ok',
                message: 'Login correcto',
                result: result
            })
        }catch(error){
            return response.status(500).json({
                status: 'Error',
                message: 'Login incorrecto',
                error: error.message 
            })
        }
    }

    @Post('/registro')
    async registro(@Req() request: Request, @Res() response: Response, @Body() registroDto: RegistroDto):Promise<any>{
        try{
            const result = await this.authService.registro(registroDto);
            return response.status(200).json({
                status: 'Ok',
                message: 'Registro correcto',
                result: result
            })
        }catch(error){
            return response.status(500).json({
                status: 'Error',
                message: 'Registro incorrecto',
                error: error.message 
            })
        }
    }
}