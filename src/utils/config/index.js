let mode = 'prod'
const API_URL = mode === 'dev' ? 'http://127.0.0.1/' : 'http://47.112.217.206/'
const UP_URL = mode === 'dev' ? 'http://127.0.0.1/' : 'http://47.112.217.206/'

export {
  API_URL,
  UP_URL,
}
