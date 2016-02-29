var express = require("express");
var app = express();
var path = require('path');
var data = require('./server/routes/favPet');
//var data = require('./server/routes/findPet');


//app.get("/*", function(req,res,next){
//    var file = req.params[0] || "views/index.html";
//    res.sendFile(path.join(__dirname, "./public/", file))
//});

//app.post('/data/:number', function(req, res) {
//    res.send(req.params.number);
//});

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});


module.exports = app;