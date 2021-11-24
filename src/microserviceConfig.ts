import {KafkaOptions, Transport} from "@nestjs/microservices";

export const microserviceConfig: KafkaOptions = {
    transport: Transport.KAFKA,
// use confluent cloud for free
// generated username and pass from confluent->choose your cluster->data-integration->api keys
    options: {
        client: {
            // clientId:'lkc-gzv1r',
            ssl: true,
            brokers: ["pkc-lzvrd.us-west4.gcp.confluent.cloud:9092"],
            sasl: {
                mechanism : "plain",
                username: "",
                password: ""
            }
            // brokers: ["localhost:9093"],
        },
    }
};