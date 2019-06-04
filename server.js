const express = require("express"),
port = process.env.PORT || 3000;
const app = express();
var routes = require('./api/routes/index'); //importing route
app.use(routes);
app.listen(port);
console.log('flow-money-backend API server started on: ' + port);


// db.one("SELECT $1 AS value", 12)
//     .then(function (data) {
//         console.log("DATA:", data.value);
//     })
//     .catch(function (error) {
//         console.log("ERROR:", error);
//     });