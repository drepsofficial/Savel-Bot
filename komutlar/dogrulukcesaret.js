const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = [
      'soru 1',
      'soru 2'
    ]
    var cesaret = [
      'soru 1',
      'soru 2'
    ]
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('**\`Doğruluk\` mu yoksa \`cesaret\` mi? \`d\` ya da \`c\` yazarak cevaplayınız.**')
    let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`**HATA:** Bir önceki tur bitmedi veya hatalı kod girildi.\n__Lütfen sadece **doğruluk (d)** ya da **cesaret (c)** yazarak cevap veriniz.__\n*Geliştirilme aşamasında olduğum için hatalı sorularınızı ve soru önerilerinizi bildirin.* \n**Komut:** \`+dcsoru ve +tavsiye\``)
        }
        if (choice == 'cesaret' || choice == 'c') uwu = true
    }
    if (uwu) {
        message.channel.send(`${cesaretcevap}`)

    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['doğruluk-cesaret'],
    permLevel: 0
};

exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız.',
    usage: 'doğrulukcesaret'
};
