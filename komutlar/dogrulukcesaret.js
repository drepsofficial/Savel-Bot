const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = [
      'Telefonunda arattığın en son şey nedir ?',
      'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?',
      'Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?',
      'Karşı cins olarak uyanmak olsaydın ilk yapacağın şey nedir?',
      'Yaptığın bir şey için başkasının başının derde girmesine hiç izin verdin mi?',
      'Yaptığın en utanç verici şey ne?',
      'Birinden ayrılmanın en saçma nedeni neydi?',
      'Sahip olduğun en büyük alışkanlık nedir?',
      'Sizce en iyi özellik nedir? Ve en kötüsü nedir?',
      'Şu ana kadar yaptığın en cesur şey nedir?',
      'Turda kimi domuzda büyülemek istersin?',
      'En son ne zaman yatağa baktın?',
      'En çok ne uyumayı hayal ediyorsun?',
      'Paranızı yasadışı olarak kazanacak olsanız, nasıl yapardınız?',
      'Hala yaptığın çocukça bir şey nedir?',
      'Eğer kör olsaydın, raunttaki rehber köpeğin kim olurdu?',
      'Seni en çok ne etkileyebilir?',
      'Bundan sonra gecenin geri kalanında sadece 3 kelime kullanmanıza izin verilirse - hangisi olurdu?',
      'Diktatör olsaydınız, ilk önce hangi yasayı düzenlerdiniz?',
      'Okul zamanınız / çalışma süreniz / eğitim / geçen yıldaki en utanç verici deneyim neydi?',
      'Hayatının en büyük hatası neydi?',
      'Asla ne yapmazsın - yaşamak için sadece 12 saatin olduğunu bilsen bile?',
      'Hangi suçu işledin?',
      'Bana çocukluğundan bir sır ver.',
      'Benimle ne yapmak istersin … (ya da xy kişiyle), o zaman (onun, …) hafızamı silebilseydin?',
      'Şimdiye kadar yaptığın en kötü şey nedir?',
      'Eğer bir vampir olsaydın, şimdi kim ısırırdın?',
      'En karanlık fantezin nedir?',
      'Vücudunda en çok neyi seviyorsun ve en çirkin olan nedir?',
      'İlk defa nasıl, nerede ve kiminle yaptın?'
    ]
    var cesaret = [
      'Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat',
      'Whatsappındaki son mesajlaşmanı bize oku',
      'Galerindeki son fotoğrafı at.',
      'Discorddan rastgele birisini görüntülü ara.',
      'Discordda hiç tanımadığın birine nude yolla ve ss alıp bize at.',
      'Burnunla <SAVEL> yaz.',
      'Galerindeki son 5 fotoğrafı at.', 
      'Kirli bir hikaye anlat.',
      'Whatsapptan veya discorddan üç kişiye <seni seviyorum> yaz, ss at.',
      'Bugüne kadar mastürbasyon yaparken kullandığın en ilginç objeyi söyle.',
      'Fetiş sahibi misin? fetiş sahibi isen ne fetişin var? Bu soruları cevapla.'
    ]
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi?')
    let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Lütfen sadece **doğruluk (d)** veya **cesaret (c)** ile cevap verin.`)
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
