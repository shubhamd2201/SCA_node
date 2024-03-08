const chalk = require('chalk');
const { MongoClient } = require('mongodb');

const uri = 'usedummy-mongo-url-is-here';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log(chalk.bgRed('Connected to MongoDB'));

        
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

connectToMongoDB();
