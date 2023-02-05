import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import config from "./config/keys";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
