import { Module } from '@nestjs/common';

import { OrdersController } from './orders.controller';
import { envs } from 'src/config';
import { NatsModule } from 'src/nats/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
   NatsModule
  ],
})
export class OrdersModule {

  constructor(){
    console.log(envs)
  }
}
