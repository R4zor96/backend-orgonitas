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

  create(producto: Partial<Producto>) {
    return this.productoRepository.save(producto);
  }

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id: number) {
    return this.productoRepository.findOneBy({ id_producto: id });
  }

  update(id: number, data: Partial<Producto>) {
    return this.productoRepository.update(id, data);
  }

  remove(id: number) {
    return this.productoRepository.delete(id);
  }
}

