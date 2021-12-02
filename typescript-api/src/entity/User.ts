import {Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany} from "typeorm";
import { Launch } from "./Launch";

@Entity()
export class User {

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @OneToMany(() => Launch, lancamento => lancamento.usuario)
    lancamento: Launch[];
}
