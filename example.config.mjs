
export default {

	telegram: {
		Token: '',

		// for logging all messages to
		loggerDir: './msglog',
	},

	amqp: {

		url: 'amqp://127.0.0.1',

		// Queue for incoming messages to forward to telegram user.
		// asserted here
		botQueue: {
			name: 'crm_untyped_net_bot',
			properties: {
				exclusive: true,
				durable: true,
			}
		},

		// Queue for outgoing requests.
		// asserted by crm
		authQueue: 'crm_bot_auth',

	},

}
