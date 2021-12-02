import {KafkaOptions, Transport} from "@nestjs/microservices";

export const microserviceConfig: KafkaOptions = {
    transport: Transport.KAFKA,
// use confluent cloud for free
// generated username and pass from confluent->choose your cluster->data-integration->api keys
    options: {
        client: {
            brokers: ["pkc-lzvrd.us-west4.gcp.confluent.cloud:9092"],
            ssl: true,
            sasl: {
                mechanism : "plain",
                username: "3LPVUUZC4I3CG3P5",
                password: "CVCUy1e1ZemxyztjqBb3hiC/igAL/O4U8aqtXiS8jAc0LqQCLjlfEW7sa5SdYSbn"
            }
            // brokers: ["localhost:9093"],
        },
    }
};