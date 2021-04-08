import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
  // microservice
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://znxrdwfs:9IKPw_XYHqQTiDjc98pp5W-PtwjfFPDt@dingo.rmq.cloudamqp.com/znxrdwfs'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen(() => {
    console.log("Microservice is listening");
  })
}
bootstrap();
