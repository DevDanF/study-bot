const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls a six sided die'),
	async execute(interaction) {
		await interaction.reply('Hello World!');
	},
};