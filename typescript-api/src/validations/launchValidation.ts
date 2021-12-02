import launchSchema from "../schemas/launchShema";
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';

export const launchValidations = async (req: Request, res: Response, next: NextFunction) => {
  const { error }: { error: ValidationError } = launchSchema.validate(req.body);
  if (error) {
    return res.status(406).json({ message: error.message });
  };
  next();
};