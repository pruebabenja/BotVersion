import moment from 'moment-timezone';
var shadow = async (m, {  
      command, 
      conn, 
      args,  
      usedPrefix,  
      text
  }) => {  
    const d = new Date(new Date() + 3600000); 
   const locale = "es"; 
   const week = d.toLocaleDateString(locale, {weekday: "long"}); 
   const date = d.toLocaleDateString(locale, {day: "numeric", month: "long", year: "numeric"}); 
   const _uptime = process.uptime() * 1000; 
   const uptime = clockString(_uptime); 
   const {exp, limit, dolares, role} = global.db.data.users[m.sender]; 
   const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; 
   const username = conn.getName(who); 
   let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
   const fload = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: '[ 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐌𝐄𝐍𝐔... ]', orderTitle: `▮Menu ▸`, thumbnail: await (await fetch(pp)).buffer(), sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
   const db = "./galeria/menudorrat3.jpg"

if (command == "menu" || command == "menú") {
let uwu = `╦══════════════════ ⪨
┃│✾ ⋟ *${ucapan()}*
┃│✾ ⋟ *tenemos varios tipos de menus*
┃│✾ ⋟ 1
┃│✾ ⋟ *#menucompleto*
┃│✾ ⋟ 2
┃│✾ ⋟ *#descargasmenu*
┃│✾ ⋟ *ejemplo:*
┃│✾ ⋟ *#menucompleto*
┃╰══ ⪨`
conn.sendButton(m.chat, uwu, null, imagen1, [
['🌐 menucompleto', '.menu'],
['🚀 menuff', '.menuff'],
['👾 estado', '/estado']], null, 
[['🎭 Grupo de WhatsApp', md]], m)}

if (command == "menucompleto" || command == "allmenu") {