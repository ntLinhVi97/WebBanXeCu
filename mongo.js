const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pxvu97:qweqwe123!@cluster0-qvjiz.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
});

module.exports = client;