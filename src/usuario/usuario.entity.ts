import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

export enum RolUsuario {
  ADMIN = 'admin',
  USUARIO = 'usuario',
}

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ name: 'apellido_paterno', length: 100 })
  apellidoPaterno: string;

  @Column({ name: 'apellido_materno', length: 100 })
  apellidoMaterno: string;

  @Column({ length: 20 })
  celular: string;

  @Column({ length: 100 })
  correo: string;

  @Column({ length: 100 })
  password: string;

  @Column({
    type: 'enum',
    enum: RolUsuario,
  })
  rol: RolUsuario;

  @Column({ length: 100, nullable: true })
  calle: string;

  @Column({ length: 10, nullable: true })
  numero: string;

  @Column({ length: 100, nullable: true })
  colonia: string;

  @Column({ length: 10, nullable: true })
  cp: string;

  @Column({ length: 100, nullable: true })
  municipio: string;

  @Column({ length: 100, nullable: true })
  estado: string;

  @Column('text', { nullable: true })
  referencias: string;
}
