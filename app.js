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
bot.on('message', async msg =>{

    imgPath = `./Upper_data_base/${randomID(1, 168)}.jpg`;
    console.log(imgPath); 

    if(msg.author.bot) return;

    if (msg.content === '-upper' || msg.content === '-UPPER' ) {

        try{
          const attachment = new MessageAttachment(imgPath);
          await msg.channel.send(`Rolê N° ${randomID(1, 999)}`, attachment);

        }catch(e){
          console.log('Error: ', e);
          const attachment = new MessageAttachment(`./Upper_data_base/errormesageDIIN.jpg`);
          msg.channel.send(`Esse rolê ainda não aconteceu meu caro, digite o comando "-upper" novamente`, attachment);
          return;
        
        }
   
    }
    
});


bot.login(''); 



