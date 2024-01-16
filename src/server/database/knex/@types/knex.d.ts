import { IEquipment, IItem, IItemofLine, ITechnician } from "../../models";

declare module "knex/types/tables" {
  interface Tables {
    technician: ITechnician;
    equipment: IEquipment;
    item: IItem;
    itemofLine: IItemofLine;
  }
}