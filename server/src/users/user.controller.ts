import { Body, Controller, Get, Post } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { userInterface } from './interface/user.interface';
import { UserService } from './user.service';
import * as bcrypt from "bcrypt";
import { response } from 'express';

@Controller('client')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    async Register(@Body() userDto: userDto){
        if (Object.keys(userDto).length == 0) {
            return response.status(400).send({ message: "please enter valide data" })
        } else {
            const saltOrRounds = await bcrypt.genSalt();
            const password = userDto.password;
            const hash = await bcrypt.hash(password, saltOrRounds);
            const data = {
                fullname: userDto.fullname,
                email: userDto.email,
                password: hash,
            }
            return this.userService.Register(data);
        }
    }

    @Get()
    Findall(): Promise<userInterface[]>{
        return this.userService.Findall()
    }

    @Post('login')
    async Login(@Body() data) {
        const dbpassword = await this.userService.Login(data)
        if (!dbpassword) {
            return response.status(404).send({ message: 'no email such that' })
        } else {
            const password = dbpassword.password;
            const validepassword = await bcrypt.compare(data.password, password)
            if (validepassword) {
                return dbpassword;
            } else {
                return response.status(401).send({ message: 'password is not correct' })
            }
        } 
    } 
}
