const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "/";

client.login("NjYzMzAzNTgyMDc4MjA1OTY0.XlvO2Q.OL76zm4NzSfBY7ssSiB8XU95SAc");


client.on("message", message => {

    mention = message.mentions.users.first()

    if (message.content.startsWith(prefix + "bug")){

        var args = message.content.split(" ").slice (1);
        var msge = args.join(' ');

        const bug = new Discord.RichEmbed()
            .setColor('#DF2828')
            .setTitle('__Message de BUG web site maker :__')
            .setURL('https://websitemaker.fr')
            .setAuthor('Web Site Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png', 'https://websitemaker.fr')
            .setThumbnail('https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png')
            .setDescription('Command : ' + msge)
            .addBlankField()
            .setFooter('Website Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png');
        //if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
        if(!msge) { return message.channel.send("Precise le BUG !"); }
        if (mention == null) { return message.channel.send("❌ Mentionne une personne du staff !"); }
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage, bug);
        message.delete();
        message.channel.send ("Done !");
    }

    if (message.content.startsWith(prefix + "order")){

        var args = message.content.split(" ").slice (1);
        var msge = args.join(' ');

        const order = new Discord.RichEmbed()
            .setColor('#DF2828')
            .setTitle('__Message de command :__')
            .setURL('https://websitemaker.fr')
            .setAuthor('Web Site Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png', 'https://websitemaker.fr')
            .setThumbnail('https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png')
            .setDescription('Command : ' + msge)
            .addBlankField()
            .setFooter('Website Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png');
        //if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
        if(!msge) { return message.channel.send("Precise la command !"); }
        if (mention == null) { return message.channel.send("❌ Mentionne une personne du staff !"); }
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage, order);
        message.delete();
        message.channel.send ("Done !");
    }

    //Jeux pierre papier ciseaux
    if (message.content.startsWith(prefix + "jeux")){
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');
        var counter = 3;

        if(!msge) return message.channel.send("Precise l'objet ! (pierre, papier, ciseaux)")
        var timer = setInterval(function(){
            var jeux = new Discord.RichEmbed()
                .setColor('#E1922D')
                .setTitle('__**Jeux Pierrs feuil cisaux :**__')
                .setURL('https://websitemaker.fr')
                .setAuthor('Test Bot', 'https://cdn.discordapp.com/attachments/663306960128704514/663318080755073025/Fond_decran_3.jpg', 'https://websitemaker.fr')
                .setDescription("**" + counter + "**")
            message.channel.send(jeux);
            counter = counter -1;
            if (counter === -1) {
                clearInterval(timer);
                number = 3;
                imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                message.channel.send ( {files: [imageNumber + ".png"]})
                var perdu = new Discord.RichEmbed()
                    .setColor('#DF2828')
                    .setTitle('__**Jeux Pierrs feuil cisaux :**__')
                    .setURL('https://websitemaker.fr')
                    .setAuthor('Test Bot', 'https://cdn.discordapp.com/attachments/663306960128704514/663318080755073025/Fond_decran_3.jpg', 'https://websitemaker.fr')
                    .setDescription("**" + "Desoler mais tu a perdu !" + "**")

                var gagner = new Discord.RichEmbed()
                    .setColor('#1CDB3C')
                    .setTitle('__**Jeux Pierrs feuil cisaux :**__')
                    .setURL('https://websitemaker.fr')
                    .setAuthor('Test Bot', 'https://cdn.discordapp.com/attachments/663306960128704514/663318080755073025/Fond_decran_3.jpg', 'https://websitemaker.fr')
                    .setDescription("**" + "GG tu as gagner !" + "**")

                var R = new Discord.RichEmbed()
                    .setColor('#731CDB')
                    .setTitle('__**Jeux Pierrs feuil cisaux :**__')
                    .setURL('https://websitemaker.fr')
                    .setAuthor('Test Bot', 'https://cdn.discordapp.com/attachments/663306960128704514/663318080755073025/Fond_decran_3.jpg', 'https://websitemaker.fr')
                    .setDescription("**" + "Il ne se passe R !" + "**")
            
                if (msge === "pierre" && imageNumber === 2){
                    message.channel.send(perdu)
                }

                if (msge === "ciseaux" && imageNumber === 2){
                    message.channel.send(gagner)
                }

                if (msge === "papier" && imageNumber === 2){
                    message.channel.send(R)
                }

                if (msge === "papier" && imageNumber === 3){
                    message.channel.send(perdu)
                }

                if (msge === "pierre" && imageNumber === 3){
                    message.channel.send(gagner)
                }

                if (msge === "ciseaux" && imageNumber === 3){
                    message.channel.send(R)
                }

                if (msge === "ciseaux" && imageNumber === 1){
                    message.channel.send(perdu)
                }

                if (msge === "pierre" && imageNumber === 1){
                    message.channel.send(R)
                }

                if (msge === "papier" && imageNumber === 1){
                    message.channel.send(gagner)
                }
            }
                
        }, 1000);
        
    }
    //Jeux pierre papier ciseaux

    if (message.content.startsWith(prefix + "sondage")){
            var args = message.content.split(" ").slice(1);
            var msge = args.join(' ');
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField("Répondre avec :white_check_mark: ou :x:", msge)
                .setColor("0xB40404")
                .setTimestamp()
            message.guild.channels.find("name", "sondage").sendEmbed(embed)
            .then(function (message) {
                message.react("❌")
                message.react("✅")
            }).catch(function(){
            });
            message.delete();
    }


    if (message.content.startsWith(prefix + "annoce")){
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');

        var annonce = new Discord.RichEmbed()
            .setColor('#DF2828')
            .setTitle('__**Annonce importante de website Maker :**__')
            .setURL('https://websitemaker.fr')
            .setAuthor('Web Site Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png', 'https://websitemaker.fr')
            .setThumbnail('https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png')
            .setDescription('__Annoce :__** ' + msge + '** @everyone')
        message.delete();
        message.channel.send(annonce);
    }

});


client.on('message', message => {
    if(message.content.startsWith(prefix + "clear")){
        message.delete()
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.sendMessage(":no_entry:").then(msg => msg.delete(5000));
    let args = message.content.split(" ").slice(1);
    if(!args[0]) return message.channel.sendMessage(":exclamation: Tu dois préciser un nombre de messages à supprimer ! :no_entry_sign:").then(msg => msg.delete(5000));
    message.channel.bulkDelete(args[0]).then(() => {
        });
    }
});

//warns
const fs = require('fs');
const warns = JSON.parse(fs.readFileSync('./warns.json'));

client.on("message", function (message) {
    if (!message.guild){ return }
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("❌ Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("Veuillez indiquer une raison")
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json', JSON.stringify(warns))
        message.channel.send(member + " a été warn pour " + reason + " :white_check_mark:")
        message.delete();
    }
 
    if (args[0].toLowerCase() === prefix + "infractions") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("❌ Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Veuillez mentionner un membre")
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "❌ Ce membre n'a aucun warns"))
            .setTimestamp()
        message.channel.send(embed)
        message.delete();
    }
});