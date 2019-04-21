const express = require("express");
const bodyParser = require("body-parser");
// const faker = require("faker");
const times = require("lodash.times");
// const random = require("lodash.random");
const db = require("./models");
const User = require("./models").User;
const Transaction = require("./models").Transaction;

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

// apiPost(app, db);
// apiAuthor(app, db);

app.get("/users", (req, res) => 
User.findAll()
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); 
      })
);

app.get("/transactions", (req, res) => 
Transaction.findAll({
  include: [
    {
      model: User,
      as: 'User',
    }
  ]
}).then(t => res.status(200).send(t) ).catch((error) => { res.status(400).send(error); 
      })
);


  app.listen(8080, () => console.log("App listening on port 8080!"));