import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaController } from './venta.controller';
import { VentaService } from './venta.service';
import { Venta } from './venta.entity';
import { Usuario } from '../usuario/usuario.entity';
import { Producto } from '../productos/productos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venta, Usuario, Producto])],
  controllers: [VentaController],
  providers: [VentaService],
})
export class VentaModule {}

