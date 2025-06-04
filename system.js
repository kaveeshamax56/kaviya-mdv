const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime" ,"runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `
*╭─「 ᴋᴀviya-ᴍᴅ ʙᴏᴛ ɪɴꜰᴏ🔥 」─*
*│ ⚡ CREATOR : kaviya*
*│ 🚀 Version: 1.0.0*
*│ 🧬 Uptime: ${runtime(process.uptime())}*
*│ 📈 RAM Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│ 🧬 Platform: heroku*
*│ ❄ Hostname: ${os.hostname()}*
*╰──────────────●●►*
 *©𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙺𝙰𝚅𝙸𝚈𝙰 〽️𝙳*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
