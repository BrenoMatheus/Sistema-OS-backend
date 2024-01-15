import * as create from "./Create";
import * as count from "./Count";
import * as getAll from "./GetAll";
import * as getById from "./GetById";

export const TechnicianProvider = {
  ...create,
  ...count,
  ...getAll,
  ...getById,
};