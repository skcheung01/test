var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://avel:31880589@cluster0-cvtd8.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});