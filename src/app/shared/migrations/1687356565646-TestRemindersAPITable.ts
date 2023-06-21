import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class TestRemindersAPITable1687356565646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'reminders',
                columns: [
                    new TableColumn({
                        name: 'id',
                        type: 'uuid',
                        default: 'gen_random_uuid()',
                        isPrimary: true,
                    }),
                    new TableColumn({
                        name: 'action',
                        type: 'varchar(21)',
                        isNullable: false
                    }),
                    new TableColumn({
                        name: 'date',
                        type: 'varchar(10)',
                        isNullable: false
                    }),
                    new TableColumn({
                        name: 'time',
                        type: 'varchar(5)',
                        isNullable: false
                    }),
                    new TableColumn({
                        name: 'description',
                        type: 'varchar(66)',
                        isNullable: false
                    }),
                    new TableColumn({
                        name: 'archived',
                        type: 'boolean',
                        isNullable: false,                        
                    }),
                    new TableColumn({
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    }),
                    new TableColumn({
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'null',
                        isNullable: true
                    }),
                    new TableColumn({
                        name: 'user_id',
                        type: 'uuid',
                        isNullable: false
                    })
                ],
                foreignKeys: [{
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id']
                }]                   
            })
        );
        await queryRunner.query(`
            CREATE INDEX idx_reminder_archived_status ON reminders(archived);
            create or replace function update_date_func()
            returns trigger as
            $$
                begin
                    new.updated_at = now();
                return new;
                end;
            $$ language plpgsql;  
            create trigger update_date before update on reminders
            for each row execute procedure update_date_func();
        `);
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX idx_reminder_archived_status;
            DROP TRIGGER IF EXISTS update_date ON reminders;
            DROP FUNCTION IF EXISTS update_date_func();
        `);
        await queryRunner.dropTable('reminders');
    };

}
