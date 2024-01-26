import { ETableNames } from "../../ETableNames";
import { IItemofLine } from "../../models";
import { Knex } from "../../knex";

export const getAll = async (
  page: number,
  limit: number,
  filter: string,
  id = 0
): Promise<IItemofLine[] | Error> => {
  try {
    const result = await Knex(ETableNames.itemofLine)
      .select("*")
      .where("id", Number(id))
      .orWhere("orderID", "like", `%${filter}%`)
      .offset((page - 1) * limit)
      .limit(limit);

    if (id > 0 && result.every((itemofLine) => itemofLine.id !== id)) {
      const resultById = await Knex(ETableNames.itemofLine)
        .select("*")
        .where("id", "=", id)
        .first();

      if (resultById) return [...result, resultById];
    }

    return result;
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar o produto ou serviço da os");
  }
};