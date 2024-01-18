import { ETableNames } from "../../ETableNames";
import { IItemofLine } from "../../models";
import { Knex } from "../../knex";

export const getById = async (id: number): Promise<IItemofLine | Error> => {
  try {
    const result = await Knex(ETableNames.itemofLine)
      .select("*")
      .where("id", "=", id)
      .first();

    if (result) return result;

    return new Error("produto ou serviço da os não encontrado");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar o produto ou serviço da os");
  }
};