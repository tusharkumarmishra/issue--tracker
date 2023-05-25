const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://tusharkumar:RudM7diyF3cFFqUT@tusharmishra.c5gbilt.mongodb.net/tusharkumar?retryWrites=true&w=majority';

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;

// const mongoose = require('mongoose');
// const url = 'mongodb://127.0.0.1:27017/tusharKumarMishra'

// mongoose.connect(url)
// .then(()=>console.log("connected to dataBase"));
// const db = mongoose.connection;


// module.exports = db;