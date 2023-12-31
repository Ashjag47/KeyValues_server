const keyVal = require("../services/keyVal.js");
const { HTTPError } = require("../utils/errors/HTTPError");

const storeData = async (req, res) => {
  try {
    const { key, value } = req.body;
    const data = await keyVal.storeData({ key, value });
    res.status(201).json(data);
  } catch (err) {
    res.status(err.code).json({ message: err.message });
  }
};

const getDataByKey = async (req, res) => {
  try {
    const { key } = req.params;
    const data = await keyVal.getDataByKey(key);
    res.status(200).json(data);
  } catch (err) {
    res.status(err.code).json({ message: err.message });
  }
};

const updateDataByKey = async (req, res) => {
  try {
    const { key } = req.params;
    const { value } = req.body;
    const data = await keyVal.updateDataByKey({ key, value });
    res.status(200).json(data);
  } catch (err) {
    res.status(err.code).json({ message: err.message });
  }
};

const deleteDataByKey = async (req, res) => {
  try {
    const { key } = req.params;
    const data = await keyVal.deleteDataByKey(key);
    res.status(200).json(data);
  } catch (err) {
    res.status(err.code).json({ message: err.message });
  }
};

module.exports = {
  storeData,
  getDataByKey,
  updateDataByKey,
  deleteDataByKey,
};
