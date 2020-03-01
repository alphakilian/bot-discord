const Discord = require("discord.js");
const client = new Discord.Client();
var API_KEY = 'NjYzMzAzNTgyMDc4MjA1OTY0.Xlu-xg.9v7fOqFzNxQAAUTsESQ2RsoYuqg';
var prefix = "/";

const { Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const queue = new Map();
const youtube = new YouTube(API_KEY);


client.login("NTEzMzI1OTM5OTQyMzU5MDUw.Xgehog.kwvNN386ckzXPwcSdMfXcxV_ASI");

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

    if (message.content === prefix + "") {
        message.channel.send("This is the end, thank you.");
    }
    if (message.content.indexOf("fuck") >=0 || message.content.indexOf("putin") >=0 || message.content.indexOf("pute") >=0 || message.content.indexOf("ptn") >=0) {
        //message.channel.send(mytext);
        //message.channel.send("Length: " + mytext.length);
        //message.channel.send("Substring at position 8 and length 6: " + mytext.substr(8,6));
        message.channel.send("Merci de ne pas utiliser des gros mots !");
        message.delete();
    }
});

client.on('disconnect', () => console.log('Serveur - Le bot a été déconnecté ! Il sera de retour dans un bref delais.'));
client.on('reconnecting', () => console.log('Serveur - Le bot a été reconnecté !'));

client.on('message', async msg => { 
	if (msg.author.bot);// return undefined;
	if (!msg.content.startsWith(prefix));// return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

	if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('❌ | Vous devez être dans un channel vocal pour pouvoir écouter de la musique. ');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('❌ | Je ne peux pas rejoindre le channel. Vous devez me mettre la permission "CONNECT" !');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('❌ | Je ne peux pas parler. Vous devez me mettre la permission "SPEAK" !');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true); 
			}
			return msg.channel.send(`✅ | La Playlist: **${playlist.title}** a bien été ajouté !`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
	__**Sélectionnez votre Musique:**__

	${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}

	Veuillez fournir une valeur pour sélectionner l'un des résultats de recherche allant de 1 à 10.
					`);

					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('❌ | Aucune valeur saisie ou valeur invalide, sélection de video annulée.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send("🆘 | Je n'ai obtenu aucun résultat de recherche.");
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send("❌ | Vous n'êtes pas dans un channel vocal.");
		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end("✅ | La musique vient bien d'être skip !");
		return undefined;
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send("❌ | Vous n'êtes pas dans un channel vocal.");
		if (!serverQueue) return msg.channel.send("❌ | Il n'y aucune musique pour utiliser la commande.");
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end("✅ | La musique vient bien d'être arrêté !");
		return undefined;
	} else if (command === 'volume') {
    if (!msg.member.voiceChannel) return msg.channel.send("❌ | Vous n'êtes pas dans un channel vocal.");
		if (!serverQueue) return msg.channel.send('❌ | Rien ne joue actuellement.');
		if (!args[1]) return msg.channel.send(`🔊 | Le volume est actuellemnt à : **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`🔊 | Vous avez augmenté le son à : **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('❌ | Rien ne joue actuellement.');
		return msg.channel.send(`🎶 | Musique actuellement joué: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('❌ | Rien ne joue actuellement.');
		return msg.channel.send(`
	__**File d'attente:**__

	${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}

	**Actuellement en train de jouer:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ | La musique a été mis en pause !');
		}
		return msg.channel.send('❌ | Rien ne joue actuellement.');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ | La musique a été reprit !');
		}
		return msg.channel.send('❌ | Rien ne joue actuellement.');
	}

//	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 3,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`Le bot n'a pu rejoindre le vocal : ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`❌ | Il ne m'est impossible de rejoindre le channel vocal: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ | La musique **${song.title}** a bien été ajouté !`);
	}
//	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === "Le flux n'est pas généré assez rapidement.") console.log(`${song.title} est actuellement terminée !`);
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 | Musique joué actuellement : **${song.title}**`);
}
