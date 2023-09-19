import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from 'rxjs';

export class JwtAuthGuard extends AuthGuard('jwt'){
    canActivate(context: ExecutionContext){
        return super.canActivate(context)
    }

    handleRequest(err, usuario, info) {
        if(err || !usuario){
            throw err || new UnauthorizedException();
        }
        return usuario
    }
}