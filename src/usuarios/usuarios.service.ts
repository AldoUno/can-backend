import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Usuarios } from './usuarios.model';

@Injectable()
export class UsuariosService {
    constructor(private prisma: PrismaService){}
    
    async getAllUsuarios():Promise<Usuarios[]>{
        return this.prisma.usuario.findMany();
    }

    async crearUsuario(data:Usuarios): Promise<Usuarios>{
        const existe = await this.prisma.usuario.findUnique({
            where: {
                correo: data.correo
            }
        })
        if(existe){
            throw new ConflictException('El correo ya esta registrado')
        }

        return this.prisma.usuario.create({
            data
        })
    }
}
