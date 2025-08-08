import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Producto } from '../productos/productos.entity';

@Entity('venta')
export class Venta {
  @PrimaryGeneratedColumn({ name: 'id_venta' })
  id_venta: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'id_producto' })
  producto: Producto;

  @Column({ type: 'date', name: 'fecha_pedido' })
  fecha_pedido: Date;

  @Column({ type: 'date', name: 'fecha_entrega' })
  fecha_entrega: Date;

  @Column({ type: 'int' })
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'costo_total' })
  costo_total: number;
}