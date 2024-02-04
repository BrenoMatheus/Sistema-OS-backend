import { ETableNames } from "../../ETableNames";
import { IOrder } from "../../models";
import { Knex } from "../../knex";

export const getAll = async (
  page: number,
  limit: number,
  filter: string,
  id = 0
): Promise<IOrder[] | Error> => {
  try {
    const result = await Knex(ETableNames.order)
      .select("*")
      .where("id", Number(id))
      .orWhere("defect", "like", `%${Number(filter)}%`)
      .offset((page - 1) * limit)
      .limit(limit);

    if (id > 0 && result.every((order) => order.id !== id)) {
      const resultById = await Knex(ETableNames.order)
        .select("*")
        .where("id", "=", id)
        .first();

      if (resultById) return [...result, resultById];
    }

    return result;
  } catch (error) {
    console.log(error);
    return new Error("Erro ao consultar a OS");
  }
};