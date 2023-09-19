import { Controller, Req, Res, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Request, Response } from 'express';

@Controller('usuarios')
export class UsuariosController {    
    constructor(private readonly usuarioService: UsuariosService){}

    @Get()
    async getAllUsuarios(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
            const result = await this.usuarioService.getAllUsuarios();
            return response.status(200).json({
                status: 'Correcto',
                message: 'Datos correctamente recuperado',
                result: result
            })
        } catch (error) {
            return response.status(500).json({
                status: 'Correcto',
                message: 'Error de Servidor',
                error: error.message 
            })            
        }
    }
}
