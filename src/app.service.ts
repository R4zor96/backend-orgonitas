import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Conexion exitosa con la base de datos!';
  }
}
