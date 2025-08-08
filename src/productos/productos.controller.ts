import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './productos.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() producto: Producto): Promise<Producto> {
    return await this.productosService.create(producto);
  }

  @Get()
  async findAll(): Promise<Producto[]> {
    return await this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Producto | null> {
    return await this.productosService.findOne(+id);
  }
s
  @Put(':id')
  async update(@Param('id') id: string, @Body() productoData: Producto): Promise<void> {
    return await this.productosService.update(+id, productoData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.productosService.remove(+id);
  }
}
