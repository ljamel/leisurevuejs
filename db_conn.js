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

    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://test:nono1896@cluster0.bvhvj.mongodb.net?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {

        var name = re;

        client.db("sample_restaurants").
        collection("restaurants").find({'name': {'$regex': name}}).toArray(function(err, result) {
            if (err) throw err;
            client.close();
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