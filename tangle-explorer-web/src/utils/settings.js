const store = require('store')
const defaultSettings = {
  nodeUrl: 'http://134.209.10.170:14265'
}

export default {
  resetToDefault() {
    store.remove('settings')
  },
  set(settings) {
    store.set('settings', settings)
  },
  get() {
    return Object.assign({}, defaultSettings, store.get('settings'))
  }
}
