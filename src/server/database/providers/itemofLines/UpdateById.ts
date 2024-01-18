import { ETableNames } from "../../ETableNames";
import { IItemofLine } from "../../models";
import { Knex } from "../../knex";

export const updateById = async (
  id: number,
  itemofLine: Omit<IItemofLine, "id">
): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.itemofLine)
      .update(itemofLine)
      .where("id", "=", id);

    if (result > 0) return;

    return new Error("Erro ao atualizar o produto ou serviço da os");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao atualizar o produto ou serviço da os");
  }
};