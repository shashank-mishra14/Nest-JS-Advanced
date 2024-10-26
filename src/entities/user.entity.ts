import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Property } from './property.entity';
  
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    email: string;
  
    @Column({ nullable: true })
    avatarUrl: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    password: string;
  
    @Column({ nullable: true })
    hashedRefreshToken: string;
  
    @OneToMany(() => Property, (property) => property.user)
    properties: Property[];
  
    @ManyToMany(() => Property, (property) => property.likedBy)
    @JoinTable({ name: 'user_liked_properties' })
    likedProperties: Property[];
  }