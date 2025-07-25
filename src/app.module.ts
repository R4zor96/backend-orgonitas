import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'switchyard.proxy.rlwy.net',
      port: 11110,
      username: 'root',
      password: 'zuNcgyljCBRaIZDvkECEBqyxmZeFRSxV',
      database: 'Orgonitas',
      autoLoadEntities: true,
      synchronize: false, // Set to true only in development
      ssl: false
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {




}
