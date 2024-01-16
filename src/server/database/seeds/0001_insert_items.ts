import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export const seed = async (knex: Knex) => {
  const [{ count }] = await knex(ETableNames).count<[{ count: number }]>(
    "* as count"
  );
  if (!Number.isInteger(count) || Number(count) > 0) return;

  const itemToInsert = item.map((item) => ({
    name: item.name,
    price: item.price,
    amount: item.amount,
  }));
  await knex(ETableNames.item).insert(itemToInsert);
};

const item = [
  {
    name: "Roda",
    price: "1000",
    amount: "100"
  },
  {
    name: "Mangueira",
    price: "200",
    amount: "70"
  },
  {
    name: "Alicate",
    price: "30",
    amount: "50"
  },
];
