import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export const seed = async (knex: Knex) => {
  const [{ count }] = await knex(ETableNames).count<[{ count: number }]>(
    "* as count"
  );
  if (!Number.isInteger(count) || Number(count) > 0) return;

  const orderToInsert = order.map((order) => ({
    type: order.type,
    defect: order.defect,
    causes: order.causes,
    solution: order.solution,
    date_init_os: order.date_init_os,
    date_end_os: order.date_end_os,
    total: order.total,
    status: order.status,
    equipmentID: order.equipmentID,
    technicianID: order.technicianID,
  }));
  await knex(ETableNames.order).insert(orderToInsert);
};

const order = [
  {
    type: "Corretiva",
    defect: "Pneu furo",
    causes: "Passou em um prego",
    solution: "troca do pneu",
    date_init_os: new Date("2023-11-10T03:00:00.000Z"),
    date_end_os: new Date("2023-11-10T03:00:00.000Z"),
    total: 1000,
    status:true,
    equipmentID: 3,
    technicianID: 3,
  },
  {
    type: "Preventiva",
    defect: "dia de preventiva",
    causes: "preventiva",
    solution: "troca do oleo e filtro",
    date_init_os: new Date("2023-11-10T03:00:00.000Z"),
    date_end_os: new Date("2023-11-10T03:00:00.000Z"),
    status: true,
    total: 1250,
    equipmentID: 2,
    technicianID: 2,
  },
  {
    type: "Garantia",
    defect: "Controlador com defeito",
    causes: "defeito de fabrica",
    solution: "troca do ccontrolador",
    date_init_os: new Date("2023-11-10T03:00:00.000Z"),
    date_end_os: new Date("2023-11-10T03:00:00.000Z"),
    status: false,
    total: 2500,
    equipmentID: 1,
    technicianID: 1,
  },
  {
    type: "Corretiva",
    defect: "roda de carga soltou a bandagem",
    causes: "Desgate natural",
    solution: "troca da roda",
    date_init_os: new Date("2023-11-10T03:00:00.000Z"),
    date_end_os: new Date("2023-11-10T03:00:00.000Z"),
    status: false,
    total: 1250,
    equipmentID: 1,
    technicianID: 2,
  },
];
