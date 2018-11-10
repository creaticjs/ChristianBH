const express  = require('express');
const bodyParser = require('body-parser');
const mongo = require('./db/dbconection');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const routePets = require('./routes/pets')(app)

mongo.conectar(app);

