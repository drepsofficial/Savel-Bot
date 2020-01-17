const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
          file:"http://www.imgim.com/309incin2018904.jpg",
          color: 0xD97634,
      description: "**Battle Eye Tarafından öldürüldün yaşasın zulü.**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öldür'],
  permLevel: 0
};

exports.help = {
  name: 'öldür',
  description: 'Etiketlediğiniz kişiyi öldürürsünüz.',
  usage: 'öldür'
};