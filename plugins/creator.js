// kadang ga muncul aswww
function handler(m) {
  
   /*const data = global.owner.filter(([id, isCreator]) => id && isCreator)

   let i = global.owner.map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')

    this.sendContact(m.chat, data.map(([id, name]) => [id, this.getName(i[0])]), m)*/

  let fektroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "62852407507130-1627474931@g.us"}, "message": {orderMessage: {itemCount: 999999999999,status: 200, surface: 200, message: `      「 MY OWNER 」`, orderTitle: 'Centauri', sellerJid: '0@s.whatsapp.net'}}}
  let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; Vynn;;;'
                    + 'FN: Delfin Wijaya\n' // full name
                    + 'ORG:Owner;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=62887435461499:+628-887-435-461-499\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Vynn', contacts: [{ vcard }] } }, { quoted: fektroli })
conn.reply(m.chat,'Tuh nomor owner ku\n*Jangan di spam yh KIDS*', m)

}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
