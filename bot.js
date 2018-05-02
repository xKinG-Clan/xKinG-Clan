const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
	client.user.setGame(`خلوني مجروح القلب`,'https://www.twitch.tv/v5bz');
console.log("Discord Bot By So.?");
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** [https://discord.gg/24sj28Y ]      [ :green_heart: تنور ياعين ابوي]  ** ')

}).catch(console.error)
})

client.login("NDQxMTM2MTUzMDE0NTY2OTEz.Dcr3rA.Oij6OWaN2pwvVqdMPQ-oDwmFA74");




