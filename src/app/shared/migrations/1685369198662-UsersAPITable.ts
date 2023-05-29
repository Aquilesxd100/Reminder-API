import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class UsersAPITable1685369198662 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: 'users',
                columns: [
                    new TableColumn({
                        name: 'id',
                        type: 'uuid',
                        default: 'gen_random_uuid()',
                        isPrimary: true,
                    }),
                    new TableColumn({
                        name: 'username',
                        type: 'varchar(10)',
                        isUnique: true,
                        isNullable: false
                    }),
                    new TableColumn({
                        name: 'password',
                        type: 'varchar(10)',
                        isNullable: false
                    }),
                    new TableColumn({
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    })
                ]
            })
        );
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    };

}
