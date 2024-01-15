import { ETableNames } from "../../ETableNames";
import { IEquipment } from "../../models";
import { Knex } from "../../knex";

export const updateById = async (
  id: number,
  equipment: Omit<IEquipment, "id">
): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.equipment)
      .update(equipment)
      .where("id", "=", id);

    if (result > 0) return;

    return new Error("Erro ao atualizar o registro");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao atualizar o registro");
  }
};