const mysql = require('mysql');

var http = require("http");
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
            console.log(result);
            global.re = JSON.stringify((result));
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