import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Horario } from "./Horarios";

@Entity('mesas')
export class Mesa {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'text'
    })
    name:string

    
    @OneToMany(() => Cliente, cliente => cliente.mesa)
    clientes: Cliente[]

    @ManyToMany(()=> Horario, horario => horario.mesas)
    horarios: Horario[]
}