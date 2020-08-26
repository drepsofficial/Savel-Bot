const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('*Kime tekme atacağım?* **Örnek:** `+tekmeat <@etiket>`');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + ", " + message.author.username + ' ADLI KİŞİ SANA TEKME ATTI!**')
	.setImage(`https://media.tenor.com/images/2787aa841c08a878f6587f3fafc2d33e/tenor.gif`)
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
  description: 'İstediğiniz kişiye tekme atarsınız.',
  usage: 'tekmeat'
};
