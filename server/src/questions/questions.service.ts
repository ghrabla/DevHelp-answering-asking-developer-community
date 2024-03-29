import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { questionDTO } from './dto/create-question.dto';
import { questionInterface } from './interface/question.interface';

@Injectable()
export class QuestionsService {
  constructor(@InjectModel('Question') private readonly questionModel: Model<questionDTO>) {}

  async getAllQuestions(): Promise<questionInterface[]> {  
    return await this.questionModel.find();   
  }

  async getQuestionById(id: string): Promise<questionInterface> {
    return await this.questionModel.findById(id);
   
  }

  async createQuestion(createQuestionDTO: questionDTO): Promise<questionInterface> {
    const newQuestion = new this.questionModel(createQuestionDTO);
    return await newQuestion.save();
  }

  async updateQuestion(id: string, updateQuestionDTO: questionDTO): Promise<questionInterface> {
    const updatedQuestion = await this.questionModel.findByIdAndUpdate(
      id,
      updateQuestionDTO,
      { new: true },
    )
    return updatedQuestion;
  }

  async updateQuestionAnswer(id_question: String, id_answer): Promise<questionInterface> {
    const updatedQuestion = await this.questionModel.findByIdAndUpdate(
      id_question,
      { $push: { comments: id_answer } },
      { new: true },
    )
    return updatedQuestion;
  }


  async deleteQuestion(id: string): Promise<{message: String}> {
    const question = await this.questionModel.findByIdAndRemove(id)
    if(question){ 
        return {message: "question deleted"}
    }else{
      return {message: "question does not deleted"}
    }
  }
}
