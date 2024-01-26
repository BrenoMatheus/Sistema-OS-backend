import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { OrderProvider } from "../../database/providers/orders";
import { validation } from "../../shared/middleware";
import { IOrder } from "../../database/models";

interface IParamProps {
  id?: number;
}

interface IBodyProps extends Omit<IOrder, "id"> {}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      type: yup.string().required().min(5).max(20),
      defect: yup.string().required().min(3).max(150),
      causes: yup.string().required().min(3).max(150),
      solution: yup.string().required().min(3).max(150),
      status: yup.boolean().required(),
      date_init_os: yup.date().required(),
      date_end_os: yup.date().optional(),
      total: yup.number().required(),
      equipmentID: yup.number().integer().required(),
      technicianID: yup.number().integer().required(),
    })
  ),
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const updateById = async (
  req: Request<IParamProps, {}, IBodyProps>,
  res: Response
) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: "O parâmetro 'id' precisa ser informado.",
      },
    });
  }

  const result = await OrderProvider.updateById(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json(result);
};