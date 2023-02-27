import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import config from "./config/keys";
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsModule } from './admins/admins.module';
import { QuestionController } from './questions/question.controller';
import { QuestionService } from './question/question.service';
import { QuestionModule } from './question/question.module';
import { QuestionsService } from './questions/questions.service';
import { QuestionsModule } from './questions/questions.module';
import { AnswersController } from './answers/answers.controller';
import { AnswersService } from './answers/answers.service';
import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [UserModule, AdminsModule, MongooseModule.forRoot(config.mongoURI), QuestionModule, QuestionsModule, AnswersModule],
  controllers: [QuestionController, AnswersController],
  providers: [QuestionService, QuestionsService, AnswersService],
})
export class AppModule {}
 