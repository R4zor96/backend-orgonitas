import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './productos.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async create(producto: Partial<Producto>): Promise<Producto> {
    return await this.productoRepository.save(producto);
  }

  async findAll(): Promise<Producto[]> {
    return await this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto | null> {
    return await this.productoRepository.findOneBy({ id_producto: id });
  }

  async update(id: number, data: Partial<Producto>): Promise<void> {
    await this.productoRepository.update(id, data);
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }
}