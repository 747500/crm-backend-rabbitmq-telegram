

import TelegramBot from 'node-telegram-bot-api'

import * as logger from './logger/index.mjs'
import * as commands from './commands/index.mjs'

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

bot.on('polling_error', logger.Errors(bot))
bot.on('message', logger.Messages)


bot.onText(/^\/start/, commands.Start(bot))
bot.onText(/^\/auth\s+(\S+)/, commands.Auth(bot))
