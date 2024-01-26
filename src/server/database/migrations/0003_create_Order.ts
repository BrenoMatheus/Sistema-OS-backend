import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.order, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("type", 20).checkLength("<=", 20).index().notNullable();
      table.string("defect", 150).checkLength("<=", 150).notNullable();
      table.string("causes", 150).checkLength("<=", 150).notNullable();
      table.string("solution", 150).checkLength("<=", 150).notNullable();
      table.boolean("status").notNullable();
      table.date("date_init_os").index().notNullable();
      table.date("date_end_os");
      table.float("total", 50).notNullable();
      table
        .bigInteger("equipmentID")
        .index()
        .notNullable()
        .references("id")
        .inTable(ETableNames.equipment)
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      table
        .bigInteger("technicianID")
        .index()
        .notNullable()
        .references("id")
        .inTable(ETableNames.technician)
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      table.comment("Table used to store system Items");
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.order}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.order).then(() => {
    console.log(`# Dropped table ${ETableNames.order}`);
  });
}
