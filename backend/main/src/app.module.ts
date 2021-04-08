import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/kanban', {
    autoCreate: true
  }), PostModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
