import userSchema from '../schemas/userSchema';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';

export const userValidations = async (req: Request, res: Response, next: NextFunction) => {
  const { error }: { error: ValidationError } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  };
  next();
};
