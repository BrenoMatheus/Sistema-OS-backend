import { ETableNames } from "../../ETableNames";
import { ITechnician } from "../../models";
import { Knex } from "../../knex";

export const updateById = async (
  id: number,
  technician: Omit<ITechnician, "id">
): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.technician)
      .update(technician)
      .where("id", "=", id);

    if (result > 0) return;

    return new Error("Erro ao atualizar o registro");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao atualizar o registro");
  }
};