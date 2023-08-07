const { HTTPError, errorMessage } = require("../utils/errors/HTTPError");
const axios = require("axios");

const tokenValidation = async (req, res, next) => {
  try {
    const token = req.headers?.authorization;
    const verifyToken = await axios.post(
      "http://localhost:3000/api/token/validate",
      { token: "validating token" },
      { headers: { Authorization: token } }
    );
    if (verifyToken) next();
    else {
      throw new HTTPError("invalid token", 400);
    }
  } catch (err) {
    const error = err.response.data.message;
    const errorMsg = error ? errorMessage(error) : err.message;
    res.status(400).json({ message: errorMsg });
  }
};
module.exports = { tokenValidation };
