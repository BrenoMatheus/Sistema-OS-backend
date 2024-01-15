import { ITechnician } from "../../models/technician";

declare module "knex/types/tables" {
  interface Tables {
    technician: ITechnician;
  }
}