import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsController } from './question.controller';
import { QuestionsService } from './questions.service';
import { QuestionSchema } from './schema/question.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }])],
  controllers: [QuestionsController], 
  providers: [QuestionsService],
})
export class QuestionsModule {}

