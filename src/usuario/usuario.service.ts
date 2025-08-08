import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(usuario: Partial<Usuario>): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario | null> {
    return await this.usuarioRepository.findOneBy({ id });
  }

  async update(id: number, data: Partial<Usuario>): Promise<void> {
    await this.usuarioRepository.update(id, data);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}