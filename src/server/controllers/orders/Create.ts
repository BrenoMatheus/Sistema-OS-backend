import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { OrderProvider } from "../../database/providers/orders";
import { IOrder } from "../../database/models";
import { validation } from "../../shared/middleware";

//omit 'id' because we are not going to use it in creation
interface IBodyProps extends Omit<IOrder, "id"> {}

// schema for validation data
export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      type: yup.string().required().min(5).max(20),
      defect: yup.string().required().min(3).max(150),
      causes: yup.string().required().min(3).max(150),
      solution: yup.string().required().min(3).max(150),
      date_init_os: yup.date().required(),
      date_end_os: yup.date().optional(),
      total: yup.number().required(),
      equipmentID: yup.number().integer().required(),
      technicianID: yup.number().integer().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  const result = await OrderProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};
