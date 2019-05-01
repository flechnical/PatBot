// Import the process.env object (contains the data we entered in our .env-file)
require("dotenv").config();

const voiceChannels = process.env.VOICECHANNELS.split(",");
const voiceRoles = process.env.VOICEROLES.split(",");

const voiceChannelRoles = {}; // Object with all the Role IDs (value) of the Channel IDs (index)
voiceChannels.forEach((channelID, index) => {
  voiceChannelRoles[channelID] = voiceRoles[index];
});

// Imports the Discord.js code and creates a new bot instance
const Discord = require("discord.js");
const bot = new Discord.Client();

// Makes the Bot respond with "Pong!" if we write "ping" in any text channel
bot.on("message", msg => {
  if (msg.content == "ping") {
    msg.channel.send("Pong!");
  }
});

// Runs the below code whenever a member of our Discord Server joins or leaves a voice channel
bot.on("voiceStateUpdate", (oldMember, newMember) => {
  let channelAfter = newMember.voiceChannel; // Channel after the status change (joining/leaving a channel, muting/unmuting)
  let channelBefore = oldMember.voiceChannel; // Channel before the change
  let channelAfterID = newMember.voiceChannelID;
  let channelBeforeID = oldMember.voiceChannelID;

  let userID = newMember.user.id;
  let voiceUser = newMember.guild.members.get(userID);

  if (process.env.SETUP === "true") {
    console.log(`User role IDs: ${voiceUser._roles}`);
    console.log(`Voice Channel ID: ${voiceUser.voiceChannelID}`);
  } else {
    if (channelBefore === undefined && channelAfter !== undefined) {
      // User joins a voice channel
      if (channelAfterID in voiceChannelRoles) {
        voiceUser.addRole(voiceChannelRoles[channelAfterID]);
      }
    } else if (
      channelBefore !== undefined &&
      channelAfter !== undefined &&
      channelBefore !== channelAfter
    ) {
      // User switches voice channels
      if (channelBeforeID in voiceChannelRoles) {
        voiceUser.removeRole(voiceChannelRoles[channelBeforeID]);
      }
      if (channelAfterID in voiceChannelRoles) {
        voiceUser.addRole(voiceChannelRoles[channelAfterID]);
      }
    } else if (channelAfter === undefined) {
      // User leaves a voice channel
      if (channelBeforeID in voiceChannelRoles) {
        voiceUser.removeRole(voiceChannelRoles[channelBeforeID]);
      }
    } else if (channelAfter === channelBefore) {
      // User muted/unmuted or deafened/undeafened themselves while in a voice channel
    }
  }
});

bot.on("ready", () => {
  bot.user.setStatus("online");
  bot.user.setActivity("over you!", { type: "watching" });
  console.log("Ready!");
});

bot.on("error", console.error);

bot.login(process.env.BOTTOKEN); // Makes the Bot log into his Discord account (using the Token as his credentials) as soon as the server starts
