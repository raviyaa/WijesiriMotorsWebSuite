
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),   
    compression = require('compression');

var config = require('./config/config'),
    router = require('./router'),
    logger = require('./helpers/logger'),
    responseTransformer = require('./middlewares/ResponseTransformer'),
    errorHandler = require('./middlewares/ErrorHandler'),   
    responser = require('./middlewares/Responser');
    
var port =  process.env.PORT || config.WEB_SERVER_PORT ;

var app= express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router());
app.use(responseTransformer());
app.use(responser());
app.use(compression());
app.use(errorHandler());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    //res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
   logger.info('Application started successfully', port);
})