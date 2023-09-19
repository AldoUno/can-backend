import {Module} from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma.service";
import { JwtStrategy } from "./jwt.strategy";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { UsuariosModule } from "src/usuarios/usuarios.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService,JwtStrategy,UsuariosService],
    imports:[
        UsuariosModule, 
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET, 
            signOptions: {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        })
    ]
})
export class AuthModule{}