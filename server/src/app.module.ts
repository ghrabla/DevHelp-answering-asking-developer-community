import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import config from "./config/keys";
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsModule } from './admins/admins.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [UserModule, AdminsModule, MongooseModule.forRoot(config.mongoURI), QuestionsModule, AnswersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
 