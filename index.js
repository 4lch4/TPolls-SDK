module.exports = class TPolls {
  constructor (authToken, version) {
    if (authToken && version) {
      this.authToken = authToken
      this.version = version
    }
  }

  get Polls () { return new (require('./src/Polls'))(this.authToken, this.version) }
}

module.exports.Polls = require('./src/Polls')
