const express = require("express");
const keyVal = require("../controllers/keyVal");
const schemaValidation = require("../middlewares/schemaValidation");
const keyValSchema = require("../schemas/keyVal.schema");

const router = express.Router();

router.post(
  "/",
  schemaValidation.bodyValidation(keyValSchema.keyValPayload),
  keyVal.storeData
);
router.get("/:key", keyVal.getDataByKey);
router.put("/:key", keyVal.updateDataByKey);
router.delete("/:key", keyVal.deleteDataByKey);

module.exports = router;
