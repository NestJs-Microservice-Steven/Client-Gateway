import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from './dto';
import { ORDER_SERVICE } from 'src/config';


@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(ORDER_SERVICE) private readonly orderClient: ClientProxy
  ) {}



  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderClient.send( 'createOrder', createOrderDto)  }
    
  @Get()
  findAll() {
    return this.orderClient.send('findAllOrders', {})
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderClient.send('findOneOrder', {id})
  }

}
