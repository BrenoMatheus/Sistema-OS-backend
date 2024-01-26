import { Knex } from "knex";

import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
  return knex.schema
    .createTable(ETableNames.itemofLine, (table) => {
      table.bigIncrements("id").primary().index();
      table.integer("amount", 50).checkLength("<=", 50).index().notNullable();
      table.float("total", 50).checkLength("<=", 50).index().notNullable();
      table
        .bigInteger("orderID")
        .index()
        .notNullable()
        .references("id")
        .inTable(ETableNames.order)
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      table
        .bigInteger("itemID")
        .index()
        .notNullable()
        .references("id")
        .inTable(ETableNames.item)
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      table.comment("Table used to store system Items");
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.itemofLine}`);
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.itemofLine).then(() => {
    console.log(`# Dropped table ${ETableNames.itemofLine}`);
  });
}
