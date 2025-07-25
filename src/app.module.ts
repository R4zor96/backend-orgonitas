import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'switchyard.proxy.rlwy.net',
      port: 11110,
      username: 'AdOrgonitas',
      password: 'PassOrgo332211',
      database: 'Orgonitas',
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    UsuarioModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
