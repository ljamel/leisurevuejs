const mysql = require('mysql');

var http = require("http");
var url = require("url");

global.re = "e";

function exec(re) {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "noura1896"
    });

    con.connect(function (err) {
        if (err) throw err;
        var sql = "SELECT * FROM cadito.activitys WHERE description like ?";
        //Send an array with value(s) to replace the escaped values:
        con.query(sql, ['%' + re + '%'], function (err, result) {
            global.re = JSON.stringify((result));
            console.log(result);
        });

    });
}


http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    response.writeHead(200, {"Content-Type": "application/json",
        'Access-Control-Allow-Origin' : '*'});
    exec(pathname.substring(2));
    response.write(global.re);
    response.end();
    console.log(pathname);

}).listen(8888);