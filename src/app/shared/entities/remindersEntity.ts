import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { UsersEntity } from "./UsersEntity";

@Entity({ name: 'reminders' })
export class RemindersEntity extends BaseEntity {
    @PrimaryColumn({ name: 'id' })
    id: string = "";

    @Column({ name: 'action' })
    action: string = "";

    @Column({ name: 'date' })
    date: string = "";

    @Column({ name: 'time' })
    time: string = "";

    @Column({ name: 'description' })
    description: string = ""

    @Column({ name: 'archived' })
    archived: boolean = false;

    @Column({ name: 'created_at' })
    created_at: string = "";

    @Column({ name: 'updated_at' })
    updated_at: string = "";

    @Column({ name: 'user_id' })
    user_id: string = "";

    @OneToOne(() => UsersEntity)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    userId?: UsersEntity;
};