const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('id', 'kanal-id')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» Vodrolas BOT | Canlı Destek")
  .setDescription("**Canlı Desteği kullandğın için teşekkür ederiz, sizinle ekibimiz ilgilenicektir lütfen bekleyiniz.**")
  .setFooter("30 Saniye içinde geri dönülmezse lütfen iletişime geçin dreps#0989 veya https://discord.gg/kYBHbQC")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Canlı Destek | Talep")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(677928169575284777)
};

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Talebi Oluşturur.',
  usage: '!canlıdestek'
};
