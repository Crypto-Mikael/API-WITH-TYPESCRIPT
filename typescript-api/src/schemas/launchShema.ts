import * as Joi from "joi";

const launchSchema = Joi.object({
  idUsuario:
    Joi.number()
    .required(),
  valor:
    Joi.number()
    .required(),
  descricao:
    Joi.string()
    .required(),
  data:
    Joi.date()
    .required(),
});

export default launchSchema;