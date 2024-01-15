import { ETableNames } from "../../ETableNames";
import { IEquipment } from "../../models";
import { Knex } from "../../knex";

export const create = async (
  equipment: Omit<IEquipment, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.equipment)
      .insert(equipment)
      .returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }

    return new Error("Erro ao cadastrar o equipamento");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao cadastrar o equipamento");
  }
};
