import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Usuarios } from './usuarios.model';

@Injectable()
export class UsuariosService {
    constructor(private prisma: PrismaService){}
    async getAllUsuarios():Promise<Usuarios[]>{
        return this.prisma.usuarios.findMany();
    }
}
