import { Body, Controller, Get, Post } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { userInterface } from './interface/user.interface';
import { UserService } from './user.service';
import * as bcrypt from "bcrypt"

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    async Register(@Body() userDto: userDto): Promise<userInterface | { message: String }> {
        if (Object.keys(userDto).length == 0) {
            return { message: "please enter valide data" }
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

    @Post('login')
    async Login(@Body() data) {
        const dbpassword = await this.userService.Login(data)
        if (!dbpassword) {
            return { message: 'no email such that' }
        } else {
            const password = dbpassword.password;
            const validepassword = await bcrypt.compare(data.password, password)
            if (validepassword) {
                return dbpassword;
            } else {
                return { message: 'password is not correct' }
            }
        }
    }
}
