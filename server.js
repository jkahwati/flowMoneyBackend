const express = require("express"),
port = process.env.PORT || 3000;
const app = express();
var routes = require('./api/routes/index'); //importing route
routes(app); //register the route
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);