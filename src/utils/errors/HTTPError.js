const errorResponse = {
  status: "error",
  code: "INTERNAL_SERVER_ERROR",
  message: "An internal server error occurred. Please try again later.",
};

const errorMessage = (message) => {
  switch (message) {
    case "INVALID_KEY":
      return {
        ...errorResponse,
        code: "INVALID_KEY",
        message: "The provided key is not valid or missing.",
      };

    case "INVALID_VALUE":
      return {
        ...errorResponse,
        code: "INVALID_VALUE",
        message: "The provided value is not valid or missing.",
      };

    case "KEY_EXISTS":
      return {
        ...errorResponse,
        code: "KEY_EXISTS",
        message:
          "The provided key already exists in the database. To update an existing key, use the update API.",
      };

    case "INVALID_TOKEN":
      return {
        ...errorResponse,
        code: "INVALID_TOKEN",
        message: "Invalid access token provided.",
      };

    case "KEY_NOT_FOUND":
      return {
        ...errorResponse,
        code: "KEY_NOT_FOUND",
        message: "The provided key does not exist in the database.",
      };

    // More cases can be added here as needed.

    default:
      return errorResponse;
  }
};

class HTTPError extends Error {
  constructor(message, code) {
    super(message);
    message = errorMessage(message);
    this.message = message;
    this.code = code;
  }
}

module.exports = { HTTPError, errorMessage };
