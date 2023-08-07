const express = require("express");
const cors = require("cors");
const keyValRouter = require("./src/routes/keyVal");
const { tokenValidation } = require("./src/middlewares/authValidation");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/data", tokenValidation, keyValRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
