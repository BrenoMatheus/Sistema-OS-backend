import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { ItemofLineProvider } from "../../database/providers/itemofLines";
import { IItemofLine } from "../../database/models";
import { validation } from "../../shared/middleware";

//omit 'id' because we are not going to use it in creation
interface IBodyProps extends Omit<IItemofLine, "id"> {}

// schema for validation data
export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      amount: yup.number().required(),
      total: yup.number().required(),
      ordemID: yup.number().integer().required(),
      itemID: yup.number().integer().required(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  const result = await ItemofLineProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};
