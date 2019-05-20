const axios = require('axios')

class TPolls {
  constructor (authToken, version) {
    if (!authToken) {
      throw new Error('You must provide a base URL and authentication key to use this library.')
    } else {
      this.baseUrl = `https://tpolls.app/api/v${version}`
      this.headers = {
        Authorization: authToken,
        'Content-Type': 'application/json'
      }
    }
  }

  async performRequest (operation, endpoint, payload) {
    try {
      return await axios({
        url: `${this.baseUrl}${endpoint}`,
        method: operation,
        data: payload,
        headers: this.headers
      })
    } catch (err) { return err }
  }
}

module.exports = TPolls
