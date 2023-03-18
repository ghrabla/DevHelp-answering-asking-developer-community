import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { questionDTO } from './dto/create-question.dto';
import { questionInterface } from './interface/question.interface';

@Controller('questions')
export class QuestionsController { 
    constructor(private readonly questionServices: QuestionsService) { }

    @Get()
    getAllQuestions(): Promise<questionInterface[]> {
        return this.questionServices.getAllQuestions();
    }

    @Get(':id')
    getQuestionById(@Param('id') id: string): Promise<questionInterface> {
        return this.questionServices.getQuestionById(id);
    }

    @Post('create')
    createQuestion(@Body() createQuestionDTO: questionDTO): Promise<questionInterface> {
        return this.questionServices.createQuestion(createQuestionDTO);
    }

    @Put(':id')
    updateQuestion(
        @Param('id') id: string,
        @Body() updateQuestionDTO: questionDTO,
    ): Promise<questionInterface> {
        return this.questionServices.updateQuestion(id, updateQuestionDTO);
    }

    @Delete(':id')
    deleteQuestion(@Param('id') id: string): Promise<{message: String}> {
        return this.questionServices.deleteQuestion(id);
    }
}
