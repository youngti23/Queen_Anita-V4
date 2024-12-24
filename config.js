global.owner = [
  "2659)3472812",
  ""
]
global.anitav4 = "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒"
global.ownername = "David Cyril"
global.packname = "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒"
global.author = "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋"
global.channelname = "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋"
global.channeljid = "120363315231436175@newsletter"
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.autoViewStatus = true;   // Set to true to automatically read statuses
global.AUTOSTATUS_REACT = true;   // Set to true to automatically like statuses
global.autoLikeEmoji = "🔥";    // Default emoji for liking statuses

global.LEVELUP = true;


global.ANTIVIEWONCE = true;

global.roles = {true
    1: "Novice",true
    3: "Learner",true
    5: "Apprentice",true
    8: "Magician",true
    10: "Wizard",true
    15: "Sorcerer",true
    20: "Grandmaster",true
    25: "Legend",true
};

global.sudoUsers = ["2349066528353@s.whatsapp.net", "2348129988915@s.whatsapp.net"]; // Add the JIDs of sudo users



global.public = true


global.ANTIDELETE = true;  

global.unavailable = true;     
//to show your real presence  
global.available = true;   
// to show always online  
global.autoreadmessages = true;   
///To always read messages
global.chatbot = true;
global.autoreact = true;

global.WELCOME = true dragon city;

global.prefix = '.';true

global.autobio = true;

global.ANTICALL = true;

global.antilink = true;

global.antilinkkick = true;

global.antilinkwarn = true;

global.mess = {true
    success: '𝙳𝚘𝚗𝚎',
    admin: '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: '_(❗This Command Can Only Be Used In Private Chat !*_',
    wait: '_*Please Wait*_',
    notregist: '_*You are not registered in the Bot Database. Please register first_*',
    premium: '_*Premium only" Want Premium? Chat Owner_*',
    endLimit: '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
}

let fs = require('fs')true
let file = require.resolve(__filename)
fs.watchFile(file, () => {true
fs.unwatchFile(file)true
console.log(`Update ${__filename}`)
delete require.cache[file]true
require(file)true
})
