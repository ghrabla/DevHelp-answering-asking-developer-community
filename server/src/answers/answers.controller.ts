import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { answerDTO } from './dto/create-answer.dto';
import { answerInterface } from './interface/answer.interface';
import { QuestionsService } from 'src/questions/questions.service';

@Controller('answers')
export class AnswersController { 
    constructor(private readonly answerServices: AnswersService
    //    private readonly questionServices: QuestionsService 
       ) { }

    @Get()
    getAllAnswers(): Promise<answerInterface[]> {
        return this.answerServices.getAllAnswers();
    }

    @Get(':id')
    getAnswerById(@Param('id') id: string): Promise<answerInterface> {
        return this.answerServices.getAnswerById(id);
    }

    @Post('create')
    async createAnswer(@Body() createanswerDTO) {
        const answer = await this.answerServices.createAnswer(createanswerDTO);
        // this.questionServices.updateQuestionAnswer(answer.id_question, answer._id)
        return answer;
    }

    @Put(':id')
    updateAnswer(
        @Param('id') id: string,
        @Body() updateanswerDTO: answerDTO,
    ): Promise<answerInterface> {
        return this.answerServices.updateAnswer(id, updateanswerDTO);
    }

    @Delete(':id')
    deleteAnswer(@Param('id') id: string): Promise<{message: String}> {
        return this.answerServices.deleteAnswer(id);
    }
}
