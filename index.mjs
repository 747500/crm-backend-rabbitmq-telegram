
import TelegramBot from 'node-telegram-bot-api'

import CONFIG from './config.mjs'

// Setup polling way
const bot = new TelegramBot(
    CONFIG.Token,
    {
        polling: {
            interval: 2000,
            autoStart: true,
            params: {
                timeout: 55
            }
        },
    }
)

bot.on('polling_error', err => {

    console.error(err);

})
