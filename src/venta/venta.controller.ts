import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VentaService } from './venta.service';
import { Venta } from './venta.entity';

@Controller('ventas')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Post()
  async create(@Body() venta: Partial<Venta>): Promise<Venta> {
    return await this.ventaService.create(venta);
  }

  @Get()
  async findAll(): Promise<Venta[]> {
    return await this.ventaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Venta | null> {
    return await this.ventaService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Venta>): Promise<void> {
    await this.ventaService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.ventaService.remove(+id);
  }
}