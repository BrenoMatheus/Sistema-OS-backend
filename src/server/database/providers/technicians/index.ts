import * as create from "./Create";
import * as count from "./Count";
import * as getAll from "./GetAll";

export const TechnicianProvider = {
  ...create,
  ...count,
  ...getAll,
};