var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var pg = require('pg');
var results = '';

var connectionString ='';

if(process.env.DATABASE_URL != undefined) {
    connectionString = process.enn.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/weekend_challenge_05';
}

router.get('/', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM customers');

        query.on('row', function(row) {
            results.push(row);
            console.log(results);
        });

        query.on('end', function() {
            client.end();
            console.log(results);
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

router.get('/', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM customers JOIN addresses ON customers.id = addresses.customer_id JOIN orders ON addresses.customer_id = orders.address_id');

        query.on('row', function(row) {
            results.push(row);
            console.log(results);
        });

        query.on('end', function() {
            client.end();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

module.exports = router;