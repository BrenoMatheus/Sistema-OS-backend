import { ETableNames } from "../../ETableNames";
import { IOrder } from "../../models";
import { Knex } from "../../knex";

export const updateById = async (
  id: number,
  order: Omit<IOrder, "id">
): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.order)
      .update(order)
      .where("id", "=", id);

    if (result > 0) return;

    return new Error("Erro ao atualizar a OS");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao atualizar a OS");
  }
};