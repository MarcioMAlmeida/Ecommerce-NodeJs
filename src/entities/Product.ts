import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Double } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("products")
class Products {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    cost: ;

    @Column()
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export { Products }





