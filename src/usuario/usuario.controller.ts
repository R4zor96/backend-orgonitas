import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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
  async update(
    @Param('id') id: string,
    @Body() body: Partial<Usuario>,
  ): Promise<void> {
    return await this.usuarioService.update(+id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.usuarioService.remove(+id);
  }

  @Post('login')
  async login(
    @Body() body: { correo: string; password: string },
  ): Promise<Usuario> {
    const usuario = await this.usuarioService.findByCorreoAndPassword(
      body.correo,
      body.password,
    );
    if (!usuario) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }
    return usuario; // aquí podrías devolver solo datos necesarios, no la contraseña
  }
}
