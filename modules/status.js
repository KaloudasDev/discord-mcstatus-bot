const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');
require('dotenv').config();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Displays the current status of the Minecraft Server.'),

    async execute(interaction) {
        const serverIP = process.env.MC_SERVER_IP;
        if (!serverIP) {
            return interaction.reply({ content: "⚠️ Server IP is not configured. Please check the .env file.", ephemeral: true });
        }

        const apiURL = `https://api.mcsrvstat.us/2/${serverIP}`;

        try {
            const response = await axios.get(apiURL);
            const data = response.data;

            if (!data || !data.online) {
                const offlineEmbed = new EmbedBuilder()
                    .setColor(0xdc3545)
                    .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
                    .setThumbnail(interaction.guild.iconURL())
                    .setDescription("**The server is currently offline.**");
                return interaction.reply({ embeds: [offlineEmbed] });
            }

            const onlinePlayers = data.players?.online || 0;
            const maxPlayers = data.players?.max || "N/A";
            const queue = data.players?.queue || 0;

            const embed = new EmbedBuilder()
                .setColor(0x28a745)
                .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
                .setThumbnail(interaction.guild.iconURL())
                .setDescription(
                    `**Players: ${onlinePlayers}/${maxPlayers}**\n` +
                    `**Queue: ${queue}**`
                );

            return interaction.reply({ embeds: [embed] });

        } catch (error) {
            console.error(error);
            const errorEmbed = new EmbedBuilder()
                .setColor(0xffa500)
                .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL() })
                .setThumbnail(interaction.guild.iconURL())
                .setDescription("Error: Unable to retrieve server data.");
            return interaction.reply({ embeds: [errorEmbed] });
        }
    },
};
