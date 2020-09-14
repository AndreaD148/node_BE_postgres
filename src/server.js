const express = require("express");
const helmet = require("helmet");

const { Client } = require("pg");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(helmet());

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);

  client.connect();
  const query = "SELECT * FROM react_user";

  client.query(query, (res, err) => {
    if(err) {
      console.log(err);
      return;
    }

    console.table(res.rows)

  }) 


})

