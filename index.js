const {
  Client,
  Intents,
  MessageActionRow,
  MessageButton,
} = require("discord.js");
require("dotenv").config();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  console.log("I am up and running");
  const eurTimeId = "936392703363670066";
  const pstTimeId = "936392924378312765";
  const estTimeId = "936392893055250542";

  // One time check
  fetch(
    "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Copenhagen"
  )
    .then((response) => response.json())
    .then((eurTime) => {
      if (eurTime["time"].slice(0, 2) > 12)
        client.channels.cache
          .get(eurTimeId)
          .setName(`CET: ${eurTime["time"].slice(0, 2) - 12}PM`);
      else
        client.channels.cache
          .get(eurTimeId)
          .setName(`CET: ${eurTime["time"].slice(0, 2)}AM`);
    })
    .catch((err) => console.throw(err));

  fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Canada/Pacific")
    .then((response) => response.json())
    .then((pstTime) => {
      if (pstTime["time"].slice(0, 2) > 12)
        client.channels.cache
          .get(pstTimeId)
          .setName(`PST: ${pstTime["time"].slice(0, 2) - 12}PM`);
      else
        client.channels.cache
          .get(pstTimeId)
          .setName(`PST: ${pstTime["time"].slice(0, 2)}AM`);
    })
    .catch((err) => console.throw(err));

  fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Canada/Eastern")
    .then((response) => response.json())
    .then((estTime) => {
      if (estTime["time"].slice(0, 2) > 12)
        client.channels.cache
          .get(estTimeId)
          .setName(`EST: ${estTime["time"].slice(0, 2) - 12}PM`);
      else
        client.channels.cache
          .get(estTimeId)
          .setName(`EST: ${estTime["time"].slice(0, 2)}AM`);
    })
    .catch((err) => console.throw(err));

  setInterval(() => {
    fetch(
    "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Copenhagen"
  )
    .then((response) => response.json())
    .then((eurTime) => {
      if (eurTime["time"].slice(0, 2) > 12)
        client.channels.cache
          .get(eurTimeId)
          .setName(`CET: ${eurTime["time"].slice(0, 2) - 12}PM`);
      else
        client.channels.cache
          .get(eurTimeId)
          .setName(`CET: ${eurTime["time"].slice(0, 2)}AM`);
    })
    .catch((err) => console.throw(err));

  fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Canada/Pacific")
    .then((response) => response.json())
    .then((pstTime) => {
      if (pstTime["time"].slice(0, 2) > 12)
        client.channels.cache
          .get(pstTimeId)
          .setName(`PST: ${pstTime["time"].slice(0, 2) - 12}PM`);
      else
        client.channels.cache
          .get(pstTimeId)
          .setName(`PST: ${pstTime["time"].slice(0, 2)}AM`);
    })
    .catch((err) => console.throw(err));

  fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Canada/Eastern")
    .then((response) => response.json())
    .then((estTime) => {
      if (estTime["time"].slice(0, 2) > 12)
        client.channels.cache
          .get(estTimeId)
          .setName(`EST: ${estTime["time"].slice(0, 2) - 12}PM`);
      else
        client.channels.cache
          .get(estTimeId)
          .setName(`EST: ${estTime["time"].slice(0, 2)}AM`);
    })
    .catch((err) => console.throw(err));
  }, 600000);
});

client.login(process.env.BOT_TOKEN);
