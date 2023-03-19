import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';
import { AnswerSchema } from './schema/answer.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Answer', schema: AnswerSchema }])],
  controllers: [AnswersController], 
  providers: [AnswersService],
})
export class AnswersModule {}

