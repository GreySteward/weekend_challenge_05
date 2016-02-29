var express = require('express');
var app = express();
var router = express.Router();
var pg = require('pg');


var connectionString ='';



if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/chrisgibson';
}

router.get('/', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM fav_pet');

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

    router.post('/', function (req, res) {
        console.log(req.body);
        var results = [];
        pg.connect(connectionString, function (err, client, done) {
            var query = client.query('INSERT INTO fav_pet (pet_id, pet_name, pet_image_url, pet_desc_100_char) VALUES ($1, $2, $3, $4)',[req.body.id.$t, req.body.name.$t, req.body.media.photos.photo[0].$t, req.body.description.$t]);

            query.on('end', function () {
                client.end();
                return res.sendStatus(200);
            });

            if (err) {
                console.log(err);
            }
        });

    });


module.exports = router;