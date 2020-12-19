const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');
var url = require("url");


global.re = "e";

function createDBConnection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "noura1896"
    });
}
function exec(re) {
    createDBConnection().connect(function (err) {
        if (err) throw err;
        var sql = "SELECT * FROM cadito.activitys WHERE description like ?";
        //Send an array with value(s) to replace the escaped values:
        createDBConnection().query(sql, ['%' + re + '%'], function (err, result) {
            global.re = JSON.stringify((result));
        });
    });
    createDBConnection().destroy();
}


app.get('/', (req, res) => {
    var pathname = url.parse(req.url).pathname;
    res.writeHead(200, {"Content-Type": "application/json",
        'Access-Control-Allow-Origin' : '*'});
    exec(pathname.substring(2));
    res.send(global.re)
})

// middleware that is specific to this router
app.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the about route
app.get('/about', function(req, res) {
    res.send('About birds');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})