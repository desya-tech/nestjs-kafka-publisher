import {KafkaOptions, Transport} from "@nestjs/microservices";

export const microserviceConfig: KafkaOptions = {
    transport: Transport.KAFKA,

    options: {
        client: {
            // clientId:'lkc-gzv1r',
            // ssl: true,
            // brokers: ["pkc-lzvrd.us-west4.gcp.confluent.cloud:9092"],
            brokers: ["localhost:9093"],
        },
        consumer: {
            groupId: '1',
            allowAutoTopicCreation: true,
        },
    }
};