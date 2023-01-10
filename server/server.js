import * as dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();
const API_KEY = process.env.OPENAI_API_KEY

const configuration = new Configuration({
  apiKey: API_KEY
})

const openai = new OpenAIApi(configuration);

const app = express();

app.use(cors());
app.use(express.json());

app.post('/summary', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `provide me 5 numerically labeled bullet points of the most important facts about ${prompt} in short sentences`,
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.8,
    });
    console.log(response.data.choices[0].text)
    res.status(200).json({
      message: response.data.choices[0].text
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({ error })
  }
})

app.post('/related-words', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Please give me 6 words directly related and the other 6 words indirectly related to ${prompt}, separated by commas without the labeling`,
      temperature: 0.9,
      max_tokens: 125,
      top_p: 0.6,
      frequency_penalty: 1.6,
      presence_penalty: 1.6,
    });
    console.log(response.data.choices[0].text)
    res.status(200).json({
      message: response.data.choices[0].text
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({ error })
  }
})

app.post('/details', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `please provide a detailed passage about ${prompt}, written in the inverted pyramid structure in less than 500 words`,
      temperature: 0.9,
      max_tokens: 1000,
      top_p: 0.5,
      frequency_penalty: 0.8,
      presence_penalty: 1,
    });
    console.log(response.data.choices[0].text)
    res.status(200).json({
      message: response.data.choices[0].text
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({ error })
  }
})

app.post('/interesting-facts', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Give me three of the most interesting facts about ${prompt} that not many know about. short sentences`,
      temperature: 1,
      max_tokens: 400,
      top_p: 0.97,
      frequency_penalty: 0.7,
      presence_penalty: 1.59,
    });
    console.log(response.data.choices[0].text)
    res.status(200).json({
      message: response.data.choices[0].text
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({ error })
  }
})

app.post('/questions', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `two engaging questions to show understanding about ${prompt}`,
      temperature: 1,
      max_tokens: 400,
      top_p: 1,
      frequency_penalty: 0.8,
      presence_penalty: 0.82,
    });
    console.log(response.data.choices[0].text)
    res.status(200).json({
      message: response.data.choices[0].text
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({ error })
  }
})



const port = 5000;

app.listen(5000, () => console.log(`Server is running on port http://localhost: ${port}`))