
import TelegramBot from 'node-telegram-bot-api'

import CONFIG from '../config.mjs'

const service = {

	name: 'telegram',
	init () {

		return new Promise((resolve, reject) => {

			const bot = new TelegramBot(
			    CONFIG.telegram.Token,
			    {	// Setup polling way
			        polling: {
			            interval: 2000,
			            autoStart: true,
			            params: {
			                timeout: 55
			            }
			        },
			    }
			)

			resolve(bot)
		})

	}
}

export default service
