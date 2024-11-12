// kafka-producer/src/kafka/kafka.service.ts

import { Injectable } from '@nestjs/common';
import { KafkaClient, Producer, ProduceRequest } from 'kafka-node';

@Injectable()
export class KafkaService {
  private readonly kafkaClient: KafkaClient;
  private readonly producer: Producer;

  constructor() {
    this.kafkaClient = new KafkaClient({ kafkaHost: 'localhost:9092' });
    this.producer = new Producer(this.kafkaClient);
    
    this.producer.on('ready', () => {
      console.log('Kafka producer is ready.');
    });

    this.producer.on('error', (err) => {
      console.error('Kafka producer error:', err);
    });
  }

  async sendMessage(topic: string, message: any): Promise<void> {
    const payload: ProduceRequest[] = [{
      topic,
      messages: JSON.stringify(message),
    }];

    this.producer.send(payload, (err, data) => {
      if (err) {
        console.error('Error sending message:', err);
      } else {
        console.log('Message sent:', data);
      }
    });
  }
}
