import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaService } from './kafka/kafka.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [KafkaService],
})
export class AppModule {}
