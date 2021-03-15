import IORedis from 'ioredis'
import { config } from '../../../../config/index.js'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RedisStorageDriverConfig extends IORedis.RedisOptions {
}
const urlLifeTime = config.url.lifetimeMs

export { urlLifeTime }
