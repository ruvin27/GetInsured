const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const MongoUrl = require('./config')

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json(),cors({
	origin: '*',
	methods: 'GET,POST,PUT,DELETE', 
	optionsSuccessStatus: 204,
  }));

// Connect to MongoDB
mongoose
.connect(MongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
});

app.get('/', (req, res) => {
    res.send("Hello Index"); // Corrected response sending
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
