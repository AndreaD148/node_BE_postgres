const db = require("../db_connection");
db.connect();

//getting all users
exports.getAllUsers = (req, response) => {
  const query = `SELECT * from react_user`;
  db.query(query, (err, res) => {
    if(err) {
      throw err;
    }

    console.table(res.rows);

    response.send({
      "users": res.rows
    })

  })
}

exports.getUserById = (req, response) => {

  const id = req.body.id;

  const query = `SELECT * FROM react_user WHERE id=${id}`;

  db.query(query, (err, res) => {

    if(err) {
      throw err;
    }

    console.table(res.rows);

    response.send({
      "single_user": res.rows
    })

  })

}

exports.getUserByName = (req, response) => {

  const username = req.body.username;

  const query = `SELECT * FROM "react_user" WHERE username='${username}'`

  db.query(query, (err, res) => {

    if(err) {
      console.log(err);
    }

    console.table(res.rows);

    response.send({
      "users": res.rows,
      "number_of_users": res.rowCount,
    })

  })

}


//function for adding user
exports.addUser = (req, response) => {

  console.log(req.body);

  const username = req.body.username;
  const surname = req.body.surname;
  const age = req.body.age;

  
  const values = [username, surname, age]

  const query = `INSERT INTO react_user(username, surname, age) 
  VALUES($1, $2, $3) RETURNING *`;

  db.query(query, values, (err, res) => {
    if(err) {
      console.log(err);
      throw err;
    }

    console.log(res);

    response.send({
      result: res.rows
    })

  })

}


//deleting user by his id
exports.deleteUser = (req, response) => {

  //getting his id
  const id = req.body.id;
  //console.log(req.body.id);

  const query = `DELETE FROM react_user WHERE id=${id}`

  db.query(query, (err, res) => {

    if(err) {
      console.log(err);
    }

    console.log(res.rows);

    response.send({
      "deleted_user": res.rows
    })

  })

}


//update method
exports.updateUserById = (req, response) => {
  
  /*
    PARAMS IN THE REQUEST:
    - id            -> user's id
    - newUsername   -> to update the user's name
    - newAge        -> to update the user's age
  */
  const id = req.body.id;

  console.log(id);

  //it takes also newName, newSurname and newAge
  const newUsername = req.body.username;
  const newSurname = req.body.surname;
  const newAge = req.body.age;

  console.log(`${newUsername}, ${newSurname}, ${newAge}`)

  console.log(typeof(newUsername))

  const query = `UPDATE react_user SET username='${newUsername}', surname='${newSurname}', age=${newAge} WHERE id=${id}`;


  db.query(query, (err, res) => {

    if(err) {
      console.log(err);
      throw err;
    }
    
    console.table(res.rows)
    
    response.send({
      "user_udated": res.rows,
    })
    
  })
  
}
