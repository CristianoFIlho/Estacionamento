var express = require("express");
var app = express();
var routes = require('./routes')
const cors = require('cors');
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
app.options('*', cors());

//Permite Acesso externo na aplicação
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,x-access-token,Content-Type, Accept");
    next();
  });

  
// app.use('/',router)
routes(app);
app.listen(3000, () => {
 console.log("Server running on port 3000");
});