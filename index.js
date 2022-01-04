import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'

//Whole application lies in this variable app
const app = express();

//Specify the port of our application
const PORT = 4201;

// Initailize bodyparser MIDDLEWARE
app.use(bodyParser.json());

app.use('/users', usersRoutes);



//First Route
app.get('/',(req,res) => res.send ('Hello from Homepage'));

//Listen upcoming request
app.listen(PORT, () => console.log(`server Running on port:http://localhost:${PORT}`))

// Install package Nodemon - So that we don't have to close server and reopen it again every time after saving.
// npm install --save-dev nodemon { -dev is used as we are using this only for development purposes and is not gonna be used later.}

