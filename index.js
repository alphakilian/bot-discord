//L'HEBERGEUR SE RESERVE LE DROIT D'INTERVERIR SUR VOTRE BOT SI CELUI SI NE REPSECT PAS LES REGLES ETABLIS SUR LE SERVEUR.
//L'HEBERGEUR SE DEGAGE DE TOUTE RESPONCABILITEE EN CAS DE DESTRUICTION DE SERVEUR SUITE A LA PERTE DE CE DOCUMENT.
//MERCI DE NE PAS MODIFIER LA CONDITION
//MERCI DE NA PAS DIVULGER SE CODE OU DES POURSUITE JUDICIARE + ARRET DU BOT ET SUPPRESSION DU BOT POURRAIS ÊTRE EFFECTUER
//KYLLIS-NET SE DEGAGE DE TOUTE RESPONCABILITE SI UNE COMMANDE MODIFIER PAR VOS SOIN NE FONCTIONNE PAS.
// CORDIALEMENT KYLLIAN / CEO DE KYLLIS-NET

const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "/";

client.login("NjYzMzAzNTgyMDc4MjA1OTY0.XlvLXQ.u6MsRISjH3aiM5NJQMd4HcMTCms");// L'HEBERGEUR SE GARDE LE DROIT DE NE PAS DEVOILER LE TOKEN//

var jeuxs = [
	`/help pour les commandes`,
    `Hébergé par www.kyllis-net.com`,
`websitemaker.fr`];//CONDITION A RESPECTER POUR UN BOT GRATUI//

  setInterval(function(){

	var jeux = jeuxs[Math.floor(Math.random()*jeuxs.length)];

	client.user.setPresence({ 
	  game:{ 
		name: jeux, 
		type: 0
	  } 
	});
}, 5000);


