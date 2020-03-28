const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = [
      'Googleda arattığın en son şey nedir?',
      'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu?',
      'Sokakta yere bir şey düşürdüğünde hiçbir şey olmamış gibi alıp ağzına attın mı?',
      'Bir günlüğüne karşı cins olmak ister miydin?',
      'Dünyaya bir kez daha gelsen karşı cins olmak ister miydin?',
      'Yaptığın bir şey için başkasının başının derde girmesine hiç izin verdin mi?',
      'Yaptığın en utanç verici şey ne?',
      'Birinden ayrılmanın en saçma nedeni neydi?',
      'Sahip olduğun en büyük alışkanlık nedir?',
      'Bu discordda en sevdiğin ve en sevmediğin kişi/kişiler kim?',
      'Şu ana kadar yaptığın en cesurca şey nedir?',
      'En son ne zaman yatağa baktın?',
      'Bu discordda kiminle aynı yastıkta uyumayı hayal ediyorsun?',
      'Paranızı yasa dışı olarak kazanacak olsanız, nasıl yapardınız?',
      'Hala yaptığın çocukça bir şey nedir?',
      'Bir hediye alacak olsan, hangi hediye seni etkileyebilir?',
      'Bu zamana kadarki en utanç verici deneyimin neydi?',
      'Hayatının en büyük hatası neydi?',
      '12 saat sonra öleceğini biliyor olsan bile, asla ne yapmazsın?',
      'Hiçbir suç işledin mi, işlediysen hangi suçu işledin?',
      'Bana çocukluğundan bir sır ver.',
      'Bu discordda kiminle, ne yapmak istersin?',
      'Şimdiye kadar yaptığın en kötü şey nedir?',
      'Eğer bir vampir olsaydın, şimdi kimi ısırırdın?',
      'En karanlık fantezin/fantezilerin nedir?',
      'Vücudunda en çok neyi/nereyi seviyorsun ve en çirkin olan nedir?',
      'Hiç toplum içinde gaz çıkardın mı? Çıkardıysan anısını anlat!',
      'En son ne zaman stalk yaptın? Kimi stalkladın?',
      'En son kimin telefonunu karıştırdın? Nerelere baktın?',
      'En son ne zaman mastürbasyon yaptın?',
      'Bu discorddan birisiyle 30 dakika boyunca öpüşmen gerekseydi kimi seçerdin?',
      '+18 doğruluk cesaretlik soruları seni tahrik ediyor mu?',
      'Hayatının ilk aşkı kimdi ve ismi?',
      'Doğruluk ile ilgili sorulara cevap verirken hiç yalan söyledin mi?',
      'Hayattaki en büyük pişmanlığın ne? Neden pişmansın?',
      'Gerçek yaşın kaç?',
      'Nerede yaşıyorsun?',
      'Gerçek ismin ne?',
      'Günlük 500$ kazanacaksın ama her sene doğum gününde o sene en çok sevdiğin insan ölecek. Kabul eder miydin?',
      'Bu discorddakileri yanan bir binadan kurtaracaksınız ve bir kişiyi bu odadan geride bırakmak zorundasınız, kim olurdu?',
      'Telefonunda arattığın en son şey nedir ?',
      'Hiç bir asansörde osurdun mu ?',
      'Şuanda ne renk iç çamaşırı giyiyorsun ?',
      'Telefonunda en son attığın mesaj nedir ?',
      'Eğer çıplak kalmak ile kafanın üzerinde aklından geçen her düşüncenin yazılı olarak yansıyacağı bir baloncukla yaşamak arasında bir seçim yapmak zorunda kalsaydın hangisini seçerdin? ',
      'Hiç birinin yanlışlıkla seni çıplak gördüğü oldu mu ?',
      'Duştayken işer misin ?',
      'Sana takılan en rahatsız edici lakap neydi ?',
      'Eğer bir zaman makinen olsaydı ve geçmişe gidip yaptığın tek bir şeyi silebilecek olsaydın, neyi silerdin?',
      'Eğer ıssız bir adada kalsaydın bu discorddan kiminle beraber kalmak isterdin ?',
      'Sence bu discorddaki en eğlenceli karaktere sahip olan kişi kim?'
    ]
    var cesaret = [
      'Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat',
      'Whatsappındaki son mesajlaşmanı bize oku',
      'Galerindeki son fotoğrafı at.',
      'Discorddan rastgele birisini görüntülü ara.',
      'Discordda hiç tanımadığın birine nude yolla ve ss alıp bize at.',
      'Burnunla `SA` yaz.',
      'Galerindeki son 5 fotoğrafı at.',
      'Kirli bir hikaye anlat.',
      'Whatsapptan veya discorddan üç kişiye `Seni Seviyorum` yaz, ss at.',
      'Bugüne kadar mastürbasyon yaparken kullandığın en ilginç objeyi söyle.',
      'Fetiş sahibi misin? fetiş sahibi isen ne fetişin var? Bu soruları cevapla.',
      'Telefonunda hiç çıplak fotoğrafın var mı? Başkasınınki de olur. Bize göster!',
      'Whatsappdan bir kızın telefonunu ara ve ss at.',
      'Babana okulu bırakmak istediğini söyleyen bir mesaj gönder ve ss at.',
      'Rehberinden ismi `E` harfiyle başlayan birini seç ve ismini bize söyle.',
      'Whatsapptaki ilk sıradaki kişiye `Ben Malım!` şeklinde mesaj at ve bize ss at.',
      'Kavgadan kaçtığın anılarından birini anlat!',
      'Üzerinde ne kadar para olduğunu ve birikimini söyle!',
      'Otuz saniye içerisinde 5 tane Cami ismi say.',
      'En çok tercih ettiğin porno sitesini açıkla!',
      'En garip nerede mastürbasyon yaptın? O anını anlat!',
      'Attığın en büyük kazığı anlat!',
      'Çocukken yaptığın komik bir şeyi itiraf et!',
      'En hayvani davranışını burada açıkla!',
      'Şimdiye kadar para verdiğin en boş şeyi açıkla!',
      'Aklına gelen ilk üç harfli kelimeyi söyle!',
      'Bu odada `keşke onun yerinde olsaydım` dediğin bir kişi söyler misin ?',
      'Gördüğün en sapık rüyayı anlat !',
      'İlk öpücüğünü anlat !',
      'Çıplak görmek istemediğin birini söyle!',
      'Keşke görmeseydim dediğin bir şeyi söyle.',
      'Asla yemem dediğin bir yemek söyle !',
      'Ailenin yaptığını bilmediği bir şey söyle !',
      'Whatsapp ındaki son mesajlaşmanı bize oku!',
      'Alfabeyi geriye doğru say!',
      'Sıra tekrar sana gelene kadar deli taklidi yap!'
    ]
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi? \`d\` veya \`c\` yazarak cevaplayınız.')
    let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Lütfen sadece **doğruluk (d)** veya **cesaret (c)** yazarak cevap verin.`)
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
