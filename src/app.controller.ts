import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { microserviceConfig } from './microserviceConfig';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client(microserviceConfig)
  client: ClientKafka;


  onModuleInit() {
    const requestPatterns = [
      'entity-created',
    ];

    requestPatterns.forEach(pattern => {
      this.client.subscribeToResponseOf(pattern);
    });
  }

  @Get()
  getHello(): string {
    // fire event to kafka
    // this.client.emit<string>('entity-created', 'some entity ' + new Date());
    return this.appService.getHello();
  }

  @EventPattern('entity-created')
  async handleEntityCreated(payload: any) {
    console.log(JSON.stringify(payload) + ' created');
    //console.log(payload.value + ' created');
  }
}
