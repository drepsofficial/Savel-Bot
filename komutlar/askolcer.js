const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
    let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
    var s = message.author
    if(member2) {
        var s = member2.user
    }
    if(!member) {
        const embed = new Discord.RichEmbed()
            .setDescription(`*Bir kişi etiketlemelisin.* **Örnek:** \`+askolcer <@etiket>\``)
    .setAuthor('Hata')
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }
    var anasonuc = Math.floor(Math.random() * 101)
    var kalp = ''
    var akalp = ''
    if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
        var c = 0
        for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
            kalp += '❤️'
            c++
        }
        for(var x = c; x < 10; x++) {
            akalp += `🖤`
        }
    } else {
        var kalp = '🖤'
        var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
    }
    var yorum = `Savel BOT:copyright:`
    if(anasonuc < 80) {
        var yorum = 'Savel BOT:copyright:'
    }
    if(anasonuc < 60) {
        var yorum = 'Savel BOT:copyright:'
    }
    if(anasonuc < 40) {
        var yorum = 'Savel BOT:copyright:'
    }
    if(anasonuc < 20) {
        var yorum = 'Savel BOT:copyright:'
    }
    const embed = new Discord.RichEmbed()
        .setAuthor(`${member.user.tag} ve ${s.tag} Arasındaki Aşk Sonucu.`)
        .setDescription(`Aşk Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['aşk-ölçer', 'ask-olcer', 'askolcer', 'ask', 'aşk'],
    permLevel: 0
}
exports.help = {
    name: 'aşkölçer',
    description: 'İki kullanıcı arasındaki aşkı ölçer.',
    usage: 'aşkölçer [@Kullanıcı]'
}
