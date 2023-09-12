import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma.service";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService{
    constructor(private readonly prismaService: PrismaService, private jwtService: JwtService, private readonly usuariosService: UsuariosService){}
    async login(loginDto: LoginDto): Promise<any>{
        const {correo, password} = loginDto;
        const usuarios = await this.prismaService.usuario.findUnique({
            where: {correo}
        })
        if(!usuarios){
            throw new NotFoundException('Usuario no encontrado')
        }

        const validatePassword = await bcrypt.compare(password, usuarios.password)
    }
}