import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export const seed = async (knex: Knex) => {
  const [{ count }] = await knex(ETableNames.technician).count<[{ count: number }]>(
    "* as count"
  );
  if (!Number.isInteger(count) || Number(count) > 0) return;

  const technicianToInsert = technician.map((technician) => ({
    name: technician.name,
    email: technician.email,
    category: technician.category,
    description: technician.description,
  }));
  await knex(ETableNames.technician).insert(technicianToInsert);
};

const technician = [
  {
    name: "Roberto",
    email: "test@mail.com",
    category: "mecanico",
    description: "Este é o teste de mecanico",
  },
  {
    name: "Sergio",
    email: "test1@mail.com",
    category: "eletricista",
    description: "Este é o teste de eletricista",
  },
  {
    name: "Leandro",
    email: "test2@mail.com",
    category: "TTT",
    description: "Este é o teste de TTT",
  },
];