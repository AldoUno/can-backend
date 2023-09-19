import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma.service";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from 'bcrypt';
import { RegistroDto } from "./dto/register.dto";
import { Usuarios } from "src/usuarios/usuarios.model";

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
        if(!validatePassword){
            throw new NotFoundException('Contraseña incorrecta')
        }

        return{
            token: this.jwtService.sign({correo})
        }
    }
    async registro (crearDto: RegistroDto): Promise<any>{
        const crearUsuarios = new Usuarios();
        crearUsuarios.nombre = crearDto.nombre
        crearUsuarios.apellido = crearDto.apellido
        crearUsuarios.ci = crearDto.ci
        crearUsuarios.correo = crearDto.correo
        crearUsuarios.password = await bcrypt.hash(crearDto.password, 6)
        crearUsuarios.telefono = crearDto.telefono
        crearUsuarios.direccion = crearDto.direccion
       

        const usuario = await this.usuariosService.crearUsuario(crearUsuarios)

        return{
            token: this.jwtService.sign({correo: usuario.correo})
        }
    }
}