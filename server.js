// Import the process.env object.
require("dotenv").config();

// Create new Discord bot and defines function upon Discord message event.

const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("message", msg => {
  if (msg.content == "ping") {
    msg.channel.send("Pong");
  }
});

var voiceChannelRoles = {}; // Object with all the Role IDs (value) of the Channel IDs (index)
voiceChannelRoles[process.env.VOICECHANNEL1] = process.env.VOICEROLE1; // Voice 1
voiceChannelRoles[process.env.VOICECHANNEL2] = process.env.VOICEROLE2; // Voice 2
voiceChannelRoles[process.env.AFKCHANNEL] = process.env.AFKROLE; // AFK

bot.on("voiceStateUpdate", (oldMember, newMember) => {
  let channelAfter = newMember.voiceChannel; // Channel after the status change (joining/leaving a channel, muting/unmuting)
  let channelBefore = oldMember.voiceChannel; // Channel before the change
  let channelAfterID = newMember.voiceChannelID;
  let channelBeforeID = oldMember.voiceChannelID;

  let userID = newMember.user.id;
  let voiceUser = newMember.guild.members.get(userID);

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
});

bot.on("ready", () => {
  bot.user.setStatus("online");
  bot.user.setActivity("over you!", { type: "watching" });
  console.log("Ready!");
});

bot.on("error", console.error);

bot.login(process.env.BOTTOKEN); // Logs the bot into Discord.
