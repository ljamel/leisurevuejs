const express = require('express')
const app = express()



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test:nono1896@cluster0.bvhvj.mongodb.net?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {

    var name = "cof";

    client.db("sample_restaurants").
    collection("restaurants").find({'name': {'$regex': name}}).toArray(function(err, result) {
        if (err) throw err;
        client.close();
        return result;
    });
});
