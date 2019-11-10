var express    = require('express');
var app        = express();
// var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressAPI');
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var port = process.env.PORT || 8000;


const router = require('./api/userAPI');
app.use('/api/v1/', router);

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
