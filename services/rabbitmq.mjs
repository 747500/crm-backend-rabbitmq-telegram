
import amqp from 'amqplib'

import CONFIG from '../config.mjs'

const service = {

	name: 'amqp',

	init () {
		return amqp.connect(CONFIG.amqp.url)
			.then(conn => {
				console.log(`RabbitMQ connected at ${CONFIG.amqp.url}`)
				return conn
			})

	}
}

export default service
