import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() body: Partial<Usuario>): Promise<Usuario> {
    return await this.usuarioService.create(body);
  }

  @Get()
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Usuario> {
    const usuario = await this.usuarioService.findOne(+id);
    if (!usuario) {
      throw new NotFoundException(`Usuario with id ${id} not found`);
    }
    return usuario;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Partial<Usuario>): Promise<void> {
    return await this.usuarioService.update(+id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.usuarioService.remove(+id);
  }
}