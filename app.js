const Discord = require('discord.js');
const bot = new Discord.Client();
const { MessageAttachment } = require('discord.js');


const filesSystem = require('./filesystem');
const filesArray = filesSystem.filesExport;


bot.on('ready', () => {
    console.log(`Bot conectado ${bot.user.tag}`);
});


function randomID(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


let imgPath;
bot.on('message', async msg =>{

    imgPath = `./Upper_data_base/${filesArray[randomID(0, filesArray.length)]}`;

    if(msg.author.bot) return;

    if (msg.channel.id === '854733997628325908' && msg.content === '-upper' || msg.content === '-UPPER' ) {


        try{
          const attachment = new MessageAttachment(imgPath);
          await msg.channel.send(`Rolê N° ${randomID(1, 999)}`, attachment);

        }catch(e){
          console.log('Error: ', e);
          const attachment = new MessageAttachment(`./errormesageDIIN.jpg`);
          msg.channel.send(`Esse rolê ainda não aconteceu meu caro, digite o comando "-upper" novamente`, attachment);
          return;
        
        }
   
    }
    
});

bot.login(''); 



