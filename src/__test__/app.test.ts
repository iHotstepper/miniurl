import test from 'ava'
import { createApp } from '../app.js'
import { Auth } from '../services/auth/index.js'
import { Storage } from '../services/storage/index.js'
import { getConfig } from './helpers.js'

const config = getConfig()

test('Happy flow', (t) => {
	const app = createApp(
		{},
		{
			auth: new Auth(config.auth),
			storage: new Storage({
				appName: config.appName,
				...config.storage,
			}),
			config,
		},
	)
	t.truthy(app)
})
