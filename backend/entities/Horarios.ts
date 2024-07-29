import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Mesa } from "./Mesa";


@Entity('horarios')
export class Horario {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'text'
    })
    name: string


    @ManyToMany(() => Mesa, mesa => mesa.horarios)
    @JoinTable({
        name: 'mesa_horario',
        joinColumn: {
            name: 'mesa_id',
            referencedColumnName:'id'
        },
        inverseJoinColumn:{
            name: 'horario_id',
            referencedColumnName: 'id'
        }
    })
    mesas: Mesa[]
}