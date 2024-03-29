import { ETableNames } from "../../ETableNames";
import { IOrder } from "../../models";
import { Knex } from "../../knex";

export const getById = async (id: number): Promise<IOrder | Error> => {
  try {
    const result = await Knex(ETableNames.order)
      .select("*")
      .where("id", "=", id)
      .first();

    if (result) return result;

    return new Error("OS não encontrado");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar a OS");
  }
};