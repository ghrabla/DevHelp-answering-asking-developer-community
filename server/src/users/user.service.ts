import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { userInterface } from './interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private readonly userModel: Model<userInterface>){}

    async Register(user: userInterface){
      const newUser = new this.userModel(user) 
      return await newUser.save()
    }

    async Findall(): Promise<userInterface[]>{
      return await this.userModel.find()
    }

    async Login(user){
        const findemail = await this.userModel.find({email: user.email})
        return findemail[0]
    }
    
}
