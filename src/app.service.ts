import { Injectable } from '@nestjs/common';
import { Kafka } from '@nestjs/microservices/external/kafka.interface';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }

  getHello(): string {
    return 'Hello World! ' + new Date();
  }

  // getHello(){
  //   const { Kafka } = require('kafkajs')
  //   const kafka = new Kafka({
  //     clientId: 'my-app',
  //     brokers: ['localhost:9092']
  //   })
  //   const producer = kafka.producer()
  //   const consumer = kafka.consumer({ groupId: '1' })
  //    producer.connect()
  //    producer.send({
  //     topic: 'test-topic',
  //     messages: [
  //       { value: 'Hello KafkaJS user!' },
  //     ],
  //   })
  // }
}
