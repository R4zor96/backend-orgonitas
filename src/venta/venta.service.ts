import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './venta.entity';

@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventaRepository: Repository<Venta>,
  ) {}

  async create(venta: Partial<Venta>): Promise<Venta> {
    return await this.ventaRepository.save(venta);
  }

  async findAll(): Promise<Venta[]> {
    return await this.ventaRepository.find({ 
      relations: ['usuario', 'producto'] 
    });
  }

  async findOne(id: number): Promise<Venta | null> {
    return await this.ventaRepository.findOne({ 
      where: { id_venta: id },
      relations: ['usuario', 'producto']
    });
  }

  async update(id: number, data: Partial<Venta>): Promise<void> {
    await this.ventaRepository.update(id, data);
  }

  async remove(id: number): Promise<void> {
    await this.ventaRepository.delete(id);
  }
}