import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Launch {

  constructor(valor: number, descricao: string, data: Date, usuario: User) {
    this.valor = valor;
    this.descricao = descricao;
    this.data = data;
    this.usuario = usuario;
  };

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  valor: number;

  @Column()
  descricao: string;

  @Column()
  data: Date;

  @ManyToOne(() => User)
  usuario: User;
};