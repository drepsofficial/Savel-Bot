const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');

require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};





client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam, hoşgeldin.');
  }
  if (msg.content.toLowerCase() === 'sea') {
    msg.reply('Aleyküm selam, hoşgeldin.');
  }
  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    msg.reply('Aleyküm selam, hoşgeldin.');
  }
  if (msg.content.toLowerCase() === 'nbr') {
    msg.reply('İyiyim canım, sen?');
  }
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('İyiyim canım, sen?');
  }
  if (msg.content.toLowerCase() === 'mta') {
    msg.reply('MTA/SAMP platformları hakkında konuşmuyoruz. :slight_smile:');
  }
  if (msg.content.toLowerCase() === 'irp') {
    msg.reply('MTA/SAMP platformları hakkında konuşmuyoruz. :slight_smile:');
  }
  if (msg.content.toLowerCase() === 'crp') {
    msg.reply('MTA/SAMP platformları hakkında konuşmuyoruz. :slight_smile:');
  }
  if (msg.content.toLowerCase() === 'trp') {
    msg.reply('MTA/SAMP platformları hakkında konuşmuyoruz. :slight_smile:');
  }
  if (msg.content.toLowerCase() === 'samp') {
    msg.reply('MTA/SAMP platformları hakkında konuşmuyoruz. :slight_smile:');
  }
  if (msg.content.toLowerCase() === 'ha') {
    msg.reply('HA?');
  }
  if (msg.content.toLowerCase() === 'tm') {
    msg.reply('pki.');
  }
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('Selam canım.');
  }
  if (msg.content.toLowerCase() === 'slm') {
    msg.reply('Selam canım.');
  }
  if (msg.content.toLowerCase() === 'nabıon') {
    msg.reply('Seni.');
  }
  if (msg.content.toLowerCase() === 'ne yapıyon') {
    msg.reply('Sanane.');
  }
  if (msg.content.toLowerCase() === 'napıyon') {
    msg.reply('Seni ilgilendirmez.');
  }
  if (msg.content.toLowerCase() === 'nabıyon') {
    msg.reply('Bu seni hiç alakadar etmez.');
  }
  if (msg.content.toLowerCase() === 'ne yapıyorsun') {
    msg.reply('Müzik dinliyorum, sen ne yapıyorsun canım?');
  }
  if (msg.content.toLowerCase() === 'ne yapıyorsun?') {
    msg.reply('İmla kullandığın için teşekkürler. Seninle konuşuyorum şuanda tatlım, sen?');
  }
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.reply('Günaydın. :sunny:');
  }
  if (msg.content.toLowerCase() === 'günaydın.') {
    msg.reply('Günaydın. :sunny:');
  }
  if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.reply('İyi gecelerr.  :crescent_moon:');
  }
  if (msg.content.toLowerCase() === 'iyi geceler.') {
    msg.reply('İyi geceler. :crescent_moon:');
  }
  if (msg.content.toLowerCase() === '.') {
    msg.reply('NOKTA.');
  }
  if (msg.content.toLowerCase() === '<@!404935478911959061>') {
    msg.reply('Efendim?');
  }
  if (msg.content.toLowerCase() === '<@!324152600859508737>') {
    msg.reply('Efendim?');
  }
  if (msg.content.toLowerCase() === '<@!356341031492648963>') {
    msg.reply('Efendim?');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });




var oyun = [
        "?help",
        "Yeni: ?aşkölçer ?doğrulukcesaret"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random]);
        }, 2 * 2500);


;

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
