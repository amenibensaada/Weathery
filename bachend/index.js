const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const weatherSchema = mongoose.Schema({
  humidity: { type: Number, required: true },
  maxTemp: { type: Number, required: true },
  minTemp: { type: Number, required: true },
  date: { type: Date, required: true },
  cloud: { type: String, required: true },
});
// sunny rainy cloudy
const Weather = mongoose.model("Weather", weatherSchema);

const app = express();

mongoose
  .connect("mongodb://localhost:27017/project-web")
  .then(() => {
    console.log("Succefully connected to MongoDB !");
  })
  .catch((error) => {
    console.log("Unable to connect mongodb !");
    console.error(error);
  });

app.use(cors());

app.use(bodyParser.json());

app.post("/weather", async (req, res, next) => {
  const newWeather = await Weather.create(req.body);
  res.json(newWeather);
});

app.get("/weather", async (req, res, next) => {
  const weather = await Weather.find();
  res.json(weather);
});

app.listen(3000, () => console.log("working om port 3000"));
