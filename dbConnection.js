const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://themixerbase123:iloveDOGS@cluster0.riqgga9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;