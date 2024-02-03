import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export const seed = async (knex: Knex) => {
  const [{ count }] = await knex(ETableNames.equipment).count<[{ count: number }]>(
    "* as count"
  );
  if (!Number.isInteger(count) || Number(count) > 0) return;

  const equipmentToInsert = equipment.map((equipment) => ({
    name: equipment.name,
    serieNumber: equipment.serieNumber,
    type: equipment.type,
    description: equipment.description
  }));
  await knex(ETableNames.equipment).insert(equipmentToInsert);
};

const equipment = [
  {
    name: "Emp. Retratil",
    serieNumber: "123S2023",
    type: "retratil",
    description: "Equipamento Retratil"
  },
  {
    name: "Emp. Combustão",
    serieNumber: "456S2023",
    type: "Combustão",
    description: "Equipamento combustão"
  },
  {
    name: "Emp. Eletrica",
    serieNumber: "789S2023",
    type: "Eletrica",
    description: "Equipamento Eletrica"
  },
  {
    name: "RC44-25",
    serieNumber: "753S2023",
    type: "Combustão",
    description: "Equipamento á combustão RC"
  },
];