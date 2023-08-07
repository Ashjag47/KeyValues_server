const express = require("express");
const cors = require("cors");
const keyValRouter = require("./src/routes/keyVal");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/data", keyValRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
