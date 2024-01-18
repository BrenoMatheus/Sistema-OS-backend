import { ETableNames } from "../../ETableNames";
import { IItemofLine } from "../../models";
import { Knex } from "../../knex";

export const create = async (
  itemofLine: Omit<IItemofLine, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.itemofLine)
      .insert(itemofLine)
      .returning("id");

    if (typeof result === "object") {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }

    return new Error("Erro ao cadastrar os serviços ou peças");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao cadastrar os serviços ou peças");
  }
};
