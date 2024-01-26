import { IEquipment, IItem, IItemofLine, ITechnician, IOrder, IUser} from "../../models";

declare module "knex/types/tables" {
  interface Tables {
    technician: ITechnician;
    equipment: IEquipment;
    item: IItem;
    order: IOrder;
    itemofLine: IItemofLine;
    user: IUser;
  }
}