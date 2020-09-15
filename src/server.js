const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

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

otions = {
  origin: "http://localhost:3000"
}

app.use(cors(otions))


app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})

