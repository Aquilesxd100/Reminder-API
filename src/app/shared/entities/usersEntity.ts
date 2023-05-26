import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
    @PrimaryColumn({ name: 'id'})
    id?: string;

    @Column({ name: 'username' })
    username: string = "";

    @Column({ name: 'password' })
    password: string = "";

    @Column({ name: 'created_at' })
    created_at?: string;
};