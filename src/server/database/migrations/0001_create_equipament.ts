import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.equipment, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("name", 70).checkLength("<=", 70).index().notNullable();
      table.string("serieNumber").checkLength("<=", 30).unique().notNullable().index();
      table.string("type", 30).checkLength("<=", 30).index().notNullable();
      table.string("description", 150).checkLength("<=", 150).index();

      table.comment("Table used to store system equipments");
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.equipment}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.equipment).then(() => {
    console.log(`# Dropped table ${ETableNames.equipment}`);
  });
}