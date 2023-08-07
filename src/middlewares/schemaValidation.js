const { HTTPError } = require("../utils/errors/HTTPError");

const bodyValidation = (schema) => (req, res, next) => {
  try {
    const { value, error } = schema.validate(req.body);
    if (error) {
      throw new HTTPError(error.message, 400);
    }
    req.body = value;
    next();
  } catch (err) {
    if (err instanceof HTTPError) {
      res.status(err.code).send(err.message);
    } else {
      res.status(500).send(err.message);
    }
  }
};

module.exports = { bodyValidation };
