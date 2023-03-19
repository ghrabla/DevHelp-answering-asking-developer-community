import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { answerDTO } from './dto/create-answer.dto';
import { answerInterface } from './interface/answer.interface';

@Injectable()
export class AnswersService {
  constructor(@InjectModel('Answer') private readonly answerModel: Model<answerDTO>) {}

  async getAllAnswers(): Promise<answerInterface[]> {  
    return await this.answerModel.find();  
  }

  async getAnswerById(id: string): Promise<answerInterface> {
    return await this.answerModel.findById(id);
   
  }

  async createAnswer(createanswerDTO: answerDTO): Promise<answerInterface> {
    const newAnswer = new this.answerModel(createanswerDTO);
    return await newAnswer.save();
  }

  async updateAnswer(id: string, updateanswerDTO: answerDTO): Promise<answerInterface> {
    const updatedAnswer = await this.answerModel.findByIdAndUpdate(
      id,
      updateanswerDTO,
      { new: true },
    )
    return updatedAnswer;
  }

  async deleteAnswer(id: string): Promise<{message: String}> {
    const answer = await this.answerModel.findByIdAndRemove(id)
    if(answer){ 
        return {message: "answer deleted"}
    }else{
      return {message: "answer does not deleted"}
    }
  }
}
