// This file runs before all tests.

// This environment variables are here to make sure the config doesn't throw an error
process.env.BASE_REDIRECT_URL = 'http://localhost:3000/u/'
process.env.STORAGE_DRIVER = 'InMemory'
process.env.AUTH_DRIVER = 'BearerToken'
process.env.AUTH_BEARER_TOKEN = '123'
// process.env.RELATIONAL_STORAGE_CLIENT = ''
// process.env.RELATIONAL_STORAGE_HOST = ''
// process.env.RELATIONAL_STORAGE_USER = ''
// process.env.RELATIONAL_STORAGE_PASSWORD = ''
// process.env.RELATIONAL_STORAGE_DATABASE = ''
