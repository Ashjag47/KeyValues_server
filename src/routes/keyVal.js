const express = require("express");
const keyVal = require("../controllers/keyVal");
const router = express.Router();

router.post("/", keyVal.storeData);
router.get("/:key", keyVal.getDataByKey);
router.put("/:key", keyVal.updateDataByKey);
router.delete("/:key", keyVal.deleteDataByKey);

module.exports = router;