if(message.content === prefix + "ticket") {
    //Si le role Modo n'est pas crée alors on annule
    if (!message.guild.roles.exists("name", "{🔰} 𝐀𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭")) return message.channel.send(`Ce Serveur n'a pas de Role \`{🔰} 𝐀𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭\`, il faut le créer sinon le ticket ne peut etre ouvert.`);
    //Si le channel existe déjà on annule
    if (message.guild.channels.exists("name", "help-" + message.author.username.toLowerCase())) return message.channel.send(`Tu as déjà un ticket ouvert`);
    //On crée le salon "help-user"
    message.guild.createChannel(`help-${message.author.username.toLowerCase()}`, "text").then(c => {
        //On cherche la catégorie pour y placer le salon
        let category = message.guild.channels.find(c => c.name == "ouverture-tickets" && c.type == "category")
        c.setParent(category.id)
        //Recuperation des roles
        let notAllowed = message.guild.roles.find("name", "@everyone");
        let role1 = message.guild.roles.find("name", "{👑} 𝐅𝐨𝐧𝐝𝐚𝐭𝐞𝐮𝐫");
        let role2 = message.guild.roles.find("name", "{⚜️} 𝐑𝐞𝐬𝐩 𝐒𝐭𝐚𝐟𝐟");
        let role3 = message.guild.roles.find("name", "{✨} 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐞𝐮𝐫");
        let role4 = message.guild.roles.find("name", "{🔰} 𝐀𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭");
        let role5 = message.guild.roles.find("name", "{👨‍💼} 𝐀𝐠𝐞𝐧𝐭");
        //Personne ne peut lire ou écrire sauf Modo et l'autheur du msg
        c.overwritePermissions(notAllowed, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        //L'auteur peut écrire et lire
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        //Les Modos peuvent écrire et lire
        c.overwritePermissions(role1, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        //Les Modos peuvent écrire et lire
        c.overwritePermissions(role2, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        //Les Modos peuvent écrire et lire
        c.overwritePermissions(role3, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        //Les Modos peuvent écrire et lire
        c.overwritePermissions(role4, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        //Les Modos peuvent écrire et lire
        c.overwritePermissions(role5, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        //Envoie d'un mp à l'auteur pour indiquer qu'un salon est crée
        message.member.sendMessage(`${message.author.username}, ton ticket vient d'être crée, <#${c.id}>.`);
        const embed = new Discord.RichEmbed()
            .setColor('#0e0e6d')
            .addField(`Hey ${message.author.username}, quand tu as fini, clique sur la réaction !`, `✅`)
            .setTimestamp();
        //On envoie l'embed
        c.send({
            embed: embed
        }).then (function (message){
            //On ajoute la reaction qui va fermer le ticket
            message.react('✅')
      //On regarde si l'utilisateur clique sur la reaction pour fermer le salon
      client.on('messageReactionAdd', (reaction, user) => {

      if(reaction.emoji.name === "✅" && user.id !== client.user.id) {
        c.delete()
        console.log("Delete salon")
      
    };
         });
        });
    

        
    }).catch(console.error); // Send errors to console

};


client.on("guildMemberAdd", user =>{
    let join = new Discord.RichEmbed()
        .setColor("FFBC36")
        .setAuthor(user.user.username, user.user.displayAvatarURL)
        .setDescription(":tada: Bienvenue " + user + " sur le Serveur " + user.guild.name + " !")
        .setFooter("Serveur Web Site Maker | Bot web site maker")
    user.guild.channels.get("653676101771460619").send(join)
    user.addRole('650665491140050945')
});


client.on("message", message => {
    if (message.content === prefix + "help"){
        const help = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Les command du bot')
            .setURL('https://websitemaker.fr')
            .setAuthor('Web Site Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png', 'https://websitemaker.fr')
            .setThumbnail('https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png')
            .addBlankField()
            .addField('__:keyboard: /order + mentioner une personne du staff + item + Ton discord:__', ' commander un site web ou un bot discorde ou des cours de programation', true)
            .addBlankField()
            .addField('__🎲 /theme:__ ', ' pour voir les differant thème de site web', true)
            .addBlankField()
            .addField('__👑 /staff:__ ', ' pour voire la liste de la direction de web site maker', true)
            .addBlankField()
            .addField('__:no_entry: /bug + mentioner une personne du staff + dire le bug __', ' pour annocer un Bug au staff', true)
            .addBlankField()
            .addField('__:frame_photo: /avatar__',  " pour voir l'avatar d'une personne", true)
            .addBlankField()
            .setFooter('Website Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png');

        message.channel.send(help);
    }

    if (message.content === prefix + "theme"){
        const help = new Discord.RichEmbed()
            .setColor('#36B817')
            .setTitle('Les theme de site web')
            .setURL('https://websitemaker.fr')
            .setAuthor('Web Site Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png', 'https://websitemaker.fr')
            .setThumbnail('https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png')
            .setDescription('__Site web theme Minecraft :__')
            .setImage('https://cdn.discordapp.com/attachments/650687085069729792/651878236086861845/Arkazya_-_Google_Chrome_03.12.2019_22_08_04.png')
            .setFooter('Website Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png');

        message.channel.send(help);
    }

    if (message.content === prefix + "staff"){
        const help = new Discord.RichEmbed()
            .setColor('#DF2828')
            .setTitle('La direction de Web site Maker')
            .setURL('https://websitemaker.fr')
            .setAuthor('Web Site Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png', 'https://websitemaker.fr')
            .setThumbnail('https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png')
            .addBlankField()
            .addField('{👑} 𝐅𝐨𝐧𝐝𝐚𝐭𝐞𝐮𝐫','★ Panda_ ๓ρ५ ★', true)
            .addBlankField()
            .addField('{⚜️} 𝐑𝐞𝐬𝐩 𝐒𝐭𝐚𝐟𝐟', 'Oakenshield', true)
            .addField('{⚜️} 𝐑𝐞𝐬𝐩 𝐒𝐭𝐚𝐟𝐟', 'Poulet_ ๓ρ५', true)
            .addField('{⚜️} 𝐑𝐞𝐬𝐩 𝐒𝐭𝐚𝐟𝐟', 'Kyllian', true)
            .addBlankField()
            .addField('{🖥️} 𝐂𝐨𝐝𝐞𝐮𝐫','🐺Sofian🐺', true)
            .addBlankField()
            .addField('{✨} 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐞𝐮𝐫','𝕄𝕠𝕕𝕠 | 𝔽𝕠𝕩𝕪𝕝𝕠𝕘', true)
            .addBlankField()
            .addField('{🔰} 𝐀𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭', 'Lorenzo', true)
            .addField('{🔰} 𝐀𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭', 'Paresseux_mp4', true)
            .addField('{🔰} 𝐀𝐬𝐬𝐢𝐬𝐭𝐚𝐧𝐭', 'Obscuure._💔🔐', true)
            .addBlankField()
            .addField('{👨‍💼} 𝐀𝐠𝐞𝐧𝐭','Paresseux_mp4', true)
            .setFooter('Website Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png');

        message.channel.send(help);
    }

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

    if(message.content.startsWith(prefix + "A")) {
 
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');

        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
        if(!msge) return message.channel.send("Precise un message")

        var mpall = new Discord.RichEmbed()
            .setColor('#DF2828')
            .setTitle('__**Annonce importante de website Maker :**__')
            .setURL('https://websitemaker.fr')
            .setAuthor('Web Site Maker Bot', 'https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png', 'https://websitemaker.fr')
            .setThumbnail('https://cdn.discordapp.com/attachments/522091414696230912/663052141446955019/Web.png')
            .addField('Annoce a lire: ' + msge, '...', true);
        message.delete()
        message.guild.members.map(m => m.send(mpall))
    }

    if(message.content === prefix + "avatar"){
        message.reply(message.author.avatarURL);
        message.delete()
    } 

    if (message.content.startsWith(prefix + "mute")) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("❌ Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (!member.manageable) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    }

    if (message.content.startsWith(prefix + "unmute")) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("❌ Vous n'avez pas la permission d'utiliser cette commande.")
        let member = message.mentions.members.first()
        if(!member) return message.channel.send("Membre introuvable")
        if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
        if(!member.manageable) return message.channel.send("Je ne pas unmute ce membre.")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
        message.channel.send(member + ' a été unmute :white_check_mark:')
    }



});

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("❌ Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')
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

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("❌ Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
    }
});

client.on("message", message => {
    if (!message.guild) return
    if (message.content.indexOf("fuck") >=0 || message.content.indexOf("putin") >=0 || message.content.indexOf("pute") >=0 || message.content.indexOf("ptn") >=0 || message.content.indexOf("Putin") >=0 || message.content.indexOf("tg") >=0 || message.content.indexOf("Tg") >=0 || message.content.indexOf("TG") >=0) {
        //message.channel.send(mytext);
        //message.channel.send("Length: " + mytext.length);
        //message.channel.send("Substring at position 8 and length 6: " + mytext.substr(8,6));
        message.channel.send("Merci de ne pas utiliser des gros mots !");
        message.delete();
    }
});

client.on("message", function (message) {
    if (message.content.startsWith(prefix + "sondage")){
        var ar = message.content.split(" ").slice(1);
        var msge = ar.join(' ');
        var embed = new Discord.RichEmbed()
            .setDescription("Sondage")
            .addField("Répondre avec :white_check_mark: ou :x:", msge)
            .setColor("0xB40404")
            .setTimestamp()
        message.guild.channels.find("name", "test-du-bot-websitemaker").sendEmbed(embed)
        .then(function (message) {
            message.react("❌")
            message.react("✅")
        }).catch(function(){
        });
        message.delete();
    }
});

