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
    price: 1000,
    amount: 100
  },
  {
    name: "Mangueira",
    price: 200,
    amount: 70
  },
  {
    name: "Hora técnica",
    price: 150,
    amount: 99999
  },
  {
    name: "pneu",
    price: 1200,
    amount: 20
  },
  {
    name: "Alicate",
    price: 30,
    amount: 50
  },
];