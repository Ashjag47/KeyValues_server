const { KeyVal } = require("../../database/models");
const { HTTPError } = require("../utils/errors/HTTPError");

const storeData = async ({ key, value }) => {
  try {
    await KeyVal.create({ key, value });
    const response = {
      status: "success",
      message: "Data stored successfully.",
    };
    return response;
  } catch (err) {
    if (err.errors[0].message === "key must be unique") {
      throw new HTTPError("KEY_EXISTS", 409);
    }
  }
};

const getDataByKey = async (key) => {
  let data;
  try {
    data = await KeyVal.findOne({ where: { key } });
    if (!data) {
      throw new HTTPError("KEY_NOT_FOUND", 404);
    }
    const response = {
      status: "success",
      data: {
        key: data.key,
        value: data.value,
      },
    };
    return response;
  } catch (err) {
    if (!data) {
      throw new HTTPError("KEY_NOT_FOUND", 404);
    }
    throw new HTTPError("INTERNAL_SERVER_ERROR", 500);
  }
};

const updateDataByKey = async ({ key, value }) => {
  let data;
  try {
    data = await KeyVal.findOne({ where: { key } });
    if (!data) {
      throw new HTTPError("KEY_NOT_FOUND", 404);
    }
    data.value = value;
    await data.save();
    const response = {
      status: "success",
      message: "Data updated successfully.",
    };
    return response;
  } catch (err) {
    if (!data) {
      throw new HTTPError("KEY_NOT_FOUND", 404);
    }
    throw new HTTPError("INTERNAL_SERVER_ERROR", 500);
  }
};

const deleteDataByKey = async (key) => {
  let data;
  try {
    data = await KeyVal.findOne({ where: { key } });
    if (!data) {
      throw new HTTPError("KEY_NOT_FOUND", 404);
    }
    await data.destroy();
    const response = {
      status: "success",
      message: "Data deleted successfully.",
    };
    return response;
  } catch (err) {
    if (!data) {
      throw new HTTPError("KEY_NOT_FOUND", 404);
    }
    throw new HTTPError("INTERNAL_SERVER_ERROR", 500);
  }
};

module.exports = {
  storeData,
  getDataByKey,
  updateDataByKey,
  deleteDataByKey,
};
