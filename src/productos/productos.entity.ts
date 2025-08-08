import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn({ name: 'id_producto' })
  id_producto: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'varchar', length: 255 })
  img: string;
}