const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Tekme Atcağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + ", " + message.author.username + ' Adlı Kişi Sana Tekme Attı.!**')
	.setImage(`https://78.media.tumblr.com/c55fdd13327df0ad15015bca31ee1088/tumblr_owi7ntZIpM1udghf4o1_400.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tekme"],
  permLevel: 0
};

exports.help = {
  name: 'tekmeat',
  description: 'İstediğiniz Kişiye Tekme Atarsınız.',
  usage: 'tekmeat'
};
