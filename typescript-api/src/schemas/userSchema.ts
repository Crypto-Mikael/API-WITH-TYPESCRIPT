import * as Joi from "joi";

const userSchema = Joi.object({
  nome:
    Joi.string()
      .min(8)
      .required(),
  email:
    Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net' ] } })
    .required(),
});

export default userSchema;