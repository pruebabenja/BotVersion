// Creditos del codigo a @usxr_angelito //

/* GitHub: https://github.com/karim-off*/

/* Bot: https://github.com/karim-off/XiaBot-Pro*/

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = imagen1;
  const img = imagen4;
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 27) {
    let txt1 = `*❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞ 𝒅𝒆𝒕𝒆𝒄𝒕𝒐 𝒖𝒏 𝒏𝒖𝒆𝒗𝒐 𝒎𝒊𝒆𝒎𝒃𝒓𝒐 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐*\n\n`;
    txt1 += `*❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt1 += `*❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞ 𝒕𝒆 𝒅𝒂 𝒍𝒂 𝒄𝒐𝒓𝒅𝒊𝒂𝒍 𝒃𝒊𝒆𝒏𝒗𝒆𝒏𝒅𝒊𝒅𝒂* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt1 += `*𝑨𝒈𝒓𝒆𝒈𝒂𝒅𝒐 𝒑𝒐𝒓:* @${m.sender.split`@`[0]}`;
    } else {
      txt1 += `*❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞ 𝒕𝒆 𝒅𝒂 𝒍𝒂 𝒄𝒐𝒓𝒅𝒊𝒂𝒍 𝒃𝒊𝒆𝒏𝒗𝒆𝒏𝒅𝒊𝒅𝒂* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt2 = `*❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞ 𝒅𝒆𝒕𝒆𝒄𝒕𝒐 𝒒𝒖𝒆 𝒔𝒆 𝒔𝒂𝒍𝒊𝒐 𝒖𝒏 𝒎𝒊𝒆𝒎𝒃𝒓𝒐 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐*\n\n`;
    txt2 += `*❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt2 += `*❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞ 𝒕𝒆 𝒅𝒂 𝒍𝒂 𝒄𝒐𝒓𝒅𝒊𝒂𝒍 𝒅𝒆𝒔𝒑𝒆𝒅𝒊𝒅𝒂* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt2 += `*𝑬𝒍𝒊𝒎𝒂𝒏𝒅𝒐 𝒑𝒐𝒓:* @${m.sender.split`@`[0]}`;
    } else {
      txt2 += `*❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞ 𝒕𝒆 𝒅𝒂 𝒍𝒂 𝒄𝒐𝒓𝒅𝒊𝒂𝒍 𝒅𝒆𝒔𝒑𝒆𝒅𝒊𝒅𝒂* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = '𝑺𝒆 𝒔𝒂𝒍𝒊𝒐';
    } else {
      ax = '𝑺𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒐';
    }
    let txt3 = `❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞ 𝒅𝒆𝒕𝒆𝒄𝒕𝒐 ${ax} 𝒖𝒏 𝒏𝒖𝒆𝒗𝒐 𝒎𝒊𝒆𝒎𝒃𝒓𝒐 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐.\n\n`;
    txt3 += `*𝑪𝒉𝒂𝒕 𝑮𝒓𝒖𝒑𝒂𝒍* ${groupName}\n`;
    if (ax === 'eliminado') {
      txt3 += `*❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞ 𝒕𝒆 𝒅𝒂 𝒍𝒂 𝒄𝒐𝒓𝒅𝒊𝒂𝒍 𝒅𝒆𝒔𝒑𝒆𝒅𝒊𝒅𝒂* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*𝑬𝒍𝒊𝒎𝒂𝒏𝒅𝒐 𝒑𝒐𝒓:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*❘❚  𝗕 ͟ ͟ ͟ ㉀𝗧〘E⎯ XCLUS!VE〙❞ 𝒕𝒆 𝒅𝒂 𝒍𝒂 𝒄𝒐𝒓𝒅𝒊𝒂𝒍 𝒅𝒆𝒔𝒑𝒆𝒅𝒊𝒅𝒂* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }
} /* Cierre del comando */
