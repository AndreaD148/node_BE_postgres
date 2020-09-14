const express = require("express");
const helmet = require("helmet");

require("dotenv").config();

const app = express();
const router = require("./router");

const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)


app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})

