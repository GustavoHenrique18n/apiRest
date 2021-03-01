import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSurveysUsers1614550075399 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"surveys_users",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"user_id",
                        type:"uuid"
                    },
                    {
                        name:"survey_id",
                        type:"number"
                    },
                    {
                        name:"value",
                        type:"number",
                        isNullable: true

                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },




                ],

                foreignKeys: [
                    {
                        name:"FKUser",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name:"FKSurveys",
                        referencedTableName:"surveys",
                        referencedColumnNames:["id"],
                        columnNames:["survey_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        )
    }
            
           
                  

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
