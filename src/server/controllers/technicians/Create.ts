import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { TechnicianProvider } from "../../database/providers/technicians";
import { ITechnician } from "../../database/models";
import { validation } from "../../shared/middleware";

//omit 'id' because we are not going to use it in creation
interface IBodyProps extends Omit<ITechnician, "id"> {}

// schema for validation data
export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      name: yup.string().required().min(3).max(70),
      email: yup.string().required().email(),
      category: yup.string().required().min(3).max(70),
      description: yup.string().optional(),
    })
  ),
}));

export const create = async (
  req: Request<{}, {}, IBodyProps>,
  res: Response
) => {
  const result = await TechnicianProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};
