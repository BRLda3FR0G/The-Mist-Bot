// Features exclusively for The Mist server
const Discord = require("discord.js");

module.exports = {
    artValidate: async function(message) {
        if (message.attachments.size == 0) {
            const kenth = await client.users.fetch("459596793936871424");
            kenth.send("Hi Kenneth! Please make sure to **only post art** in the <#838834082183381092> channel. Thanks!");
            cc = message.cleanContent;
            message.delete();
            return ("[ART] **" + username + "** sent an art post without art: ```" + cc + "```");
          }
        else return "valid";
    }
}
