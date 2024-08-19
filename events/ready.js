const { Events } = require('discord.js')
const { ActivityType } = require('discord.js')

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`)
		client.user.setPresence({
			// Устанавливаем присутствие
			activities: [
				{
					name: 'TestApplication',
					type: ActivityType.Listening,
				},
			],

			status: 'dnd',
		})
		client.user.setAvatar('./discord-logo.gif')
	},
}
