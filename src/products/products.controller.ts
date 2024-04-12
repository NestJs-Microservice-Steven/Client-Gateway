import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}


  @Post()
  createProduct(){
    return 'Crea un producto :D'
  }


  @Get()
  findAllProducts(){
    return 'Esta funcion regresa varios productos'
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return `Esta funcion regresa el producto #${id}`
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string){
    return `Esta elimina el producto #${id}`
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: any){
    return `Esta Funcion actualiza el producto #${id}`
  }
}
