const { Client, GatewayIntentBits } = require("discord.js");
const UrlModel = require("./models/url");
const shortId = require("shortid");
const express = require("express");
const app = express();
const UrlRouter = require("./routes/url");
const port = 8000;

const DatabaseConnection = require("./connection");
DatabaseConnection("mongodb://localhost:27017/short-url");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
}); //it's virtual client ,we can communicate with server through this client
//intents means which type of permmision you give to client

client.login(
  "MTIyOTQ4MzQ5MzYwMDUzMDQzMg.GHWtpB.DypmtUGYWvb5dWm37qicRzWqrnjqc0Bsr_rJW4"
);

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create ")[1];
    const shortid = shortId();
    UrlModel.create({
      shortId: shortid,
      redirecturl: url,
    });
    message.reply(`your short id is http://localhost:8000/${shortid}`);
  }
  message.reply(`  hello from bot,
  create your short Url just type
  eg. create "enter your url path"`);
});
client.on("interactionCreate", (interaction) => {
  interaction.reply("pong");
});

//route
app.use("/", UrlRouter);

app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);
