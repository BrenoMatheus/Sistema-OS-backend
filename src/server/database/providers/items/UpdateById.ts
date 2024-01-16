import { ETableNames } from "../../ETableNames";
import { IItem } from "../../models";
import { Knex } from "../../knex";

export const updateById = async (
  id: number,
  item: Omit<IItem, "id">
): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.item)
      .update(item)
      .where("id", "=", id);

    if (result > 0) return;

    return new Error("Erro ao atualizar o registro");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao atualizar o registro");
  }
};