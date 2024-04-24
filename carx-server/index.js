const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('CarX server is running')
})

app.listen(port, () => {
    console.log(`CarX server running on port ${port}`)
})