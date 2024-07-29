import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1722275634345 implements MigrationInterface {
    name = 'Default1722275634345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mesas" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_ccff054bd3dad6539869d03350c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "title" text NOT NULL, "url" text NOT NULL, "mesa_id" integer, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD CONSTRAINT "FK_84e2010d073d230ad847c8c2562" FOREIGN KEY ("mesa_id") REFERENCES "mesas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clientes" DROP CONSTRAINT "FK_84e2010d073d230ad847c8c2562"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TABLE "mesas"`);
    }

}
