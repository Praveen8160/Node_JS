const { REST, Routes } = require("discord.js");
const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];
const rest = new REST({ version: "10" }).setToken(
  "MTIyOTQ4MzQ5MzYwMDUzMDQzMg.GHWtpB.DypmtUGYWvb5dWm37qicRzWqrnjqc0Bsr_rJW4"
);
(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1229483493600530432"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
