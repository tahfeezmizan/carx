const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7utjicv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client
    .connect()
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

async function run() {
    try {
  
        const carCollaction = client.db('carxDB').collection('carx');

        app.get('/cars', async (req, res) => {
            const cursor = carCollaction.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.post('/cars', async (req, res) => {
            const cars = req.body;
            console.log(cars)
            const result = await carCollaction.insertOne(cars);
            res.send(result)
        })

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('CarX server is running')
})

app.listen(port, () => {
    console.log(`CarX server running on port ${port}`)
})