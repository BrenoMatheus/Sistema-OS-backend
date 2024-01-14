import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.technician, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("name", 70).checkLength("<=", 70).index().notNullable();
      table.string("email").unique().notNullable();
      table.string("category", 70).checkLength("<=", 70).index().notNullable();
      table.string("description", 150).checkLength("<=", 150).index();

      table.comment("Table used to store system technicians");
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.technician}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.technician).then(() => {
    console.log(`# Dropped table ${ETableNames.technician}`);
  });
}