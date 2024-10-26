import { Entity,Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { PropertyFeature } from "./propertyFeature.entity";

@Entity()
export class Property{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    description:string

    @Column({default:0})
    price:number 


    @OneToOne(()=>PropertyFeature, (PropertyFeature)=>PropertyFeature.property)
    propertyFeature:PropertyFeature
}