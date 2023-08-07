class HTTPError extends Error {
  constructor(message, code) {
    super(message);
    // message = errorMessage(message);
    this.message = message;
    this.code = code;
  }
}

module.exports = { HTTPError };
