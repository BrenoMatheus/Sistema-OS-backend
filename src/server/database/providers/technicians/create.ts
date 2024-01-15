import { ETableNames } from "../../ETableNames";
import { ITechnician } from "../../models";
import { Knex } from "../../knex";

export const create = async (
  technician: Omit<ITechnician, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.technician)
      .insert(technician)
      .returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }

    return new Error("Erro ao cadastrar o tecnico");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao cadastrar o tecnico");
  }
};
