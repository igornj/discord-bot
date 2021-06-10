const Discord = require('discord.js');
const bot = new Discord.Client();

const { MessageAttachment } = require('discord.js');

bot.on('ready', () => {
    console.log(`Bot conectado ${bot.user.tag}`);
});


function randomID(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


let imgPath;
bot.on('message', msg =>{

    imgPath = `./Upper_data_base/${randomID(1, 170)}.jpg`;
    console.log(imgPath); 

    if(msg.author.bot) return;

    if (msg.content === '-upper' || msg.content === '-UPPER' ) {

        const attachment = new MessageAttachment(imgPath);
        msg.channel.send(`Rolê N° ${randomID(1, 999)}`, attachment);
    }
    
});


bot.login('your token here'); 




