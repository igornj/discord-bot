require('dotenv').config();


const Discord = require('discord.js');
const bot = new Discord.Client();
const { MessageAttachment } = require('discord.js');
const readFilesAws = require('./awsListObjects');
const randomEmoji = require('random-unicode-emoji');


function randomID(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


bot.on('ready', () => {
    console.log(`Bot conectado ${bot.user.tag}`);

    bot.user.setActivity("A Festa acabou!📢⛔", {
      type: "PLAYING",
    });
});



let imgPath;
  bot.on('message', msg =>{
    
      const emoji = randomEmoji.random({count: 1})

      readFilesAws.readFiles()
      .then((data) => discordMessage(data))
      .catch((err) => console.log(`Erro array AWS: ${err}`));

        
       async function discordMessage(data){
        //console.log(data);
        if(msg.author.bot) return;

        if (msg.channel.id === '854733997628325908' && msg.content === '-upper' || msg.content === '-UPPER' ) {
            
            try{
              imgPath = `https://upperphotos.s3.us-east-2.amazonaws.com/${data[randomID(0, data.length)]}`;
              const attachment = new MessageAttachment(imgPath);
              await msg.channel.send(`***Rolê N° ${randomID(1, 999)} ${emoji}***`, attachment);
              msg.channel.send('📢 **Para mandar mais rolês do clan acesse:** https://discord-bot-authentication.firebaseapp.com/')

            }catch(e){
              console.log('Error: ', e);
              const attachment = new MessageAttachment(`./errormesageDIIN.jpg`);
              msg.channel.send(`Esse rolê ainda não aconteceu meu caro, digite o comando "-upper" novamente`, attachment);
              return;
            }

        }

      }
  });



bot.login(process.env.TOKEN); 



