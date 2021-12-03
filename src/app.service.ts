import { Injectable } from '@nestjs/common';
// import { Kafka } from 'kafkajs';
const { Kafka } = require("kafkajs")

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }

  pushdata(): string {
    const clientId = "my-app"
// we can define the list of brokers in the cluster
const brokers = ["pkc-lzvrd.us-west4.gcp.confluent.cloud:9092"]

// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({ clientId, brokers, ssl: true,
  sasl: {
      mechanism : "plain",
      username: "3LPVUUZC4I3CG3P5",
      password: "CVCUy1e1ZemxyztjqBb3hiC/igAL/O4U8aqtXiS8jAc0LqQCLjlfEW7sa5SdYSbn"
  } })
const producer = kafka.producer()

 producer.connect()
 producer.send({
    topic: 'topic-name',
    messages: [
        { key: 'key1', value: 'hello world' },
        { key: 'key2', value: 'hey hey!' }
    ],
})
    return 'Hello World!';
  }
}
