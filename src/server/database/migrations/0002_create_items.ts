import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.item, (table) => {
      table.bigIncrements("id").primary().index();
      table.string("name", 70).checkLength("<=", 70).index().notNullable();
      table.float("price", 50).index().notNullable();
      table.integer("amount", 50).index();

      table.comment("Table used to store system itens");
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.item}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.item).then(() => {
    console.log(`# Dropped table ${ETableNames.item}`);
  });
}