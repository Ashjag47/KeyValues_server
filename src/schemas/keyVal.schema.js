const joi = require("joi");

module.exports = {
  keyValPayload: joi.object({
    key: joi.string().required().messages({
      "string.empty": "INVALID_KEY",
    }),
    value: joi.string().required().messages({
      "string.empty": "INVALID_KEY",
    }),
  }),
};
