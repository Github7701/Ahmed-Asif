const fs = require("fs");
module.exports = {
  config:{
	name: "Efa+joy",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("suna")==0 || body.indexOf("Asif")==0 || body.indexOf("jan")==0 || body.indexOf("jan")==0) {
		var msg = {
				body: "𝐌𝐃 Ahmed Asif Niloy",
				attachment: fs.createReadStream(__dirname + `/Joy/tafriyaefa.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
