const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const OpenAIApi = require('openai');

const openai = new OpenAIApi({ apiKey: process.env.OPENAI_API_KEY });




// Middleware
app.use(express.json(),cors({
	origin: '*',
	methods: 'GET,POST,PUT,DELETE', 
	optionsSuccessStatus: 204,
  }));



app.post("/getresponse", async (req, res) => {
    const {prompt} = req.body;
    console.log(prompt)
    const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: `${prompt} For the user input given, what type of insurance can be preferred to him whether Property or Liability insurance. Give me answer first just "Property" or "Liability" without any additional words and then give the explanation in next sentence. Also give me risk factors to my business based on this data from past events` }],
    model: "gpt-3.5-turbo",
  });
  res.send(completion.choices)
  console.log(completion.choices[0]);
  });


app.get('/', (req, res) => {
    res.send("Hello Index"); // Corrected response sending
});



app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
