import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
@Injectable()
export class AuthService {
    
    constructor(private userService:UserService){}

    async validateUser(email:string,password:string){
        const user = await this.userService.findByEmail(email);
        if(!user){
            throw new UnauthorizedException(`User ${email} not found`);
        }
        const isPasswordMatch = await compare(password,user.password);
        if(!isPasswordMatch) throw new UnauthorizedException(`Invalid password`);

        return {id:user.id};
    }
    }
