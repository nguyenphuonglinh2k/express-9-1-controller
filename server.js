const express = require('express');
var bodyParser = require('body-parser')

var userRoute = require('./routes/user.route.js');
var bookRoute = require('./routes/book.route.js');

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/books', bookRoute);

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
