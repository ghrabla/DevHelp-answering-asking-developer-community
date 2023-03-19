import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { answerDTO } from './dto/create-answer.dto';
import { answerInterface } from './interface/answer.interface';

@Controller('answers')
export class AnswersController { 
    constructor(private readonly answerServices: AnswersService) { }

    @Get()
    getAllAnswers(): Promise<answerInterface[]> {
        return this.answerServices.getAllAnswers();
    }

    @Get(':id')
    getAnswerById(@Param('id') id: string): Promise<answerInterface> {
        return this.answerServices.getAnswerById(id);
    }

    @Post('create')
    createAnswer(@Body() createanswerDTO: answerDTO): Promise<answerInterface> {
        return this.answerServices.createAnswer(createanswerDTO);
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
