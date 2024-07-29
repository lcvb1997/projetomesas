import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1722276476444 implements MigrationInterface {
    name = 'Default1722276476444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "horarios" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_c69b602fc8441125f1310a4858d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "mesa_horario" ("mesa_id" integer NOT NULL, "horario_id" integer NOT NULL, CONSTRAINT "PK_9ebd09700f4ca48aa8fcdeb26c6" PRIMARY KEY ("mesa_id", "horario_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a40745461bc556aa8a0e374524" ON "mesa_horario" ("mesa_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_d6d2a60b81ca0a5f3a898c36fc" ON "mesa_horario" ("horario_id") `);
        await queryRunner.query(`ALTER TABLE "mesa_horario" ADD CONSTRAINT "FK_a40745461bc556aa8a0e374524c" FOREIGN KEY ("mesa_id") REFERENCES "horarios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "mesa_horario" ADD CONSTRAINT "FK_d6d2a60b81ca0a5f3a898c36fcf" FOREIGN KEY ("horario_id") REFERENCES "mesas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mesa_horario" DROP CONSTRAINT "FK_d6d2a60b81ca0a5f3a898c36fcf"`);
        await queryRunner.query(`ALTER TABLE "mesa_horario" DROP CONSTRAINT "FK_a40745461bc556aa8a0e374524c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d6d2a60b81ca0a5f3a898c36fc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a40745461bc556aa8a0e374524"`);
        await queryRunner.query(`DROP TABLE "mesa_horario"`);
        await queryRunner.query(`DROP TABLE "horarios"`);
    }

}
