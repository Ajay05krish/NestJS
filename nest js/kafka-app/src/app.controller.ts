// kafka-producer/src/app.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { KafkaService } from './kafka/kafka.service';

@Controller()
export class AppController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Post('send-message')
  async sendMessage(@Body() message: any): Promise<void> {
    await this.kafkaService.sendMessage('mytopic3', message);
  }
}
