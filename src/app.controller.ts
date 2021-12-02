import { Controller, Get } from '@nestjs/common';
import {  MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Kafka, KafkaMessage } from 'kafkajs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("bigquery")
  async getHello(@Payload() message: KafkaMessage) {
    console.log(message.value[0]);
    return message;
  }
}
