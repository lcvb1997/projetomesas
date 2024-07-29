import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Mesa } from "./Mesa";

@Entity('clientes')
export class Cliente{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'text'
    })
    title:string

    @Column({
        type: 'text'
    })
    url:string

    @ManyToOne(()=> Mesa, mesa => mesa.clientes)
    @JoinColumn({name: 'mesa_id'})
    mesa: Mesa
    
}