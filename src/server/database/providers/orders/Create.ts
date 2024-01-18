import { ETableNames } from "../../ETableNames";
import { IOrder } from "../../models";
import { Knex } from "../../knex";

export const create = async (
  order: Omit<IOrder, "id">
): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.order)
      .insert(order)
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
