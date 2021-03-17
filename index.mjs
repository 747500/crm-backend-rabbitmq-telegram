
import * as logger from './logger/index.mjs'
import * as commands from './commands/index.mjs'

import Services from './services/index.mjs'

import CONFIG from './config.mjs'

Services.Run()
.then(services => {

	services.telegram.on('polling_error', logger.Errors)
	services.telegram.on('message', logger.Messages)


	services.telegram.onText(/^\/start/, commands.Start)
	services.telegram.onText(/^\/auth\s+(\S+)/, commands.Auth)

})
