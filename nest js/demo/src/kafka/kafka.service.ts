import { Injectable } from '@nestjs/common';
import { KafkaClient, Consumer } from 'kafka-node';

@Injectable()
export class KafkaService {
  private readonly kafkaClient: KafkaClient;
  private readonly consumer: Consumer;

  constructor() {
    this.kafkaClient = new KafkaClient({ kafkaHost: 'localhost:9092' });
    this.consumer = new Consumer(
      this.kafkaClient,
      [{ topic: 'mytopic3', partition: 0 }],
      { autoCommit: true }
    );

    this.consumer.on('message', (message) => {
      console.log('Received message:', message);
      
    });

    this.consumer.on('error', (err) => {
      console.error('Kafka error:', err);
    });
  }
}
