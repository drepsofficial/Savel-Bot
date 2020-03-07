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
  if (msg.content.toLowerCase() === 'selamun aleykum') {
    msg.reply('Aleyküm selam, hoşgeldin');
  }
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.reply('Günaydın. :sunny:');
  }
  if (msg.content.toLowerCase() === 'günaydın.') {
    msg.reply('Günaydın. :sunny:');
  }
  if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.reply('İyi geceler.  :crescent_moon:');
  }
  if (msg.content.toLowerCase() === 'iyi geceler.') {
    msg.reply('İyi geceler. :crescent_moon:');
  }
  if (msg.content.toLowerCase() === 'admin') {
    msg.reply('Yetkililer müsait olamayabilir, oyundan rapor atın veya exact-roleplay.com adresinden ticket oluşturun.');
  }
  if (msg.content.toLowerCase() === 'admin varmı') {
    msg.reply('Yetkililer müsait olamayabilir, oyundan rapor atın veya exact-roleplay.com adresinden ticket oluşturun.');
  }
  if (msg.content.toLowerCase() === 'admin var mı') {
    msg.reply('Yetkililer müsait olamayabilir, oyundan rapor atın veya exact-roleplay.com adresinden ticket oluşturun.');
  }
  if (msg.content.toLowerCase() === 'admin varmı?') {
    msg.reply('Yetkililer müsait olamayabilir, oyundan rapor atın veya exact-roleplay.com adresinden ticket oluşturun.');
  }
  if (msg.content.toLowerCase() === 'admin var mı?') {
    msg.reply('Yetkililer müsait olamayabilir, oyundan rapor atın veya exact-roleplay.com adresinden ticket oluşturun.');
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
        "Exact Roleplay"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*oyun.length);

        client.user.setGame(oyun[random]);
        }, 2 * 2500);


;

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
