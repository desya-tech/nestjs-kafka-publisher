import {KafkaOptions, Transport} from "@nestjs/microservices";

export const microserviceConfig: KafkaOptions = {
    transport: Transport.KAFKA,

    options: {
        client: {
            // clientId:'lkc-gzv1r',
            ssl: true,
            brokers: ["pkc-lzvrd.us-west4.gcp.confluent.cloud:9092"],
            sasl: {
                mechanism : "plain",
                username: "IAN33EOALA7RD7Z5",
                password: "MSyTwcG2a2FkHCeChEl3ILQeM77z0qcxWJynL9XEfcZOzcijMj9/jdrswU0sXQTL"
            }
            // brokers: ["localhost:9093"],
        },
    }
};