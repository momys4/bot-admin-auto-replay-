uire('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

// Inisialisasi bot dengan intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent

    ]
});

const PREFIX = '!';

// Saat bot berhasil nyala
client.on('ready', () => {
    console.log(`Bot udah nyala sebagai ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    // Abaikan pesan dari bot
    if (message.author.bot) return;

    const msg = message.content.toLowerCase();

    // Command prefix (pakai !)
    if (msg.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = msg
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);

        if (CMD_NAME === 'halo') {
            message.reply('Halo juga, bro! Ada yang bisa dibantu?');
        } else if (CMD_NAME === 'salam') {
            message.reply('Waalaikumsalam!');
        }
    }

    // Auto-reply savage tanpa prefix
    if (msg.includes('ngopi')) {
        message.channel.send('Ngapain ngopi mulu, kerja cuy!');
    }

    if (msg.includes('garap')) {
        message.channel.send('Garap mulu, jepe kagak 😎');
    }

    if (msg.includes('gimana')) {
        message.channel.send('Jawab lah! Nanya gua lu? 😒');
    }

    if (msg.includes( 'pagi')) {
        message.channel.send('Pagi, jangan lupa mandi ya! 💦');
    }

    if (msg.includes('rokok')) {
        message.channel.send('SPAM ROKOK DULU SAMBIL SALTO 🚬🤸‍♂️');
    }

    if (msg.includes('ngising')) {
        message.channel.send('ngising mulu cebok dah  🔥');
    }

 if (msg.includes('oji')) {
        message.channel.send('ngapain manggil manggil bang oji lu nantangin ya  🔥');
    }
 if (msg.includes('halo bro ')) {
        message.channel.send('ga usah sok akrab bejir  🔥');
    }
 if (msg.includes('sambo')) {
        message.channel.send('sambo love love tiara  🔥');
    }







});

// Login ke Discord dengan token dari .env
client.login(process.env.DISCORD_TOKEN);
req
