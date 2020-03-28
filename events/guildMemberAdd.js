module.exports = member => {
    let username = member.user.username;
    member.send('Hoşgeldin **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};
