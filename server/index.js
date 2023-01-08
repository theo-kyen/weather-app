import express from "express";
import fetch from "node-fetch";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/weather/:latlon", async (req, res) => {
  const latlon = req.params.latlon.split(",");
  const lat = latlon[0];
  const long = latlon[1];

  const url = `https://yahoo-weather5.p.rapidapi.com/weather?lat=${lat}&long=${long}&format=json&u=f`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.API_KEY}`,
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  const data = await fetch(url, options);
  const jsonData = await data.json();

  res.json(jsonData);
});

app.listen(3001, () => console.log("listening at 3001"));
