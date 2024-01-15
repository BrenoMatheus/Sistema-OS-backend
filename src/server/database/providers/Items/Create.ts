import { ETableNames } from "../../ETableNames";
import { IItem } from "../../models";
import { Knex } from "../../knex";

export const create = async (
  item: Omit<IItem, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.item)
      .insert(item)
      .returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }

    return new Error("Erro ao cadastrar o item");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao cadastrar o item");
  }
};
