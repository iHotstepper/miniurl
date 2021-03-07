import { Config } from '../config/types'
import { AuthDriverName } from '../services/auth/types/config'
import { StorageDriverName } from '../services/storage/types/config'

export function setConfigEnvironmentVariables(): void {
	process.env.BASE_REDIRECT_URL = 'http://localhost:3000/u/'
	process.env.STORAGE_DRIVER = 'InMemory'
	process.env.RELATIONAL_STORAGE_CLIENT = ''
	process.env.RELATIONAL_STORAGE_HOST = ''
	process.env.RELATIONAL_STORAGE_USER = ''
	process.env.RELATIONAL_STORAGE_PASSWORD = ''
	process.env.RELATIONAL_STORAGE_DATABASE = ''
	process.env.AUTH_DRIVER = 'BearerToken'
	process.env.AUTH_BEARER_TOKEN = '123'
}

export function getConfig(): Config {
	return {
		port: '3000',
		logLevel: 'debug',
		appName: 'miniurl',
		apiPrefix: '/miniurl',
		baseRedirectUrl: 'http://localhost:3000/u/',
		url: {
			lifetimeMs: 604800000,
			matchPattern: '**',
			cleanupIntervalMs: 3600000,
		},
		storage: { driverName: StorageDriverName.InMemory, driverConfig: {} },
		auth: {
			driverName: AuthDriverName.BearerToken,
			driverConfig: { token: '123' },
		},
	}
}
